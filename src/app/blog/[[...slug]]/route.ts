import { NextRequest } from 'next/server';

// The blog lives in HubSpot on blog.dashingdisty.com, but we want it served (and
// indexed) as dashingdisty.com/blog/<slug>. A plain Next.js rewrite proxies the pages
// fine, but HubSpot writes absolute URLs into the markup (post links, canonical,
// og:url, RSS), which bounces visitors and search engines back to the subdomain.
// So we proxy here and rewrite HubSpot's host out of the response body.

const HUBSPOT_ORIGIN = 'https://blog.dashingdisty.com';
const HUBSPOT_HOST = 'blog.dashingdisty.com';

// Rewritten body types. Everything else (images, css, js bundles) is streamed through.
const REWRITABLE = /^(text\/html|text\/xml|application\/xml|application\/rss\+xml|application\/atom\+xml)/i;

// Escaped spellings of the host that HubSpot emits inside inline JSON/JS payloads.
const ENCODED_SLASH = '\\u002F';
const ESCAPED_SLASH = '\\/';

// Whatever host the visitor is actually on - localhost in dev, the live domain in
// production - so links never hop between environments.
function publicOrigin(request: NextRequest) {
  const host =
    request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? request.nextUrl.host;
  const proto =
    request.headers.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https');
  return { host, proto };
}

function rewriteHost(body: string, { host, proto }: { host: string; proto: string }) {
  return (
    body
      // Scheme-qualified first, so links keep the right protocol on localhost
      .replaceAll(`https://${HUBSPOT_HOST}`, `${proto}://${host}`)
      .replaceAll(`http://${HUBSPOT_HOST}`, `${proto}://${host}`)
      .replaceAll(`${HUBSPOT_HOST}${ENCODED_SLASH}`, `${host}${ENCODED_SLASH}`)
      .replaceAll(`${HUBSPOT_HOST}${ESCAPED_SLASH}`, `${host}${ESCAPED_SLASH}`)
      .replaceAll(HUBSPOT_HOST, host)
  );
}

async function proxy(request: NextRequest, slug: string[] | undefined) {
  const origin = publicOrigin(request);
  const path = ['blog', ...(slug ?? [])].join('/');
  const target = `${HUBSPOT_ORIGIN}/${path}${request.nextUrl.search}`;

  const upstream = await fetch(target, {
    method: request.method,
    headers: {
      accept: request.headers.get('accept') ?? '*/*',
      'accept-language': request.headers.get('accept-language') ?? 'en',
      'user-agent': request.headers.get('user-agent') ?? 'dashingdisty-blog-proxy',
    },
    redirect: 'manual',
    next: { revalidate: 300 },
  });

  const headers = new Headers();
  for (const key of ['content-type', 'cache-control', 'last-modified', 'etag']) {
    const value = upstream.headers.get(key);
    if (value) headers.set(key, value);
  }

  // HubSpot redirects (e.g. the legacy /dashing-distribution-software-blog rules)
  // must land on our domain, not the subdomain.
  const location = upstream.headers.get('location');
  if (location) {
    headers.set('location', rewriteHost(location, origin));
    return new Response(null, { status: upstream.status, headers });
  }

  const contentType = upstream.headers.get('content-type') ?? '';
  if (!REWRITABLE.test(contentType)) {
    return new Response(upstream.body, { status: upstream.status, headers });
  }

  return new Response(rewriteHost(await upstream.text(), origin), {
    status: upstream.status,
    headers,
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  return proxy(request, slug);
}

export const HEAD = GET;
export const dynamic = 'force-dynamic';
