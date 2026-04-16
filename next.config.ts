import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/art-gallery",
  assetPrefix: "/art-gallery",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
