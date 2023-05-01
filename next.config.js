/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["https://cris-admin.onrender.com/"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    i18n: {
        locales: ["en", "es", "pt-BR", "ko-KR"],
        defaultLocale: "en",
        localeDetection: false,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
