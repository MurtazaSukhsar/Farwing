import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../pages/blog/BlogArchive';
import { useInView } from '../hooks/useInView';

export default function BlogPreview() {
  const [sectionRef, isInView] = useInView();
  // Show only first 3 posts
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog-preview" className="relative py-32 overflow-hidden bg-gray-900/30">
      <div ref={sectionRef} className="section-padding max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <span className="w-2 h-2 bg-pink-400 rounded-full" />
            <span className="text-sm text-farwing-muted">Insights & Thinking</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            <span className="text-white">Latest </span>
            <span className="gradient-text">Insights</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block glass-card p-8 h-full hover:bg-gray-800/50 transition-colors group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">{post.title}</h3>
                <p className="text-sm text-farwing-muted leading-relaxed mb-6">{post.excerpt}</p>
                <span className="text-gray-300 font-medium inline-flex items-center gap-2 text-sm group-hover:text-white transition-colors">
                  Read Article →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
