import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isGithubPages && { output: "export" }),
  basePath: isGithubPages ? "/art-gallery" : "",
  assetPrefix: isGithubPages ? "/art-gallery" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // In development, redirect /art-gallery/images/ to /images/
  ...(!isGithubPages && {
    async rewrites() {
      return [
        {
          source: "/art-gallery/images/:path*",
          destination: "/images/:path*",
        },
      ];
    },
  }),
};

export default nextConfig;
