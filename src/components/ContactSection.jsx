import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-2 rounded-3xl text-sm md:text-sm font-bold text-[#E67342] bg-[#FFE1D5]"
        >
          Contact Us
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-800 mt-6"
        >
          Have questions or want to work with us?  
          Chat directly on WhatsApp.
        </motion.p>

        {/* WhatsApp Button with Orange + Hover Fill */}
        <motion.a
  href="https://wa.me/61447272033"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="btn-fill-slide mt-8 inline-flex items-center gap-3 px-10 py-3 
             rounded-lg bg-gradient-to-b from-[#F39C7A] to-[#E56E40] 
             text-white text-lg font-semibold shadow-lg transition-all"
>
  💬 Chat on WhatsApp
</motion.a>

      </div>
    </section>
  );
};

export default ContactSection;
