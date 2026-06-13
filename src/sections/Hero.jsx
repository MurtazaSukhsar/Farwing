import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';



export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <motion.div 
        className="relative z-10 section-padding w-full max-w-7xl mx-auto"
        style={{ y, opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-farwing-muted">Available for new projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
            >
              <span className="text-white">Custom Web Development &</span>
              <br />
              <span className="gradient-text">AI Automation Services</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-farwing-muted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Partner with a top-rated custom software development and AI automation agency in India. We build scalable SaaS platforms, Next.js web apps, and mobile apps.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('#services')}
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 border border-white/10 text-white font-semibold rounded-full overflow-hidden flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore Services</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-white/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="group px-8 py-4 border border-farwing-border text-white font-semibold rounded-full hover:border-white/50 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={18} className="text-gray-300" />
                <span>View Projects</span>
              </motion.button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '15+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-farwing-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - 3D Visual */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Central Logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                y: [-20, 20, -20],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ 
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              <div className="relative w-72 h-72 flex items-center justify-center">
                {/* Glow Background */}
                <div className="absolute inset-4 bg-white/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
                <div className="absolute -inset-2 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                
                <motion.img 
                  src="/farwinglogo_transparent.png" 
                  alt="Farwings Logo" 
                  className="w-64 h-64 object-contain relative z-10 drop-shadow-[0_0_45px_rgba(255,255,255,0.2)]"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                />
              </div>
            </motion.div>




            {/* Orbiting Elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full blur-sm" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full blur-sm" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-farwing-border rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
