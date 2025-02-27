/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'], // Allow Contentful images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
