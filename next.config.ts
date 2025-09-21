import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [],
    remotePatterns: [],
  },
  
  // Compression
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Bundle analyzer (only in development)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: unknown) => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const BundleAnalyzerPlugin = require('@next/bundle-analyzer');
      (config as { plugins: unknown[] }).plugins.push(
        new BundleAnalyzerPlugin({
          enabled: true,
        })
      );
      return config;
    },
  }),
  
  // Output configuration for static export (if needed)
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
