import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // AWS Amplify configuration
  base: '/', // Use root path for Amplify (change if using subdirectory)
  
  // Performance Optimizations
  build: {
    // Build output directory (Amplify expects 'dist')
    outDir: 'dist',
    
    // Use esbuild for faster minification (much faster than terser)
    minify: 'esbuild',
    // esbuild automatically drops console and debugger in production
    // For more control, we can use esbuild options
    target: 'es2015', // Target modern browsers for faster builds
    cssMinify: 'esbuild', // Use esbuild for CSS minification too
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    
    // Enable source maps for debugging (disable in production)
    sourcemap: false,
    
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Build performance optimizations
    reportCompressedSize: false, // Disable compressed size reporting (saves time)
    
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('react-helmet')) {
              return 'helmet-vendor';
            }
            if (id.includes('@emailjs')) {
              return 'email-vendor';
            }
            // Other node_modules
            return 'vendor';
          }
        }
      }
    }
  },
  
  // Server configuration
  server: {
    // Enable compression
    compress: true,
    // Faster HMR
    hmr: {
      overlay: true
    }
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@emailjs/browser'],
    // Force optimization to speed up subsequent builds
    force: false // Set to true if you want to force re-optimization
  },
  
  // Additional performance optimizations
  esbuild: {
    // Drop console and debugger in production builds
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
  }
})
