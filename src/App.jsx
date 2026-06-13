import { useState, useEffect, StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Footer from './sections/Footer';
import Home from './pages/Home';
import ServicePage from './pages/services/ServicePage';
import BlogArchive from './pages/blog/BlogArchive';
import BlogPost from './pages/blog/BlogPost';
import ServicesIndex from './pages/ServicesIndex';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';
import TechStackPage from './pages/TechStackPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    requestAnimationFrame(() => {
      setShowContent(true);
    });
  };

  return (
    <StrictMode>
      <HelmetProvider>
        <div className="relative min-h-screen bg-farwing-dark text-farwing-text overflow-x-hidden selection:bg-white/20">
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
              <Outlet />
            </main>

            <Footer />
          </motion.div>
        </div>
      </HelmetProvider>
    </StrictMode>
  );
}

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <ServicesIndex /> },
      { path: 'services/:slug', element: <ServicePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'tech-stack', element: <TechStackPage /> },
      { path: 'testimonials', element: <TestimonialsPage /> },
      { path: 'blog', element: <BlogArchive /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'contact', element: <ContactPage /> },
    ]
  }
];

export default App;
