import Link from 'next/link';

export const metadata = {
  title: 'Blog & Insights | Far Wings Tech Solutions',
  description: 'Insights on modern web development, AI automation, and SEO strategies for growing businesses.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-heading text-5xl font-bold mb-8">Insights & Strategies</h1>
        <p className="text-xl text-neutral-400 mb-16 max-w-3xl">Deep dives into modern web development, AI automation, and the technical SEO strategies driving top-tier businesses today.</p>
        
        <div className="grid gap-8">
           <article className="p-10 rounded-3xl border border-neutral-800 bg-neutral-900/20">
              <span className="text-sm text-cyan-500 font-medium mb-2 block">Web Development • May 2026</span>
              <h2 className="text-3xl font-bold font-heading mb-4">Why Modern Websites Matter in 2026</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">A breakdown of how Next.js, Server-Side Rendering, and AI search optimization are changing the game.</p>
              <Link href="/blog/why-modern-websites-matter" className="text-white font-medium hover:underline">Read article →</Link>
            </article>
        </div>
      </div>
    </main>
  );
}
