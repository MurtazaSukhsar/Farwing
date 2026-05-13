import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, Cloud, Building2, Settings } from 'lucide-react';
import { SERVICES } from '../constants';
import { useInView } from '../hooks/useInView';

const iconMap = {
  Globe,
  Smartphone,
  Database,
  Cloud,
  Building2,
  Settings,
};

function ServiceCard({ service, index }) {
  const [ref, isInView] = useInView();
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card-hover p-8 h-full relative overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

        {/* Glow Effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon size={28} className="text-blue-400" />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-farwing-muted text-sm leading-relaxed">
            {service.description}
          </p>

          {/* Learn More */}
          <div className="mt-6 flex items-center gap-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn more</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [sectionRef, isInView] = useInView();

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[80px] pointer-events-none" />

      <div ref={sectionRef} className="section-padding max-w-7xl mx-auto relative z-10">
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
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-sm text-farwing-muted">What We Do</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Services</span>
          </h2>

          <p className="text-farwing-muted text-lg max-w-2xl mx-auto">
            We deliver end-to-end digital solutions tailored to your business needs, 
            from concept to deployment and beyond.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
