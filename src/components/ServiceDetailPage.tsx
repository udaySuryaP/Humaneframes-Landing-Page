import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/lib/site-content";
import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = serviceCards.find((item) => item.slug === slug) ?? serviceCards[0];
  const more = serviceCards.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Services" />
      <section className="pt-[121px] md:pt-[190px]">
        <Container>
          <div>
            <h1 className="max-w-[850px] text-[clamp(42px,5vw,64px)] font-semibold leading-[1.2]">
              {service.title}
            </h1>
            <p className="mt-[30px] max-w-[600px] text-[18px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f]">
              {service.description}
            </p>
          </div>
          <div className="relative mt-[50px] h-[228px] overflow-hidden bg-neutral-200 md:h-[762px]">
            <Image src={service.image} alt={service.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="pt-[120px]">
        <Container>
          <div className="grid gap-[60px] md:grid-cols-[minmax(0,725px)_350px] md:gap-[100px]">
            <div>
              <h2 className="mb-[18px] text-[30px] font-semibold leading-[1.2] tracking-[-0.03em]">What We Offer</h2>
              <div className="space-y-0">
                {service.offer.map((item) => (
                  <p key={item} className="relative pl-[21px] text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-black before:absolute before:left-0 before:top-[10px] before:h-[4px] before:w-[4px] before:rounded-full before:bg-black">
                    {item}
                  </p>
                ))}
              </div>
              <h2 className="mb-[18px] mt-[84px] text-[30px] font-semibold leading-[1.2] tracking-[-0.03em]">Key Benefits</h2>
              <div>
                {service.benefits.map((item) => (
                  <p key={item} className="relative pl-[21px] text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-black before:absolute before:left-0 before:top-[10px] before:h-[4px] before:w-[4px] before:rounded-full before:bg-black">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <aside className="bg-white px-[30px] py-[28px] md:min-h-[520px]">
              <h2 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.03em]">{service.title} Package</h2>
              <h3 className="mt-[35px] text-[18px] font-medium leading-[1.4] tracking-[-0.03em]">What&apos;s include:</h3>
              <ul className="mt-[14px] space-y-[10px] text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f]">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-[13px]">
                    <span className="text-black">{"\u2713"}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-[45px] text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f]">Starting from</p>
              <p className="text-[32px] font-semibold leading-[1.2] tracking-[-0.03em]">{service.price}</p>
              <div className="mt-[30px]">
                <Pill href="/contact">Book an intro call</Pill>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="pt-[100px]">
        <Container>
          <div className="mb-[50px] flex flex-col gap-[20px] md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(36px,4.27vw,54px)] font-semibold leading-[1.2]">More Services</h2>
            <Pill href="/services">See all services</Pill>
          </div>
        </Container>
        <Container className="!px-[15px] max-md:!px-[6px]">
          <div className="grid gap-[20px] md:grid-cols-2">
            {more.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="group bg-white">
                <div className="relative h-[242px] overflow-hidden bg-neutral-200 md:h-[399px]">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="min-h-[150px] p-[20px]">
                  <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-[16px] text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f]">{item.description}</p>
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
