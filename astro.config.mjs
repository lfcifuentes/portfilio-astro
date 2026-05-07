import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lcifuentes.dev',
  integrations: [
    icon(),
    sitemap(),
  ],
  // Enable strict mode for better error handling
  strict: true,
  // Optimize build output
  vite: {
    build: {
      minify: 'terser',
    },
  },
});
