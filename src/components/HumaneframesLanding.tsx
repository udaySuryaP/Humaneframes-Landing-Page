"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Design",
    overview:
      "We make strategy visible through identity systems that give your business a clear look, feel, and voice across every touchpoint.",
    capabilities: ["Brand identity", "Logo systems", "Brand strategy", "Creative direction", "Visual guidelines"],
  },
  {
    number: "02",
    title: "UI/UX Design",
    overview: "Digital interfaces shaped around clarity, hierarchy, and an experience people can move through without friction.",
    capabilities: ["Website UX", "Interface systems", "Wireframes", "Design prototypes"],
  },
  {
    number: "03",
    title: "Web and App Development",
    overview: "Fast, responsive builds that turn the approved design into a working digital product ready for real users.",
    capabilities: ["Landing pages", "Websites", "Web apps", "Launch support"],
  },
  {
    number: "04",
    title: "Content and Storytelling",
    overview: "Content systems, campaigns, scripts, and visuals that help your brand show up with consistency and intent.",
    capabilities: ["Reels", "Campaign content", "Copywriting", "Social systems"],
  },
  {
    number: "05",
    title: "Ads and Growth",
    overview: "Campaign assets, performance testing, and growth direction built around measurable business movement.",
    capabilities: ["Paid ads", "Campaign strategy", "Lead journeys", "Reporting"],
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
    year: "2026",
    title: "Destrezzza Transforming a Premium Brand Into a Premium Experience",
    image: "/images/current-site/kfC4SyMtgSdc4B3CsWx102i4nrA.jpg",
  },
  {
    year: "2026",
    title: "Turning an Event Company Into a Visible Regional Brand",
    image: "/images/current-site/NTLzKZsMLs4oDne9oxD7kotS2w8.jpg",
  },
  {
    year: "2026",
    title: "Zero to Fully Bookable in One of Kerala's Most Competitive Travel Markets",
    image: "/images/current-site/A9aPeT9DeN0TtIN1lKVMP9wVzU8.jpg",
  },
];

const footerLinks = {
  Pages: ["Home", "Services", "Projects", "About", "Contact"],
  Contact: ["hello.humaneframes@gmail.com", "+91 90745 55835", "+91 81380 08357"],
  Socials: ["LinkedIn", "Instagram", "Facebook"],
};

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1376px] px-4 sm:px-7 lg:px-8 ${className}`}>{children}</div>;
}

function Pill({
  children,
  href = "#contact",
  variant = "dark",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "dark" | "light";
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-[31px] items-center gap-1 rounded-full px-4 text-[11px] font-semibold leading-none tracking-[-0.02em] transition-colors ${
        variant === "dark"
          ? "bg-black text-white hover:bg-black/75"
          : "border border-black/20 bg-transparent text-black hover:border-black"
      }`}
    >
      {children}
      {variant === "dark" && <span className="h-1 w-1 rounded-full bg-[#d71916]" />}
    </a>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[10px] font-medium uppercase leading-none tracking-[-0.015em] text-black">
      [<span className="text-[#d71916]">{children}</span>]
    </p>
  );
}

