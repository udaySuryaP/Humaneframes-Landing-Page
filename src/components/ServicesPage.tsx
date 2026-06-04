import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/lib/site-content";
import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

const publishedServices = serviceCards;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Services" />
      <section className="pb-[43px] pt-[121px] md:pb-[93px] md:pt-[190px]">
        <Container>
          <div className="grid gap-4 md:grid-cols-[426px_minmax(0,740px)] md:gap-[30px]">
            <div>
              <h1 className="text-[clamp(42px,5vw,64px)] font-semibold leading-[1.2]">
                Our Services
              </h1>
              <p className="mt-[50px] max-w-[360px] text-[18px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f] md:max-w-[200px]">
                Creative services that build brands, products, and presence
              </p>
            </div>
            <div className="md:pt-[131px]">
              <p className="max-w-[740px] text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#4f4f4f]">
                We are a multidisciplinary brand and digital growth company, built to help
                businesses take the next step through strategy, creative execution, and measurable
                results.
              </p>
              <div className="mt-[25px] md:mt-[24px]">
                <Pill href="/contact">Start a project</Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="space-y-[24px] md:-mr-[24px]">
            {publishedServices.map((service, index) => (
              <article
                key={service.slug}
                className={`grid bg-white max-md:mx-[-9px] md:h-[559px] ${
                  index % 2 === 0
                    ? "md:grid-cols-[28.5fr_71.5fr]"
                    : "md:-ml-[21px] md:mr-[30px] md:grid-cols-[71.5fr_28.5fr]"
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
    <div className={`min-h-[512px] overflow-hidden px-[29px] py-[43px] max-md:mx-[9px] max-md:min-h-0 max-md:px-5 max-md:pb-[62px] max-md:pt-[20px] md:h-[559px] ${className}`}>
      <h2 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.03em] md:mt-[2px]">{service.title}</h2>
      <p className="mt-[18px] max-w-[302px] text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f]">
        {service.description}
      </p>
      <p className="mt-[30px] text-[18px] font-medium leading-[1.4] tracking-[-0.03em]">Core Capabilities</p>
      <ul className="mt-[14px] space-y-[11px] text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f]">
        {service.capabilities.map((capability) => (
          <li key={capability} className="flex gap-[13px]">
            <span className="text-black">{"\u2713"}</span>
            <span>{capability}</span>
          </li>
        ))}
      </ul>
      <Link href={`/services/${service.slug}`} className="mt-[30px] inline-flex items-center gap-1 text-[16px] font-medium leading-[1.2] tracking-[-0.02em]">
        More details <span className="grid h-4 w-4 place-items-center rounded-full bg-black text-[10px] text-white">+</span>
      </Link>
    </div>
  );
}

function ServiceImage({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  return (
    <div className={`relative h-[294px] overflow-hidden bg-neutral-200 md:h-[559px] ${className}`}>
      <Image src={src} alt={title} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
    </div>
  );
}
