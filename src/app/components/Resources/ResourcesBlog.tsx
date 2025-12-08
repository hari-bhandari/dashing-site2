import Link from "next/link";

interface ResourcesBlogProps {
  /** Provide the public HubSpot RSS feed URL. */
  hubspotBlogId: string;
  maxPosts?: number;
}

interface HubspotPost {
  title: string;
  link: string;
  published: string;
  excerpt: string;
}

const decodeCdata = (value: string) => value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();

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

const pickExcerpt = (item: string) => {
  const candidates = [
    extractTagValue(item, "content:encoded"),
    extractTagValue(item, "description"),
    extractTagValue(item, "summary")
  ];
  const first = candidates.find(Boolean) ?? "";
  const text = stripHtml(first);
  return text.length > 220 ? `${text.slice(0, 217)}…` : text;
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

async function fetchHubspotPosts(feedUrl: string, maxPosts: number): Promise<HubspotPost[]> {
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
    return {
      title: decodeCdata(extractTagValue(item, "title") || "Untitled"),
      link: parseLink(item) || "#",
      published: pickPublishedDate(item),
      excerpt: pickExcerpt(item)
    } satisfies HubspotPost;
  });
}

export default async function ResourcesBlog({ hubspotBlogId, maxPosts = 3 }: ResourcesBlogProps) {
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

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-2xl font-semibold uppercase tracking-widest text-lime-400">Blog</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#0a2440] sm:text-4xl">Latest insights from the Dashing team</h2>
        <p className="mt-3 max-w-2xl text-xl leading-relaxed text-[#0a2440]/80">
          Articles, guides, and perspectives on running a more profitable, efficient brokerage.
        </p>

        <div className="mt-10 rounded-2xl border border-[#0a2440]/10 bg-white/50 p-6 shadow-[0_20px_55px_-30px_rgba(10,36,64,0.5)]">
          {error && (
            <p className="mb-6 text-center text-sm font-semibold text-[#0a2440]/70">{error}</p>
          )}
          {!error && posts.length === 0 && (
            <p className="mb-6 text-center text-sm font-semibold text-[#0a2440]/60">No posts found in the RSS feed yet.</p>
          )}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.link}
                className="flex h-full flex-col justify-between rounded-2xl border border-[#0a2440]/10 bg-white/90 p-5 text-left shadow-[0_20px_45px_-35px_rgba(10,36,64,0.7)] transition hover:-translate-y-1 hover:border-lime-200/60"
              >
                <div className="space-y-3">
                  {post.published && <p className="text-xs uppercase tracking-[0.25em] text-[#0a2440]/70">{post.published}</p>}
                  <h3 className="text-xl font-semibold text-[#0a2440]">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-[#0a2440]/80">{post.excerpt}</p>
                </div>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-lime-500 transition hover:text-lime-400"
                >
                  Read article
                  <svg className="ml-2 h-3.5 w-3.5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path
                      d="M2 6h7m0 0L6.75 3.75M9 6 6.75 8.25"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
