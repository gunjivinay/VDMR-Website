import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-primarySoft/40 via-white to-primarySoft/50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_1fr] md:items-center">
          <div>
            <SectionHeader
              eyebrow="Our Advantage"
              title="Why Leading Companies Choose VDMR Pty Ltd"
              align="left"
            />
            <motion.div
              className="mt-5 space-y-4 text-sm md:text-base text-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Leading companies choose VDMR for our absolute commitment to quality and a proven project delivery success
                rate. Our methodology is built on transparency, rigorous project governance, and a focus on minimizing
                disruption, ensuring every implementation is delivered on time and within budget.
              </p>
              <p>
                We believe in building long-term partnerships. Our dedicated post-implementation support model ensures your
                teams are empowered and your Dynamics system remains a powerful, reliable catalyst for continuous business
                innovation.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block h-full rounded-3xl bg-gradient-to-br from-primaryLight/60 via-white to-accentBlue/40"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



