import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white via-primarySoft/40 to-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">
              Ready to Accelerate Your Digital Transformation?
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-b from-primaryLight to-primary px-6 py-3 text-sm font-medium text-white shadow-card"
            >
              Request a Free Consultation
              <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary bg-white"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;



