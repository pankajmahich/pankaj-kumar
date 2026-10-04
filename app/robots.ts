import { MetadataRoute } from "next";
import { portfolioData } from "@/constants/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = portfolioData.socialLinks.portfolio || "https://example.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
