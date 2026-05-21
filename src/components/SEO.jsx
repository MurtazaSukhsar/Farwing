import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogImage }) => {
  const siteUrl = 'https://farwingstechsolutions.vercel.app';
  const defaultOgImage = `${siteUrl}/og-image.jpg`; // assuming an og-image exists or will be added

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />

      {/* Canonical */}
      <link rel="canonical" href={siteUrl} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Far Wings Tech Solutions",
          "image": defaultOgImage,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gujarat",
            "addressCountry": "IN"
          },
          "url": siteUrl,
          "telephone": "+91-0000000000",
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
