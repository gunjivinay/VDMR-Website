import { motion } from 'framer-motion';
import heroImage from '../assets/image-11.png';
import StatsStrip from './StatsStrip.jsx';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-accentBlue/15 via-white to-primarySoft/40"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-24">
        <div className="relative z-10 w-full md:w-1/2">
          <motion.div
            className="inline-flex rounded-full bg-primarySoft/60 px-4 py-1 text-xs font-medium text-primary"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to VDMR Website
          </motion.div>

          <motion.h1
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="underline decoration-primary/60 decoration-4 underline-offset-4">Powering</span> Your
            Business with Expert{' '}
            <span className="underline decoration-primary/60 decoration-4 underline-offset-4">
              MS Dynamics 365 Solutions
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-sm md:text-base text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Unlock unparalleled efficiency and growth with VDMR Pty Ltd. As dedicated specialists in the Microsoft Dynamics
            365 ecosystem, we deliver tailor-made implementation, customization, and support services that transform complex
            operations into streamlined, competitive advantages.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-primaryLight to-primary px-6 py-3 text-sm font-medium text-white shadow-card hover:-translate-y-0.5 hover:shadow-lg transition"
            >
              Request a Free Consultation
              <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-primary bg-white px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white transition"
            >
              Contact Us
            </a>
          </motion.div>

          <StatsStrip />
        </div>

        <motion.div
          className="relative w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative mx-auto max-w-md rounded-3xl bg-white/70 p-4 shadow-card">
            <img src={heroImage} alt="Analytics dashboard on laptop" className="h-auto w-full rounded-2xl object-cover" />
          </div>
          <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-primarySoft blur-3xl opacity-80" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-accentBlue/40 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;



