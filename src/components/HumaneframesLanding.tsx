"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

const services = [
  {
    number: "01",
    slug: "brand-design",
    title: "Brand Design",
    overview:
      "We build the complete foundation of your brand, from the visual identity people see to the strategy that drives its growth. Every element is designed to be distinct, consistent, and built to scale with your business.",
    capabilities: ["Brand Identity", "Brand Foundation", "Brand Systems", "Growth Strategy", "Visual Identity and Uniformity"],
  },
  {
    number: "02",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    overview:
      "We research, design, and prototype digital interfaces that make sense from the first interaction and support the way people actually move through your product.",
    capabilities: ["User Research", "Wireframing and Prototyping", "Figma Design", "Design Systems", "Experience Design"],
  },
  {
    number: "03",
    slug: "web-and-app-development",
    title: "Web and App Development",
    overview:
      "We build websites and applications that load fast, look sharp, and convert visitors into customers while staying easy for your team to grow.",
    capabilities: ["SaaS Development", "Mobile App Development", "Ecommerce Development", "Custom Panels and Dashboards", "CMS Development"],
  },
  {
    number: "04",
    slug: "content-and-storytelling",
    title: "Content and Storytelling",
    overview:
      "We find the story at the centre of your brand and build content that connects with your audience, communicates clearly, and drives action.",
    capabilities: ["Brand Narrative", "Website and Campaign Copywriting", "Content Production", "Founder Storytelling", "Short Form and Long Form Content"],
  },
  {
    number: "05",
    slug: "ads-and-growth",
    title: "Ads and Growth",
    overview:
      "We plan, launch, and optimise paid campaigns that put your brand in front of the right people at the right time, with every rupee tracked and tested.",
    capabilities: ["Meta Campaigns", "Google Ads", "Video Ads and Reels", "Digital Ad Creatives", "Product Photography and Videography"],
  },
];

const stats = [
  { value: "8+", label: "Businesses Transformed" },
  { value: "1M+", label: "Views Generated" },
  { value: "180%", label: "Avg. Engagement Growth" },
  { value: "40%", label: "Growth in Monthly Leads" },
];

const works = [
  {
    year: "2026",
    title: "Imism from Idea to Full Brand Launch",
    image: "/images/current-site/5dPICNVskiIoFCUXZ8nPQsij8.png",
  },
  {
    year: "2025",
    title: "Destrezzza Transforming a Premium Brand Into a Premium Experience",
    image: "/images/current-site/kfC4SyMtgSdc4B3CsWx102i4nrA.jpg",
  },
  {
    year: "2025",
    title: "Turning an Event Company Into a Visible Regional Brand",
    image: "/images/current-site/NTLzKZsMLs4oDne9oxD7kotS2w8.jpg",
  },
  {
    year: "2025",
    title: "Zero to Fully Bookable in One of Kerala's Most Competitive Travel Markets",
    image: "/images/current-site/A9aPeT9DeN0TtIN1lKVMP9wVzU8.jpg",
  },
];

const ctaImages = [
  "/images/current-site/GpKoxUJWRs9yBbuqb8nstIUxI.jpg",
  "/images/current-site/kTTGVfoms9rtssvzZgyiMB64GmM.jpg",
  "/images/current-site/JBpQeQXOMbjJ6ODB1cBghiYAxV8.jpg",
  "/images/current-site/EJepzkyS2M6RtQT3j0VG2s9Vso.jpg",
  "/images/current-site/OslGeYkhcn7grxI5MyYovBUtyE.jpg",
  "/images/current-site/PkSKDiO6ZIzVgbahlsXNxmUHJ0.jpg",
];

function SectionKicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`mb-[10px] text-[14px] font-semibold uppercase leading-[1.4] text-[#4f4f4f] ${className}`}>
      <span className="text-[#fd2400]">[</span>{children}<span className="text-[#fd2400]">]</span>
    </p>
  );
}

