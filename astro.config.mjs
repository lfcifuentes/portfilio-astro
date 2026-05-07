import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://lcifuentes.dev',
  integrations: [icon()],
  // Enable strict mode for better error handling
  strict: true,
  // Optimize build output
  vite: {
    build: {
      minify: 'terser',
    },
  },
});
