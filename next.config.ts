/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'assets.ctfassets.net'], // Allow Contentful images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', 
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  async rewrites() {
    // HubSpot serves the blog itself under /blog, but its static assets
    // (css/js bundles, uploaded files, CMS internals) are referenced as
    // root-relative paths outside /blog, so those need proxying too.
    const hubspotAssetPrefixes = ['hs', 'hubfs', 'hs-fs', '_hcms', 'hsappstatic', 'hs-legacy'];

    return [
      // NOTE: /blog is NOT rewritten here - it is proxied by
      // src/app/blog/[[...slug]]/route.ts, which also rewrites HubSpot's absolute
      // blog.dashingdisty.com URLs out of the HTML so links/canonicals stay on this domain.
      {
        source: '/book-a-demo',
        destination: 'https://blog.dashingdisty.com/book-a-dashing-demo',
      },
      ...hubspotAssetPrefixes.map((prefix) => ({
        source: `/${prefix}/:path*`,
        destination: `https://blog.dashingdisty.com/${prefix}/:path*`,
      })),
    ];
  },
};

module.exports = nextConfig;
