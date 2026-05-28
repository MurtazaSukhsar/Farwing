import Link from 'next/link';

export const metadata = {
  title: 'Web Development Services | Far Wings Tech Solutions',
  description: 'High-performance React & Next.js applications built for scale and speed.',
};

export default function WebDevelopmentService() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="text-cyan-500 hover:underline mb-8 inline-block font-medium tracking-wide">← Back to Services</Link>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Web Development</h1>
        <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
          We build high-performance, SEO-optimized web applications using modern frameworks like React and Next.js. Our architectures are designed to scale, load instantly, and deliver a premium user experience across all devices.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 border border-neutral-800 rounded-3xl bg-neutral-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-heading">Next.js Architecture</h3>
            <p className="text-neutral-400">Server-side rendering (SSR) and static site generation (SSG) for unmatched speed and flawless Core Web Vitals.</p>
          </div>
          <div className="p-8 border border-neutral-800 rounded-3xl bg-neutral-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-heading">Seamless Integrations</h3>
            <p className="text-neutral-400">Connect your platform with powerful backend services, databases, Stripe payments, and third-party APIs.</p>
          </div>
        </div>
        
        <Link href="/contact" className="inline-block py-4 px-8 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors">
          Start Your Project
        </Link>
      </div>
    </main>
  );
}
