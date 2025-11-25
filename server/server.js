const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { Resend } = require('@resend/node');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration - Support multiple origins (local dev + Vercel production)
// Normalize URLs (remove trailing slashes) to avoid mismatch issues
const normalizeUrl = (url) => url.trim().replace(/\/+$/, '').toLowerCase();

const allowedOrigins = process.env.CLIENT_URL 
  ? process.env.CLIENT_URL.split(',').map(normalizeUrl)
  : ['http://localhost:5173'];

// Log allowed origins on startup for debugging
console.log('🌐 Allowed CORS origins:', allowedOrigins);
console.log('🌐 CLIENT_URL from env:', process.env.CLIENT_URL);

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      console.log('⚠️ Request with no origin - allowing');
      return callback(null, true);
    }
    
    // Normalize the incoming origin (remove trailing slash, lowercase)
    const normalizedOrigin = normalizeUrl(origin);
    
    // Log the origin being checked
    console.log('🔍 Checking origin:', origin);
    console.log('🔍 Normalized origin:', normalizedOrigin);
    console.log('🔍 Against allowed origins:', allowedOrigins);
    
    // Check if normalized origin is in allowed list
    const originMatches = allowedOrigins.includes(normalizedOrigin);
    
    if (originMatches) {
      console.log('✅ Origin allowed:', origin);
      callback(null, true);
    } else {
      // For development, allow localhost on any port
      if (process.env.NODE_ENV !== 'production' && origin.includes('localhost')) {
        console.log('✅ Localhost origin allowed (dev mode):', origin);
        callback(null, true);
      } else {
        console.log('❌ Origin NOT allowed:', origin);
        console.log('❌ Normalized origin:', normalizedOrigin);
        console.log('❌ Allowed origins:', allowedOrigins);
        callback(new Error(`Not allowed by CORS. Origin: ${origin}. Allowed: ${allowedOrigins.join(', ')}`));
      }
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer Configuration - Store files in memory
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Allowed file types
  const allowedTypes = /pdf|doc|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'));
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10 MB max file size
  },
  fileFilter: fileFilter
});

// Resend Email Configuration (works better with cloud platforms like Render)
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

if (resend) {
  console.log('✅ Resend email service configured');
  console.log('📨 Email will be sent to:', process.env.RECEIVER_EMAIL);
} else {
  console.log('⚠️  RESEND_API_KEY not found. Please set it in environment variables.');
}

// POST route to handle form submission with file upload
app.post('/send-mail', upload.single('cv'), async (req, res) => {
  try {
    // Extract form data
    const { first_name, last_name, email, message } = req.body;

    // Validate required fields
    if (!first_name || !last_name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: first_name, last_name, email, and message are required.'
      });
    }

    // Check if Resend is configured
    if (!resend) {
      return res.status(500).json({
        success: false,
        message: 'Email service not configured. Please set RESEND_API_KEY in environment variables.'
      });
    }

    // Prepare email HTML content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #D87245; margin-top: 0;">New Contact Form Submission</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #333;">First Name:</strong> ${first_name}</p>
            <p style="margin: 10px 0;"><strong style="color: #333;">Last Name:</strong> ${last_name}</p>
            <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #D87245;">${email}</a></p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <strong style="color: #333; display: block; margin-bottom: 10px;">Message:</strong>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </div>
    `;

    // Prepare email options for Resend
    const emailOptions = {
      from: 'onboarding@resend.dev', // Use Resend's default domain (can change later)
      to: process.env.RECEIVER_EMAIL,
      replyTo: email, // User's email for reply
      subject: 'New Contact Form Submission',
      html: emailHtml,
      text: `
        New Contact Form Submission
        
        First Name: ${first_name}
        Last Name: ${last_name}
        Email: ${email}
        
        Message:
        ${message}
      `
    };

    // Add attachment if file is provided
    if (req.file) {
      emailOptions.attachments = [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
        }
      ];
    }

    // Send email using Resend
    console.log('📧 Attempting to send email via Resend...');
    console.log('📧 To:', process.env.RECEIVER_EMAIL);
    
    const { data, error } = await resend.emails.send(emailOptions);

    if (error) {
      throw error;
    }

    console.log('✅ Email sent successfully via Resend:', data?.id);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!',
      messageId: data?.id || 'sent'
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error('❌ Error message:', error.message);
    console.error('❌ Full error:', JSON.stringify(error, null, 2));
    
    // More specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.message && error.message.includes('API key')) {
      errorMessage = 'Resend API key is invalid. Please check RESEND_API_KEY in environment variables.';
    } else if (error.message && error.message.includes('domain')) {
      errorMessage = 'Email domain not verified. Please verify your domain in Resend dashboard or use onboarding@resend.dev.';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Email configured for: ${process.env.MAIL_USER}`);
  console.log(`📨 Receiving emails at: ${process.env.RECEIVER_EMAIL}`);
});

