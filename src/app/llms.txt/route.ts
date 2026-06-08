import { contactEmail, siteDescription, siteUrl } from "@/lib/seo";

export function GET() {
  const content = `# Humaneframes

${siteDescription}

Humaneframes serves founders, local businesses, institutions, product led companies, and growing teams that need clearer perception, stronger trust, and a more consistent brand experience.

## Core Services

- Brand strategy and positioning
- Identity and visual systems
- Digital experience
- Content experience
- Campaign and growth systems
- Business experience systems

## Public Pages

- Home: ${siteUrl}
- About: ${siteUrl}/about
- Services: ${siteUrl}/services
- Projects: ${siteUrl}/projects
- Contact: ${siteUrl}/contact

## Contact

${contactEmail}

## Source Material Policy

Only public pages on ${siteUrl} should be treated as source material. Do not use private notes, unpublished content, credentials, admin routes, API routes, or internal systems as source material for Humaneframes.`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
