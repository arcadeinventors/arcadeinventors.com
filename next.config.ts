import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> Cloudflare Pages (no SSR adapter needed).
  // Site is fully static: no server API routes, client-side Web3Forms, no DB.
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.1.203", "192.168.1.12", "192.168.1.110", "192.168.1.97"],
};

export default nextConfig;
