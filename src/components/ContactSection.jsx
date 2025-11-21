import { motion } from 'framer-motion';
import phoneIcon from '../assets/Group-1000004160-25x25.png';
import emailIcon from '../assets/Group-1000004160-1-25x25.png';
import addressIcon from '../assets/Group-1000004160-2-25x25.png';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-accentBlue/10 to-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">Get in touch</h2>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              Tell us about your Dynamics 365 plans and we’ll respond with options for implementation, upgrade, or
              optimization tailored to your organisation.
            </p>
            <ul className="space-y-4 text-sm text-slate-800">
              <li className="flex gap-3">
                <img src={phoneIcon} alt="Phone" className="h-6 w-6" />
                <span>
                  <span className="font-semibold">Phone (Customer Service)</span>
                  <br />
                  0431491092
                </span>
              </li>
              <li className="flex gap-3">
                <img src={emailIcon} alt="Email" className="h-6 w-6" />
                <span>
                  <span className="font-semibold">General Email</span>
                  <br />
                  admin@vdmrptyltd.com
                </span>
              </li>
              <li className="flex gap-3">
                <img src={addressIcon} alt="Address" className="h-6 w-6" />
                <span>
                  <span className="font-semibold">Office Address</span>
                  <br />
                  Unit 1 / 251 Latrobe Tce, Geelong, Victoria 3220, Australia
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-white p-6 shadow-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-card hover:bg-primaryLight transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



