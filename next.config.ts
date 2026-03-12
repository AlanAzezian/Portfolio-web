import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent the dev server from dropping connection after 3 minutes of inactivity
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
