import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Projects Done', value: '200+' },
  { label: 'Delivery Rate', value: '100%' }
];

const StatsStrip = () => {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-5 text-center shadow-sm hover:bg-primary hover:text-white transition-colors"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className="text-2xl font-semibold">{stat.value}</div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wide">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsStrip;



