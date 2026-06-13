import React, { useEffect } from 'react';
import Testimonials from '../sections/Testimonials';
import SEO from '../components/SEO';

const TestimonialsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Client Testimonials | Far Wings Tech Solutions" 
        description="Read what our clients have to say about partnering with Far Wings Tech Solutions for their custom software and app development needs." 
      />
      <div className="pt-20 min-h-screen">
        <Testimonials />
      </div>
    </>
  );
};

export default TestimonialsPage;
