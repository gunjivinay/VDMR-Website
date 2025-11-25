import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import chooseImage from '../assets/r-1.png';

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-16 md:py-20 bg-[#F8C8B4]"
      style={{
        backgroundImage: `url(${chooseImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",        // reduce image width so text stays left
        backgroundPosition: "right center",
        backgroundPositionY: "-50px", // image only on right side
      }}
    >
      <div className="mx-auto max-w-6xl px-4 h-[500px]">
        
        {/* TEXT ALWAYS LEFT SIDE */}
        <div className="max-w-xl mt-[50px]">  
          <SectionHeader
            eyebrow="Our Advantage"
            title="Why Leading Companies Choose VDMR Pty Ltd"
            align="left"
          />

          <motion.div
            className="mt-5 space-y-4 text-sm md:text-base text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p>
            Leading companies choose VDMR for our absolute commitment to quality and a proven 100% project delivery success rate. Our methodology is built on transparency, rigorous project governance, and a focus on minimizing disruption, ensuring every implementation is delivered on time and within budget.
            </p>

            <p>
            We believe in building long-term partnerships. Our dedicated post-implementation support model ensures your teams are empowered and your Dynamics system remains a powerful, reliable catalyst for continuous business innovation and enduring competitive advantage.


            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
