import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/lib/site-content";
import { Container, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = serviceCards.find((item) => item.slug === slug) ?? serviceCards[0];
  const more = serviceCards.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Services" />
      <section className="pt-[64px] md:pt-[110px] lg:pt-[128px]">
        <Container>
          <div>
            <h1 className="max-w-[850px] text-[24px] font-semibold leading-[1.15] md:text-[42px] lg:text-[48px]">
              {service.title}
            </h1>
            <p className="mt-[12px] max-w-[290px] text-[10px] font-medium leading-[1.35] tracking-[-0.03em] text-[#4f4f4f] md:mt-[20px] md:max-w-[590px] md:text-[14px] lg:text-[15px]">
              {service.description}
            </p>
          </div>
          <div className="relative mt-[20px] h-[118px] overflow-hidden bg-neutral-200 sm:h-[214px] md:mt-[35px] md:h-[360px] lg:h-[465px]">
            <Image src={service.image} alt={service.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="pt-[24px] md:pt-[62px] lg:pt-[68px]">
        <Container>
          <div className="grid gap-[34px] lg:grid-cols-[minmax(0,725px)_350px] lg:gap-[100px]">
            <div>
              <h2 className="mb-[8px] text-[12px] font-semibold leading-[1.2] tracking-[-0.03em] md:mb-[14px] md:text-[20px] lg:text-[22px]">What We Offer</h2>
              <div className="space-y-[1px] md:space-y-[3px]">
                {service.offer.map((item) => (
                  <BulletParagraph key={item} item={item} />
                ))}
              </div>
              <h2 className="mb-[8px] mt-[20px] text-[12px] font-semibold leading-[1.2] tracking-[-0.03em] md:mb-[14px] md:mt-[50px] md:text-[20px] lg:text-[22px]">Key Benefits</h2>
              <div className="space-y-[1px] md:space-y-[3px]">
                {service.benefits.map((item) => (
                  <BulletParagraph key={item} item={item} />
                ))}
              </div>
            </div>
            <aside className="bg-white px-[16px] py-[16px] md:max-w-[350px] md:px-[22px] md:py-[24px] lg:min-h-[420px] lg:px-[30px] lg:py-[28px]">
              <h2 className="text-[12px] font-semibold leading-[1.2] tracking-[-0.03em] md:text-[18px] lg:text-[20px]">{service.title} Package</h2>
              <h3 className="mt-[16px] text-[9px] font-medium leading-[1.35] tracking-[-0.03em] md:mt-[28px] md:text-[14px] lg:text-[16px]">What&apos;s include:</h3>
              <ul className="mt-[8px] space-y-[4px] text-[8px] font-medium leading-[1.25] tracking-[-0.03em] text-[#4f4f4f] md:mt-[12px] md:space-y-[8px] md:text-[13px] md:leading-[1.35] lg:text-[14px]">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-[13px]">
                    <span className="text-black">{"\u2713"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-[18px] text-[8px] font-medium leading-[1.35] tracking-[-0.03em] text-[#4f4f4f] md:mt-[34px] md:text-[13px] lg:text-[14px]">Starting from</p>
              <p className="text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] md:text-[28px] lg:text-[32px]">{service.price}</p>
              <div className="mt-[12px] md:mt-[22px]">
                <DetailPill href="/contact">Book an intro call</DetailPill>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="pt-[58px] md:pt-[92px] lg:pt-[105px]">
        <Container>
          <div className="mb-[28px] flex items-end justify-between gap-[20px] md:mb-[35px] lg:mb-[40px]">
            <h2 className="text-[22px] font-semibold leading-[1.2] md:text-[36px] lg:text-[42px]">More Services</h2>
            <DetailPill href="/services">See all services</DetailPill>
          </div>
        </Container>
        <Container>
          <div className="grid gap-[20px] md:grid-cols-2">
            {more.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="group bg-white">
                <div className="relative h-[145px] overflow-hidden bg-neutral-200 sm:h-[242px] md:h-[280px] lg:h-[340px]">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="min-h-[100px] p-[14px] md:min-h-[120px] md:p-[18px] lg:min-h-[135px] lg:p-[20px]">
                  <h3 className="text-[14px] font-semibold leading-[1.2] tracking-[-0.03em] md:text-[18px] lg:text-[22px]">{item.title}</h3>
                  <p className="mt-[10px] text-[10px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f] md:mt-[12px] md:text-[13px] lg:text-[15px]">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}

function BulletParagraph({ item }: { item: string }) {
  const [label, ...rest] = item.split(":");
  const body = rest.join(":").trim();

  return (
    <p className="relative pl-[10px] text-[8px] font-medium leading-[1.25] tracking-[-0.03em] text-black before:absolute before:left-0 before:top-[4px] before:h-[2.5px] before:w-[2.5px] before:rounded-full before:bg-black md:pl-[16px] md:text-[14px] md:leading-[1.42] md:before:top-[8px] md:before:h-[4px] md:before:w-[4px] lg:text-[15px]">
      {body ? (
        <>
          <span className="font-semibold">{label}:</span> {body}
        </>
      ) : (
        item
      )}
    </p>
  );
}

function DetailPill({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex h-[20px] shrink-0 items-center gap-1.5 rounded-full bg-black px-2 text-[8px] font-semibold leading-none tracking-[-0.02em] text-white transition-all duration-300 hover:scale-[0.98] hover:bg-black/75 md:h-[30px] md:px-3 md:text-[13px]"
    >
      {children}
      <span className="h-1.5 w-1.5 rounded-full bg-[#fd2400]" />
    </Link>
  );
}
