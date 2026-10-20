/**
 * Shared query helpers for the dental blog.
 * Blocks stay props-only, so pages query here and pass results down.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Entry = CollectionEntry<'posts'>;

const longDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });
const mediumDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' });

/** Drafts render in `dev` and disappear from production builds. */
export async function getPublished(): Promise<Entry[]> {
  const entries = await getCollection('posts', ({ data }) => {
    return import.meta.env.DEV || data.draft !== true;
  });

  return entries.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

/** Calendar day from a date-only frontmatter value, without a timezone shift. */
export function calendarDate(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function formatDate(date: Date, style: 'long' | 'medium' = 'medium'): string {
  return (style === 'long' ? longDate : mediumDate).format(date);
}

export function readingTime(body: string | undefined): string {
  const words = (body ?? '').trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

/** Newest posts other than the one on screen. */
export function moreRecent(all: Entry[], current: Entry, limit = 3): Entry[] {
  return all.filter((entry) => entry.id !== current.id).slice(0, limit);
}
