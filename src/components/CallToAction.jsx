import { motion } from "framer-motion";
import calltoactionImage from "../assets/image-34.png";

const CallToAction = () => {
  return (
    <section
      className="bg-gradient-to-b from-white via-primarySoft/40 to-white py-16 md:py-20 h-[420px]"
      style={{
        backgroundImage: `url(${calltoactionImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundPositionY: "-20px",
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">
              Ready to Accelerate Your Digital Transformation?
            </h2>

            {/* BUTTONS UNDER TEXT (LEFT SIDE) */}
            <div className="mt-6 flex flex-wrap gap-4">
            <a
  href="#contact"
  className="inline-flex items-center rounded-xl 
  bg-gradient-to-b from-[#F39C7A] to-[#E56E40] 
  px-7 py-3 text-sm font-medium text-white 
  shadow transition-all duration-300 
  hover:bg-[#FBC7A6] hover:from-[#FBC7A6] hover:to-[#FBC7A6] 
  hover:text-black"
>
  Request a Free Consultation
  <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-white text-xs">
    →
  </span>
</a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#E67342] 
                px-7 py-3 text-sm font-medium text-[#E67342]
                transition-all duration-300 hover:bg-[#E67342] hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* EMPTY RIGHT SIDE (IMAGE STAYS AS BACKGROUND) */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
