import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://farwingstechsolutions.vercel.app',
      dynamicRoutes: [
        '/',
        '/services',
        '/projects',
        '/contact',
        '/blog',
        '/services/web-development',
        '/services/ai-automation',
        '/services/seo-optimization',
        '/services/ui-ux-design',
        '/services/custom-software'
      ]
    })
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'es2019',
    outDir: 'dist',
    sourcemap: true,
  },
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes(paths, routes) {
      return [
        '/',
        '/services',
        '/projects',
        '/contact',
        '/blog',
        '/services/web-development',
        '/services/ai-automation',
        '/services/seo-optimization',
        '/services/ui-ux-design',
        '/services/custom-software',
        '/blog/maximizing-your-seo-efforts-for-voice-search-optimization',
        '/blog/how-custom-software-development-can-tailor-your-business-processes',
        '/blog/elevating-your-it-infrastructure-farwings-tech-solutions-a-comprehensive-guide-for-business-optimization',
        '/blog/navigating-digital-transformation-how-farwings-tech-solutions-can-empower-your-business',
        '/blog/harnessing-the-power-of-modern-technology-for-business-growth-farwings-tech-solutions',
        '/blog/building-a-chatbot-for-your-business-a-step-by-step-guide'
      ];
    }
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
})
