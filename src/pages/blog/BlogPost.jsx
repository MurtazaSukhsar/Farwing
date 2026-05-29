import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { useBloggerPosts } from '../../hooks/useBloggerPosts';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { slug } = useParams();
  const { posts, loading, error } = useBloggerPosts();
  
  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist or failed to load.</p>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-500 mb-8 font-medium">Published on {post.published}</p>

          <div className="glass-card p-10 prose prose-invert prose-lg md:prose-xl max-w-none text-gray-300 blog-content">
            <ReactMarkdown>
              {post.content ? post.content : post.excerpt}
            </ReactMarkdown>
          </div>
        </motion.div>
      </article>
    </>
  );
}
