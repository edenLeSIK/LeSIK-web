const { i18n } = require("./next-i18next.config");

const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  i18n,
};

module.exports = nextConfig;
