import React from 'react';
import SEO from '../components/SEO';
import ContactSection from '../sections/Contact';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us | Far Wings Tech Solutions"
        description="Get in touch with Far Wings Tech Solutions. We are available for new projects and respond within 24 hours."
        keywords="Contact, Email, Farwings Solutions, Web Development Agency Contact"
      />
      <div className="pt-20 min-h-screen">
        <ContactSection />
      </div>
    </>
  );
}
