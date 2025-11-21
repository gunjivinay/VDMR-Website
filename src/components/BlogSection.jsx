import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import mainContainer from '../assets/Container.png';
import container1 from '../assets/Container-1.png';
import container2 from '../assets/Container-2.png';
import container3 from '../assets/Container-3.png';
import linkIcon from '../assets/Link.png';

const BlogSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Our Blogs"
          title="Every Single Update & Recent Story From Our Blog"
        />

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={mainContainer}
              alt="Featured blog visual"
              className="w-full rounded-3xl object-cover shadow-card"
            />
            <div className="flex gap-4">
              <img src={linkIcon} alt="" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Your text goes here. This is just placeholder content.
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Your text goes here. Replace this with a featured article about Dynamics 365 best practices or a client
                  success story. {/* TODO: replace placeholder blog copy */}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            {[container1, container2, container3].map((src, idx) => (
              <article
                key={idx}
                className="flex gap-4 rounded-2xl bg-slate-50 p-4 hover:bg-slate-100 transition"
              >
                <img src={src} alt="Blog teaser" className="h-20 w-20 rounded-xl object-cover" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Reviews · Apr 2, 2026</p>
                  <h4 className="mt-1 text-sm font-semibold text-slate-900">
                    Your text goes here. This is just placeholder content.
                    {/* TODO: replace with real blog titles */}
                  </h4>
                </div>
              </article>
            ))}

            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-gradient-to-b from-primaryLight to-primary px-6 py-3 text-sm font-medium text-white shadow-card"
              >
                Discover More
                <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white text-xs">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;



