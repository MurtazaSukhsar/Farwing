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
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
})
