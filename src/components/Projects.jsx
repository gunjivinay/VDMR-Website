import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import img1 from '../assets/image-7.png';
import img2 from '../assets/image-9.png';
import img3 from '../assets/image-10.png';
import img4 from '../assets/image-11(1).png';
import img5 from '../assets/image-12.png';

const projectImages = [img1, img2, img3, img4, img5];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-primarySoft/70 via-primarySoft/60 to-primarySoft/80 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Our Projects" title="Showcasing Successful Dynamics 365 Engagements" />

        <motion.div
          className="mt-8 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {projectImages.map((src, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-3xl bg-white shadow-card"
            >
              <img
                src={src}
                alt={`Project ${idx + 1}`}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;



