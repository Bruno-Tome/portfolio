import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://bruno-tome-portfolio.brntr.chatgpt.site/sitemap.xml",
  };
}
