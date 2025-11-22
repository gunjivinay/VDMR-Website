import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4"> {/* Reduced Width */}


        
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

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">
                Name <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary"
                  required
                />
                <input
                  type="text"
                  placeholder="Last"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary"
                  required
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
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary"
                required
              />
            </div>

            {/* FILE UPLOAD */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">
                File Upload
              </label>

              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center text-slate-500 hover:border-slate-400 transition cursor-pointer">
                <input type="file" id="fileUpload" className="hidden" />
                <label htmlFor="fileUpload" className="cursor-pointer text-sm">
                  <div className="text-3xl mb-1">📁</div>
                  Click or drag a file here
                </label>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">
                Message
              </label>
              <textarea
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#D87245] hover:bg-[#F8A77D] text-white text-sm font-medium py-2.5 transition shadow-md"
            >
              Submit
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
