import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import testimonialAvatar from '../assets/Image-13.png';
import testimonialIllustration from '../assets/Group-1000010341.png';

const testimonials = [
  {
    id: 1,
    name: 'James Anderson',
    role: 'CEO and Founder',
    text:
      '“Your text goes here. This is just placeholder content. Replace this with a real client quote about how VDMR transformed their Dynamics 365 environment and delivered measurable business outcomes.”'
  },
  {
    id: 2,
    name: 'James Anderson',
    role: 'CEO and Founder',
    text:
      '“Your text goes here. This is just placeholder content. Add a second testimonial showcasing reliability, on-time delivery, and deep functional knowledge.”'
  }
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-primarySoft/70 via-[#FFBBA3] to-primarySoft/80 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="What Our Clients Say"
          title="Trusted by Businesses Across the Globe"
          className="mb-8"
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="space-y-6">
              {testimonials.map((t, idx) => (
                <motion.article
                  key={t.id}
                  className="relative overflow-hidden rounded-3xl bg-[#FFDCB6] p-6 md:p-8 shadow-card flex flex-col gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonialAvatar}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1 text-yellow-500 text-sm">{'★★★★★'}</div>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-700">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-600">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-800 leading-relaxed">{t.text}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={testimonialIllustration}
              alt="Happy customers illustration"
              className="max-h-[420px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



