import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

const EXCLUDED_FROM_SITEMAP = ['/thank-you/', '/styleguide/'];

/** Staging deploys set SITE_URL. Local and production builds keep the live domain. */
const siteUrl = (process.env.SITE_URL || 'https://drtinnel.com').trim().replace(/\/+$/, '');

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    mdx(),
    icon(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return !EXCLUDED_FROM_SITEMAP.some((excluded) => path.startsWith(excluded));
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.SITE_URL': JSON.stringify(siteUrl),
      'process.env.ALLOW_INDEXING': JSON.stringify(process.env.ALLOW_INDEXING ?? ''),
    },
  },
});
