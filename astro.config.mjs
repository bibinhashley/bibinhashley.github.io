// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We'll use our own base styles
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      filter: (page) => {
        // Include all pages in sitemap
        return true;
      },
    })
  ],
  site: 'https://bibinhashley.github.io',
  base: '/',
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true,

});