function Nav() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f3f3f1]/95 backdrop-blur-sm">
      <Container className="flex h-[82px] items-center justify-between max-md:h-[64px]">
        <a href="#top" className="text-[15px] font-bold leading-none tracking-[-0.05em] max-md:text-[12px]">
          Humaneframes.
        </a>
        <nav className="hidden items-center gap-9 text-[12px] font-semibold leading-none tracking-[-0.035em] md:flex">
          {links.map((link, index) => (
            <a key={link.label} href={link.href} className="relative hover:opacity-60">
              {link.label}
              {index === 0 && (
                <span className="absolute -right-2 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#cf221b]" />
              )}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Pill href="/contact">Contact us</Pill>
        </div>
        <button className="flex items-center gap-3 text-[16px] font-semibold leading-none tracking-[-0.04em] md:hidden" type="button">
          Menu
          <span className="flex h-4 w-5 flex-col justify-center gap-[5px]">
            <span className="h-px w-full bg-black" />
            <span className="h-px w-full bg-black" />
          </span>
        </button>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="min-h-[860px] pt-[150px] max-md:min-h-[844px] max-md:pt-[126px] lg:min-h-[860px]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,825px)_1fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <h1 className="max-w-[825px] text-[clamp(43px,5.15vw,74px)] font-semibold leading-[1.08] tracking-[-0.075em]">
              We are an independent brand and digital company crafting bold identities and experiences
              that drive real business growth
            </h1>
            <p className="mt-[90px] max-w-[350px] text-[20px] font-medium leading-[1.22] tracking-[-0.055em] text-black/80 max-md:hidden">
              From brand identity to digital experiences and growth strategy, we design, build, and scale everything your brand needs to stand out and perform under one roof.
            </p>
            <div className="mt-5 flex items-center gap-2 max-md:hidden">
              <Pill href="/contact">Start a project</Pill>
              <Pill href="#works" variant="light">
                Our Work
              </Pill>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="self-start justify-self-start pt-8 max-md:w-full lg:justify-self-end lg:pt-[420px]"
          >
            <div className="w-[300px] max-md:w-full">
              <div className="relative h-[181px] w-full overflow-hidden bg-neutral-200 max-md:h-[435px] max-[430px]:h-[310px]">
                <Image
                  src="/images/current-site/kfC4SyMtgSdc4B3CsWx102i4nrA.jpg"
                  alt="Humaneframes project preview"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-[18px] font-medium leading-[1.16] tracking-[-0.055em] text-black/75 max-md:text-[16px]">
                Humaneframes showreel
                <br />
                (Clients - 2025/2026)
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="pb-24">
      <Container>
        <SectionKicker>Experience</SectionKicker>
        <h2 className="max-w-[1110px] text-[clamp(28px,4.2vw,45px)] font-semibold leading-[1.02] tracking-[-0.065em]">
          We combine creativity, data-driven strategies, and authentic storytelling to connect your brand
          with the right audience and drive measurable business results.
        </h2>
        <div className="mt-9 grid gap-9 lg:grid-cols-[570px_1fr] lg:items-end">
          <div className="relative h-[375px] overflow-hidden bg-neutral-200">
            <Image
              src="/images/current-site/3B9h8AV1jrN4BPLKUhldIYfIUrw.jpg"
              alt="Red lit editorial portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 570px"
              className="object-cover"
            />
          </div>
          <div className="max-w-[475px] pb-3">
            <p className="text-[12px] leading-[1.28] tracking-[-0.035em] text-black/75">
              Humaneframes is a brand and digital experience company based in Kerala. We help brands
              and businesses move from unclear presence to clear strategy, strong identity, and better
              digital performance through design, technology, content, and marketing systems built
              for real-world growth.
            </p>
            <div className="mt-5">
              <Pill>Contact us</Pill>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-px bg-black/5 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-white px-6 py-5">
              <p className="text-[42px] font-semibold leading-none tracking-[-0.06em]">{stat.value}</p>
              <p className="mt-3 text-[10px] font-medium leading-none tracking-[-0.02em] text-black/55">{stat.label}</p>
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
    <section id="services" className="pb-32">
      <Container>
        <div className="mb-8 grid gap-8 lg:grid-cols-[420px_1fr] lg:items-end">
          <div>
            <SectionKicker>Services</SectionKicker>
            <h2 className="max-w-[360px] text-[clamp(30px,4vw,44px)] font-semibold leading-[1] tracking-[-0.065em]">
              Solutions built to
              <br />
              scale your brand.
            </h2>
          </div>
          <div className="max-w-[390px] justify-self-start lg:justify-self-end">
            <p className="mb-4 text-[12px] leading-[1.28] tracking-[-0.035em] text-black/75">
              We turn ideas into strategy, strategy into design, and design into systems that help
              your brand communicate clearly and grow.
            </p>
            <Pill>See all services</Pill>
          </div>
        </div>
        <div className="divide-y divide-black/5 bg-white">
          {services.map((service, index) => {
            const isOpen = open === index;
            return (
              <div key={service.title}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="grid w-full grid-cols-[54px_1fr_28px] items-start px-6 py-6 text-left"
                >
                  <span className="text-[10px] leading-none text-black/65">{service.number}</span>
                  <span className="text-[15px] font-semibold leading-none tracking-[-0.045em]">{service.title}</span>
                  <span className="justify-self-end text-[25px] leading-[0.55]">{isOpen ? "×" : "+"}</span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="grid gap-8 px-6 pb-9 pl-[78px] md:grid-cols-[1fr_1fr]"
                  >
                    <div>
                      <p className="mb-5 text-[10px] font-medium leading-none tracking-[-0.02em]">What we do</p>
                      <p className="max-w-[330px] text-[12px] leading-[1.28] tracking-[-0.035em] text-black/75">
                        {service.overview}
                      </p>
                      <a href="#contact" className="mt-10 inline-flex text-[10px] font-semibold leading-none tracking-[-0.03em]">
                        Know more +
                      </a>
                    </div>
                    <div>
                      <p className="mb-5 text-[10px] font-medium leading-none tracking-[-0.02em]">Core Capabilities</p>
                      <ul className="space-y-2 text-[12px] leading-none tracking-[-0.035em]">
                        {service.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center gap-2">
                            <span>✓</span>
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
    <section id="works" className="pb-28">
      <Container>
        <div className="mx-auto mb-9 max-w-[460px] text-center">
          <SectionKicker>Projects</SectionKicker>
          <h2 className="text-[clamp(30px,4.1vw,45px)] font-semibold leading-[0.98] tracking-[-0.065em]">
            Selected work that speaks for itself
          </h2>
          <p className="mx-auto mt-4 max-w-[360px] text-[11px] leading-[1.25] tracking-[-0.035em] text-black/60">
            Our work combines identity, campaign assets, technology, and content systems built to
            give brands a clearer market position.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {works.map((work) => (
            <article key={work.title} className="bg-white">
              <div className="relative h-[350px] overflow-hidden bg-neutral-200">
                <Image src={work.image} alt={work.title} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover" />
              </div>
              <div className="grid grid-cols-[1fr_18px] gap-4 p-4">
                <div>
                  <p className="mb-2 text-[10px] leading-none text-black/55">{work.year}</p>
                  <h3 className="text-[14px] font-semibold leading-[1.08] tracking-[-0.04em]">{work.title}</h3>
                </div>
                <span className="mt-1 grid h-[14px] w-[14px] place-items-center rounded-full bg-black text-[9px] leading-none text-white">
                  +
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Pill>View all works</Pill>
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  const images = [
    "/images/current-site/EJepzkyS2M6RtQT3j0VG2s9Vso.jpg",
    "/images/current-site/GpKoxUJWRs9yBbuqb8nstIUxI.jpg",
    "/images/current-site/JBpQeQXOMbjJ6ODB1cBghiYAxV8.jpg",
    "/images/current-site/OslGeYkhcn7grxI5MyYovBUtyE.jpg",
  ];

  return (
    <section id="contact" className="pb-28">
      <Container>
        <div className="mx-auto max-w-[450px] text-center">
          <SectionKicker>Start with your brand</SectionKicker>
          <h2 className="text-[clamp(30px,4vw,44px)] font-semibold leading-[0.98] tracking-[-0.065em]">
            Ready to build a bold, purposeful brand?
          </h2>
          <p className="mx-auto mt-4 max-w-[360px] text-[11px] leading-[1.25] tracking-[-0.035em] text-black/60">
            Have questions? We&apos;ll help you clarify what to do next.
          </p>
          <div className="mt-5 flex justify-center gap-2">
            <Pill>Start a project</Pill>
            <Pill href="#services" variant="light">
              Explore our services
            </Pill>
          </div>
        </div>
      </Container>
      <div className="mt-12 flex gap-4 overflow-hidden px-5">
        {images.map((image, index) => (
          <div key={image} className={`relative h-[310px] shrink-0 overflow-hidden bg-neutral-200 ${index === 0 ? "w-[360px]" : "w-[330px]"}`}>
            <Image src={image} alt="Humaneframes brand detail" fill sizes="360px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 pb-9 pt-20">
      <Container>
        <h2 className="text-[20px] font-bold leading-none tracking-[-0.05em]">Humaneframes.</h2>
        <div className="mt-16 grid gap-12 border-t border-black/10 pt-8 md:grid-cols-[1fr_1.2fr]">
          <div className="max-w-[360px]">
            <p className="text-[12px] leading-[1.28] tracking-[-0.035em] text-black/75">
              A joined brand and digital methodology crafted to improve clarity, credibility, and
              measurable market performance.
            </p>
            <div className="mt-5">
              <Pill>Contact us</Pill>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="mb-5 text-[10px] font-medium leading-none tracking-[-0.02em]">{title}</p>
                <ul className="space-y-2 text-[10px] leading-[1.1] tracking-[-0.02em] text-black/65">
                  {links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 flex items-center justify-between border-t border-black/5 pt-8 text-[10px] leading-none text-black/55">
          <p>© 2026 Humaneframes. All rights reserved.</p>
          <p>Terms of Service · Privacy Policy</p>
        </div>
      </Container>
    </footer>
  );
}

export default function HumaneframesLanding() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-black">
      <Nav />
      <Hero />
      <Intro />
      <Services />
      <Work />
      <CTA />
      <Footer />
    </main>
  );
}
