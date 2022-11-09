/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp'],
    domains: ['i.picsum.photos', 'picsum.photos', 'i.pravatar.cc'],
  },
};

module.exports = nextConfig;
