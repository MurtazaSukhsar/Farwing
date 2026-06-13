import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [sectionRef, isInView] = useInView();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/farwingsolutions@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `✨ Farwings Solutions: New Lead from ${formData.name}`,
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Connection error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 4000);
    }
  };

  const inputClasses = (field) => `
    w-full px-5 py-4 bg-farwing-dark/50 border rounded-xl text-white placeholder-farwing-muted/50 
    focus:outline-none transition-all duration-300 resize-none
    ${focusedField === field 
      ? 'border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
      : 'border-farwing-border hover:border-white/30'
    }
  `;

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-dense opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={sectionRef} className="section-padding max-w-6xl mx-auto relative z-10">
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
            <span className="w-2 h-2 bg-gray-400 rounded-full" />
            <span className="text-sm text-farwing-muted">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Let's Build </span>
            <span className="gradient-text">Together</span>
          </h2>

          <p className="text-farwing-muted text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message 
            and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 group hover:border-white/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail size={20} className="text-gray-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=farwingsolutions@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-farwing-muted hover:text-white transition-colors text-sm"
                  >
                    farwingsolutions@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 group hover:border-white/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone size={20} className="text-gray-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <a href="tel:8866823010" className="text-farwing-muted hover:text-white transition-colors text-sm block">
                    8866823010
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 group hover:border-white/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MapPin size={20} className="text-gray-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-farwing-muted text-sm">Remote Worldwide</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="glass-card p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5" />
              <div className="relative z-10">
                <h4 className="text-white font-semibold mb-2">Response Time</h4>
                <p className="text-farwing-muted text-sm mb-4">
                  We typically respond within 24 hours during business days.
                </p>
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Currently accepting new projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-white/0 via-white/5 to-gray-500/0 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-farwing-muted mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    className={inputClasses('name')}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-farwing-muted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@example.com"
                    className={inputClasses('email')}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-farwing-muted mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={inputClasses('message')}
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-gray-700 to-gray-800 border border-white/10 text-white font-semibold rounded-xl flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} className="text-green-300" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
