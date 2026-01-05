// @ts-check
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import wikiLinkPlugin from '@portaljs/remark-wiki-link';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          //  [[nova nota]] 
          hrefTemplate: (/** @type {string} */ permalink) => `/zettle/${permalink.toLowerCase()}`,
          wikiLinkClassName: 'wiki-link',
          newClassName: 'wiki-link-new',
        }
      ],
    ],
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