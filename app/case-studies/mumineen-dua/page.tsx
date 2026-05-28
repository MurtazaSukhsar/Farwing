import Link from 'next/link';

export const metadata = {
  title: 'Mumineen Dua App | Case Study',
  description: 'How we built a comprehensive religious application serving over 10,000 active users.',
};

export default function MumineenDuaCaseStudy() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <Link href="/case-studies" className="text-cyan-500 hover:underline mb-8 inline-block">← Back to Case Studies</Link>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Mumineen Dua App</h1>
        <p className="text-xl text-neutral-400 mb-12">A comprehensive religious application featuring daily prayers, dua collections, and community features.</p>
        
        <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20 mb-12">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-neutral-400">We engineered a highly resilient cross-platform mobile application utilizing Flutter and Node.js to ensure reliable offline-first access to daily religious content.</p>
        </div>

        <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20">
          <h2 className="text-2xl font-bold mb-4">Tech Stack & Results</h2>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Successfully serving 10,000+ active users</li>
            <li>Built with Flutter, Firebase, and Node.js</li>
            <li>Offline caching and real-time syncing</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
