import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, ArrowUp, Heart } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

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

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
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
              <div className="relative w-14 h-14">
                <img src="/farwinglogo_transparent.png" alt="Farwings Logo" className="w-full h-full object-contain select-none pointer-events-none" />
              </div>
              <div>
                <span className="text-white font-bold text-2xl font-display tracking-tight">
                  FARWINGS
                </span>
                <span className="text-farwing-muted text-sm block -mt-1 tracking-wider">
                  TECH SOLUTIONS
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-farwing-muted text-sm leading-relaxed max-w-md mb-6"
            >
              Building high-end digital products, enterprise platforms, mobile apps,
              and scalable systems for modern businesses. Let's create something extraordinary together.
            </motion.p>


          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-farwing-muted hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

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
                  className="text-farwing-muted hover:text-white transition-colors text-sm"
                >
                  farwingsolutions@gmail.com
                </a>
              </li>
              <li className="text-farwing-muted text-sm">
                Remote Worldwide
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
              © 2026 FARWINGS TECH SOLUTIONS.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
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
