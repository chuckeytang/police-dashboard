/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (dev) {
      config.devtool = "eval-source-map"; // 推荐用于开发环境
    } else {
      config.devtool = "source-map"; // 推荐用于生产环境
    }
    return config;
  },
};

export default nextConfig;
