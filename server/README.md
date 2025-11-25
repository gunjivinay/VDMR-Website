# VDMR Backend Server

Express.js backend server for handling contact form submissions with file uploads and email notifications.

## Features

- ✅ Express.js server with CORS enabled
- ✅ Multer for handling file uploads (PDF, DOC, DOCX)
- ✅ Nodemailer for sending emails via Gmail
- ✅ File validation and size limits (10 MB max)
- ✅ In-memory file storage (no disk storage)

## Installation

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and fill in your Gmail credentials:
     ```env
     MAIL_USER=your-email@gmail.com
     MAIL_PASS=your-gmail-app-password
     RECEIVER_EMAIL=your-receiver-email@gmail.com
     CLIENT_URL=http://localhost:5173
     PORT=5000
     ```

## Gmail App Password Setup

Since Gmail requires App Passwords for third-party applications, follow these steps:

1. **Enable 2-Step Verification** on your Google Account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled

2. **Generate an App Password:**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter a name like "VDMR Contact Form"
   - Click "Generate"
   - Copy the 16-character password (no spaces)

3. **Add the App Password to `.env`:**
   ```env
   MAIL_PASS=abcd efgh ijkl mnop  # Use the generated password (no spaces)
   ```

## Running the Server

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in `.env`).

## API Endpoints

### POST `/send-mail`
Sends an email with contact form data and optional file attachment.

**Request:**
- Content-Type: `multipart/form-data`
- Fields:
  - `first_name` (required)
  - `last_name` (required)
  - `email` (required)
  - `message` (required)
  - `cv` (optional file upload - PDF, DOC, DOCX, max 10 MB)

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully!",
  "messageId": "message-id-from-nodemailer"
}
```

### GET `/health`
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## File Upload Restrictions

- **Allowed file types:** PDF, DOC, DOCX
- **Maximum file size:** 10 MB
- **Storage:** In-memory (files are not saved to disk)

## Error Handling

The server handles various error scenarios:
- Missing required fields
- Invalid file types
- File size exceeding limit
- Email sending failures
- CORS errors

## Troubleshooting

### Email not sending?
1. Verify your Gmail App Password is correct
2. Ensure 2-Step Verification is enabled
3. Check that `MAIL_USER` matches the Gmail account
4. Verify `RECEIVER_EMAIL` is correct
5. Check server console for error messages

### CORS errors?
1. Verify `CLIENT_URL` in `.env` matches your React app URL
2. Ensure the backend server is running
3. Check browser console for specific CORS errors

### File upload errors?
1. Ensure file is PDF, DOC, or DOCX format
2. Check file size is under 10 MB
3. Verify the form field name is exactly `cv`

## Notes

- The server stores uploaded files in memory only (no disk storage)
- Files are automatically deleted after email is sent
- Make sure to use Gmail App Passwords, not your regular Gmail password
- Keep your `.env` file secure and never commit it to version control

