import { motion } from 'framer-motion';
import logoGrammarly from '../assets/Logogrammarly.png';
import logoCanva from '../assets/Logocanva.png';
import logoLinear from '../assets/Logolinear.png';
import logoCoinbase from '../assets/Logocoinbase.png';

const logos = [logoGrammarly, logoCanva, logoLinear, logoCoinbase];

const LogoMarquee = () => {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 text-center mb-4">
          Trusted by teams using leading technology
        </p>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-10"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {[...logos, ...logos].map((src, idx) => (
              <div key={idx} className="flex min-w-[140px] items-center justify-center opacity-80">
                <img src={src} alt="Client logo" className="h-10 w-auto object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;



