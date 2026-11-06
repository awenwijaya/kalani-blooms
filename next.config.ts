import type { NextConfig } from "next";

const canonicalUrl = "https://www.kalaniblooms.com";

// Long caching is for production only. In development it keeps showing OLD images after you replace a file in /public.
const isProduction = process.env.NODE_ENV === "production";

const staticAssetCache = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    // WebP only: AVIF with transparency can render with a visible box in Safari
    formats: ["image/webp"],
    minimumCacheTTL: isProduction ? 86400 : 0, // 1 day in production, none in dev (replaced files show up immediately)
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
      // Files in /public are not fingerprinted, so give them a sensible cache lifetime (production only)
      ...(isProduction
        ? [
            { source: "/img/:path*", headers: staticAssetCache },
            { source: "/svg/:path*", headers: staticAssetCache },
          ]
        : []),
    ];
  },
};

export default nextConfig;
