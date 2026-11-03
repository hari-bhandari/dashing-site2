/**
 * Shared helpers for the HubSpot blog.
 *
 * The blog is authored in HubSpot on blog.dashingdisty.com but served from this site
 * under /blog (see src/app/blog/[[...slug]]/route.ts), so anything we read out of
 * HubSpot needs its host stripped before we render or publish it.
 */

export const HUBSPOT_BLOG_HOST = 'blog.dashingdisty.com';
export const HUBSPOT_BLOG_FEED_URL = `https://${HUBSPOT_BLOG_HOST}/blog/rss.xml`;

/** Reduce an absolute HubSpot blog URL to a path on this site. Other links pass through. */
export const toLocalBlogPath = (link: string) => {
  if (!link || !link.includes(HUBSPOT_BLOG_HOST)) return link;
  try {
    const { pathname, search } = new URL(link);
    return `${pathname}${search}`;
  } catch {
    return link;
  }
};

export interface BlogFeedEntry {
  /** Path on this site, e.g. /blog/my-post */
  path: string;
  lastModified?: Date;
}

const readTag = (item: string, tag: string) => {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  if (!match) return '';
  return match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
};

/**
 * Post entries from the HubSpot RSS feed. The feed only carries the posts HubSpot
 * includes in it (currently the full published set), so this is a best-effort list -
 * it returns [] rather than throwing if HubSpot is unreachable.
 */
export async function fetchBlogFeedEntries(): Promise<BlogFeedEntry[]> {
  try {
    const response = await fetch(HUBSPOT_BLOG_FEED_URL, {
      next: { revalidate: 60 * 60 },
      headers: { Accept: 'application/rss+xml, application/xml' },
    });
    if (!response.ok) return [];

    const xml = await response.text();
    const items = Array.from(xml.matchAll(/<item\b[\s\S]*?<\/item>/gi));

    return items.flatMap((match) => {
      const item = match[0];
      const link = toLocalBlogPath(readTag(item, 'link'));
      if (!link.startsWith('/blog/')) return [];

      const published = readTag(item, 'pubDate');
      const date = published ? new Date(published) : null;

      return [
        {
          path: link,
          lastModified: date && !Number.isNaN(date.getTime()) ? date : undefined,
        },
      ];
    });
  } catch {
    return [];
  }
}
