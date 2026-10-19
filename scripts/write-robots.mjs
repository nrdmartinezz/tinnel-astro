import { writeFileSync } from 'node:fs';

const siteUrl = (process.env.SITE_URL || 'https://drtinnel.com').trim().replace(/\/+$/, '');
const flag = (process.env.ALLOW_INDEXING ?? '').trim().toLowerCase();
const allow = flag === '' || ['1', 'true', 'yes', 'on'].includes(flag);

const body = allow
  ? `User-agent: *
Allow: /

Disallow: /thank-you/
Disallow: /styleguide/

Sitemap: ${siteUrl}/sitemap-index.xml
`
  : `User-agent: *
Disallow: /
`;

writeFileSync(new URL('../dist/robots.txt', import.meta.url), body);
