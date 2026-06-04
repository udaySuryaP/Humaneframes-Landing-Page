import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/lib/site-content";
import { Container, SiteFooter, SiteNav } from "@/components/SiteChrome";

const publishedServices = serviceCards;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Services" />
      <section className="pb-[28px] pt-[64px] md:pb-[48px] md:pt-[100px] lg:pb-[62px] lg:pt-[128px]">
        <Container>
          <div className="grid gap-3 md:grid-cols-[minmax(0,280px)_minmax(0,740px)] md:justify-between md:gap-[30px] lg:grid-cols-[426px_minmax(0,740px)]">
            <div>
              <h1 className="text-[32px] font-semibold leading-[1.15] md:text-[clamp(42px,5vw,64px)] md:leading-[1.2]">
                Our Services
              </h1>
              <p className="mt-[16px] max-w-[170px] text-[13px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f] md:mt-[36px] md:max-w-[180px] md:text-[16px] lg:mt-[50px] lg:max-w-[200px] lg:text-[18px]">
                Creative services that build brands, products, and presence
              </p>
            </div>
            <div className="md:pt-[72px] lg:pt-[102px]">
              <p className="max-w-[740px] text-[13px] font-semibold leading-[1.25] tracking-[-0.03em] text-[#4f4f4f] md:text-[18px] lg:text-[20px]">
                We are a multidisciplinary brand and digital growth company, built to help
                businesses take the next step through strategy, creative execution, and measurable
                results.
              </p>
              <div className="mt-[16px] md:mt-[24px]">
                <ServicesPill href="/contact">Start a project</ServicesPill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="space-y-[24px]">
            {publishedServices.map((service, index) => (
              <article
                key={service.slug}
                className={`grid bg-white md:min-h-[430px] lg:min-h-[559px] ${
                  index % 2 === 0
                    ? "md:grid-cols-[320px_minmax(0,1fr)] lg:grid-cols-[351px_minmax(0,1fr)]"
                    : "md:grid-cols-[minmax(0,1fr)_320px] lg:grid-cols-[minmax(0,1fr)_351px]"
                }`}
              >
                <ServiceText service={service} className={`max-md:order-2 ${index % 2 === 1 ? "md:order-2" : ""}`} />
                <ServiceImage src={service.image} title={service.title} className={`max-md:order-1 ${index % 2 === 1 ? "md:order-1" : ""}`} />
              </article>
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}

function ServiceText({ service, className = "" }: { service: (typeof serviceCards)[number]; className?: string }) {
  return (
    <div className={`min-h-[380px] px-5 pb-[54px] pt-[20px] md:min-h-[430px] md:px-[26px] md:py-[32px] lg:min-h-[559px] lg:px-[29px] lg:py-[43px] ${className}`}>
      <h2 className="text-[18px] font-semibold leading-[1.2] tracking-[-0.03em] md:mt-[2px] md:text-[20px] lg:text-[24px]">{service.title}</h2>
      <p className="mt-[14px] max-w-[302px] text-[13px] font-medium leading-[1.42] tracking-[-0.03em] text-[#4f4f4f] md:mt-[16px] md:text-[14px] lg:mt-[18px] lg:text-[16px]">
        {service.description}
      </p>
      <p className="mt-[24px] text-[14px] font-medium leading-[1.4] tracking-[-0.03em] md:text-[16px] lg:mt-[30px] lg:text-[18px]">Core Capabilities</p>
      <ul className="mt-[12px] space-y-[9px] text-[13px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f] md:text-[14px] lg:mt-[14px] lg:space-y-[11px] lg:text-[16px]">
        {service.capabilities.map((capability) => (
          <li key={capability} className="flex gap-[13px]">
            <span className="text-black">{"\u2713"}</span>
            <span>{capability}</span>
          </li>
        ))}
      </ul>
      <Link href={`/services/${service.slug}`} className="mt-[34px] inline-flex items-center gap-1 text-[13px] font-medium leading-[1.2] tracking-[-0.02em] md:text-[14px] lg:mt-[46px] lg:text-[16px]">
        More details <span className="grid h-4 w-4 place-items-center rounded-full bg-black text-[10px] text-white">+</span>
      </Link>
    </div>
  );
}

function ServiceImage({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  return (
    <div className={`relative h-[214px] overflow-hidden bg-neutral-200 sm:h-[294px] md:h-[430px] lg:h-[559px] ${className}`}>
      <Image src={src} alt={title} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
    </div>
  );
}

function ServicesPill({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex h-[30px] items-center gap-1.5 rounded-full bg-black px-3 text-[13px] font-semibold leading-none tracking-[-0.02em] text-white transition-all duration-300 hover:scale-[0.98] hover:bg-black/75 md:h-[39px] md:gap-2 md:px-4 md:text-[16px]"
    >
      {children}
      <span className="h-1.5 w-1.5 rounded-full bg-[#fd2400]" />
    </Link>
  );
}
