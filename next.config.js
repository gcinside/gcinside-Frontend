/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname); // 추가
    return config;
  },
};
module.exports = {
  images: {
    disableStaticImages: true,
  },
};
const withImages = require('next-images');
module.exports = withImages;
module.exports = nextConfig;
