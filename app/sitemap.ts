import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://bruno-tome-portfolio.brntr.chatgpt.site/",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
