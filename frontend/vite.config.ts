import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: "/src/components",
      assets: "/src/assets",
      lib: "/src/lib"
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://backend:8000',
        changeOrigin: true,
        secure: false
      }
    },
    host: true,
    strictPort: true,
  }
})
