import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import FounderVision from '../sections/FounderVision';
import WhyChooseUs from '../sections/WhyChooseUs';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Projects from '../sections/Projects';
import Stats from '../sections/Stats';
import TechStack from '../sections/TechStack';
import Testimonials from '../sections/Testimonials';
import FAQSection from '../sections/FAQ';
import BlogPreview from '../sections/BlogPreview';
import Contact from '../sections/Contact';
import SEO from '../components/SEO';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // slight delay to allow layout to settle
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <SEO 
        title="Premium Web Engineering & AI Automation | Far Wings Tech Solutions"
        description="We engineer high-performance, SEO-optimized digital platforms and intelligent automation systems. Partner with Gujarat's premier technology agency to accelerate your growth."
        keywords="web development company in Gujarat, AI automation Gujarat, SEO agency Gujarat, software company Gujarat, custom software, UI/UX design"
      />
      <Hero />
      <FounderVision />
      <WhyChooseUs />
      <Services />
      <Process />
      <Projects />
      <Stats />
      <TechStack />
      <Testimonials />
      <FAQSection />
      <BlogPreview />
      <Contact />
    </>
  );
};

export default Home;
