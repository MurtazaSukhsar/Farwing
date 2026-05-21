import React from 'react';

export const serviceData = {
  'web-development': {
    title: 'Premium Web Development Services',
    metaDescription: 'Modern web development services using React, Next.js, and scalable architectures optimized for speed, SEO, and user experience in Gujarat.',
    heroTitle: 'Premium Web Development',
    heroDescription: 'We engineer high-performance, SEO-optimized React & Next.js applications engineered for speed, scalability, and unmatched user conversion.',
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS'],
    benefits: ['Sub-second Load Times', 'SEO-Optimized Architecture', 'Responsive Mobile-First Design', 'Scalable Backend Integration'],
    faq: [
      { q: 'Do you use modern frameworks?', a: 'Yes, we specialize in React, Next.js, and Node.js to ensure enterprise-grade performance.' },
      { q: 'Is the code SEO friendly?', a: 'Absolutely. We implement semantic HTML, SSR/SSG, and Core Web Vitals optimization.' }
    ],
    process: [
      { title: 'Discovery & Architecture', desc: 'We blueprint the optimal tech stack and database schema for your specific business logic.' },
      { title: 'UI/UX Engineering', desc: 'Premium Figma designs converted into pixel-perfect, responsive React components.' },
      { title: 'Backend & API Integration', desc: 'Secure, scalable endpoints and robust database engineering.' },
      { title: 'Testing & Deployment', desc: 'Rigorous QA, speed optimization, and seamless cloud deployment.' }
    ],
    useCases: ['SaaS Platforms', 'E-commerce Marketplaces', 'Enterprise Dashboards', 'Corporate Web Portals'],
    caseStudy: {
      title: 'Global Travel Booking Engine',
      metric: '+85% Increase in Mobile Conversions',
      desc: 'Re-engineered a legacy portal into a high-speed Next.js platform, slashing load times and skyrocketing user engagement.'
    },
    internalLink: {
      text: 'Supercharge your new web application with our ',
      linkText: 'SEO Optimization',
      href: '/services/seo-optimization',
      postText: ' to dominate organic search results immediately.'
    }
  },
  'ai-automation': {
    title: 'Enterprise AI Automation & Integration Services',
    metaDescription: 'Scale your operations using intelligent workflows, custom LLM integrations, and AI chatbots built for modern enterprises.',
    heroTitle: 'AI Automation & Integration',
    heroDescription: 'Custom intelligent workflows and LLM-powered systems designed to automate operations and drastically scale your business.',
    technologies: ['OpenAI', 'LangChain', 'Python', 'Pinecone', 'TensorFlow', 'Make/Zapier', 'Node.js'],
    benefits: ['Custom LLM Integration', 'Workflow Automation', '24/7 Intelligent Chatbots', 'Data-Driven Insights'],
    faq: [
      { q: 'Can AI replace my manual processes?', a: 'AI can automate up to 80% of repetitive operational tasks, freeing your team for strategic work.' },
      { q: 'Is it secure?', a: 'We build secure, private instances of AI models tailored to your enterprise data.' }
    ],
    process: [
      { title: 'Workflow Audit', desc: 'We analyze your current operations to identify high-ROI automation bottlenecks.' },
      { title: 'AI Model Selection', desc: 'Choosing the right foundational models (GPT-4, Claude) for your specific data.' },
      { title: 'Custom Integration', desc: 'Connecting AI agents directly into your CRM, ERP, and internal databases.' },
      { title: 'Continuous Training', desc: 'Refining prompts and fine-tuning models based on real-world usage.' }
    ],
    useCases: ['Automated Customer Support', 'Data Extraction & Parsing', 'Dynamic Content Generation', 'Predictive Analytics'],
    caseStudy: {
      title: 'Enterprise Hardware Asset Management',
      metric: '3x Faster Inventory Reconciliation',
      desc: 'Implemented AI-driven barcode scanning and predictive depletion alerts, saving hundreds of manual labor hours.'
    },
    internalLink: {
      text: 'A custom AI system needs a scalable backend. Explore our ',
      linkText: 'Custom Software',
      href: '/services/custom-software',
      postText: ' solutions for robust infrastructure.'
    }
  },
  'seo-optimization': {
    title: 'Technical SEO & AI Search Optimization Services',
    metaDescription: 'Dominate organic search and Perplexity AI discovery with elite technical SEO, schema engineering, and content authority strategies.',
    heroTitle: 'Technical SEO & AIO',
    heroDescription: 'Technical SEO and AIO (AI Search) strategies engineered to dominate organic search and Perplexity discovery.',
    technologies: ['Google Search Console', 'Ahrefs', 'Semrush', 'Schema.org', 'Lighthouse', 'Next.js SEO', 'Perplexity AIO'],
    benefits: ['Technical SEO Audits', 'Schema Markup Integration', 'Content Authority Engineering', 'AI Overview Optimization'],
    faq: [
      { q: 'What is AI Search Optimization (AIO)?', a: 'AIO involves structuring your content to be easily cited and referenced by AI models like Perplexity and ChatGPT.' },
      { q: 'How long until we see results?', a: 'Technical SEO fixes often show results in weeks, while authority building takes 3-6 months.' }
    ],
    process: [
      { title: 'Comprehensive Technical Audit', desc: 'Deep dive into your site architecture, Core Web Vitals, and indexing issues.' },
      { title: 'Semantic Schema Injection', desc: 'Implementing advanced JSON-LD structured data for rich snippets.' },
      { title: 'Content Authority Engineering', desc: 'Rewriting key pages to align with Google\'s E-E-A-T guidelines.' },
      { title: 'AIO Formatting', desc: 'Structuring answers and data explicitly for AI crawlers like ChatGPT.' }
    ],
    useCases: ['Local Service Businesses', 'B2B Tech Companies', 'E-commerce Brands', 'Digital Publications'],
    caseStudy: {
      title: 'Local Real Estate Agency',
      metric: 'Page 1 Rankings within 45 Days',
      desc: 'Fixed severe canonicalization errors and implemented deep local schema, resulting in massive organic lead flow.'
    },
    internalLink: {
      text: 'Is a slow website killing your SEO? Upgrade with our ',
      linkText: 'Web Development',
      href: '/services/web-development',
      postText: ' expertise to guarantee sub-second load times.'
    }
  },
  'custom-software': {
    title: 'Custom Software & Application Development',
    metaDescription: 'Scalable backend architectures, API development, and enterprise dashboards tailored exactly to your complex operational needs.',
    heroTitle: 'Custom Software Solutions',
    heroDescription: 'Scalable backend architectures, API development, and enterprise dashboards tailored exactly to your complex operational needs.',
    technologies: ['Node.js', 'Python/Django', 'PostgreSQL', 'Docker', 'AWS', 'Redis', 'GraphQL'],
    benefits: ['Microservices Architecture', 'Secure API Gateways', 'Custom CRM/ERP Systems', 'Cloud Infrastructure'],
    faq: [
      { q: 'Do you build from scratch?', a: 'Yes, we architect custom solutions precisely tailored to your business logic without forcing rigid templates.' },
      { q: 'Can it scale?', a: 'We utilize cloud-native infrastructure (AWS, Docker) to ensure your software handles infinite scaling.' }
    ],
    process: [
      { title: 'Requirements Engineering', desc: 'Mapping out every edge case and business rule before writing a single line of code.' },
      { title: 'System Architecture', desc: 'Designing secure, scalable databases and resilient API microservices.' },
      { title: 'Agile Development', desc: 'Iterative two-week sprints providing continuous transparency and flexibility.' },
      { title: 'DevOps & Maintenance', desc: 'Automated CI/CD pipelines and 24/7 monitoring for zero downtime.' }
    ],
    useCases: ['Custom CRM & ERPs', 'Supply Chain Management', 'Fintech Dashboards', 'Healthcare Portals'],
    caseStudy: {
      title: 'Enterprise Management Admin',
      metric: 'Automated 10,000+ Monthly Invoices',
      desc: 'Built a robust SAAS platform automating facility management, payments, and communications for massive scale.'
    },
    internalLink: {
      text: 'Ensure your custom software looks as good as it functions with our premium ',
      linkText: 'UI/UX Design',
      href: '/services/ui-ux-design',
      postText: ' systems.'
    }
  },
  'ui-ux-design': {
    title: 'Premium UI/UX Design & Branding Services',
    metaDescription: 'Conversion-focused UI/UX design systems that captivate users, establish market authority, and drive revenue growth.',
    heroTitle: 'Premium UI/UX Design',
    heroDescription: 'Premium, conversion-focused design systems that captivate users and establish market authority.',
    technologies: ['Figma', 'Framer', 'Adobe CC', 'Spline 3D', 'Tailwind UI', 'Storybook', 'Lottie'],
    benefits: ['Framer Motion Animations', 'Conversion Rate Optimization', 'Design Systems', 'User Journey Mapping'],
    faq: [
      { q: 'Why does design matter for ROI?', a: 'Premium aesthetics build immediate trust, and strategic UX reduces friction, directly increasing conversion rates.' },
      { q: 'Do you provide the source files?', a: 'Yes, we provide comprehensive Figma design systems for your engineering team.' }
    ],
    process: [
      { title: 'User Research & Wireframing', desc: 'Understanding your audience and mapping out intuitive low-fidelity user flows.' },
      { title: 'Visual Identity Conception', desc: 'Establishing a premium color palette, typography, and visual language.' },
      { title: 'High-Fidelity Prototyping', desc: 'Creating clickable, interactive mockups in Figma for stakeholder alignment.' },
      { title: 'Developer Handoff', desc: 'Delivering meticulously organized design systems and exact CSS specifications.' }
    ],
    useCases: ['SaaS Dashboards', 'Mobile App Interfaces', 'Corporate Websites', 'E-commerce Experiences'],
    caseStudy: {
      title: 'Fintech Mobile App Redesign',
      metric: '+65% User Retention Rate',
      desc: 'Transformed a cluttered interface into a sleek, intuitive dark-mode experience that users love returning to.'
    },
    internalLink: {
      text: 'Ready to bring this design to life? Discover our ',
      linkText: 'Web Development',
      href: '/services/web-development',
      postText: ' engineering capabilities.'
    }
  }
};
