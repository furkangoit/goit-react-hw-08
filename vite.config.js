import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux', 'redux-persist']
        }
      }
    },
    // CommonJS dependencies optimization
    commonjsOptions: {
      include: [/redux-persist/, /node_modules/]
    }
  },
  optimizeDeps: {
    include: ['redux-persist']
  },
  resolve: {
    alias: {
      // Redux persist'in ESM modülleri doğru bulmasını sağlar
      'redux-persist/es': 'redux-persist/lib'
    }
  }
})