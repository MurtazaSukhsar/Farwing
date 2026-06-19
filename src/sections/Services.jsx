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

// SEO-rich service descriptions — override constants data at render time
const SEO_OVERRIDES = {
  // Match by service.id or service.title — adjust keys to match your SERVICES constant
  'web-development': {
    seoTitle: 'Web Development',
    seoDescription:
      'Custom web development using React, Next.js, and Node.js. We build fast, scalable web apps and websites optimised for SEO and performance.',
  },
  'app-development': {
    seoTitle: 'App Development',
    seoDescription:
      'End-to-end mobile app development for iOS and Android. We design and build apps that users love, from MVP to full-scale product.',
  },
  'saas-development': {
    seoTitle: 'SaaS Platform Development',
    seoDescription:
      'We build multi-tenant SaaS platforms with subscription billing, user management, and scalable cloud infrastructure.',
  },
  'ai-automation': {
    seoTitle: 'AI Automation Services',
    seoDescription:
      'Automate repetitive business workflows using AI agents, n8n, and custom LLM integrations. Save time and scale faster.',
  },
  'cloud-solutions': {
    seoTitle: 'Cloud & DevOps Solutions',
    seoDescription:
      'Scalable cloud infrastructure on AWS, GCP, and Vercel. CI/CD pipelines, Docker, and managed deployments for your product.',
  },
  'enterprise-software': {
    seoTitle: 'Enterprise Software Development',
    seoDescription:
      'Custom enterprise software development for large organisations. Secure, scalable, and integrated with your existing systems.',
  },
};

function ServiceCard({ service, index }) {
  const [ref, isInView] = useInView();
  const Icon = iconMap[service.icon];

  // Apply SEO overrides if available, else fall back to constants data
  const override = SEO_OVERRIDES[service.id] || {};
  const displayTitle = override.seoTitle || service.title;
  const displayDescription = override.seoDescription || service.description;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      aria-label={`${displayTitle} service by Farwings Tech Solutions`}
    >
      <div className="glass-card-hover p-10 h-full relative overflow-hidden">
        {/* Gradient Background on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Glow Effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-gray-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          >
            <Icon
              size={32}
              className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300"
            />
          </motion.div>

          {/* SEO H3 — keyword-rich service title */}
          <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
            {displayTitle}
          </h3>

          {/* SEO Description */}
          <p className="text-farwing-muted text-sm leading-relaxed mb-6">
            {displayDescription}
          </p>

          {/* Learn More */}
          <div className="mt-auto">
            <Link
              to={service.link}
              aria-label={`Learn more about our ${displayTitle} services`}
              className="inline-flex items-center gap-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium"
            >
              <span>Learn more</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services({ isPreview = false }) {
  const [sectionRef, isInView] = useInView();

  const displayServices = isPreview ? SERVICES.slice(0, 3) : SERVICES;

  return (
    <section
      id="services"
      aria-label="App Development and Web Development Services by Farwings Tech Solutions"
      className="relative py-40 overflow-hidden"
    >
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
            <span className="w-2 h-2 bg-gray-400 rounded-full" aria-hidden="true" />
            <span className="text-sm text-farwing-muted">What We Do</span>
          </motion.div>

          {/* SEO H2 — section-level keyword */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">App &amp; Web </span>
            <span className="gradient-text">Development Services</span>
          </h2>

          <p className="text-farwing-muted text-lg max-w-2xl mx-auto">
            Farwings Tech Solutions delivers end-to-end app development and web development
            services — from custom mobile apps and web apps to AI automation and SaaS platforms,
            built for startups and enterprises.
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
            <Link
              to="/services"
              aria-label="View all app and web development services"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
