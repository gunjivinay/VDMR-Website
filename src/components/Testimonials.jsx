import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";

import testimonialAvatar from "../assets/Image-13.png";
import servicesImage from "../assets/Group-1000010357.png";
import rightIllustration from "../assets/Group-1000010341.png";

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    role: "CEO and Founder",
    text:
      "“Your text goes here. This is just placeholder content. Replace this with a real client quote about how VDMR transformed their Dynamics 365 environment and delivered measurable business outcomes.”",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "CTO – Global Systems",
    text:
      "“This testimonial showcases reliability, on-time delivery, and deep technical expertise that helped us modernize our operations.”",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 bg-white"
      style={{
        backgroundImage: `url(${servicesImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundPositionY: "50px",
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="What Our Clients Say"
          title="Trusted by Businesses Across the Globe"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT — TESTIMONIAL SLIDER */}
          <div className="relative flex items-center justify-center">

            {/* LEFT ARROW (OUTSIDE CARD) */}
            <button
              onClick={prevTestimonial}
              className="
              absolute -left-6 md:-left-10 
              top-1/2 -translate-y-1/2
              bg-[#FFBCA3] hover:bg-[#FF9D7A] text-white 
              px-4 py-3 rounded-full shadow-md transition
            "            >
              ←
            </button>

            <div className="w-full max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[index].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl bg-[#FFDCB6] p-8 shadow-xl"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <img
                      src={testimonialAvatar}
                      alt="Client"
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="text-yellow-500 text-lg">★★★★★</p>
                      <p className="text-sm font-semibold">
                        {testimonials[index].name}
                      </p>
                      <p className="text-xs text-slate-600">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-800 text-sm leading-relaxed">
                    {testimonials[index].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT ARROW (OUTSIDE CARD) */}
            <button
              onClick={nextTestimonial}
              className="
              absolute -right-6 md:-right-10 
              top-1/2 -translate-y-1/2
              bg-[#FFBCA3] hover:bg-[#FF9D7A] text-white 
              px-4 py-3 rounded-full shadow-md transition
            "
                        >
              →
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={rightIllustration}
              alt="Testimonials illustration"
              className="max-h-[420px] w-auto object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
