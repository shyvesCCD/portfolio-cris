/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://cris-backend-production.up.railway.app/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  }
};

module.exports = nextConfig;
