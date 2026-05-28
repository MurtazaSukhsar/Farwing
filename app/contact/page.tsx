import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Far Wings Tech Solutions',
  description: 'Get in touch with Far Wings Tech Solutions. We are currently accepting new projects for web development and AI automation.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black -z-10"></div>
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-cyan-500 hover:underline mb-8 inline-block font-medium tracking-wide">← Back to Home</Link>
        
        <div className="text-center mb-20">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Let's Build Together</h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20 backdrop-blur-sm hover:border-neutral-700 transition-colors">
              <h2 className="text-xl font-bold mb-3 font-heading uppercase tracking-widest text-neutral-500">Email Us</h2>
              <a href="mailto:farwingsolutions@gmail.com" className="text-white hover:text-cyan-400 transition-colors text-2xl font-medium">
                farwingsolutions@gmail.com
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20 backdrop-blur-sm hover:border-neutral-700 transition-colors">
              <h2 className="text-xl font-bold mb-3 font-heading uppercase tracking-widest text-neutral-500">Call Us</h2>
              <a href="tel:+918866823010" className="text-white hover:text-cyan-400 transition-colors text-2xl font-medium">
                +91 88668 23010
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20 backdrop-blur-sm hover:border-neutral-700 transition-colors">
              <h2 className="text-xl font-bold mb-3 font-heading uppercase tracking-widest text-neutral-500">Location</h2>
              <p className="text-white text-2xl font-medium">Remote Worldwide</p>
            </div>
            
            <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20 backdrop-blur-sm relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-white font-semibold text-xl mb-3 font-heading">Response Time</h4>
                <p className="text-neutral-400 mb-6 leading-relaxed">We typically respond within 24 hours during business days.</p>
                <div className="flex items-center gap-3 text-green-400">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                  <span className="font-medium tracking-wide">Currently accepting new projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 rounded-3xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-md">
            <form action="https://formsubmit.co/farwingsolutions@gmail.com" method="POST" className="space-y-8">
              {/* Optional FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Project Inquiry - Far Wings Tech Solutions" />
              <input type="hidden" name="_next" value="http://localhost:3000/contact?submitted=true" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-3 tracking-wide">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-4 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-3 tracking-wide">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-4 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-3 tracking-wide">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  className="w-full px-5 py-4 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-neutral-200 transition-transform active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
