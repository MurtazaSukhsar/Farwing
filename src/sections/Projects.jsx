import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useInView } from '../hooks/useInView';

function ProjectCard({ project, index, onExplore }) {
  const [ref, isInView] = useInView();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative flex cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onExplore}
    >
      <div className="glass-card overflow-hidden w-full flex flex-col relative border border-white/10 bg-[#0e0e16]/80 backdrop-blur-lg rounded-2xl transition-all duration-500 hover:border-white/20">

        {/* Premium Immersive Imagery Container */}
        <div className="relative h-[450px] w-full overflow-hidden flex items-center justify-center border-b border-white/5 px-6 bg-[#050508]">
          {/* Dynamic Ambient Glow Backing */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-40 transition-all duration-700 group-hover:opacity-70 group-hover:scale-125 bg-gradient-to-r ${project.color}`} />
          <div className="absolute inset-0 bg-grid-dense opacity-[0.12] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 via-transparent to-transparent z-0 pointer-events-none" />

          {/* Centered Floating Card with 3D Interaction */}
          <motion.div 
            className="relative w-full h-full flex items-center justify-center z-10 select-none pointer-events-none"
            animate={{ 
              y: isHovered ? -10 : 0,
              scale: isHovered ? 1.03 : 1,
              rotateX: isHovered ? 3 : 0,
              rotateY: isHovered ? (index % 2 === 0 ? 2 : -2) : 0,
            }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            {project.type === 'web' ? (
              /* Render Web Screenshot as beautiful floating desktop panel */
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full max-h-[90%] object-contain rounded-xl border border-white/10 shadow-[0_25px_55px_-12px_rgba(0,0,0,0.85)] group-hover:border-white/20 group-hover:shadow-[0_35px_65px_-15px_rgba(0,0,0,0.95)] transition-all duration-300"
                style={{ imageRendering: 'auto' }}
                loading="lazy"
              />
            ) : project.rawDevice ? (
              /* Render pixel phone graphic directly (Society App, Hardware App) */
              <img 
                src={project.image} 
                alt={project.title}
                className="h-[95%] w-auto object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_35px_55px_rgba(0,0,0,0.9)] transition-shadow duration-300"
                loading="lazy"
              />
            ) : (
              /* Render raw screenshot as elegant frameless floating panel (Mumineen Dua) */
              <div className="relative h-[95%] w-auto aspect-[9/19] overflow-hidden rounded-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] group-hover:border-white/20 group-hover:shadow-[0_35px_65px_-15px_rgba(0,0,0,0.9)] transition-all duration-300 bg-[#08080a]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  style={{ imageRendering: 'auto' }}
                  loading="lazy"
                />
              </div>
            )}
          </motion.div>
        </div>

        {/* Project Card Narrative Section */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Minimalist Project Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[10px] tracking-wider font-medium uppercase bg-white/[0.03] border border-white/10 rounded text-white/70 backdrop-blur-md hover:bg-white/[0.08] hover:text-white transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-farwing-muted text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Premium Action Link */}
          <div className="pt-4 border-t border-white/5 flex items-center text-[11px] font-bold tracking-widest uppercase text-white/40 group-hover:text-white transition-colors duration-500">
            <span className="relative inline-block">
              Explore Details
              <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-blue-400 group-hover:w-full transition-all duration-500" />
            </span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg className="w-4 h-4 ml-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Top accent border glow */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
}


export default function Projects() {
  const [sectionRef, isInView] = useInView();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/3 rounded-full blur-[120px] pointer-events-none" />

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
            <span className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-sm text-farwing-muted">Our Work</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="gradient-text-purple">Projects</span>
          </h2>

          <p className="text-farwing-muted text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses
            transform their digital presence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onExplore={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* High-Fidelity Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Container Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-4xl max-h-[92vh] md:max-h-[85vh] bg-[#0b0b11] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_30px_80px_-20px_rgba(0,0,0,0.95)] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 z-30 backdrop-blur-md shadow-lg"
              >
                <X size={16} strokeWidth={2.5} />
              </button>

              {/* Left Media Pane: Project Image Display */}
              <div className="w-full md:w-1/2 h-[220px] md:h-auto bg-[#050508] border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden flex items-center justify-center py-6 px-6 z-10 shrink-0">
                
                {/* Background ambiance glow */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] opacity-35 bg-gradient-to-r ${selectedProject.color}`} />
                <div className="absolute inset-0 bg-grid-dense opacity-[0.1] pointer-events-none" />
                
                {selectedProject.type === 'web' ? (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full max-h-full object-contain rounded-xl border border-white/10 shadow-2xl"
                    loading="lazy"
                  />
                ) : (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="h-full w-auto object-contain filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)]" 
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Details Pane: Textual Core Deliverables */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col overflow-y-auto min-h-0 select-text">
                
                {/* Title Block */}
                <div className="mb-6">
                  <div className={`w-14 h-1 rounded-full bg-gradient-to-r ${selectedProject.color} mb-5`} />
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-farwing-muted text-sm sm:text-base leading-relaxed font-medium opacity-90">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Deliverable Feature Grid */}
                <div className="flex-grow">
                  <h4 className="text-[11px] font-extrabold tracking-[0.15em] uppercase text-white/40 mb-4 border-b border-white/5 pb-2">
                    Core Deliverables
                  </h4>
                  <ul className="space-y-3.5">
                    {selectedProject.features && selectedProject.features.map((feat, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.06 }}
                        className="flex items-start gap-3 text-[13.5px] text-white/85 tracking-wide"
                      >
                        <CheckCircle size={16} strokeWidth={2.5} className="text-teal-400 shrink-0 mt-0.5 drop-shadow-[0_0_10px_rgba(45,212,191,0.3)]" />
                        <span>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Blueprint Tag Cloud */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-[11px] font-extrabold tracking-[0.15em] uppercase text-white/40 mb-3">
                    Technology Blueprint
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-md text-white/80 hover:text-white transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
