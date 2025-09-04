import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["arkane-pc", "arkane-lab"],
  output: "standalone"
};

export default nextConfig;
