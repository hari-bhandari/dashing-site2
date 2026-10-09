import Link from "next/link";
import { toLocalBlogPath } from "../../lib/hubspotBlog";

interface ResourcesBlogProps {
  /** Provide the public HubSpot RSS feed URL. */
  hubspotBlogId: string;
  /** Cap on posts shown. Omit to show every post in the feed. */
  maxPosts?: number;
}

interface HubspotPost {
  title: string;
  link: string;
  published: string;
  excerpt: string;
  image: { src: string; alt: string } | null;
  readMinutes: number;
}

const decodeCdata = (value: string) => value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();

const decodeHtmlEntities = (value: string) =>
  value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .replace(/&nbsp;/g, " ");

const extractTagValue = (item: string, tag: string) => {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = item.match(regex);
  if (!match) return "";
  return decodeCdata(match[1]);
};

const stripHtml = (value: string) => value.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();

const parseLink = (item: string) => {
  const tagLink = /<link[^>]*>([\s\S]*?)<\/link>/i.exec(item);
  if (tagLink) {
    const explicit = decodeCdata(tagLink[1]);
    if (explicit) return explicit;
  }

  const linkMatches = Array.from(item.matchAll(/<link\b[^>]*>/gi));
  if (linkMatches.length) {
    const candidates = linkMatches
      .map((match) => {
        const tag = match[0];
        const href = /href="([^"]+)"/i.exec(tag)?.[1] ?? "";
        const rel = /rel="([^"]+)"/i.exec(tag)?.[1]?.toLowerCase();
        const type = /type="([^"]+)"/i.exec(tag)?.[1]?.toLowerCase();
        return { href, rel, type };
      })
      .filter((candidate) => Boolean(candidate.href));

    const preferred =
      candidates.find((candidate) => candidate.rel === "alternate" || candidate.type?.includes("text/html")) ??
      candidates.find((candidate) => candidate.rel !== "self") ??
      candidates[0];

    if (preferred?.href) {
      return preferred.href;
    }
  }

  const guidPermalink = /<guid[^>]*ispermalink="true"[^>]*>([\s\S]*?)<\/guid>/i.exec(item);
  if (guidPermalink) {
    return decodeCdata(guidPermalink[1]);
  }

  return "";
};

const pickBodyHtml = (item: string) => {
  const candidates = [
    extractTagValue(item, "content:encoded"),
    extractTagValue(item, "description"),
    extractTagValue(item, "summary")
  ];
  return decodeHtmlEntities(candidates.find(Boolean) ?? "");
};

const pickExcerpt = (bodyHtml: string) => {
  const text = stripHtml(bodyHtml);
  return text.length > 220 ? `${text.slice(0, 217)}…` : text;
};

/**
 * HubSpot embeds the featured image (class "hs-featured-image") in the description,
 * while content:encoded only carries a 1px tracking pixel, so search the whole item.
 */
const pickImage = (item: string) => {
  const tags = Array.from(decodeHtmlEntities(item).matchAll(/<img\b[^>]*>/gi), (match) => match[0]);
  const tag =
    tags.find((candidate) => /class="[^"]*hs-featured-image\b/i.test(candidate)) ??
    tags.find((candidate) => !/__ptq\.gif|width="1"/i.test(candidate));
  const src = tag && /src="([^"]+)"/i.exec(tag)?.[1];
  if (!src) return null;
  return { src, alt: /alt="([^"]*)"/i.exec(tag)?.[1] ?? "" };
};

