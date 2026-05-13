import { useState } from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';
import { useInView } from '../hooks/useInView';

function TechCard({ tech, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="glass-card p-6 flex flex-col items-center justify-center gap-4 cursor-pointer relative overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Glow Background */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered
              ? `0 0 30px ${tech.color}30, inset 0 0 30px ${tech.color}10`
              : '0 0 0px transparent',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className="text-4xl relative z-10"
          animate={{ 
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.2 : 1 
          }}
          transition={{ duration: 0.5 }}
        >
          {tech.icon}
        </motion.div>

        {/* Name */}
        <motion.span
          className="text-sm font-medium text-farwing-muted group-hover:text-white transition-colors relative z-10"
          animate={{ y: isHovered ? -2 : 0 }}
        >
          {tech.name}
        </motion.span>

        {/* Decorative Ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-transparent"
          animate={{
            borderColor: isHovered ? `${tech.color}40` : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function TechStack() {
  const [sectionRef, isInView] = useInView();

  return (
    <section id="techstack" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[80px] pointer-events-none" />

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
            <span className="text-sm text-farwing-muted">Technologies</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Tech Stack</span>
          </h2>

          <p className="text-farwing-muted text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, 
            and future-proof solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {TECH_STACK.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Floating Particles Decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-500/20"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
