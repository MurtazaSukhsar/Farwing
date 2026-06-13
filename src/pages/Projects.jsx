import React from 'react';
import SEO from '../components/SEO';
import ProjectsSection from '../sections/Projects';

export default function Projects() {
  return (
    <>
      <SEO 
        title="Software Development Portfolio & Case Studies | Far Wings"
        description="Explore our portfolio of custom software, SaaS platforms, and mobile apps built for innovative businesses worldwide."
        keywords="Portfolio, Case Studies, Web Development Projects, Mobile App Projects"
      />
      <div className="pt-20 min-h-screen">
        <ProjectsSection />
      </div>
    </>
  );
}
