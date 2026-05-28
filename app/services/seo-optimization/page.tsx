import Link from 'next/link';

export const metadata = {
  title: 'SEO Optimization | Far Wings Tech Solutions',
  description: 'Data-driven technical SEO to ensure your business dominates local search results.',
};

export default function SEOOptimizationService() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="text-cyan-500 hover:underline mb-8 inline-block font-medium tracking-wide">← Back to Services</Link>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">SEO Optimization</h1>
        <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
          Visibility is the lifeline of digital business. We engineer deep technical SEO and local optimization strategies built specifically for Google's modern algorithm to capture high-intent traffic.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 border border-neutral-800 rounded-3xl bg-neutral-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-heading">Technical SEO</h3>
            <p className="text-neutral-400">Dynamic sitemaps, structured schema data, optimized metadata, and lightning-fast page speeds.</p>
          </div>
          <div className="p-8 border border-neutral-800 rounded-3xl bg-neutral-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-heading">Local Authority (E-E-A-T)</h3>
            <p className="text-neutral-400">Targeted local content and trust signals designed to rank your business at the top of local searches.</p>
          </div>
        </div>
        
        <Link href="/contact" className="inline-block py-4 px-8 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors">
          Boost Your Rankings
        </Link>
      </div>
    </main>
  );
}
