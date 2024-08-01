/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true, // 确保启用 appDir 模式
  },
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
