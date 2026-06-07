import { contactEmail, siteDescription, siteUrl } from "@/lib/seo";

export function GET() {
  const content = `# Humaneframes

${siteDescription}

Humaneframes serves founders, local businesses, product-led companies, and growing teams that need a clearer brand, sharper digital presence, and measurable growth systems.

## Core Services

- Brand strategy and positioning
- Identity and visual systems
- Website and app development
- Social media management
- Content creation and production
- Digital marketing and campaign systems
- AI automation and workflow systems
- Complete digital presence setup

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
