import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { useBloggerPosts } from '../../hooks/useBloggerPosts';

export default function BlogArchive() {
  const { posts, loading, error } = useBloggerPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Startup & SaaS Development Blog | Far Wings Tech Solutions"
        description="Actionable strategies, architecture deep dives, and scaling advice for startups and enterprises from top Next.js and React engineers."
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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-10">
            Failed to load blog posts. Please try again later.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-10">
                No blog posts found.
              </div>
            ) : (
              posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block glass-card p-8 h-full hover:bg-gray-800/50 transition-colors">
                    <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                    <p className="text-xs text-gray-500 mb-4">{post.published}</p>
                    <p className="text-farwing-muted mb-6 leading-relaxed">{post.excerpt}</p>
                    <span className="text-blue-400 font-medium inline-flex items-center gap-2">
                      Read More →
                    </span>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
