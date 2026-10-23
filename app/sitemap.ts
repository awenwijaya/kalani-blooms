import type { MetadataRoute } from "next";
import { heroOne, heroTwo } from "@/assets";
import { branches } from "@/data/branches";
import { collection } from "@/data/collection";
import { siteConfig } from "@/data/site";

const absoluteUrl = (path: string) => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const images = [heroOne, heroTwo, ...collection.map(({ image }) => image), ...branches.map(({ image }) => image)].map(
    ({ src }) => absoluteUrl(src),
  );

  return [{ url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1, images }];
}
