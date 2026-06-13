import React from 'react';
import SEO from '../components/SEO';
import ServicesSection from '../sections/Services';

export default function ServicesIndex() {
  return (
    <>
      <SEO 
        title="Our Services | Far Wings Tech Solutions"
        description="Explore our range of high-end digital products, enterprise platforms, mobile apps, and scalable systems for modern businesses."
        keywords="Web Development, AI Automation, SEO Optimization, UI/UX Design, Custom Software"
      />
      <div className="pt-20 min-h-screen">
        <ServicesSection />
      </div>
    </>
  );
}
