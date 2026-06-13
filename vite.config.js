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
        '/tech-stack',
        '/testimonials',
        '/services',
        '/projects',
        '/contact',
        '/blog',
        '/services/custom-web-development-company',
        '/services/ai-automation-services',
        '/services/mobile-app-development-company',
        '/services/custom-software-development',
        '/services/saas-development-company'
      ]
    })
  ],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api/blogger': {
        target: 'https://www.blogger.com/feeds/4641752792856204932/posts/default?alt=json',
        changeOrigin: true,
        rewrite: (path) => ''
      }
    }
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
        '/tech-stack',
        '/testimonials',
        '/services',
        '/projects',
        '/contact',
        '/blog',
        '/services/custom-web-development-company',
        '/services/ai-automation-services',
        '/services/mobile-app-development-company',
        '/services/custom-software-development',
        '/services/saas-development-company'
      ];
    }
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
})
