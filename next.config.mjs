import path from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (dev) {
      config.devtool = "eval-source-map"; // 推荐用于开发环境
    } else {
      config.devtool = "source-map"; // 推荐用于生产环境
    }

    // Electron specific settings
    if (!isServer) {
      config.target = "electron-renderer";
    }

    // Resolve __dirname
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Alias for easier imports (optional)
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    return config;
  },
};

export default nextConfig;