function Hero() {
  return (
    <section id="top" className="pb-[58px] pt-[121px] md:pt-[138px]">
      <Container>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="max-w-[850px] text-[clamp(42px,5.05vw,64px)] font-semibold leading-[1.2]">
              We are an independent brand and digital company crafting bold identities and experiences that drive real business growth
            </h1>
            <div className="mt-[30px] flex flex-col gap-[45px] md:mt-[50px] md:flex-row md:items-start md:justify-between md:gap-10">
              <div className="order-2 max-w-[325px] md:order-1">
                <p className="text-[18px] font-medium leading-[1.4] text-black">
                  From brand identity to digital experiences and growth strategy, we design, build, and scale everything your brand needs to stand out and perform under one roof.
                </p>
                <div className="mt-[30px] flex items-center gap-[10px]">
                  <Pill href="/contact">Start a project</Pill>
                  <Pill href="#works" variant="light">
                    Our Work
                  </Pill>
                </div>
              </div>
              <HeroShowreel />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroShowreel() {
  const frames = [
    "/images/current-site/A9aPeT9DeN0TtIN1lKVMP9wVzU8.jpg",
    "/images/current-site/NTLzKZsMLs4oDne9oxD7kotS2w8.jpg",
    "/images/current-site/kfC4SyMtgSdc4B3CsWx102i4nrA.jpg",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
      className="order-1 w-full md:order-2 md:w-[300px]"
    >
      <div className="relative h-[216px] w-full overflow-hidden bg-neutral-200 md:h-[180px]">
        {frames.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Humaneframes showreel frame"
            fill
            priority={index === 0}
            sizes="300px"
            className="showreel-frame object-cover"
            style={{ animationDelay: `${index * 4}s` }}
          />
        ))}
      </div>
      <p className="mt-[5px] text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">
        Humaneframes showreel
        <br />
        (Clients &mdash; 2025/2026)
      </p>
    </motion.div>
  );
}

function PageVideo() {
  return (
    <Container className="relative h-[500px] overflow-hidden bg-neutral-200 md:h-[738px]">
      <video
        className="h-full w-full object-cover"
        src="/assets/framer/hero-showreel.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </Container>
  );
}