const estimateReadMinutes = (bodyHtml: string) => {
  const words = stripHtml(bodyHtml).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

const pickPublishedDate = (item: string) => {
  const raw = extractTagValue(item, "pubDate") || extractTagValue(item, "updated") || extractTagValue(item, "published");
  if (!raw) return "";
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return raw;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

async function fetchHubspotPosts(feedUrl: string, maxPosts?: number): Promise<HubspotPost[]> {
  const response = await fetch(feedUrl, {
    next: { revalidate: 60 * 30 },
    headers: { Accept: "application/rss+xml, application/xml" }
  });

  if (!response.ok) {
    throw new Error(`Unable to load HubSpot feed (${response.status})`);
  }

  const xml = await response.text();
  const itemMatches = Array.from(xml.matchAll(/<(item|entry)\b[\s\S]*?<\/\1>/gi));

  return itemMatches.slice(0, maxPosts).map((match) => {
    const item = match[0];
    const bodyHtml = pickBodyHtml(item);
    return {
      title: decodeHtmlEntities(decodeCdata(extractTagValue(item, "title") || "Untitled")),
      link: toLocalBlogPath(parseLink(item)) || "#",
      published: pickPublishedDate(item),
      excerpt: pickExcerpt(bodyHtml),
      image: pickImage(item),
      readMinutes: estimateReadMinutes(bodyHtml)
    } satisfies HubspotPost;
  });
}

export default async function ResourcesBlog({ hubspotBlogId, maxPosts }: ResourcesBlogProps) {
  const feedUrl = hubspotBlogId;
  let posts: HubspotPost[] = [];
  let error: string | null = null;

  if (!feedUrl) {
    error = "Missing HubSpot RSS feed URL.";
  } else {
    try {
      posts = await fetchHubspotPosts(feedUrl, maxPosts);
    } catch (err) {
      error = err instanceof Error ? err.message : "Unable to load HubSpot posts.";
    }
  }

  const [featured, ...others] = posts;
  // Size the side list (2-4 posts) so the grid below always fills complete rows of three
  // on desktop.
  const sideCount = Math.min(others.length, [2, 3, 4].find((n) => (others.length - n) % 3 === 0) ?? 3);
  const side = others.slice(0, sideCount);
  const grid = others.slice(sideCount);

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f4f7fa] py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-semibold uppercase tracking-widest text-lime-400">Blog</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0a2440] sm:text-4xl">Latest insights from the Dashing team</h2>
            <p className="mt-3 max-w-2xl text-xl leading-relaxed text-[#0a2440]/80">
              Articles, guides, and perspectives on running a more profitable, efficient brokerage.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex shrink-0 items-center self-start rounded-full border border-[#0a2440]/15 px-5 py-2.5 text-sm font-semibold text-[#0a2440] transition hover:border-[#0a2440] hover:bg-[#0a2440] hover:text-white sm:self-auto"
          >
            View all articles
            <ArrowIcon />
          </Link>
        </div>

        {error && <p className="mt-10 text-center text-sm font-semibold text-[#0a2440]/70">{error}</p>}
        {!error && posts.length === 0 && (
          <p className="mt-10 text-center text-sm font-semibold text-[#0a2440]/60">No posts found in the RSS feed yet.</p>
        )}

        {featured && (
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {/* Newest post */}
            <Link
              href={featured.link}
              className={`group flex flex-col overflow-hidden rounded-3xl bg-[#0a2440] shadow-[0_30px_70px_-35px_rgba(10,36,64,0.8)] transition duration-300 hover:-translate-y-1 ${
                side.length ? "lg:col-span-7" : "lg:col-span-12"
              }`}
            >
              <PostImage post={featured} className="aspect-video" />
              <div className="flex flex-1 flex-col justify-between gap-6 p-7 sm:p-9">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0a2440]">
                      Latest article
                    </span>
                    <PostMeta post={featured} className="text-xs text-white/60" />
                  </div>
                  <h3 className="text-2xl font-extrabold leading-snug text-white sm:text-3xl">{featured.title}</h3>
                  <p className="line-clamp-3 text-base leading-relaxed text-white/75">{featured.excerpt}</p>
                </div>
                <span className="inline-flex items-center self-start rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-[#0a2440] transition group-hover:bg-lime-300">
                  Read article
                  <ArrowIcon />
                </span>
              </div>
            </Link>

            {/* Next most recent posts, as a compact list */}
            {side.length > 0 && (
              <div className="flex flex-col rounded-3xl border border-[#0a2440]/10 bg-white p-3 shadow-[0_20px_45px_-35px_rgba(10,36,64,0.6)] lg:col-span-5">
                <p className="px-4 pb-1 pt-3 text-xs font-bold uppercase tracking-[0.25em] text-lime-500">Recently published</p>
                {side.map((post) => (
                  <Link
                    key={post.link}
                    href={post.link}
                    className="group flex flex-1 items-center gap-4 rounded-2xl p-4 transition hover:bg-[#0a2440]/[0.04]"
                  >
                    <PostImage post={post} className="aspect-video w-28 shrink-0 rounded-xl sm:w-40 lg:w-28 xl:w-40" />
                    <div className="min-w-0 space-y-1.5">
                      <PostMeta post={post} className="text-[10px] text-[#0a2440]/55" />
                      <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#0a2440] transition group-hover:text-lime-600">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Older posts */}
            {grid.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-3">
                {grid.map((post) => (
                  <Link
                    key={post.link}
                    href={post.link}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-[#0a2440]/10 bg-white shadow-[0_20px_45px_-35px_rgba(10,36,64,0.6)] transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-[0_30px_60px_-35px_rgba(10,36,64,0.7)]"
                  >
                    <PostImage post={post} className="aspect-video" />
                    <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                      <div className="space-y-3">
                        <PostMeta post={post} className="text-xs text-[#0a2440]/55" />
                        <h3 className="line-clamp-3 text-xl font-bold leading-snug text-[#0a2440]">{post.title}</h3>
                        <p className="line-clamp-3 text-sm leading-relaxed text-[#0a2440]/75">{post.excerpt}</p>
                      </div>
                      <span className="inline-flex items-center text-sm font-semibold text-[#0a2440] transition group-hover:text-lime-600">
                        Read article
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Featured images have text baked into them, so they're never cropped: the image is
 * contained, over a blurred copy of itself that fills any leftover space.
 */
function PostImage({ post, className }: { post: HubspotPost; className: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#0a2440] to-[#163a63] ${className}`}>
      {post.image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image.src} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image.src}
            alt={post.image.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain transition duration-500 group-hover:scale-105"
          />
        </>
      )}
    </div>
  );
}

function PostMeta({ post, className }: { post: HubspotPost; className: string }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold uppercase tracking-[0.2em] ${className}`}>
      {post.published && <span className="whitespace-nowrap">{post.published}</span>}
      {post.published && <span aria-hidden>·</span>}
      <span className="whitespace-nowrap">{post.readMinutes} min read</span>
    </p>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M2 6h7m0 0L6.75 3.75M9 6 6.75 8.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
