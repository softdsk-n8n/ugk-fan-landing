import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: 'https://softdsk-n8n.github.io',
  base: '/ugk-fan-landing',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    ssr: {
      noExternal: ['motion', 'gsap'],
    },
  },
});
