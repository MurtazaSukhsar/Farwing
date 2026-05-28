import Link from 'next/link';

export const metadata = {
  title: 'The Travel Mart | Case Study',
  description: 'How we built a premium travel booking platform with real-time availability and seamless payment integration.',
};

export default function TravelMartCaseStudy() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <Link href="/case-studies" className="text-cyan-500 hover:underline mb-8 inline-block">← Back to Case Studies</Link>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">The Travel Mart</h1>
        <p className="text-xl text-neutral-400 mb-12">A premium travel booking platform engineered with real-time availability and seamless payment integration.</p>
        
        <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20 mb-12">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-neutral-400">We developed a robust booking engine capable of handling high concurrent traffic while maintaining sub-second response times for real-time inventory queries.</p>
        </div>

        <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20">
          <h2 className="text-2xl font-bold mb-4">Tech Stack & Results</h2>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Built with React, Next.js, and Stripe API</li>
            <li>High-performance Server-Side Rendering (SSR)</li>
            <li>Exceeded client expectations with zero-downtime deployment</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
