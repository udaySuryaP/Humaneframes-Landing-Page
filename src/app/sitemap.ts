import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
