import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";

import img1 from "../assets/image-7.png";
import img2 from "../assets/image-9.png";
import img3 from "../assets/image-10.png";
import img4 from "../assets/image-11(1).png";
import img5 from "../assets/image-12.png";
import projectImage from "../assets/r-3.png";


const projectImages = [img1, img2, img3, img4, img5];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);

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
    <section id="projects" className="py-20 bg-white"
    style={{
      backgroundImage: `url(${projectImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundPosition: "right center",
      backgroundPositionY: "-80px",
    }}>
      <div className="mx-auto max-w-7xl px-4">

        <SectionHeader
          eyebrow="Our Projects"
          title="Showcasing Successful Dynamics 365 Engagements"
        />

        <div className="relative mt-12 flex items-center justify-center">

          {/* LEFT ARROW — pushed far outside */}
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-[#FFBCA3] 
            hover:bg-[#FF9D7A] text-white px-3 py-2 text-lg rounded-full shadow-lg transition"
          >
            ←
          </button>

          {/* PROJECT SLIDER */}
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-8 w-full"
            >
              {projectImages.slice(startIndex, startIndex + 3).map((src, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-3xl bg-white shadow-xl"
                >
                  <img
                    src={src}
                    alt="Project"
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* RIGHT ARROW — pushed far outside */}
          <button
            onClick={next}
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-[#FFBCA3] 
            hover:bg-[#FF9D7A] text-white px-3 py-2 text-lg rounded-full shadow-lg transition"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
};

export default Projects;
