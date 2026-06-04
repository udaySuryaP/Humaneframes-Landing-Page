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
      <section className="pt-[90px] md:pt-[138px] lg:pt-[172px]">
        <Container>
          <div className="relative">
            <h1 className="max-w-[850px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[52px] lg:text-[58px]">
              {service.title}
            </h1>
            <p className="mt-[24px] max-w-[335px] text-[11px] font-medium leading-[1.42] tracking-[-0.03em] text-black/78 md:max-w-[590px] md:text-[13px] lg:text-[14px]">
              {service.description}
            </p>
            <span className="absolute right-0 top-[120px] hidden h-[24px] w-[24px] place-items-center rounded-full bg-black/65 text-[13px] leading-none text-white md:grid lg:top-[148px]">
              +
            </span>
          </div>
          <div className="relative mt-[44px] h-[220px] overflow-hidden bg-neutral-200 sm:h-[360px] md:h-[620px] xl:h-[865px]">
            <Image src={service.image} alt={service.title} fill priority sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1199px) calc(100vw - 40px), 1380px" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="pt-[56px] md:pt-[82px] lg:pt-[94px]">
        <Container>
          <div className="grid gap-[44px] lg:grid-cols-[minmax(0,920px)_365px] lg:justify-between lg:gap-[90px]">
            <div className="max-w-[920px]">
              <h2 className="mb-[12px] text-[20px] font-semibold leading-[1.12] tracking-[-0.04em] md:mb-[18px] md:text-[24px] lg:text-[26px]">What We Offer</h2>
              <div className="space-y-[2px] md:space-y-[4px]">
                {service.offer.map((item) => (
                  <BulletParagraph key={item} item={item} />
                ))}
              </div>
              <h2 className="mb-[12px] mt-[38px] text-[20px] font-semibold leading-[1.12] tracking-[-0.04em] md:mb-[18px] md:mt-[56px] md:text-[24px] lg:text-[26px]">Key Benefits</h2>
              <div className="space-y-[2px] md:space-y-[4px]">
                {service.benefits.map((item) => (
                  <BulletParagraph key={item} item={item} />
                ))}
              </div>
            </div>
            <aside className="bg-white px-[22px] py-[24px] md:w-full md:max-w-[365px] md:justify-self-end md:px-[28px] md:py-[32px] lg:min-h-[510px] lg:px-[30px] lg:py-[34px]">
              <h2 className="text-[18px] font-semibold leading-[1.18] tracking-[-0.035em] md:text-[20px] lg:text-[22px]">{service.title} Package</h2>
              <h3 className="mt-[30px] text-[12px] font-medium leading-[1.35] tracking-[-0.03em] md:text-[14px]">What&apos;s include:</h3>
              <ul className="mt-[16px] space-y-[14px] text-[11px] font-medium leading-[1.35] tracking-[-0.03em] text-[#4f4f4f] md:text-[13px]">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-[13px]">
                    <span className="text-black">{"\u2713"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-[44px] text-[12px] font-medium leading-[1.35] tracking-[-0.03em] text-[#4f4f4f] md:text-[13px]">Starting from</p>
              <p className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[40px] lg:text-[44px]">{service.price}</p>
              <div className="mt-[24px]">
                <DetailPill href="/contact">Book an intro call</DetailPill>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="mt-[94px] border-t border-black/10 pt-[78px] md:mt-[110px] md:pt-[92px] lg:mt-[120px] lg:pt-[102px]">
        <Container>
          <div className="mb-[34px] flex items-end justify-between gap-[20px] md:mb-[48px]">
            <h2 className="text-[28px] font-semibold leading-[1.12] tracking-[-0.04em] md:text-[44px] lg:text-[50px]">More Services</h2>
            <DetailPill href="/services">See all services</DetailPill>
          </div>
          <div className="grid gap-[20px] md:grid-cols-2">
            {more.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="group bg-white">
                <div className="relative h-[210px] overflow-hidden bg-neutral-200 sm:h-[320px] md:h-[390px] lg:h-[442px]">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1199px) calc((100vw - 40px - 20px) / 2), 680px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="min-h-[110px] p-[18px] md:min-h-[128px] md:p-[20px]">
                  <h3 className="text-[18px] font-semibold leading-[1.16] tracking-[-0.035em] md:text-[20px] lg:text-[22px]">{item.title}</h3>
                  <p className="mt-[12px] overflow-hidden text-[11px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] md:text-[13px]">{item.description}</p>
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
    <p className="relative pl-[10px] text-[10px] font-medium leading-[1.34] tracking-[-0.03em] text-black before:absolute before:left-0 before:top-[6px] before:h-[2.5px] before:w-[2.5px] before:rounded-full before:bg-black md:pl-[16px] md:text-[12px] md:leading-[1.4] md:before:top-[8px] md:before:h-[4px] md:before:w-[4px] lg:text-[13px]">
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
