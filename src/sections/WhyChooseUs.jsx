import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../constants';
import { useInView } from '../hooks/useInView';
import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const [sectionRef, isInView] = useInView();

  return (
    <section id="why-choose-us" className="relative py-32 overflow-hidden">
      <div ref={sectionRef} className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-sm text-farwing-muted">The Far Wings Advantage</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-white">Why Partner </span>
              <br />
              <span className="gradient-text">With Us?</span>
            </h2>
            <p className="text-farwing-muted text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              We are not just a web development company in Gujarat. We are a specialized technology engineering team focused on creating scalable, AI-ready platforms that deliver measurable business growth.
            </p>
          </motion.div>

          <div className="space-y-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 flex gap-4 items-start group hover:bg-white/5 transition-colors"
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle className="text-emerald-400 w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-farwing-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
