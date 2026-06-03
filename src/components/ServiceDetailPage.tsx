import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/lib/site-content";
import { CheckList, Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = serviceCards.find((item) => item.slug === slug) ?? serviceCards[0];
  const more = serviceCards.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f3f3f1] text-black">
      <SiteNav active="Services" />
      <section className="pt-[170px]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <h1 className="max-w-[680px] text-[clamp(46px,5.6vw,76px)] font-semibold leading-[0.96] tracking-[-0.075em]">
                {service.title}
              </h1>
            </div>
            <div className="max-w-[620px] self-end">
              <p className="text-[20px] font-medium leading-[1.1] tracking-[-0.055em] text-black/80">
                {service.description}
              </p>
              <div className="mt-5">
                <Pill href="/contact">Book an intro call</Pill>
              </div>
            </div>
          </div>
          <div className="relative mt-20 h-[620px] overflow-hidden bg-neutral-200">
            <Image src={service.image} alt={service.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
            <div className="bg-white p-8">
              <h2 className="mb-10 text-[18px] font-bold leading-none tracking-[-0.04em]">What We Offer</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {service.offer.map((item) => (
                  <p key={item} className="text-[14px] leading-[1.28] tracking-[-0.035em] text-black/75">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <div className="bg-black p-8 text-white">
                <h3 className="mb-10 text-[18px] font-bold leading-none tracking-[-0.04em]">Key Benefits</h3>
                <CheckList items={service.benefits} />
              </div>
              <div className="bg-white p-8">
                <p className="mb-5 text-[12px] leading-none text-black/55">Starting from</p>
                <p className="text-[58px] font-semibold leading-none tracking-[-0.07em]">{service.price}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-white p-8">
            <h3 className="mb-8 text-[18px] font-bold leading-none tracking-[-0.04em]">What&apos;s include:</h3>
            <CheckList items={service.includes} />
          </div>
        </Container>
      </section>

      <section className="pt-28">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-[42px] font-semibold leading-none tracking-[-0.065em]">More Services</h2>
            <Pill href="/services">See all services</Pill>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {more.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="bg-white p-6">
                <h3 className="mb-6 text-[18px] font-bold leading-[1.05] tracking-[-0.05em]">{item.title}</h3>
                <p className="text-[12px] leading-[1.25] tracking-[-0.035em] text-black/70">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}
