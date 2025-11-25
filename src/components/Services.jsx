import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";

// Existing image imports
import servicesCard1 from "../assets/Group-1000010347.png";
import servicesCard2 from "../assets/Group-1000010332.png";
import servicesCard3 from "../assets/Group-1000010330.png";
import aboutbackImage from "../assets/r-2.png";

// ⭐ NEW ICON IMPORTS ⭐
import { LuUser, LuUsers, LuPenLine } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa";
import { PiPresentation } from "react-icons/pi";

const serviceCards = [
  {
    id: 1,
    image: servicesCard1,
    cta: "View Details",
  },
  {
    id: 2,
    image: servicesCard2,
    cta: "Read More",
  },
  {
    id: 3,
    image: servicesCard3,
    cta: "View Details",
  },
];

// ⭐ ICON DATA (5 Cards) ⭐ — with hover white color effect
const extraServices = [
  {
    title: "Talent Acquisition",
    icon: (
      <LuUser
        size={60}
        className="text-[#E67342] group-hover:text-white transition-all duration-300"
      />
    ),
  },
  {
    title: "Temporary Staffing",
    icon: (
      <LuUsers
        size={60}
        className="text-[#E67342] group-hover:text-white transition-all duration-300"
      />
    ),
  },
  {
    title: "Contract To Hire",
    icon: (
      <LuPenLine
        size={60}
        className="text-[#E67342] group-hover:text-white transition-all duration-300"
      />
    ),
  },
  {
    title: "IT Consulting",
    icon: (
      <FaHandshake
        size={60}
        className="text-[#E67342] group-hover:text-white transition-all duration-300"
      />
    ),
  },
  {
    title: "Expert Training",
    icon: (
      <PiPresentation
        size={60}
        className="text-[#E67342] group-hover:text-white transition-all duration-300"
      />
    ),
  },
];

const Services = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${aboutbackImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundPositionY: "50px",
      }}
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
            className="text-sm md:text-base text-black"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
           We offer an end-to-end suite of services designed to maximize your Dynamics 365 investment. This includes initial discovery and system architecture, seamless migration, rigorous user training, and proactive managed support. We specialize in modules such as Finance, Supply Chain Management, Sales, and Customer Service, ensuring optimal performance and continuous adaptation to your evolving needs.
          </motion.p>
        </div>

        {/* ⭐ MAIN 3 SERVICE CARDS ⭐ */}
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
                <img
                  src={card.image}
                  alt="Service illustration"
                  className="h-80 w-full object-cover md:h-[22rem]"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-6">
                  <button
                    className="btn-fill-slide inline-flex items-center rounded-lg 
                    bg-gradient-to-b from-primaryLight to-primary px-5 py-2 text-sm font-medium text-white"
                  >
                    {card.cta}
                    <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-white text-xs">
                      ↑
                    </span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="#services"
              className="btn-fill-slide inline-flex items-center rounded-full 
              bg-gradient-to-b from-primaryLight to-primary px-8 py-3 text-sm font-medium 
              text-white shadow-card"
            >
              View All Services
              <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-white text-xs">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ⭐ UPDATED 5-CARD ROW WITH ORANGE → WHITE ICONS ⭐ */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {extraServices.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all
            flex flex-col items-center justify-center
            hover:bg-[#E67342] hover:text-white hover:shadow-xl
            group h-[220px] w-full sm:w-[200px] max-w-[200px]"
          >
            <div className="mb-4 transition-all">{item.icon}</div>

            <h3 className="font-semibold text-lg text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
