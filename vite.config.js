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
