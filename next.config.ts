import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-leaflet"],
  images: {
    domains: ["your-drupal-site.com"], // Add if serving images from Drupal
  },
};

module.exports = nextConfig;
