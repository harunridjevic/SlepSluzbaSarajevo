import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true, // Enables SWC minification for faster JS execution
  images: {
    formats: ["image/avif", "image/webp"], // Optimize images for better performance
    domains: ["slepsluzbasarajevo.com"], // Add necessary domains for external images
  },
  experimental: {
    optimizeCss: true, // Reduces unused CSS
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: "all",
    };
    return config;
  },
};

export default nextConfig;
