const { i18n } = require("./next-i18next.config");

const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  reactStrictMode: true,
  // swcMinify: true,
  i18n,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      if (!config.resolve.fallback) {
        config.resolve.fallback = {};
      }
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
