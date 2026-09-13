import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/varneth-management-ness",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
