# Humaneframes Website Progress

Last updated: 2026-06-08

## Current Git State

- Current branch: `feature/seo-basics`
- Production branch: `main`
- `main` has not been modified directly.
- Production deployment was not touched.
- Supabase was not touched.
- No migrations were run.
- No admin or CMS work was added.

## Branch And Commit History

Latest commits:

- `4e5b7f0` - `Update brand experience site content`
- `c1d2737` - `Add SEO crawler and LLM basics`
- `d03f43b` - latest known `main` commit, `Refine responsive pages and link targets`

The branch `feature/seo-basics` has already been pushed to GitHub and tracks:

`origin/feature/seo-basics`

PR creation URL:

`https://github.com/udaySuryaP/Humaneframes-Landing-Page/pull/new/feature/seo-basics`

## Work Completed

### 1. Repository Stabilization

- Cleaned the repository workflow back to a simple production setup.
- Kept `main` as the production baseline.
- Deleted experimental local and remote branches after confirmation:
  - `admin-panel`
  - `feature/admin-panel`
  - `feature/seo-llm-readiness`
  - `seo-cms-production`
- Confirmed local branch list and remote branch list were clean afterward.
- Did not merge admin, CMS, or SEO experimental work into `main`.
- Did not force push.
- Did not touch Vercel production deployment.
- Did not touch Supabase.

### 2. SEO Basics Branch

Created new branch:

`feature/seo-basics`

Added SEO and crawler basics without changing the public visual design.

Files added or updated:

- `src/lib/seo.ts`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/llms.txt/route.ts`
- `src/app/llms-full.txt/route.ts`
- `src/components/SiteChrome.tsx`

Implemented:

- Global Next.js App Router metadata.
- Metadata base for `https://humaneframes.com`.
- Title template.
- Default title.
- Default description.
- Open Graph metadata.
- Twitter card metadata.
- Canonical metadata.
- Public robots index and follow defaults.
- JSON-LD structured data.
- `robots.txt`.
- `sitemap.xml`.
- `llms.txt`.
- `llms-full.txt`.

Structured data added:

- Organization schema.
- WebSite schema.
- ProfessionalService schema.

Also fixed one non-visual footer link issue:

- Footer email label was `hello.humaneframes@gmail.com`.
- The `mailto:` target was corrected to `mailto:hello.humaneframes@gmail.com`.

### 3. Brand Experience Studio Content Rewrite

Updated the website content based on the new positioning:

Humaneframes is a Kerala based Brand Experience Studio shaping how businesses look, feel, communicate, and grow across digital touchpoints.

Core idea now reinforced across the site:

Humaneframes shapes how businesses are seen, experienced, trusted, and remembered across digital touchpoints.

Updated pages and areas:

- Homepage
- About page
- Services page
- Individual service pages
- Projects page
- Individual project pages
- Contact page
- Footer
- Blog intro copy
- Metadata descriptions
- LLM text routes

The visual layout, route structure, and section order were preserved.

### 4. Homepage Content Updates

Updated homepage hero:

- New hero heading:
  - `Your business is`
  - `better than your brand.`
  - `we fix that`
- Hero description now positions Humaneframes as a Brand Experience Studio.
- Hero description width was increased on large screens so it wraps into fewer lines.

Updated Who We Are section:

- New heading focused on turning business value into a brand experience people can see, understand, trust, and remember.
- Updated description to explain the studio model around strategy, identity, digital experience, content, and growth.

Updated homepage metrics:

- `8+` Businesses shaped across digital touchpoints
- `1M+` Views generated across client content
- `525%` Recorded reach growth for education client
- `98K+` Travel brand reach generated from zero presence

Updated Expertise section:

- Heading changed to brand experience systems built for businesses that need to be taken seriously.
- Description now explains that branding, websites, content, and growth are connected into one system.

Updated homepage service accordion:

- Kept the five-service fallback structure so links stay aligned with existing routes.
- Services shown:
  - Brand Strategy and Positioning
  - Identity and Visual Systems
  - Digital Experience
  - Content Experience
  - Campaign and Growth Systems

Updated Projects preview:

- New heading around business perception, trust, and growth.
- New description around moving from unclear or invisible digital presence to stronger brand experience.

Updated final CTA:

- New label: `Your next brand chapter`
- New heading: `Ready to make your business look as strong as it actually is?`
- New description focused on fixing the gap between business value and brand communication.

