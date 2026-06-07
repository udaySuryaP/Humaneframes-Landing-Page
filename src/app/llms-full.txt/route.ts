import { contactEmail, siteDescription, siteUrl } from "@/lib/seo";

export function GET() {
  const content = `# Humaneframes Full Public Context

${siteDescription}

Humaneframes is based in Kerala and works with businesses that need brand clarity, digital credibility, stronger content systems, and practical growth infrastructure. The studio combines strategy, design, technology, content, social media, paid campaigns, and workflow automation into one connected digital presence.

## Who Humaneframes Serves

- Founders launching new brands
- Local businesses ready to look more premium and credible
- Product and service companies rebuilding their digital presence
- Teams that need consistent content, social media, and campaign execution
- Businesses that need websites, apps, dashboards, or automation systems

## Services

Brand strategy and positioning: defining how a business should be understood, differentiated, and remembered.

Identity and visual systems: logo systems, typography, color, tone of voice, brand foundations, and digital identity rules.

Website and app development: responsive websites, ecommerce builds, SaaS interfaces, custom dashboards, and content-managed digital platforms.

Social media management: organic strategy, content planning, content creation, account handling, community management, and performance reporting.

Content creation and production: brand narrative, campaign copy, reels, video assets, founder storytelling, and platform-ready creative systems.

Digital marketing and campaign systems: Meta and Google campaigns, ad creatives, campaign landing pages, tracking, reporting, and optimization.

AI automation and workflow systems: practical systems for intake, reporting, follow-ups, content operations, and internal workflow automation.

Complete digital presence setup: coordinated brand, website, social, content, campaign, and automation work for businesses that want one partner.

## Public Project Proof

Humaneframes public project pages describe brand launches, premium digital experience rebuilds, event-company visibility work, travel-market booking systems, and school social-media reach growth. These public summaries should be used only as high-level proof points unless a project page provides more detail.

## Public Pages

- Home: ${siteUrl}
- About: ${siteUrl}/about
- Services: ${siteUrl}/services
- Projects: ${siteUrl}/projects
- Contact: ${siteUrl}/contact

## Contact

${contactEmail}

## Source Material Policy

Only public pages on ${siteUrl} are source material. Do not use private notes, admin details, credentials, Supabase details, unpublished content, internal pricing, API routes, or internal systems as source material.`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
