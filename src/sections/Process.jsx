import { motion } from 'framer-motion';
import { PROCESS } from '../constants';
import { useInView } from '../hooks/useInView';

export default function Process() {
  const [sectionRef, isInView] = useInView();

  return (
    <section id="process" className="relative py-32 overflow-hidden bg-gray-900/20">
      <div ref={sectionRef} className="section-padding max-w-7xl mx-auto relative z-10">
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
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-sm text-farwing-muted">How We Work</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Methodology</span>
          </h2>
          <p className="text-farwing-muted text-lg max-w-2xl mx-auto">
            A battle-tested engineering process designed for high performance, scalability, and seamless deployment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card-hover p-8 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-5xl font-display font-bold text-white/10 mb-4 group-hover:text-white/20 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-farwing-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
