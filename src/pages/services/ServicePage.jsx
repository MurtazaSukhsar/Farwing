import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { serviceData } from '../../constants/services';
import { ArrowRight, CheckCircle, Code, Layers, Zap, Target } from 'lucide-react';

export default function ServicePage() {
  const { slug } = useParams();
  const service = serviceData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center text-white">Service not found.</div>;
  }

  return (
    <>
      <SEO 
        title={`${service.title} | Far Wings Tech Solutions`}
        description={service.metaDescription}
        keywords={`Gujarat, ${service.heroTitle}, agency, services, ${service.technologies.join(', ')}`}
      />
      
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen overflow-hidden">
        
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          {/* Ambient Blur & Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6 text-white relative z-10">
              {service.heroTitle}
            </h1>
            {/* Subtle Gradient Border underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-[1px]" />
          </div>
          
          <p className="text-xl text-farwing-muted max-w-3xl mx-auto mt-10">
            {service.heroDescription}
          </p>
        </motion.div>

        {/* TECH STACK SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2">Technology Stack</h3>
            <p className="text-gray-400">Powered by modern, enterprise-grade frameworks.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/90 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.0)] hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* MINI CASE STUDY SECTION */}
        {service.caseStudy && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="glass-card p-1 relative overflow-hidden rounded-3xl border border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-50" />
              <div className="bg-[#0a0a0f] rounded-[22px] p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div>
                  <h4 className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-2">Featured Result</h4>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.caseStudy.title}</h3>
                  <p className="text-gray-400 max-w-lg">{service.caseStudy.desc}</p>
                </div>
                <div className="text-center md:text-right shrink-0">
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    {service.caseStudy.metric}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PROCESS & USE CASES GRID */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Our Process */}
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="text-cyan-400" />
              Our Methodology
            </h2>
            <div className="space-y-8">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex gap-4 relative">
                  {idx !== service.process.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-[-2rem] w-px bg-white/10" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 font-bold shrink-0 z-10 relative">
                    {idx + 1}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases & Industries */}
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Target className="text-cyan-400" />
              Industries Served
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.useCases.map((useCase, idx) => (
                <div key={idx} className="glass-card p-6 flex items-start gap-3 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-gray-200 font-medium">{useCase}</span>
                </div>
              ))}
            </div>

            {/* Internal Link Injection */}
            {service.internalLink && (
              <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  {service.internalLink.text}
                  <Link to={service.internalLink.href} className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-cyan-400/30 underline-offset-4">
                    {service.internalLink.linkText}
                  </Link>
                  {service.internalLink.postText}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* BENEFITS & FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="glass-card p-8 hover:border-cyan-500/20 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="text-cyan-400" />
              Key Benefits
            </h2>
            <ul className="space-y-5">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-8 bg-gray-900/40">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Code className="text-cyan-400" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {service.faq.map((f, i) => (
                <div key={i}>
                  <h3 className="text-lg font-medium text-white mb-2">{f.q}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HIGH CONVERSION CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 text-center relative overflow-hidden border-cyan-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 relative z-10">
            Ready to transform your business?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 relative z-10">
            Partner with us to build scalable, high-performance solutions engineered for exponential growth. Let's discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link 
              to="/#contact" 
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/#contact" 
              className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all w-full sm:w-auto justify-center flex items-center"
            >
              Book Free Consultation
            </Link>
          </div>
        </motion.div>

      </div>
    </>
  );
}
