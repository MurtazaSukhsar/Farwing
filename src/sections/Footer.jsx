import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { Link } from 'react-router-dom';

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      aria-label="Farwings Tech Solutions footer"
    >
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-farwing-darker to-transparent pointer-events-none" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <Link to="/" className="flex items-center gap-4" aria-label="Farwings Tech Solutions home">
                <div className="relative w-14 h-14">
                  <img
                    src="/farwinglogo_transparent.png"
                    alt="Farwings Tech Solutions - App and Web Development Company"
                    className="w-full h-full object-contain select-none pointer-events-none"
                  />
                </div>
                <div>
                  <span className="text-white font-bold text-2xl font-display tracking-tight">
                    FARWINGS
                  </span>
                  <span className="text-farwing-muted text-sm block -mt-1 tracking-wider">
                    TECH SOLUTIONS
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-farwing-muted text-sm leading-relaxed max-w-md mb-6"
            >
              Farwings Tech Solutions is an app development and web development company in India.
              We build custom mobile apps, web apps, SaaS platforms, and AI-powered digital products
              for startups and businesses worldwide.
            </motion.p>

            {/* Service keyword links — SEO-friendly internal links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap gap-2"
            >
              {[
                { label: 'App Development', href: '/services/mobile-app-development-company' },
                { label: 'Web Development', href: '/services/custom-web-development-company' },
                { label: 'SaaS Development', href: '/services/saas-development-company' },
                { label: 'AI Automation', href: '/services/ai-automation-services' },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-xs px-3 py-1 rounded-full border border-white/10 text-farwing-muted hover:text-white hover:border-white/30 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            aria-label="Footer navigation"
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-farwing-muted hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=farwingsolutions@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email Farwings Tech Solutions"
                  className="text-farwing-muted hover:text-white transition-colors text-sm"
                >
                  farwingsolutions@gmail.com
                </a>
              </li>
              <li className="text-farwing-muted text-sm">
                Gujarat, India
              </li>
              <li className="text-farwing-muted text-sm">
                Serving clients worldwide
              </li>
              <li className="text-farwing-muted text-sm">
                Available for new projects
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-farwing-border to-transparent" />

          <div className="relative flex flex-col sm:flex-row items-center justify-center min-h-[40px]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-farwing-muted text-sm text-center font-medium tracking-wide"
            >
              © 2026 Farwings Tech Solutions — App Development & Web Development Company, India.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll back to top"
              className="sm:absolute sm:right-0 mt-4 sm:mt-0 w-10 h-10 rounded-full glass-card flex items-center justify-center text-farwing-muted hover:text-white hover:border-white/30 transition-colors"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
