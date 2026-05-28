import Link from 'next/link';

export const metadata = {
  title: 'UI/UX Design Services | Far Wings Tech Solutions',
  description: 'Premium, conversion-optimized interfaces that deliver Apple-level aesthetics.',
};

export default function UIUXDesignService() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="text-cyan-500 hover:underline mb-8 inline-block font-medium tracking-wide">← Back to Services</Link>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">UI/UX Design</h1>
        <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
          We believe design is more than just visuals—it's how your business communicates trust. We craft premium, immersive digital experiences optimized to turn visitors into loyal customers.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 border border-neutral-800 rounded-3xl bg-neutral-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-heading">Premium Aesthetics</h3>
            <p className="text-neutral-400">Modern, minimalist, and striking interfaces designed to establish instant authority and E-E-A-T.</p>
          </div>
          <div className="p-8 border border-neutral-800 rounded-3xl bg-neutral-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-heading">Conversion-Focused</h3>
            <p className="text-neutral-400">Strategic user journeys, clear calls-to-action, and friction-free navigation to maximize ROI.</p>
          </div>
        </div>
        
        <Link href="/contact" className="inline-block py-4 px-8 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors">
          Redesign Your Brand
        </Link>
      </div>
    </main>
  );
}
