// @ts-check
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks, 
        { 
          target: '_blank', 
          rel: ['nofollow', 'noopener', 'noreferrer'],
          content: { type: 'text', value: '' },
          contentProperties: { className: 'external-link-icon' }
        }
      ],
    ],
  },
});