import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.31.28:3000", "192.168.31.28"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/kmgkmgnr7/**",
      },
    ],
  },
};

export default nextConfig;
