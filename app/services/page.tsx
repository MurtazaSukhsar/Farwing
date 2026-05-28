import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Far Wings Tech Solutions',
  description: 'Explore our modern web development, AI automation, UI/UX design, and SEO optimization services.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="text-cyan-500 hover:underline mb-8 inline-block font-medium tracking-wide">← Back to Home</Link>
        <h1 className="font-heading text-5xl font-bold mb-8">Our Core Expertise</h1>
        <p className="text-xl text-neutral-400 mb-16 max-w-3xl">We deliver premium digital solutions engineered to scale and optimize your operations.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 border border-neutral-800 rounded-3xl bg-neutral-900/20 group hover:border-neutral-600 transition-all duration-300">
            <h2 className="text-2xl font-bold font-heading mb-4">Web Development</h2>
            <p className="text-neutral-400 mb-6">High-performance React & Next.js applications built for scale and speed.</p>
            <Link href="/services/web-development" className="text-cyan-500 hover:text-cyan-400 font-medium group-hover:underline">Learn more →</Link>
          </div>
          <div className="p-10 border border-neutral-800 rounded-3xl bg-neutral-900/20 group hover:border-neutral-600 transition-all duration-300">
            <h2 className="text-2xl font-bold font-heading mb-4">AI Automation</h2>
            <p className="text-neutral-400 mb-6">Custom AI workflows and intelligent chatbots to streamline your business.</p>
            <Link href="/services/ai-automation" className="text-cyan-500 hover:text-cyan-400 font-medium group-hover:underline">Learn more →</Link>
          </div>
          <div className="p-10 border border-neutral-800 rounded-3xl bg-neutral-900/20 group hover:border-neutral-600 transition-all duration-300">
            <h2 className="text-2xl font-bold font-heading mb-4">UI/UX Design</h2>
            <p className="text-neutral-400 mb-6">Premium, conversion-optimized interfaces that deliver Apple-level aesthetics.</p>
            <Link href="/services/ui-ux-design" className="text-cyan-500 hover:text-cyan-400 font-medium group-hover:underline">Learn more →</Link>
          </div>
          <div className="p-10 border border-neutral-800 rounded-3xl bg-neutral-900/20 group hover:border-neutral-600 transition-all duration-300">
            <h2 className="text-2xl font-bold font-heading mb-4">SEO Optimization</h2>
            <p className="text-neutral-400 mb-6">Data-driven technical SEO to ensure your business dominates local search results.</p>
            <Link href="/services/seo-optimization" className="text-cyan-500 hover:text-cyan-400 font-medium group-hover:underline">Learn more →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
