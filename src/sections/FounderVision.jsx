import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function FounderVision() {
  const [sectionRef, isInView] = useInView();

  return (
    <section id="founder-vision" className="py-32 px-6 max-w-6xl mx-auto">
      <div ref={sectionRef} className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Building Future-Ready Digital Experiences</h2>
          <p className="text-farwing-muted mb-6 leading-relaxed text-lg">
            Far Wings Tech Solutions helps businesses transform ideas into modern digital products. As a premier <strong className="text-white font-medium">web development company in Gujarat</strong>, we combine aesthetic premium design with highly optimized, AI-powered scalable architecture.
          </p>
          <ul className="space-y-4 text-gray-300 mt-8">
            <li className="flex items-center gap-3">
              <span className="text-gray-500 text-xl">✓</span> Fast Performance Optimization
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-500 text-xl">✓</span> Mobile-First Experience
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-500 text-xl">✓</span> SEO-Focused Development
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-10 glass-card rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-6 font-display text-white">The Founder's Vision</h3>
          <p className="text-base text-gray-400 italic mb-4 leading-relaxed">
            "Far Wings Tech Solutions was built with a vision to create more than just websites. We wanted to build modern digital systems that help businesses grow smarter, move faster, and compete confidently in the modern AI-driven world.
          </p>
          <p className="text-base text-gray-400 italic mb-4 leading-relaxed">
            We noticed too many businesses stuck between two extremes — visually impressive platforms with weak performance and poor scalability, or technically functional systems with outdated user experiences.
          </p>
          <p className="text-base text-gray-400 italic mb-4 leading-relaxed">
            Our mission is to bridge that gap by combining premium design, modern development, AI automation, scalable architecture, and SEO-focused engineering into one seamless digital experience.
          </p>
          <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-6">
            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-xl font-display text-gray-400">FW</div>
            <div>
              <p className="font-bold text-lg text-white">Leadership Team</p>
              <p className="text-sm text-gray-500">Far Wings Tech Solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
