import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';

import aboutMainImage from '../assets/image-11.png';
import deepExpertiseIcon from '../assets/Group-1000010323.png';
import globalReachIcon from '../assets/Vector-1.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-20"
      style={{
        backgroundColor: "#F8C8B4",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">

        {/* LEFT IMAGE WITH ANIMATED DOTS */}
        <motion.div
  className="order-2 w-full md:order-1 md:w-1/2 relative overflow-visible"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7 }}
>
  {/* 🔥 Floating Dots (Light Orange + Dense + Small) */}
  <div className="about-dots">
    {Array.from({ length: 144 }).map((_, i) => (
      <span key={i}></span>
    ))}
  </div>

  <div className="relative mx-auto max-w-2xl z-10">
    <img
      src={aboutMainImage}
      alt="Team collaborating"
      className="w-full rounded-2xl object-cover shadow-xl relative z-10"
    />
  </div>
</motion.div>


        {/* RIGHT CONTENT */}
        <div className="order-1 w-full md:order-2 md:w-1/2 space-y-6">
          <SectionHeader
            eyebrow="About Us – VDMR"
            title="Your Trusted Microsoft Dynamics 365 Partner"
            align="left"
          />

          <p className="text-sm md:text-base text-black">
            For over 15 years, VDMR has been the partner businesses trust to navigate the complexities 
            of Dynamics 365. Our team comprises industry-leading experts who possess deep knowledge 
            across every facet of the platform. We don’t just implement software; we ensure your 
            solution is perfectly aligned with your strategic business goals, delivering tangible ROI 
            and maximizing your system’s potential for sustainable growth.
          </p>

          {/* CARDS */}
          <div className="grid gap-4 md:grid-cols-2 min-h-[260px]">

            {/* CARD 1 */}
            <motion.div
              className="rounded-2xl bg-gradient-to-b from-[#F5A98A] p-5 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <img src={deepExpertiseIcon} className="h-12 w-12 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-900 text-center mb-2">Deep Expertise</h3>
              <p className="text-sm text-black text-center">
                Experts in every version of Microsoft Dynamics, ensuring your solution is built on 
                foundational knowledge and future-proof design.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="rounded-2xl bg-gradient-to-b from-[#F5A98A] p-5 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src={globalReachIcon} className="h-12 w-12 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-900 text-center mb-2">Global Reach</h3>
              <p className="text-sm text-black text-center">
                Experts in every version of Microsoft Dynamics since its inception.
              </p>
            </motion.div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">

            <a
              href="#contact"
              className="
                relative overflow-hidden rounded-xl px-7 py-2.5 text-base font-medium 
                bg-orange-500 text-white shadow transition-all duration-500
                before:absolute before:inset-0 before:bg-orange-300
                before:-translate-x-full before:transition-transform before:duration-500
                before:z-0 hover:before:translate-x-0 hover:text-black
              "
            >
              <span className="relative z-[1]">Request A Free Consultation →</span>
            </a>

            <a
              href="#contact"
              className="
                relative overflow-hidden rounded-xl px-7 py-2.5 text-base font-medium 
                border border-[#E67342] text-[#E67342] shadow transition-all duration-500
                before:absolute before:inset-0 before:bg-[#E67342]
                before:-translate-x-full before:transition-transform before:duration-500
                before:z-0 hover:before:translate-x-0 hover:text-white
              "
            >
              <span className="relative z-[1]">Contact Us</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
