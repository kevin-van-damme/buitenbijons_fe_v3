import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: ["react-leaflet"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "be-buitenbijons-test.ddev.site",
        port: "33003",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
