import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lcifuentes.dev',
  // Enable strict mode for better error handling
  strict: true,
  // Optimize build output
  vite: {
    build: {
      minify: 'terser',
    },
  },
});
