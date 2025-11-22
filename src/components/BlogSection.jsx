import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";

const BlogSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">

        {/* Section Heading */}
        <SectionHeader
          eyebrow="Our Blogs"
          title="Every Single Update & Recent Story From Our Blog"
          align="center"
        />

        {/* Button Only */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#blogs"
            className="inline-flex items-center rounded-full bg-gradient-to-b 
                       from-primaryLight to-primary px-8 py-3 text-sm font-medium 
                       text-white shadow-card hover:bg-[#FBC7A6] hover:text-black 
                       transition-all
                       hover:bg-[#FBC7A6] hover:from-[#FBC7A6] hover:to-[#FBC7A6] "
          >
            Explore All Blogs
            <span className="ml-2 inline-flex h-6 w-6 items-center justify-center 
                             rounded-full text-white text-xs">
              →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;
