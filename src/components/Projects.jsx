import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";

import img1 from "../assets/Project1.png";
import img2 from "../assets/Project2.png";
import img3 from "../assets/Project3.png";
import img4 from "../assets/Project4.png";
import projectImage from "../assets/r-3.png";

const projectImages = [img1, img2, img3, img4];

const projectTitles = [
  "ERP - Finance & SCM Focus",
  "CE - Sales Focus",
  "CE - Customer Service Focus",
  "ERP - Finance Focus"
];

const projectDetails = [
  {
    title: "Global SCM Optimization for a Manufacturing Leader (ERP - Finance & SCM Focus)",
    html: `
      <p><strong>Challenge:</strong> A large industrial manufacturing client needed to unify fragmented supply chain processes across three continents, struggling with inaccurate inventory data and delayed delivery times.</p><br/>
      <p><strong>VDMR Solution:</strong> Implemented and customized Dynamics 365 Supply Chain Management (SCM), integrating it with existing warehouse management systems (WMS). We delivered a phased rollout with region-specific configurations.</p><br/>
      <p><strong>Result:</strong> Reduced inventory discrepancies by 35%, cut order-to-delivery lead times by 20%, and provided real-time visibility into the global supply chain, saving an estimated $2.5 million annually.</p><br/>
    `
  },
  {
    title: "B2B Sales Transformation for a Technology Distributor (CE - Sales Focus)",
    html: `
     <p><strong>Challenge:</strong> A major technology distributor faced slow lead conversion, poor pipeline visibility, and no standardized process for managing complex, multi-stage sales opportunities across various product lines.</p><br/>
      <p><strong>VDMR Solution:</strong> Deployed Dynamics 365 Sales Professional, configuring advanced lead scoring models, creating customized Business Process Flows (BPFs) for different product sales cycles, and integrating the system with Microsoft Teams for collaborative selling.</p><br/>
      <p><strong>Result:</strong> Increased the speed of lead qualification by 50% through automation, provided leadership with a 360-degree view of every account relationship history, and improved forecast accuracy by 15%.</p><br/>
    `
  },
  {
    title: "Omnichannel Service Automation for a Financial Services Firm (CE - Customer Service Focus)",
    html: `
      <p><strong>Challenge:</strong> A financial services firm struggled with high call volumes and inconsistent service quality because customer inquiries arrived via phone, email, and web forms, but were tracked across multiple, disconnected systems.</p><br/>
      <p><strong>VDMR Solution:</strong>  Implemented Dynamics 365 Customer Service (Omnichannel). We established Unified Routing for automatic case distribution, integrated a comprehensive Knowledge Base for agent self-service, and configured a customer-facing Portal for self-service case creation and tracking.</p><br/>
      <p><strong>Result:</strong> Reduced average call handling time by 25% due to the centralized data view, deflected 20% of calls to the self-service portal, and provided agents with the tools to meet SLA (Service Level Agreement) targets consistently.</p><br/>
    `
  },
  {
    title: "Financial Transformation for a National Retail Chain (ERP - Finance Focus)",
    html: `
      <p><strong>Challenge:</strong> A rapidly expanding retailer needed to replace an aging legacy finance system that could not handle the complexity of multi-entity reporting and modern regulatory compliance.</p><br/>
      <p><strong>VDMR Solution:</strong> Deployed Dynamics 365 Finance, establishing a standardized chart of accounts, automated intercompany processing, and streamlined budgeting tools.</p><br/>
      <p><strong>Result:</strong> Accelerated the monthly financial close process by 40%, significantly improved compliance audit readiness, and provided leadership with consolidated, real-time financial reporting dashboards.</p><br/>
    `
  }
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  const next = () => {
    setStartIndex((prev) =>
      prev + 1 <= projectImages.length - 3 ? prev + 1 : 0
    );
  };

  const prev = () => {
    setStartIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : projectImages.length - 3
    );
  };

  return (
    <section
      id="projects"
      className="py-20 bg-white"
      style={{
        backgroundImage: `url(${projectImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "right center",
        backgroundPositionY: "-80px",
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Our Projects"
          title="Showcasing Successful Dynamics 365 Engagements"
        />

        <div className="relative mt-12 flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 
              bg-[#FFBCA3] hover:bg-[#FF9D7A] text-white 
              px-3 py-2 text-lg rounded-full shadow-lg transition"
          >
            ←
          </button>

          {/* Slider */}
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-8 w-full"
            >
              {projectImages.slice(startIndex, startIndex + 3).map((src, idx) => {
                const realIndex = startIndex + idx;

                return (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-xl cursor-pointer"
                    onClick={() => setActiveModal(realIndex)}
                  >
                    <img
                      src={src}
                      alt={projectTitles[realIndex]}
                      className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Title with left-to-right fill animation */}
                    <div
                      className="project-fill-slide absolute bottom-4 left-1/2 -translate-x-1/2
                                 bg-orange-500 text-white px-4 py-2 text-sm rounded-lg 
                                 text-center font-semibold transition-all duration-300"
                    >
                      {projectTitles[realIndex]}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-12 top-1/2 -translate-y-1/2 
              bg-[#FFBCA3] hover:bg-[#FF9D7A] text-white 
              px-3 py-2 text-lg rounded-full shadow-lg transition"
          >
            →
          </button>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative p-8 rounded-2xl max-w-lg shadow-xl"
              style={{
                animation: "popupGlow 6s ease-in-out infinite",
                background: "linear-gradient(135deg, #fff7f2, #ffe1d0)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-medium"
              >
                ×
              </button>

              <h2 className="text-2xl font-extrabold text-orange-600 pr-8">
                {projectDetails[activeModal].title}
              </h2>

              <div
                className="mt-4 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: projectDetails[activeModal].html }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
