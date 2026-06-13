import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-farwing-dark/80 backdrop-blur-xl border-b border-farwing-border'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 group"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 group">
                <div className="relative w-14 h-14">
                  <img src="/farwinglogo_transparent.png" alt="Farwings Logo" className="w-full h-full object-contain select-none pointer-events-none" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-white font-bold text-2xl font-display tracking-tight">
                    FARWINGS
                  </span>
                  <span className="text-farwing-muted text-sm block -mt-1 tracking-wider">
                    TECH SOLUTIONS
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-farwing-muted hover:text-white transition-colors block"
                  >
                    {link.name}
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white"
                      whileHover={{ width: '60%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white text-sm font-semibold rounded-full overflow-hidden group block"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-farwing-dark/95 backdrop-blur-xl" />
            <div className="relative flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-semibold text-white hover:text-gray-300 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-full block"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
