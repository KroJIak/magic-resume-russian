import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export const runtime = "edge";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://magicv.art/";

  const sitemap: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}${locale}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0
  }));

  return sitemap;
}
