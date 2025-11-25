import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const allowedExtensions = [".pdf", ".doc", ".docx"];
      const fileExtension = selectedFile.name.toLowerCase().substring(selectedFile.name.lastIndexOf("."));

      if (!allowedTypes.includes(selectedFile.type) && !allowedExtensions.includes(fileExtension)) {
        setErrorMessage("Invalid file type. Only PDF, DOC, and DOCX files are allowed.");
        return;
      }

      // Validate file size (10 MB = 10 * 1024 * 1024 bytes)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setErrorMessage("File size exceeds 10 MB limit.");
        return;
      }

      setFile(selectedFile);
      setErrorMessage("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      const input = document.getElementById("fileUpload");
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(droppedFile);
      input.files = dataTransfer.files;
      handleFileChange({ target: { files: [droppedFile] } });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("first_name", formData.first_name);
      formDataToSend.append("last_name", formData.last_name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      if (file) {
        formDataToSend.append("cv", file);
      }

      // Send to backend - uses environment variable or falls back to localhost for development
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/send-mail`, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        });
        setFile(null);
        // Reset file input
        const fileInput = document.getElementById("fileUpload");
        if (fileInput) fileInput.value = "";

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check if the server is running and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4">
        {/* 🔶 CONTACT US HEADING WITH BACKGROUND */}
        <div className="text-center mb-8">
          <h2
            className="
              inline-block
              px-6 py-2
              rounded-3xl
              text-xl md:text-2xl font-bold
              text-[#E67342]
              bg-[#FFE1D5]
            "
          >
            Contact Us
          </h2>
        </div>

        <motion.div
          className="rounded-2xl bg-white p-6 shadow-xl border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {/* Centered Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            Get In Touch With Us
          </h2>

          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
              ❌ {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">
                Name <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#D87245]/20"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#D87245]/20"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#D87245]/20"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* FILE UPLOAD */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">
                CV/Resume (Optional)
              </label>

              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition ${
                  isDragging
                    ? "border-[#D87245] bg-[#FFE1D5]/50"
                    : "border-slate-300 hover:border-slate-400"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="fileUpload"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={isSubmitting}
                />
                <label htmlFor="fileUpload" className="cursor-pointer text-sm">
                  <div className="text-3xl mb-1">📁</div>
                  {file ? (
                    <div>
                      <p className="text-slate-700 font-medium">{file.name}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setFile(null);
                          document.getElementById("fileUpload").value = "";
                        }}
                        className="text-xs text-red-500 mt-2 hover:underline"
                        disabled={isSubmitting}
                      >
                        Remove file
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-slate-500">Click or drag a file here</p>
                      <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX (max 10 MB)</p>
                    </div>
                  )}
                </label>
              </div>
              {errorMessage && !submitStatus && (
                <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#D87245]/20"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-full text-white text-sm font-medium py-2.5 transition shadow-md ${
                isSubmitting
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-[#D87245] hover:bg-[#F8A77D]"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
