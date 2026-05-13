import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Stats from './sections/Stats';
import TechStack from './sections/TechStack';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    requestAnimationFrame(() => {
      setShowContent(true);
    });
  };

  return (
    <div className="relative min-h-screen bg-farwing-dark text-farwing-text overflow-x-hidden selection:bg-blue-500/30">
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Cursor Glow Effect - Desktop Only */}
      <CursorGlow />

      {/* 3D Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="relative"
      >
        <Navbar />

        <main className="relative z-10">
          <Hero />
          <Services />
          <Projects />
          <Stats />
          <TechStack />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
