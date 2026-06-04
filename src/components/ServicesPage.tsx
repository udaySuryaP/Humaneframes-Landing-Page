import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/lib/site-content";
import { CheckList, Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Services" />
      <section className="pb-[14px] pt-[190px]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <h1 className="text-[clamp(42px,5vw,64px)] font-semibold leading-[1.2]">
                Our Services
              </h1>
              <p className="mt-14 max-w-[150px] text-[13px] leading-[1.18] tracking-[-0.035em] text-black/75">
                Creative services that build brands, products, and presence
              </p>
            </div>
            <div className="max-w-[620px] self-end lg:pt-[74px]">
              <p className="text-[20px] font-medium leading-[1.1] tracking-[-0.055em] text-black/80">
                We are a multidisciplinary brand and digital growth company, built to help
                businesses take the next step through strategy, creative execution, and measurable
                results.
              </p>
              <div className="mt-5">
                <Pill href="/contact">Start a project</Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-[92px]">
        <Container>
          <div className="space-y-10">
            {serviceCards.map((service, index) => (
              <article key={service.slug} className="grid bg-white lg:grid-cols-[351px_1fr]">
                {index % 2 === 1 && (
                  <ServiceImage src={service.image} title={service.title} className="lg:order-first" />
                )}
                <div className={`${index % 2 === 1 ? "lg:order-last" : ""} p-7 lg:p-8`}>
                  <h2 className="text-[21px] font-bold leading-none tracking-[-0.055em]">{service.title}</h2>
                  <p className="mt-5 max-w-[330px] text-[13px] leading-[1.22] tracking-[-0.04em] text-black/76">
                    {service.description}
                  </p>
                  <p className="mt-8 mb-4 text-[12px] font-semibold leading-none tracking-[-0.035em]">
                    Core Capabilities
                  </p>
                  <CheckList items={service.capabilities} />
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-12 inline-flex text-[11px] font-semibold leading-none tracking-[-0.03em]"
                  >
                    More details&nbsp;+
                  </Link>
                </div>
                {index % 2 === 0 && <ServiceImage src={service.image} title={service.title} />}
              </article>
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}

function ServiceImage({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  return (
    <div className={`relative min-h-[360px] overflow-hidden bg-neutral-200 lg:min-h-[559px] ${className}`}>
      <Image src={src} alt={title} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
    </div>
  );
}
