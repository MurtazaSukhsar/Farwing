import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Navigation / Logo */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center max-w-7xl mx-auto right-0">
        <Link href="/">
          <Image 
            src="/farwinglogo_transparent.png" 
            alt="Far Wings Tech Solutions Logo" 
            width={200} 
            height={60} 
            className="w-auto h-10 md:h-14 opacity-90 hover:opacity-100 transition-opacity brightness-0 invert"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-300">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black -z-10"></div>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
          Modern Web Development & AI Automation Solutions
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
          We build fast, scalable, AI-powered digital experiences that help businesses grow, automate, and stand out in the modern world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors">
            Start Your Project
          </Link>
          <Link href="/services" className="px-8 py-4 border border-neutral-700 text-white font-medium rounded-full hover:bg-neutral-900 transition-colors">
            View Our Services
          </Link>
        </div>
        <p className="mt-12 text-sm text-neutral-500 uppercase tracking-widest">
          Trusted modern solutions for startups, brands, and growing businesses.
        </p>
      </section>



      {/* About & Founder Vision (EEAT) */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Building Future-Ready Digital Experiences</h2>
            <p className="text-neutral-400 mb-6 leading-relaxed text-lg">
              Far Wings Tech Solutions helps businesses transform ideas into modern digital products. As a premier <strong className="text-white font-medium">web development company in Gujarat</strong>, we combine aesthetic premium design with highly optimized, AI-powered scalable architecture.
            </p>
            <ul className="space-y-4 text-neutral-300 mt-8">
              <li className="flex items-center gap-3">
                <span className="text-neutral-500 text-xl">✓</span> Fast Performance Optimization
              </li>
              <li className="flex items-center gap-3">
                <span className="text-neutral-500 text-xl">✓</span> Mobile-First Experience
              </li>
              <li className="flex items-center gap-3">
                <span className="text-neutral-500 text-xl">✓</span> SEO-Focused Development
              </li>
            </ul>
          </div>
          <div className="p-10 border border-neutral-800 rounded-3xl bg-neutral-900/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 font-heading">The Founder's Vision</h3>
            <p className="text-base text-neutral-400 italic mb-4 leading-relaxed">
              "Far Wings Tech Solutions was built with a vision to create more than just websites. We wanted to build modern digital systems that help businesses grow smarter, move faster, and compete confidently in the modern AI-driven world.
            </p>
            <p className="text-base text-neutral-400 italic mb-4 leading-relaxed">
              We noticed too many businesses stuck between two extremes — visually impressive platforms with weak performance and poor scalability, or technically functional systems with outdated user experiences.
            </p>
            <p className="text-base text-neutral-400 italic mb-4 leading-relaxed">
              Our mission is to bridge that gap by combining premium design, modern development, AI automation, scalable architecture, and SEO-focused engineering into one seamless digital experience.
            </p>
            <p className="text-base text-neutral-400 italic mb-4 leading-relaxed">
              From high-performance websites and intelligent automation systems to custom software, branding, and scalable digital platforms, every solution we create is designed for performance, usability, growth, and long-term impact.
            </p>
            <p className="text-base text-neutral-400 italic mb-8 leading-relaxed">
              We believe technology should not only look modern — it should solve real business problems, improve efficiency, and create meaningful user experiences."
            </p>
            <div className="flex items-center gap-4 border-t border-neutral-800 pt-6">
              <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center text-xl font-heading text-neutral-600">FW</div>
              <div>
                <p className="font-bold text-lg">Leadership Team</p>
                <p className="text-sm text-neutral-500">Far Wings Tech Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Case Studies (EEAT) */}
      <section className="py-32 px-6 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Proven Results & Metrics</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Real numbers and hard metrics from our latest deployments.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/case-studies/mumineen-dua" className="group block p-10 rounded-3xl border border-neutral-800 bg-black hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-3xl font-bold font-heading mb-3">Mumineen Dua App</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">A comprehensive religious application featuring daily prayers, dua collections, and community features.</p>
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="px-4 py-2 text-xs font-medium tracking-wide rounded-full bg-neutral-900 text-neutral-300">Flutter</span>
                <span className="px-4 py-2 text-xs font-medium tracking-wide rounded-full bg-neutral-900 text-neutral-300">Firebase</span>
                <span className="px-4 py-2 text-xs font-medium tracking-wide rounded-full bg-neutral-900 text-neutral-300">Node.js</span>
              </div>
              <div className="pt-8 border-t border-neutral-800">
                <p className="font-bold text-white mb-2 uppercase text-sm tracking-widest">Business Impact</p>
                <p className="text-lg text-neutral-300">Successfully serving <strong className="text-white">10,000+</strong> active users.</p>
              </div>
            </Link>
            
            <Link href="/case-studies/travel-mart" className="group block p-10 rounded-3xl border border-neutral-800 bg-black hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-3xl font-bold font-heading mb-3">The Travel Mart Website</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">A premium travel booking platform engineered with real-time availability and seamless payment integration.</p>
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="px-4 py-2 text-xs font-medium tracking-wide rounded-full bg-neutral-900 text-neutral-300">React</span>
                <span className="px-4 py-2 text-xs font-medium tracking-wide rounded-full bg-neutral-900 text-neutral-300">Next.js</span>
                <span className="px-4 py-2 text-xs font-medium tracking-wide rounded-full bg-neutral-900 text-neutral-300">Stripe API</span>
              </div>
              <div className="pt-8 border-t border-neutral-800">
                <p className="font-bold text-white mb-2 uppercase text-sm tracking-widest">Business Impact</p>
                <p className="text-lg text-neutral-300">Exceeded client expectations with a <strong className="text-white">high-performance</strong> booking engine.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Core Expertise</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Comprehensive digital solutions engineered for growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Web Development", desc: "High-performance, SEO-optimized React & Next.js applications built for scale." },
            { title: "AI Automation", desc: "Custom AI workflows and chatbots to scale your operations effortlessly." },
            { title: "UI/UX Design", desc: "Premium, conversion-focused design systems that wow your users." },
            { title: "SEO Optimization", desc: "Technical SEO and AIO (AI Search) to dominate Google and Perplexity." },
            { title: "Custom Software", desc: "Scalable backend solutions, APIs, and internal company dashboards." }
          ].map((service, i) => (
            <Link href="/services" key={i} className="p-10 rounded-3xl border border-neutral-800 bg-neutral-900/10 hover:bg-neutral-900/40 transition-colors">
              <h3 className="text-2xl font-bold mb-4 font-heading">{service.title}</h3>
              <p className="text-base text-neutral-400 leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center border-t border-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black -z-10"></div>
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8">Ready to Build Something Modern?</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-12 text-lg">
          Let’s create fast, scalable, and future-ready digital solutions for your business. Partner with the premier <strong className="text-white">AI automation and software company in Gujarat</strong>.
        </p>
        <Link href="/contact" className="px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors inline-block text-lg">
          Start Your Project Today
        </Link>
      </section>
    </main>
  );
}
