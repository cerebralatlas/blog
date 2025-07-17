// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cerebralatlas.me',
  integrations: [
    mdx({
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { 
          behavior: 'wrap',
          properties: { className: ['anchor-link'] }
        }]
      ]
    })
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { 
        behavior: 'wrap',
        properties: { className: ['anchor-link'] }
      }]
    ]
  }
});
