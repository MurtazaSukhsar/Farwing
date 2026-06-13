import React from 'react';
import SEO from '../components/SEO';
import ContactSection from '../sections/Contact';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Our Web Development & AI Agency | Far Wings"
        description="Ready to build your next digital product? Contact Far Wings Tech Solutions to discuss your web, mobile, or AI automation project today."
        keywords="Contact, Email, Farwings Solutions, Web Development Agency Contact"
      />
      <div className="pt-20 min-h-screen">
        <ContactSection />
      </div>
    </>
  );
}
