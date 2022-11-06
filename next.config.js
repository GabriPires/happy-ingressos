/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp'],
    domains: ['i.picsum.photos', 'picsum.photos'],
  },
};

module.exports = nextConfig;