### 5. About Page Content Updates

Updated About hero:

- Humaneframes is described as a Brand Experience Studio based in Kerala.
- Copy now says the studio helps businesses build stronger perception through strategy, identity, digital presence, content, and growth systems.

Updated highlight content:

- Brand experiences that match real business value.
- Strategy, identity, digital presence, content, and growth working as one system.
- 525 percent recorded reach growth.
- 1M plus views generated.

Updated values:

- Clarity Before Creativity
- Experience Over Decoration
- Systems Over Random Output
- Real Business Context

### 6. Services Content Updates

The service listing page now says:

- Services are built to shape complete brand experiences.
- Humaneframes helps businesses build systems behind how they are seen, experienced, trusted, and remembered.

The six service detail pages were rewritten while preserving existing route slugs:

Existing route slug: `brand-design`

- Public title: Brand Strategy and Positioning
- Package: Brand Strategy Package
- Starting price: INR 34,999

Existing route slug: `ui-ux-design`

- Public title: Identity and Visual Systems
- Package: Identity and Visual System Package
- Starting price: INR 19,999

Existing route slug: `web-and-app-development`

- Public title: Digital Experience
- Package: Digital Experience Package
- Starting price: INR 29,999

Existing route slug: `content-and-storytelling`

- Public title: Content Experience
- Package: Content Experience Package
- Starting price: INR 24,999/mo

Existing route slug: `ads-and-growth`

- Public title: Campaign and Growth Systems
- Package: Campaign and Growth Package
- Starting price: INR 35,000

Existing route slug: `social-media-marketing`

- Public title: Business Experience Systems
- Package: Business Experience Systems Package
- Starting price: Quoted based on scope

### 7. Projects Content Updates

Projects page intro now focuses on:

- How businesses are seen.
- How they are experienced.
- How they are trusted.
- How they are remembered across digital touchpoints.

Updated public project list:

- 2026: Imism from Idea to Full Brand Launch
- 2026: Destrezzza Transforming a Premium Business Into a Premium Experience
- 2025: Turning an Event Company Into a Visible Regional Brand
- 2025: Zero to Fully Bookable in One of Kerala's Most Competitive Travel Markets
- 2025: Reach Growth for a School That Deserved to Be Seen

Individual project pages were rewritten for:

- Imism
- Destrezzza
- Pioneer Caters
- My Alleppey Houseboat
- Matha Senior Secondary School

Each project now has updated:

- Intro
- Industry
- Overview
- Process
- Result
- Outcomes
- Services provided

### 8. Contact Page Updates

Updated contact positioning:

- Page title remains `Get in touch`.
- Copy now asks businesses to share where their brand is right now and what they are trying to build.
- Contact text now points people toward strategy, identity, website, content, or growth.

Updated details:

- Hours: Monday to Saturday, 09:00 AM to 06:00 PM
- Location: Alappuzha, Kerala, India 688003
- Phone: +91 90745 55835
- Phone: +91 81380 08357
- Email: hello.humaneframes@gmail.com

### 9. SEO Refresh Based On Updated Content

After the content rewrite, SEO was updated again to match the new positioning.

Current uncommitted SEO refresh includes:

- Richer global SEO constants in `src/lib/seo.ts`.
- Updated ProfessionalService structured data.
- Service catalog in structured data.
- Contact phone numbers in schema.
- Kerala and Alappuzha location details in schema.
- Dynamic metadata for service detail pages.
- Dynamic metadata for project detail pages.
- Metadata for blog listing and blog detail pages.
- Dynamic metadata for legal pages.
- Expanded sitemap generated from real public data.
- More complete robots rules.
- Curated `llms.txt`.
- Full AI-agent knowledge file in `llms-full.txt`.

### 10. Sitemap Work

The sitemap now includes:

- `/`
- `/about`
- `/services`
- `/projects`
- `/contact`
- `/blog`
- Every service detail page
- Every project detail page
- Every blog post
- Legal pages

The sitemap excludes:

- `/admin`
- `/api`
- Private or internal routes
- Non-existent routes

### 11. Robots Work

`robots.txt` now:

- Allows public crawling.
- Disallows `/api/`.
- Disallows `/admin/`.
- Disallows `/private/`.
- Disallows `/internal/`.
- Disallows `/_vercel/`.
- Includes sitemap URL:
  - `https://humaneframes.com/sitemap.xml`

