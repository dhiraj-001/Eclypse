import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tagger from "@dhiwise/component-tagger";

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://eclypse-4sdw.onrender.com',
        changeOrigin: true,  // Important for virtual hosted sites
        secure: false,       // Good for development with self-signed certs
        ws: true,            // Proxy websockets if needed
      },
    },
    port: 4028,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  },
  build: {
    outDir: "dist",
  },
  plugins: [react(),tagger()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@constants': '/src/constants',
      '@styles': '/src/styles',
    },
  },
});
