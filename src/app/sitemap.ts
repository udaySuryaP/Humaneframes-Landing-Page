import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { blogPosts, legalPages, projects, serviceCards } from "@/lib/site-content";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
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
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceCards.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified,
    changeFrequency: "yearly",
    priority: 0.45,
  }));

  const legalRoutes: MetadataRoute.Sitemap = Object.keys(legalPages).map((slug) => ({
    url: absoluteUrl(`/legal/${slug}`),
    lastModified,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes, ...legalRoutes];
}
