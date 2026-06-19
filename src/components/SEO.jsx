import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, ogImage, schema }) => {
  const location = useLocation();
  const siteUrl = 'https://farwingstechsolutions.vercel.app';
  const currentUrl = `${siteUrl}${location.pathname}`;
  const defaultOgImage = `${siteUrl}/farwinglogo_transparent.png`;

  // ProfessionalService is more accurate than LocalBusiness for a software agency
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Farwings Tech Solutions",
    "image": defaultOgImage,
    "@id": siteUrl,
    "url": siteUrl,
    "email": "farwingsolutions@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "description": "Farwings Tech Solutions is an app development and web development company in India specialising in custom mobile apps, web apps, SaaS platforms, and AI automation.",
    "knowsAbout": [
      "App Development",
      "Web Development",
      "Mobile App Development",
      "SaaS Development",
      "AI Automation",
      "Custom Software Development"
    ],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "App & Web Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Platform Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } }
      ]
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content="Farwings Tech Solutions" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />

      {/* Default JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>

      {/* Page-specific JSON-LD Schema */}
      {schema && Object.keys(schema).length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
