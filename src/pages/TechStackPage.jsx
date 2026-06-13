import React, { useEffect } from 'react';
import TechStack from '../sections/TechStack';
import SEO from '../components/SEO';

const TechStackPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Our Tech Stack | Far Wings Tech Solutions" 
        description="Explore the cutting-edge technologies, frameworks, and databases we use to engineer scalable custom software, web applications, and mobile apps." 
      />
      <div className="pt-20 min-h-screen">
        <TechStack />
      </div>
    </>
  );
};

export default TechStackPage;