It does not block CSS, JS, fonts, images, or public assets.

### 12. LLM Files

`llms.txt` now contains:

- Short Humaneframes positioning.
- Who Humaneframes serves.
- Core services with public URLs.
- Public project proof with public URLs.
- Public page map.
- Contact information.
- Preferred description.
- Source material policy for AI agents.

`llms-full.txt` now contains:

- Full public Humaneframes context.
- Preferred short and long descriptions.
- Target client types.
- Detailed service descriptions.
- Package names.
- Included deliverables.
- Starting prices where public.
- Project summaries.
- Project industries.
- Services provided.
- Project overview, process, and result summaries.
- Public metrics and proof points.
- Blog and insight page map.
- Legal page map.
- Contact information.
- Guidance for how AI agents should describe Humaneframes.
- Source material policy.

### 13. Favicon Update

The user added logo assets:

- `assets/Black Logo.png`
- `assets/Red Logo.png`

The existing Next.js app favicon was generated from the black logo:

- `src/app/favicon.ico`

The current favicon is a multi-size `.ico` generated from `assets/Black Logo.png` so browsers use the black Humaneframes mark instead of the default Vercel favicon.

## Validation Completed

### Before Pushing Branch

Ran successfully:

- `npm.cmd run lint`
- `npm.cmd run build`

Local route checks passed for:

- `/`
- `/about`
- `/services`
- `/services/brand-design`
- `/projects`
- `/projects/imism-from-idea-to-full-brand-launch`
- `/contact`
- `/llms.txt`
- `/llms-full.txt`

### After SEO Refresh

Ran successfully:

- `npm.cmd run lint`
- `npm.cmd run build`

Local route checks passed for:

- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`
- `/llms-full.txt`
- `/services/brand-design`
- `/projects/imism-from-idea-to-full-brand-launch`
- `/blog/the-role-of-prototyping-in-product-design`

Assertions passed:

- Sitemap includes service detail routes.
- Sitemap includes project detail routes.
- Sitemap includes blog detail routes.
- Sitemap includes legal routes.
- `llms-full.txt` includes Brand Experience Studio details.
- `llms-full.txt` includes service package details.
- `llms-full.txt` includes project details.
- `robots.txt` includes expected disallow rules and sitemap URL.

Secret scan:

- No secrets found in the scanned repository content.

Whitespace check:

- `git diff --check` passed.
- Git showed Windows line-ending normalization warnings only.

## GitHub Push Status

Already pushed to GitHub:

- Branch: `feature/seo-basics`
- Commit: `c1d2737 Add SEO crawler and LLM basics`
- Commit: `4e5b7f0 Update brand experience site content`

Not yet pushed:

- Latest SEO refresh changes after `4e5b7f0`.
- Favicon update using the black logo asset.
- This `progress.md` file.

## Current Uncommitted Work

Current modified files after the latest SEO refresh:

- `src/app/blog/[slug]/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/legal/[slug]/page.tsx`
- `src/app/llms-full.txt/route.ts`
- `src/app/llms.txt/route.ts`
- `src/app/projects/[slug]/page.tsx`
- `src/app/robots.ts`
- `src/app/services/[slug]/page.tsx`
- `src/app/sitemap.ts`
- `src/app/favicon.ico`
- `src/lib/seo.ts`
- `progress.md`

Current untracked item:

- None after the latest favicon update is committed and pushed.

Tracked favicon source assets:

- `assets/Black Logo.png`
- `assets/Red Logo.png`

The current source image used to generate `src/app/favicon.ico` is `assets/Black Logo.png`.

## Important Constraints Followed

- Did not push directly to `main`.
- Did not merge into `main`.
- Did not force push.
- Did not touch production deployment.
- Did not touch Supabase.
- Did not run migrations.
- Did not add admin panel work.
- Did not add CMS work.
- Did not commit secrets.
- Preserved existing public website layout and routes while changing content.

## Suggested Next Steps

1. Review the website locally on `feature/seo-basics`.
2. Confirm the browser tab shows the Humaneframes black logo favicon.
3. Review `/llms.txt`, `/llms-full.txt`, `/robots.txt`, and `/sitemap.xml`.
4. Commit favicon updates and any later progress notes before pushing.
5. Push `feature/seo-basics` again.
6. Open a PR from `feature/seo-basics` into `main`.
7. Let Vercel preview build the branch.
8. Review the preview visually before merging.
