import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const routes = ["", "/#projetos", "/#contato"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));
  return routes;
}


