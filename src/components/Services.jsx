import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import servicesCard1 from '../assets/Group-1000010347.png';
import servicesCard2 from '../assets/Group-1000010332.png';
import servicesCard3 from '../assets/Group-1000010330.png';


const serviceCards = [
  {
    id: 1,
    image: servicesCard1,
    cta: 'View Details'
  },
  {
    id: 2,
    image: servicesCard2,
    cta: 'Read More'
  },
  {
    id: 3,
    image: servicesCard3,
    cta: 'View Details'
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-accentOrange/10 via-accentOrange/40 to-accentOrangeDark/40 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeader
              eyebrow="Our Services"
              title="Comprehensive Dynamics 365 Solutions for Modern Enterprises"
              align="left"
            />
          </div>
          <motion.p
            className="text-sm md:text-base text-slate-800"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            We offer an end-to-end suite of services designed to maximize your Dynamics 365 investment. From initial
            discovery and solution architecture through to migration, training, and proactive managed support, we cover
            Finance, Supply Chain Management, Sales, Customer Service and more.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">
            {serviceCards.map((card, idx) => (
              <motion.article
                key={card.id}
                className="relative overflow-hidden rounded-3xl bg-[#FFDCB6] shadow-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <img src={card.image} alt="Service illustration" className="h-80 w-full object-cover md:h-[22rem]" />
                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-6">
                  <button className="inline-flex items-center rounded-lg bg-gradient-to-b from-primaryLight to-primary px-5 py-2 text-sm font-medium text-primary text-white  hover:bg-none hover:bg-[#FBC7A6] hover:text-black">
                    {card.cta}
                    <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-white text-xs">
                      ↑
                    </span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#services"
              className="inline-flex items-center rounded-full bg-gradient-to-b from-primaryLight to-primary px-8 py-3 text-sm font-medium text-white shadow-card  hover:bg-none hover:bg-[#FBC7A6] hover:text-black"
            >
              View All Services
              <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-white text-xs">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;



