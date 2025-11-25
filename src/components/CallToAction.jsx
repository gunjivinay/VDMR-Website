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
          </motion.div>

          {/* EMPTY RIGHT SIDE (IMAGE STAYS AS BACKGROUND) */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
