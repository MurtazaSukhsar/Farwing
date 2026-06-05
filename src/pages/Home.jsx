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

import seoData from '../data/seo/home.json';

const Home = () => {
const location = useLocation();

useEffect(() => {
if (location.hash) {
setTimeout(() => {
const element = document.querySelector(location.hash);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
}, 100);
} else {
window.scrollTo({ top: 0, behavior: 'smooth' });
}
}, [location]);

return (
<>
<SEO
title={seoData.title}
description={seoData.description}
keywords={seoData.keywords?.join(', ') || ''}
/>

```
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
```

);
};

export default Home;
