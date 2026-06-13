export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Tech Stack', href: '/#techstack' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Custom Web Development',
    description: 'High-performance, SEO-optimized React & Next.js applications engineered for speed, scalability, and unmatched user conversion.',
    icon: 'Globe',
    gradient: 'from-gray-700 to-gray-600',
    link: '/services/custom-web-development-company',
  },
  {
    id: 2,
    title: 'AI Automation Services',
    description: 'Custom intelligent workflows and LLM-powered systems designed to automate operations and drastically scale your business.',
    icon: 'Smartphone',
    gradient: 'from-gray-600 to-gray-500',
    link: '/services/ai-automation-services',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'We engineer high-performance cross-platform apps using Flutter for iOS and Android, ensuring enterprise mobility.',
    icon: 'Smartphone',
    gradient: 'from-gray-500 to-gray-700',
    link: '/services/mobile-app-development-company',
  },
  {
    id: 4,
    title: 'Custom Software Development',
    description: 'Scalable backend architectures, API development, and enterprise dashboards tailored exactly to your complex operational needs.',
    icon: 'Building2',
    gradient: 'from-gray-700 to-gray-600',
    link: '/services/custom-software-development',
  },
  {
    id: 5,
    title: 'SaaS Platform Engineering',
    description: 'From startup MVP to enterprise multi-tenant architectures, we build SaaS products that scale and generate revenue.',
    icon: 'Cloud',
    gradient: 'from-gray-600 to-gray-500',
    link: '/services/saas-development-company',
  }
];

export const PROCESS = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'We analyze your business goals, current architecture, and SEO gaps to formulate a robust engineering plan.'
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description: 'Our team crafts premium UI/UX flows and scalable system architectures built on modern tech stacks.'
  },
  {
    step: '03',
    title: 'Development & AI',
    description: 'We engineer your platform with high-performance code, integrating AI automation and technical SEO best practices.'
  },
  {
    step: '04',
    title: 'Deployment & Scaling',
    description: 'Seamless deployment with continuous monitoring, ensuring 99.9% uptime and ongoing growth optimization.'
  }
];

export const FAQ = [
  {
    question: 'Why choose a specialized web development company in Gujarat?',
    answer: 'Partnering with a specialized tech agency ensures you receive enterprise-grade development at competitive rates. We combine global premium design standards with rigorous software engineering right here from Gujarat.'
  },
  {
    question: 'How can AI Automation help my business grow?',
    answer: 'AI automation eliminates repetitive tasks, optimizes workflows, and provides 24/7 intelligent customer interactions. This allows your team to focus on high-value strategic growth rather than manual operations.'
  },
  {
    question: 'Do you offer SEO-optimized development out of the box?',
    answer: 'Yes. Every platform we build integrates technical SEO, semantic HTML, and Core Web Vitals optimization from day one, ensuring you are ready for both Google Search and AI Overview discovery.'
  },
  {
    question: 'How long does a custom software project typically take?',
    answer: 'Depending on the complexity, a custom MVP can take 4-8 weeks, while comprehensive enterprise platforms may take 3-6 months. We prioritize rapid, iterative deployment.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Engineering Rigor',
    description: 'We do not just build websites; we engineer scalable digital platforms that perform flawlessly under heavy traffic.'
  },
  {
    title: 'AI-First Approach',
    description: 'Every solution is architected with modern AI integrations in mind, future-proofing your business against industry shifts.'
  },
  {
    title: 'Conversion-Focused',
    description: 'Premium aesthetics paired with strategic UX design ensures that your traffic turns into measurable business ROI.'
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Mumineen Dua App',
    description: 'An enterprise-scale religious application successfully serving 10+ active users globally.',
    tags: ['Flutter', 'Firebase', 'Node.js'],
    color: 'from-gray-500 to-gray-600',
    image: '/mumineen_dua.png',
    type: 'mobile',
    features: [
      'High-fidelity interactive Dua and Prayer audio player',
      'Localized precise prayer alerts and Qibla calculations',
      'Seamless offline database synchronization capabilities',
      'Dynamic digital Tasbeeh and community counter system',
      'Multilingual script views with native character sets'
    ]
  },
  {
    id: 2,
    title: 'The Travel Mart Website',
    description: 'A premium, high-conversion travel booking engine engineered with real-time API integrations.',
    tags: ['React', 'Next.js', 'Stripe'],
    color: 'from-gray-600 to-gray-700',
    image: '/travel_mart.png',
    type: 'web',
    features: [
      'Instant PCI-compliant Stripe payment gateway orchestration',
      'Dynamic real-time inventory availability verification',
      'Advanced multi-tier destination filtering and search parameters',
      'Intuitive, mobile-responsive itinerary mapping',
      'Comprehensive dashboard with instant e-ticketing and invoices'
    ]
  },
  {
    id: 3,
    title: 'Enterprise Management Admin',
    description: 'A comprehensive SAAS platform automating facility management, payments, and communications.',
    tags: ['React Native', 'MongoDB', 'Express'],
    color: 'from-gray-700 to-gray-800',
    image: '/01cd1a00-79e7-4c7f-a0dc-541ae0ce6ef3.png',
    type: 'mobile',
    rawDevice: true,
    features: [
      'Automated recurring maintenance invoice dispatcher',
      'Unified facility scheduler and clubhouse reservations',
      'Secure Visitor Log authentication & Gatekeeper system',
      'Real-time digital noticeboard with priority push alerts',
      'One-tap Emergency SOS broadcasts to staff and managers'
    ]
  },
  {
    id: 4,
    title: 'Hardware Management App',
    description: 'A robust enterprise asset management system predicting inventory depletion through AI analytics.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    color: 'from-gray-500 to-gray-700',
    image: '/hardware_management.png',
    type: 'mobile',
    rawDevice: true,
    features: [
      'Real-time barcode camera scanner parsing for hardware',
      'Predictive depletion analytics and low-stock alerts',
      'Sophisticated multi-warehouse stock transfer ledger',
      'Robust granular Role-Based Access Controls (RBAC)',
      'Auto-generated monthly PDF audits and tax-compliant reports'
    ]
  },
];

export const STATS = [
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 95, suffix: '+', label: 'Performance Score' },
  { value: 100, suffix: '%', label: 'Fast Delivery' },
  { value: 10, suffix: '+', label: 'AI-Powered Solutions' },
];

export const TECH_STACK = [
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Flutter', icon: '💙', color: '#02569B' },
  { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  { name: 'MySQL', icon: '🐬', color: '#4479A1' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'AWS', icon: '☁️', color: '#FF9900' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mohammed V',
    role: 'Owner, The Mumineen App',
    content: 'Farwings transformed our vision into reality. The Dua app they built has been downloaded by thousands and has become an essential part of our community.',
    avatar: 'MV',
  },
  {
    id: 2,
    name: 'Murtaza Khambhati',
    role: 'CEO, The Travel Mart',
    content: 'Working with Farwings was an absolute pleasure. Their attention to detail and technical expertise resulted in a platform that exceeded our expectations.',
    avatar: 'MK',
  },
  {
    id: 3,
    name: 'Ali Asgar Patrawala',
    role: 'CEO',
    content: 'The portfolio website delivered by Farwings perfectly represents our brand identity with a modern, premium, and highly responsive design. The user experience and visual quality exceeded our expectations.',
    avatar: 'AP',
  },

];

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: '#', icon: 'Github' },
  { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
  { name: 'Twitter', href: '#', icon: 'Twitter' },
  { name: 'Instagram', href: '#', icon: 'Instagram' },
];
