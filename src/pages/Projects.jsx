import React from 'react';
import SEO from '../components/SEO';
import ProjectsSection from '../sections/Projects';

export default function Projects() {
  return (
    <>
      <SEO 
        title="Our Projects | Far Wings Tech Solutions"
        description="Explore our portfolio of successful projects that have helped businesses transform their digital presence."
        keywords="Portfolio, Case Studies, Web Development Projects, Mobile App Projects"
      />
      <div className="pt-20 min-h-screen">
        <ProjectsSection />
      </div>
    </>
  );
}
