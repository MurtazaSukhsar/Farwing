export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#techstack' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with modern frameworks and best practices.',
    icon: 'Globe',
    gradient: 'from-gray-700 to-gray-600',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: 'Smartphone',
    gradient: 'from-gray-600 to-gray-500',
  },
  {
    id: 3,
    title: 'Database Management',
    description: 'Robust database architecture, optimization, and management for enterprise-grade systems.',
    icon: 'Database',
    gradient: 'from-gray-500 to-gray-700',
  },
  {
    id: 4,
    title: 'SaaS Platforms',
    description: 'End-to-end SaaS product development with multi-tenant architecture and cloud integration.',
    icon: 'Cloud',
    gradient: 'from-gray-700 to-gray-600',
  },
  {
    id: 5,
    title: 'Enterprise Software',
    description: 'Custom enterprise solutions that streamline operations and drive business growth.',
    icon: 'Building2',
    gradient: 'from-gray-600 to-gray-500',
  },
  {
    id: 6,
    title: 'Custom Management Systems',
    description: 'Tailored management systems designed to fit your unique business workflows perfectly.',
    icon: 'Settings',
    gradient: 'from-gray-500 to-gray-700',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Mumineen Dua App',
    description: 'A comprehensive religious application featuring daily prayers, dua collections, and community features.',
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
    description: 'A premium travel booking platform with real-time availability and seamless payment integration.',
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
    title: 'Society Management App',
    description: 'All-in-one community management solution with payments, notices, and facility booking.',
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
    description: 'Enterprise hardware inventory and asset management system with barcode scanning.',
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
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Years Experience' },
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
