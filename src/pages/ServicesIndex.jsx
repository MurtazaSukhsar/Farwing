import React from 'react';
import SEO from '../components/SEO';
import ServicesSection from '../sections/Services';

export default function ServicesIndex() {
  return (
    <>
      <SEO 
        title="Custom Software Development Services | Far Wings Tech Solutions"
        description="We engineer scalable digital platforms, AI automations, and mobile apps for ambitious startups and enterprises."
        keywords="Web Development, AI Automation, SEO Optimization, UI/UX Design, Custom Software"
      />
      <div className="pt-20 min-h-screen">
        <ServicesSection />
      </div>
    </>
  );
}
