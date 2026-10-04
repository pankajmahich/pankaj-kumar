import { MetadataRoute } from "next";
import { portfolioData } from "@/constants/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = portfolioData.socialLinks.portfolio || "https://example.com";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
