// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // /ip-vault  -> /scrolls
      { source: "/ip-vault", destination: "/scrolls", permanent: true },
      // and any subpaths (e.g., /ip-vault/medici)
      { source: "/ip-vault/:path*", destination: "/scrolls/:path*", permanent: true },
    ];
  },
};

module.exports = nextConfig;
