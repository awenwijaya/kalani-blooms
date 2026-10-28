import type { NextConfig } from "next";

const canonicalUrl = "https://www.kalaniblooms.com";

const staticAssetCache = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
  },
  // Send the bare domain to the canonical www host with a permanent (301) redirect
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kalaniblooms.com" }],
        destination: `${canonicalUrl}/:path*`,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      // Files in /public are not fingerprinted, so give them a sensible cache lifetime
      { source: "/img/:path*", headers: staticAssetCache },
      { source: "/svg/:path*", headers: staticAssetCache },
    ];
  },
};

export default nextConfig;
