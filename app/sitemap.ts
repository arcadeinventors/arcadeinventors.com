import type { MetadataRoute } from "next";
import { PAGES } from "@/content/site-data";

export const dynamic = "force-static";

const SITE = "https://arcadeinventors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...PAGES.filter((p) => p.kind !== "hidden").map((p) => ({
      url: `${SITE}/${p.slug}`,
      lastModified: now,
      changeFrequency: (p.kind === "company" ? "monthly" : "monthly") as "monthly",
      priority: p.kind === "company" ? 0.8 : 0.7,
    })),
  ];
}
