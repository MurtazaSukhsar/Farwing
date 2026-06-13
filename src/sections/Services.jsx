import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      <div className="glass-card-hover p-10 h-full relative overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

        {/* Glow Effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-gray-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon size={32} className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-farwing-muted text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Learn More */}
          <div className="mt-auto">
            <Link to={service.link} className="inline-flex items-center gap-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
              <span>Learn more</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services({ isPreview = false }) {
  const [sectionRef, isInView] = useInView();

  const displayServices = isPreview ? SERVICES.slice(0, 3) : SERVICES;

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-500/3 rounded-full blur-[80px] pointer-events-none" />

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
            <span className="w-2 h-2 bg-gray-400 rounded-full" />
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
          {displayServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-16">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
