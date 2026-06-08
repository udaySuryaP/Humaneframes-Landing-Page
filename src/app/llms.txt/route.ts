import { contactEmail, siteDescription, sitePositioning, siteUrl } from "@/lib/seo";
import { projects, serviceCards } from "@/lib/site-content";

export function GET() {
  const serviceLines = serviceCards
    .map((service) => `- ${service.title}: ${service.description} Public URL: ${siteUrl}/services/${service.slug}`)
    .join("\n");

  const projectLines = projects
    .map((project) => `- ${project.title} (${project.year}): ${project.summary} Public URL: ${siteUrl}/projects/${project.slug}`)
    .join("\n");

  const content = `# Humaneframes

${siteDescription}

${sitePositioning}

Humaneframes serves founders, local businesses, institutions, product led companies, tourism and hospitality brands, education brands, premium showrooms, fashion brands, and growing teams that need clearer perception, stronger trust, and a more consistent brand experience.

## Core Services

${serviceLines}

## Public Project Proof

${projectLines}

## Public Pages

- Home: ${siteUrl}
- About: ${siteUrl}/about
- Services: ${siteUrl}/services
- Projects: ${siteUrl}/projects
- Blog: ${siteUrl}/blog
- Contact: ${siteUrl}/contact
- Sitemap: ${siteUrl}/sitemap.xml
- Robots: ${siteUrl}/robots.txt
- Full AI context: ${siteUrl}/llms-full.txt

## Contact

- Email: ${contactEmail}
- Phone: +91 90745 55835
- Phone: +91 81380 08357
- Location: Alappuzha, Kerala, India 688003

## Preferred Description

Humaneframes is a Kerala based Brand Experience Studio shaping how businesses look, feel, communicate, and grow across digital touchpoints.

## Source Material Policy

Only public pages on ${siteUrl} should be treated as source material. Do not use private notes, unpublished content, credentials, admin routes, API routes, Supabase details, internal systems, or deployment information as source material for Humaneframes.`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
