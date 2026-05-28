import Link from 'next/link';

export const metadata = {
  title: 'Society Management App | Case Study',
  description: 'How we built an all-in-one community management solution.',
};

export default function SocietyManagementCaseStudy() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <Link href="/case-studies" className="text-cyan-500 hover:underline mb-8 inline-block">← Back to Case Studies</Link>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Society Management App</h1>
        <p className="text-xl text-neutral-400 mb-12">All-in-one community management solution with payments, notices, and facility booking.</p>
        
        <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20 mb-12">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-neutral-400">Developed a mobile-first platform to seamlessly manage housing societies, handling complex permission structures and real-time ledger accounting.</p>
        </div>

        <div className="p-8 rounded-3xl border border-neutral-800 bg-neutral-900/20">
          <h2 className="text-2xl font-bold mb-4">Tech Stack & Results</h2>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Built with React Native, MongoDB, and Express</li>
            <li>Seamless integration for maintenance payments</li>
            <li>Centralized facility booking and notices</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
