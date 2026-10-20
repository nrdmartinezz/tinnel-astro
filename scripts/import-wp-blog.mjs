/**
 * One-time import of the WordPress post export into the posts collection.
 * Reads htcompletefamilydentistry.WordPress.2026-10-20.xml (gitignored) and writes
 * src/content/posts/*.md plus featured images in src/assets/blog/.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const xmlPath = join(root, 'htcompletefamilydentistry.WordPress.2026-10-20.xml');
const postsDir = join(root, 'src', 'content', 'posts');
const imagesDir = join(root, 'src', 'assets', 'blog');

const xml = await readFileUtf8(xmlPath);
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => match[1]);

const attachments = new Map();
const posts = [];

for (const item of items) {
  const type = field(item, 'wp:post_type');
  if (type === 'attachment') {
    attachments.set(field(item, 'wp:post_id'), {
      url: field(item, 'wp:attachment_url'),
      alt: meta(item, '_wp_attachment_image_alt'),
    });
  } else if (type === 'post' && field(item, 'wp:status') === 'publish') {
    posts.push(item);
  }
}

await mkdir(postsDir, { recursive: true });
await mkdir(imagesDir, { recursive: true });

const usedNames = new Map();

for (const item of posts) {
  const slug = field(item, 'wp:post_name');
  const title = field(item, 'title');
  const html = field(item, 'content:encoded');
  const thumbId = meta(item, '_thumbnail_id');
  const attachment = attachments.get(thumbId);
  if (!attachment?.url) throw new Error(`Missing featured image for ${slug}`);

  const fileName = uniqueName(slug, attachment.url, usedNames);
  const imagePath = join(imagesDir, fileName);
  await download(attachment.url, imagePath);

  const rankMath = meta(item, 'rank_math_description').replace(/\s+/g, ' ').trim();
  const description = rankMath || firstParagraph(html);
  const category = categories(item)[0] ?? '';
  const tags = postTags(item);
  const publishDate = field(item, 'wp:post_date').slice(0, 10);
  const body = htmlToMarkdown(html);
  const alt = attachment.alt.trim() || title;

  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
    `publishDate: ${publishDate}`,
    ...(category ? [`category: ${JSON.stringify(category)}`] : []),
    `tags: ${JSON.stringify(tags)}`,
    `heroImage: ../../assets/blog/${fileName}`,
    `heroImageAlt: ${JSON.stringify(alt)}`,
    '---',
    '',
    body.trim(),
    '',
  ].join('\n');

  await writeFile(join(postsDir, `${slug}.md`), frontmatter, 'utf8');
  console.log(`${publishDate}  ${slug}`);
}

console.log(`Imported ${posts.length} posts`);

function field(item, tag) {
  const cdata = item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`));
  if (cdata) return cdata[1];
  const plain = item.match(new RegExp(`<${tag}[^>]*>([^<]*)<\\/${tag}>`));
  return plain ? plain[1].trim() : '';
}

function meta(item, key) {
  const match = item.match(
    new RegExp(
      `<wp:meta_key><!\\[CDATA\\[${key}\\]\\]><\\/wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:meta_value>`,
    ),
  );
  return match ? match[1] : '';
}

function categories(item) {
  return [
    ...item.matchAll(/<category domain="category"[^>]*><!\[CDATA\[(.*?)\]\]><\/category>/g),
  ].map((match) => match[1]);
}

function postTags(item) {
  return [
    ...item.matchAll(/<category domain="post_tag"[^>]*><!\[CDATA\[(.*?)\]\]><\/category>/g),
  ].map((match) => match[1]);
}

function uniqueName(slug, url, used) {
  const base = decodeURIComponent(new URL(url).pathname.split('/').pop() ?? `${slug}.jpg`);
  const safe = base.replace(/[^\w.\-]+/g, '-');
  const prior = used.get(safe);
  if (!prior) {
    used.set(safe, url);
    return safe;
  }
  if (prior === url) return safe;
  const dot = safe.lastIndexOf('.');
  const name = dot === -1 ? `${slug}-${safe}` : `${slug}-${safe.slice(0, dot)}${safe.slice(dot)}`;
  used.set(name, url);
  return name;
}

async function download(url, destination) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; tinnel-blog-import/1.0)' },
  });
  if (!response.ok) throw new Error(`Image ${response.status} ${url}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(destination, bytes);
}

async function readFileUtf8(path) {
  const { readFile } = await import('node:fs/promises');
  return readFile(path, 'utf8');
}

function firstParagraph(html) {
  const withoutBlocks = html
    .replace(/<table[\s\S]*?<\/table>/gi, ' ')
    .replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, ' ')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, ' ');
  return trimSentence(plain(withoutBlocks));
}

function trimSentence(text) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= 155) return clean;
  const cut = clean.slice(0, 155);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:–—-]+$/, '')}…`;
}

function plain(html) {
  return decode(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function decode(text) {
  return text
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#0*39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function rewriteHref(href) {
  const decoded = decode(href).trim();
  if (/^(tel:|mailto:|#)/i.test(decoded)) return decoded;

  let path = decoded;
  let suffix = '';
  const absolute = decoded.match(/^https?:\/\/(?:www\.)?drtinnel\.com([^?#]*)(\?[^#]*)?(#.*)?$/i);
  if (absolute) {
    path = absolute[1] || '/';
    suffix = `${absolute[2] ?? ''}${absolute[3] ?? ''}`;
  } else if (decoded.startsWith('/')) {
    const hashAt = decoded.search(/[?#]/);
    path = hashAt === -1 ? decoded : decoded.slice(0, hashAt);
    suffix = hashAt === -1 ? '' : decoded.slice(hashAt);
  } else {
    return decoded;
  }

  path = path.replace(/\/+$/, '') || '/';
  path = path.replace(/^\/preventive-dentistry(?=\/|$)/, '/preventative-dentistry');
  if (path === '/our-practice/meet-dr-prinz') path = '/our-practice';
  if (path === '/adult-orthodontics') path = '/invisalign';
  if (path === '/services') path = '/';
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${path}${suffix}`;
}

function youtubeId(value) {
  const match = value.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/i);
  return match?.[1] ?? '';
}

function youtubeIframe(id, title) {
  const safeTitle = decode(title).replace(/"/g, '&quot;') || 'Video';
  return `<iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${safeTitle}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`;
}

function htmlToMarkdown(source) {
  const blocks = [];
  const store = (html) => {
    const id = blocks.length;
    blocks.push(html.trim());
    return `\n\n%%BLOCK${id}%%\n\n`;
  };

  let html = source.replace(/\r\n/g, '\n').replace(/&nbsp;/gi, ' ');
  html = html.replace(/<figure\b[^>]*>/gi, '').replace(/<\/figure>/gi, '');
  while (/<span\b/i.test(html)) {
    const next = html.replace(/<span\b[^>]*>([\s\S]*?)<\/span>/gi, '$1');
    if (next === html) break;
    html = next;
  }
  html = html.replace(/<h1\b([^>]*)>/gi, '<h2$1>').replace(/<\/h1>/gi, '</h2>');

  html = html.replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, (tag) => {
    const src = tag.match(/\ssrc="([^"]+)"/i)?.[1] ?? '';
    const title = tag.match(/\stitle="([^"]*)"/i)?.[1] ?? 'Video';
    const id = youtubeId(src);
    return id ? store(youtubeIframe(id, title)) : store(tag);
  });
  html = html.replace(
    /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})\S*/gi,
    (_, id) => store(youtubeIframe(id, 'Video')),
  );

  html = html.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => store(rewriteHtmlHrefs(table)));

  html = html.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, tag, inner) => {
    const items = [...inner.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)];
    const lines = items.map((item, index) => {
      const marker = tag === 'ol' ? `${index + 1}. ` : '- ';
      return `${marker}${inline(item[1])}`;
    });
    return `\n\n${lines.join('\n')}\n\n`;
  });

  html = html.replace(/<h([2-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level, inner) => {
    return `\n\n${'#'.repeat(Number(level))} ${inline(inner)}\n\n`;
  });
  html = html.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => `\n\n${inline(inner)}\n\n`);
  html = html.replace(/<hr\b[^>]*>/gi, '\n\n---\n\n');
  html = html.replace(/<br\s*\/?>/gi, '\n');
  html = inlineRemainder(html);
  html = decode(html);
  html = html
    .split('\n')
    .map((line) => line.replace(/^[ \t]+/g, '').replace(/[ \t]+$/g, ''))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  html = html.replace(/%%BLOCK(\d+)%%/g, (_, id) => `\n\n${blocks[Number(id)]}\n\n`);
  return `${html.replace(/\n{3,}/g, '\n\n').trim()}\n`;
}

function rewriteHtmlHrefs(html) {
  return html.replace(/href="([^"]*)"/gi, (_, href) => `href="${rewriteHref(href)}"`);
}

function inline(html) {
  let text = html;
  text = text.replace(/<br\s*\/?>/gi, ' ');
  text = text.replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, label) => {
    const name = inline(label).replace(/[[\]]/g, '');
    return `[${name}](${rewriteHref(href)})`;
  });
  text = text.replace(/<(?:strong|b)\b[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi, (_, inner) => {
    return `**${inline(inner)}**`;
  });
  text = text.replace(/<(?:em|i)\b[^>]*>([\s\S]*?)<\/(?:em|i)>/gi, (_, inner) => {
    return `*${inline(inner)}*`;
  });
  text = text.replace(/<[^>]+>/g, '');
  return decode(text).replace(/\s+/g, ' ').trim();
}

function inlineRemainder(html) {
  return html
    .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, label) => {
      return `[${inline(label)}](${rewriteHref(href)})`;
    })
    .replace(/<(?:strong|b)\b[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi, '**$1**')
    .replace(/<(?:em|i)\b[^>]*>([\s\S]*?)<\/(?:em|i)>/gi, '*$1*')
    .replace(/<[^>]+>/g, '');
}