function Intro() {
  return (
    <section id="about" className="py-[100px]">
      <Container>
        <SectionKicker>Who we are</SectionKicker>
        <h2 className="max-w-[1205px] text-[clamp(36px,4.27vw,54px)] font-semibold leading-[1.2]">
          We combine creativity, data-driven strategies, and authentic storytelling to connect your brand with the right audience and drive measurable business results.
        </h2>
        <div className="mt-[50px] grid gap-[50px] lg:grid-cols-[minmax(0,578px)_minmax(360px,578px)] lg:items-end lg:justify-between">
          <div className="relative h-[320px] w-full overflow-hidden bg-neutral-200 md:h-[385px]">
            <Image
              src="/images/current-site/3B9h8AV1jrN4BPLKUhldIYfIUrw.jpg"
              alt="Red lit editorial portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 578px"
              className="object-cover"
            />
          </div>
          <div className="w-full max-w-[578px] justify-self-end pb-0">
            <p className="text-[18px] font-medium leading-[1.45] tracking-[-0.03em] text-[#4f4f4f]">
              Humaneframes is a brand and digital experience company based in Kerala, built for founders and businesses seeking more than just a vendor. We unite strategy, design, and technology into one integrated system that builds your brand holistically, not in fragmented pieces. Every decision we make is guided by one outcome: measurable business growth.
            </p>
            <div className="mt-[30px]">
              <Pill href="/about">More about us</Pill>
            </div>
          </div>
        </div>
        <div className="mt-[50px] grid grid-cols-1 gap-[10px] min-[560px]:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="min-h-[150px] bg-white px-[30px] py-[30px] min-[560px]:min-h-[145px] lg:min-h-[169px]">
              <p className="text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] min-[560px]:text-[56px] lg:text-[72px] lg:leading-[1.2]">{stat.value}</p>
              <p className="mt-[4px] text-[12px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f] min-[560px]:mt-[8px] min-[560px]:text-[16px] lg:mt-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="pb-[249px]">
      <Container>
        <div className="mb-[50px] grid gap-8 lg:grid-cols-[550px_367px] lg:items-end lg:justify-between">
          <div>
            <SectionKicker>Expertise</SectionKicker>
            <h2 className="max-w-[550px] text-[clamp(36px,4.27vw,54px)] font-semibold leading-[1.2]">
              Solutions built to scale your brand.
            </h2>
          </div>
          <div>
            <p className="mb-[20px] text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">
              We are a multidisciplinary company with one clear mission: to give your brand everything it needs to grow, all in one place, with one team that owns the entire journey.
            </p>
            <Pill href="/services">See all services</Pill>
          </div>
        </div>
        <div className="space-y-[20px]">
          {services.map((service, index) => {
            const isOpen = open === index;
            return (
              <div key={service.title} className="bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="grid w-full grid-cols-[100px_1fr_24px] items-start px-[30px] py-[39px] text-left max-md:grid-cols-[48px_1fr_24px] max-md:px-5 max-md:py-7"
                >
                  <span className="text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">{service.number}</span>
                  <span className="text-[18px] font-semibold leading-[1.4]">{service.title}</span>
                  <span className={`relative h-5 w-5 justify-self-end transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-45"}`} aria-hidden="true">
                    <span className="absolute left-0 top-1/2 h-px w-full bg-black" />
                    <span className="absolute left-1/2 top-0 h-full w-px bg-black" />
                  </span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="grid gap-[35px] px-[30px] pb-[40px] xl:grid-cols-[423px_423px] xl:gap-[100px] xl:pl-[230px]"
                  >
                    <div>
                      <p className="mb-[15px] text-[18px] font-medium leading-[1.4]">What we do</p>
                      <p className="text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">{service.overview}</p>
                      <Link href={`/services/${service.slug}`} className="mt-[65px] inline-flex items-center gap-1 text-[16px] font-medium leading-[1.2]">
                        More details <span className="grid h-4 w-4 place-items-center rounded-full bg-black text-[10px] text-white">+</span>
                      </Link>
                    </div>
                    <div>
                      <p className="mb-[15px] text-[18px] font-medium leading-[1.4]">Core Capabilities</p>
                      <ul className="space-y-[10px] text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">
                        {service.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center gap-[10px]">
                            <span aria-hidden="true">{"\u2713"}</span>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function Work() {
  return (
    <section id="works" className="py-[100px]">
      <Container>
        <div className="mx-auto mb-[50px] max-w-[550px] text-center">
          <SectionKicker className="mb-[10px]">Projects</SectionKicker>
          <h2 className="text-[clamp(36px,4.27vw,54px)] font-semibold leading-[1.2]">
            Selected work that speaks for itself
          </h2>
          <p className="mx-auto mt-[20px] max-w-[550px] text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">
            Our work combines creativity, strategy, and data to deliver digital marketing solutions that drive real growth and meaningful connections.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1206px] gap-[20px] md:grid-cols-2">
          {works.map((work) => (
            <article key={work.title} className="bg-white">
              <div className="relative h-[300px] overflow-hidden bg-neutral-200 md:h-[395px]">
                <Image src={work.image} alt={work.title} fill sizes="(max-width: 768px) 100vw, 593px" className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
              </div>
              <div className="grid min-h-[96px] grid-cols-[1fr_18px] gap-4 px-[20px] py-[20px]">
                <div>
                  <p className="mb-[10px] text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">{work.year}</p>
                  <h3 className="text-[18px] font-semibold leading-[1.4]">{work.title}</h3>
                </div>
                <span className="mt-1 grid h-[17px] w-[17px] place-items-center rounded-full bg-black text-[10px] leading-none text-white">
                  +
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-[40px] text-center">
          <Pill href="/projects">View all works</Pill>
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  const marquee = [...ctaImages, ...ctaImages, ...ctaImages];

  return (
    <section id="contact" className="py-[100px]">
      <Container>
        <div className="mx-auto max-w-[550px] text-center">
          <SectionKicker className="mb-[10px]">Your future, together</SectionKicker>
          <h2 className="text-[clamp(36px,4.27vw,54px)] font-semibold leading-[1.2]">
            Ready to build a bold, purposeful brand?
          </h2>
          <p className="mx-auto mt-[20px] max-w-[550px] text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">
            Have questions? We are ready to help you clarify what to do next, together, one step forward.
          </p>
          <div className="mt-[30px] flex flex-wrap justify-center gap-[10px]">
            <Pill href="/contact">Start your project</Pill>
            <Pill href="/contact" variant="light">
              Book free consultation
            </Pill>
          </div>
        </div>
      </Container>
      <div className="mt-[50px] overflow-hidden">
        <div className="hf-marquee flex w-max gap-[20px]">
          {marquee.map((image, index) => (
            <div key={`${image}-${index}`} className="relative h-[280px] w-[280px] shrink-0 overflow-hidden bg-neutral-200 md:h-[400px] md:w-[400px]">
              <Image src={image} alt="Humaneframes brand detail" fill sizes="400px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HumaneframesLanding() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Home" />
      <Hero />
      <PageVideo />
      <Intro />
      <Services />
      <Work />
      <CTA />
      <SiteFooter largeGap={false} />
    </main>
  );
}
