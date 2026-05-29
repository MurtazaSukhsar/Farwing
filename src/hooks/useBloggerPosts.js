import { useState, useEffect } from 'react';

const BLOG_ID = '4641752792856204932';

// Helper to extract a short excerpt from HTML content
const getExcerpt = (htmlContent) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = htmlContent;
  const text = tmp.textContent || tmp.innerText || "";
  return text.substring(0, 150) + "...";
};

// Helper to generate a slug from the title or use the Blogger post ID
const generateSlug = (title, idString) => {
  if (title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  }
  // Fallback to post ID
  const parts = idString.split('post-');
  return parts.length > 1 ? parts[1] : idString;
};

export function useBloggerPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchPosts = () => {
      setLoading(true);
      const callbackName = 'bloggerCallback_' + Math.round(100000 * Math.random());
      
      window[callbackName] = (data) => {
        if (!isMounted) return;
        
        try {
          const entries = data.feed.entry || [];
          const formattedPosts = entries.map(entry => {
            const title = entry.title.$t;
            const content = entry.content ? entry.content.$t : (entry.summary ? entry.summary.$t : '');
            const excerpt = getExcerpt(content);
            const slug = generateSlug(title, entry.id.$t);
            const published = new Date(entry.published.$t).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return {
              id: entry.id.$t,
              slug,
              title,
              excerpt,
              content,
              published
            };
          });

          setPosts(formattedPosts);
          setError(null);
        } catch (err) {
          console.error("Error parsing Blogger posts:", err);
          setError(err.message);
        } finally {
          setLoading(false);
          delete window[callbackName];
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
        }
      };

      const script = document.createElement('script');
      script.src = `https://www.blogger.com/feeds/${BLOG_ID}/posts/default?alt=json-in-script&callback=${callbackName}`;
      script.onerror = () => {
        if (isMounted) {
          setError('Failed to fetch blog posts');
          setLoading(false);
        }
        delete window[callbackName];
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
      
      document.body.appendChild(script);
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { posts, loading, error };
}
