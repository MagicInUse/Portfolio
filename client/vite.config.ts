import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production' 
          ? 'https://jacobnorr.me' 
          : 'http://localhost:3001',
        changeOrigin: true,
        secure: true
      }
    },
    port: 5173
  }
})