import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, align = 'center', className = '' }) => {
  const alignClass =
    align === 'left' ? 'items-start text-left' : align === 'right' ? 'items-end text-right' : 'items-center text-center';

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-primary/40 bg-primarySoft/40 px-4 py-1 text-xs font-medium uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
      )}
      {title && <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">{title}</h2>}
    </motion.div>
  );
};

export default SectionHeader;



