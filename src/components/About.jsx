import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import aboutMainImage from '../assets/image-11.png';
import deepExpertiseIcon from '../assets/Group-1000010323.png';
import globalReachIcon from '../assets/Vector-1.png';

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-accentBlue/10 via-white to-primarySoft/40 py-16 md:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
        <motion.div
          className="order-2 w-full md:order-1 md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative mx-auto max-w-md">
            <img
              src={aboutMainImage}
              alt="Team collaborating on Dynamics 365"
              className="w-full rounded-3xl object-cover shadow-card"
            />
            <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accentBlue/40 blur-2xl" />
            <div className="pointer-events-none absolute -right-12 bottom-0 h-36 w-36 rounded-full bg-primarySoft blur-2xl" />
          </div>
        </motion.div>

        <div className="order-1 w-full md:order-2 md:w-1/2 space-y-6">
          <SectionHeader eyebrow="About Us – VDMR" title="Your Trusted Microsoft Dynamics 365 Partner" align="left" />

          <p className="text-sm md:text-base text-slate-600">
            For over 15 years, VDMR has been the partner businesses trust to navigate the complexities of Dynamics 365. Our
            team comprises industry-leading experts who possess deep knowledge across every facet of the platform. We don’t
            just implement software; we ensure your solution is perfectly aligned with your strategic business goals.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              className="rounded-2xl bg-gradient-to-b from-primaryLight/30 to-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <img src={deepExpertiseIcon} alt="Deep expertise" className="h-12 w-12 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-900 text-center mb-2">Deep Expertise</h3>
              <p className="text-sm text-slate-600 text-center">
                Experts in every version of Microsoft Dynamics, ensuring your solution is built on foundational knowledge
                and future-proof design.
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl bg-gradient-to-b from-primarySoft/40 to-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src={globalReachIcon} alt="Global reach" className="h-12 w-12 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-900 text-center mb-2">Global Reach</h3>
              <p className="text-sm text-slate-600 text-center">
                Delivery experience across regions and industries, aligning Dynamics 365 with complex global operating
                models.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
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
              className="inline-flex items-center rounded-full border border-primary bg-white px-6 py-3 text-sm font-medium text-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



