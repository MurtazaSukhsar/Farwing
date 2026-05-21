import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { BLOG_POSTS } from './BlogArchive';
import { motion } from 'framer-motion';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center text-white">Post not found.</div>;
  }

  return (
    <>
      <SEO 
        title={`${post.title} | Far Wings Tech Solutions Blog`}
        description={post.excerpt}
        keywords={`web development, SEO, AI, ${post.title}`}
      />
      
      <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/blog" className="text-blue-400 hover:text-blue-300 font-medium mb-8 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 text-white leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            {post.excerpt}
          </p>

          <div className="glass-card p-10 prose prose-invert prose-lg max-w-none text-gray-300">
            {/* SEO Optimized Stub Content */}
            <h2 className="text-2xl font-bold text-white mb-4">Introduction to {post.title}</h2>
            <p className="mb-6">
              In the rapidly evolving digital landscape, understanding the nuances of <strong>{post.title}</strong> is essential for businesses seeking sustainable growth and competitive advantage. At Far Wings Tech Solutions in Gujarat, we prioritize these strategies in our core engineering workflows.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Key Strategies & Implementations</h2>
            <p className="mb-6">
              Deploying a robust architecture is only the first step. To truly harness the power of AI automation and modern web performance, a strategic approach must be taken toward both UI/UX rendering and technical SEO compliance.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Semantic HTML and strict hierarchy for optimal crawler parsing.</li>
              <li>Edge caching and SSR/SSG combinations to minimize time-to-first-byte (TTFB).</li>
              <li>Entity relationship mapping and comprehensive JSON-LD schema injections.</li>
            </ul>
            <p>
              By aligning these technical implementations with high-conversion aesthetic design, your digital platform transforms from a simple brochure into a scalable business asset.
            </p>
          </div>
        </motion.div>
      </article>
    </>
  );
}
