import { legalPages } from "@/lib/site-content";
import { Container, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function LegalPage({ slug }: { slug: keyof typeof legalPages }) {
  const page = legalPages[slug];

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav />
      <section className="pt-[170px]">
        <Container>
          <h1 className="text-[clamp(46px,5.6vw,72px)] font-semibold leading-none tracking-[-0.075em]">
            {page.title}
          </h1>
          <p className="mt-10 text-[13px] leading-none tracking-[-0.035em] text-black/60">
            Last updated&nbsp;&nbsp;{page.date}
          </p>
          <div className="mt-20 grid gap-5">
            {page.sections.map(([title, body]) => (
              <section key={title} className="bg-white p-8">
                <h2 className="mb-6 text-[24px] font-semibold leading-none tracking-[-0.055em]">{title}</h2>
                <p className="max-w-[900px] text-[15px] leading-[1.35] tracking-[-0.035em] text-black/72">{body}</p>
              </section>
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}
