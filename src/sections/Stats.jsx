import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { STATS } from '../constants';

function StatItem({ stat, index }) {
  const [ref, count] = useCountUp(stat.value, 2500);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
    }
    return num.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative text-center group"
    >
      <div className="glass-card p-8 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Number */}
        <div className="relative z-10">
          <motion.div
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold gradient-text mb-2"
            whileHover={{ scale: 1.05 }}
          >
            {stat.value >= 1000 ? formatNumber(count) : count}
            <span className="text-blue-400">{stat.suffix}</span>
          </motion.div>

          {/* Label */}
          <div className="text-farwing-muted text-sm sm:text-base font-medium tracking-wide">
            {stat.label}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-1/2 transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const [sectionRef, isInView] = useInView();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div ref={sectionRef} className="section-padding max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span className="text-sm text-farwing-muted">By The Numbers</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Trusted by </span>
            <span className="gradient-text">Businesses</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
