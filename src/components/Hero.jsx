import { motion } from "framer-motion";
import StatsStrip from "./StatsStrip.jsx";
import rightHeroImage from "../assets/Section.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF4ED] via-white to-[#FFE8D9] mt-16"
      style={{
        backgroundImage: `url(${rightHeroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        backgroundPosition: "right center",
        backgroundPositionY: "-70px",
        backgroundPositionX: "-20px",
      }}
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 px-4 py-20">

        {/* LEFT CONTENT WITH SLIDE-IN EFFECT */}
        <motion.div
          className="relative z-10 w-full md:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* BADGE */}
          <motion.div
            className="inline-flex rounded-full bg-[#E67342] px-5 py-2 text-lg font-medium text-white shadow"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome To VDMR Website
          </motion.div>

          {/* TITLE WITH ORANGE GRADIENT STYLING */}
          <motion.h1
  className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 
             leading-[1.25] tracking-tight space-y-3"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.3 }}
>
  <div className="space-y-2">
    <span className="text-[#F9A07A]">Powering</span>{" "}
    <span className="text-slate-900">Your Business</span>
  </div>

  <div className="space-y-2">
    <span className="text-slate-900">with Expert</span>{" "}
    <span className="text-[#F9A07A]">Ms Dynamics</span>
  </div>

  <div className="space-y-2">
    <span className="text-[#F9A07A]">365 Solutions</span>
  </div>
</motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            className="mt-5 text-lg text-black max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Unlock unparalleled efficiency and growth with VDMR Pty Ltd. As dedicated specialists in the Microsoft Dynamics 365 ecosystem, we deliver tailor-made implementation, customization, and support services that transform complex operations into streamlined, competitive advantages. Let our proven expertise and 15+ years of experience drive your organization’s digital journey forward.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
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
          </motion.div>

          {/* STATS SECTION */}
          <StatsStrip />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
