import Link from 'next/link';

export const metadata = {
  title: 'Real Case Studies | Far Wings Tech Solutions',
  description: 'View real project metrics, technologies used, and client testimonials from our latest deployments.',
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="text-cyan-500 hover:underline mb-8 inline-block font-medium tracking-wide">← Back to Home</Link>
        <h1 className="font-heading text-5xl font-bold mb-8">Proven Results & Metrics</h1>
        <p className="text-xl text-neutral-400 mb-16 max-w-3xl">Real numbers and hard metrics from our latest deployments across Gujarat and globally.</p>
        
        <div className="grid gap-8">
           <Link href="/case-studies/mumineen-dua" className="group block p-10 rounded-3xl border border-neutral-800 bg-black hover:border-neutral-600 transition-all duration-300">
              <h2 className="text-3xl font-bold font-heading mb-3">Mumineen Dua App</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">A comprehensive religious application featuring daily prayers, dua collections, and community features.</p>
              <div className="pt-6 border-t border-neutral-800 flex justify-between items-center">
                <span className="text-green-400 font-bold">10,000+ Active Users</span>
                <span className="text-cyan-500 font-medium group-hover:underline">Read full case study →</span>
              </div>
            </Link>
            <Link href="/case-studies/travel-mart" className="group block p-10 rounded-3xl border border-neutral-800 bg-black hover:border-neutral-600 transition-all duration-300">
              <h2 className="text-3xl font-bold font-heading mb-3">The Travel Mart Website</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">A premium travel booking platform with real-time availability and seamless payment integration.</p>
              <div className="pt-6 border-t border-neutral-800 flex justify-between items-center">
                <span className="text-green-400 font-bold">High-performance bookings</span>
                <span className="text-cyan-500 font-medium group-hover:underline">Read full case study →</span>
              </div>
            </Link>
            <Link href="/case-studies/society-management" className="group block p-10 rounded-3xl border border-neutral-800 bg-black hover:border-neutral-600 transition-all duration-300">
              <h2 className="text-3xl font-bold font-heading mb-3">Society Management App</h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">All-in-one community management solution with payments, notices, and facility booking.</p>
              <div className="pt-6 border-t border-neutral-800 flex justify-between items-center">
                <span className="text-green-400 font-bold">Seamless Community Ops</span>
                <span className="text-cyan-500 font-medium group-hover:underline">Read full case study →</span>
              </div>
            </Link>
        </div>
      </div>
    </main>
  );
}
