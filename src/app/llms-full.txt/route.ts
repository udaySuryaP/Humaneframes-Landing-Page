import { contactEmail, siteDescription, siteUrl } from "@/lib/seo";

export function GET() {
  const content = `# Humaneframes Full Public Context

${siteDescription}

Humaneframes is based in Kerala and works with businesses that need brand clarity, digital credibility, stronger content systems, and practical growth infrastructure. The studio combines strategy, identity, digital presence, content, campaigns, and business experience support into one connected system.

## Who Humaneframes Serves

- Founders launching new brands
- Local businesses ready to look more premium and credible
- Product and service companies rebuilding their brand experience
- Teams that need consistent content, social media, and campaign execution
- Businesses that need websites, apps, dashboards, or automation systems

## Services

Brand strategy and positioning: defining how a business should be understood, differentiated, and remembered.

Identity and visual systems: logo systems, typography, color, tone of voice, brand foundations, and digital identity rules.

Digital experience: websites, ecommerce stores, landing pages, CMS systems, admin systems, and web app interfaces built around clarity, trust, and customer action.

Content experience: content strategy, social media management, reel direction, carousel and static content, storytelling, and consistent audience education.

Campaign and growth systems: campaign planning, Meta campaigns, Google campaigns, ad creatives, launch support, and performance review.

Business experience systems: customer journey mapping, workflow support, AI automation support, lead and enquiry systems, and business touchpoint review.

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
