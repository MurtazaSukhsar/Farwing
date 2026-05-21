import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';

export const BLOG_POSTS = [
  { slug: 'modern-websites-2026', title: 'Modern Websites in 2026', excerpt: 'Discover the latest trends in UI/UX and web performance for the AI era.' },
  { slug: 'ai-automation-businesses', title: 'AI Automation for Businesses', excerpt: 'How to scale your operations using intelligent workflows and custom LLMs.' },
  { slug: 'seo-growing-businesses', title: 'SEO for Growing Businesses', excerpt: 'The ultimate guide to technical SEO and dominating local search in Gujarat.' },
  { slug: 'ui-ux-trends', title: 'UI/UX Trends', excerpt: 'Conversion-focused design strategies to captivate your audience.' },
  { slug: 'website-performance-optimization', title: 'Website Performance Optimization', excerpt: 'Why sub-second load times are critical for user retention and SEO.' },
  { slug: 'ai-search-optimization', title: 'AI Search Optimization', excerpt: 'Preparing your content for Perplexity, ChatGPT, and Google AI Overviews.' }
];

export default function BlogArchive() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Insights & Blog | Far Wings Tech Solutions"
        description="Latest insights on modern web development, AI automation, and technical SEO strategies from Gujarat's top tech agency."
      />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute left-0 top-0 hidden md:block">
            <Link to="/" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center transition-colors">
              ← Back to Home
            </Link>
          </div>
          <div className="md:hidden text-left mb-6">
            <Link to="/" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center transition-colors">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6 text-white">
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-farwing-muted max-w-3xl mx-auto">
            Actionable strategies on engineering, AI, and digital growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block glass-card p-8 h-full hover:bg-gray-800/50 transition-colors">
                <h2 className="text-2xl font-bold text-white mb-4">{post.title}</h2>
                <p className="text-farwing-muted mb-6 leading-relaxed">{post.excerpt}</p>
                <span className="text-blue-400 font-medium inline-flex items-center gap-2">
                  Read More →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
