import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/webp"],
    // keep the photos crisp (Next.js defaults to quality 75)
    qualities: [90],
  },
};

export default nextConfig;
