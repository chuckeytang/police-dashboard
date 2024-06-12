/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (dev) {
      config.devtool = "source-map";
    }
    return config;
  },
};

export default nextConfig;
