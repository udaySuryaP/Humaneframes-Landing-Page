"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Design",
    overview:
      "We build the complete foundation of your brand, from the visual identity people see to the strategy that drives its growth. Every element is designed to be distinct, consistent, and built to scale with your business.",
    capabilities: ["Brand Identity", "Brand Foundation", "Brand Systems", "Growth Strategy", "Visual Identity and Uniformity"],
  },
  {
    number: "02",
    title: "UI/UX Design",
    overview:
      "We research, design, and prototype digital interfaces that make sense from the first interaction and support the way people actually move through your product.",
    capabilities: ["User Research", "Wireframing and Prototyping", "Figma Design", "Design Systems", "Experience Design"],
  },
  {
    number: "03",
    title: "Web and App Development",
    overview:
      "We build websites and applications that load fast, look sharp, and convert visitors into customers while staying easy for your team to grow.",
    capabilities: ["SaaS Development", "Mobile App Development", "Ecommerce Development", "Custom Panels and Dashboards", "CMS Development"],
  },
  {
    number: "04",
    title: "Content and Storytelling",
    overview:
      "We find the story at the centre of your brand and build content that connects with your audience, communicates clearly, and drives action.",
    capabilities: ["Brand Narrative", "Website and Campaign Copywriting", "Content Production", "Founder Storytelling", "Short Form and Long Form Content"],
  },
  {
    number: "05",
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
];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1328px] px-5 sm:px-7 lg:px-8 ${className}`}>{children}</div>;
}

function Pill({
  children,
  href = "/contact",
  variant = "dark",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[29px] shrink-0 items-center gap-1.5 rounded-full px-4 text-[11px] font-semibold leading-none transition-colors ${
        variant === "dark"
          ? "bg-black text-white hover:bg-black/75"
          : "border border-black/25 bg-transparent text-black hover:border-black"
      }`}
    >
      <span>{children}</span>
      {variant === "dark" && <span className="h-[4px] w-[4px] rounded-full bg-[#d71916]" />}
    </Link>
  );
}

function SectionKicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`mb-4 text-[10px] font-medium uppercase leading-none text-black/85 ${className}`}>
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
      <Container className="flex h-[54px] items-center justify-between md:h-[58px]">
        <Link href="/" className="text-[13px] font-extrabold leading-none md:text-[14px]">
          Humaneframes.
        </Link>
        <nav className="hidden items-center gap-8 text-[11px] font-semibold leading-none md:flex">
          {links.map((link, index) => (
            <Link key={link.label} href={link.href} className="relative transition-opacity hover:opacity-60">
              {link.label}
              {index === 0 && <span className="absolute -right-2 top-1/2 h-[4px] w-[4px] -translate-y-1/2 rounded-full bg-[#d71916]" />}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Pill href="/contact">Contact us</Pill>
        </div>
        <button className="flex items-center gap-3 text-[13px] font-semibold leading-none md:hidden" type="button">
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
    <section id="top" className="pt-[96px] md:pt-[118px]">
      <Container>
        <div className="grid gap-10 md:grid-cols-[minmax(0,840px)_minmax(220px,1fr)] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="max-w-[830px] text-[clamp(42px,5.3vw,75px)] font-semibold leading-[1.05] tracking-[-0.055em]">
              We are an independent brand and digital company crafting bold identities and experiences that drive real business growth
            </h1>
            <div className="mt-12 max-w-[360px] md:mt-[78px]">
              <p className="text-[13px] font-medium leading-[1.22] text-black/80 md:text-[14px]">
                From brand identity to digital experiences and growth strategy, we design, build, and scale everything your brand needs to stand out and perform under one roof.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <Pill href="/contact">Start a project</Pill>
                <Pill href="#works" variant="light">
                  Our Work
                </Pill>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="w-full justify-self-end md:max-w-[320px]"
          >
            <div className="relative h-[190px] w-full overflow-hidden bg-neutral-200 md:h-[205px]">
              <Image
                src="/images/current-site/5dPICNVskiIoFCUXZ8nPQsij8.png"
                alt="Imism tote bag project preview"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-[12px] font-medium leading-[1.15] text-black/75">
              Humaneframes showreel
              <br />
              (Clients - 2025/2026)
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function FeatureImage() {
  return (
    <section className="pt-[58px] md:pt-[62px]">
      <div className="relative h-[310px] w-full overflow-hidden bg-neutral-200 md:h-[530px] lg:h-[620px]">
        <Image
          src="/images/reference/humaneframes-hero-feature.jpg"
          alt="Editorial brand feature visual"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="py-20 md:py-[100px]">
      <Container>
        <SectionKicker>Who we are</SectionKicker>
        <h2 className="max-w-[1200px] text-[clamp(34px,5.05vw,63px)] font-semibold leading-[1.02] tracking-[-0.055em]">
          We combine creativity, data-driven strategies, and authentic storytelling to connect your brand with the right audience and drive measurable business results.
        </h2>
        <div className="mt-11 grid gap-10 lg:grid-cols-[620px_1fr] lg:items-end">
          <div className="relative h-[300px] overflow-hidden bg-neutral-200 md:h-[400px]">
            <Image
              src="/images/current-site/3B9h8AV1jrN4BPLKUhldIYfIUrw.jpg"
              alt="Red lit editorial portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          </div>
          <div className="max-w-[560px] pb-2">
            <p className="text-[13px] font-medium leading-[1.25] text-black/72">
              Humaneframes is a brand and digital experience company based in Kerala, built for founders and businesses seeking more than just a vendor. We unite strategy, design, and technology into one integrated system that builds your brand holistically, not in fragmented pieces. Every decision we make is guided by one outcome: measurable business growth.
            </p>
            <div className="mt-6">
              <Pill href="/about">More about us</Pill>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-px bg-[#efefed] md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-white px-6 py-7 md:px-8 md:py-8">
              <p className="text-[clamp(40px,5.2vw,60px)] font-semibold leading-none tracking-[-0.055em]">{stat.value}</p>
              <p className="mt-4 text-[11px] font-medium leading-none text-black/55">{stat.label}</p>
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
    <section id="services" className="pb-[112px] md:pb-[150px]">
      <Container>
        <div className="mb-12 grid gap-8 lg:grid-cols-[520px_1fr] lg:items-end">
          <div>
            <SectionKicker>Expertise</SectionKicker>
            <h2 className="max-w-[490px] text-[clamp(35px,4.7vw,58px)] font-semibold leading-[1.02] tracking-[-0.055em]">
              Solutions built to
              <br />
              scale your brand.
            </h2>
          </div>
          <div className="max-w-[420px] justify-self-start lg:justify-self-end">
            <p className="mb-5 text-[13px] font-medium leading-[1.25] text-black/72">
              We are a multidisciplinary company with one clear mission: to give your brand everything it needs to grow, all in one place, with one team that owns the entire journey.
            </p>
            <Pill href="/services">See all services</Pill>
          </div>
        </div>
        <div className="space-y-3">
          {services.map((service, index) => {
            const isOpen = open === index;
            return (
              <div key={service.title} className="bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="grid w-full grid-cols-[58px_1fr_24px] items-start gap-6 px-7 py-7 text-left md:grid-cols-[82px_1fr_30px] md:px-8"
                >
                  <span className="text-[11px] font-medium leading-none text-black/65">{service.number}</span>
                  <span className="text-[17px] font-semibold leading-none tracking-[-0.035em] md:text-[18px]">{service.title}</span>
                  <span className="justify-self-end text-[28px] font-light leading-[0.55]">{isOpen ? "x" : "+"}</span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.22 }}
                    className="grid gap-9 px-7 pb-9 md:grid-cols-[minmax(0,410px)_minmax(0,360px)] md:pl-[172px]"
                  >
                    <div>
                      <p className="mb-5 text-[12px] font-semibold leading-none">What we do</p>
                      <p className="text-[12px] font-medium leading-[1.3] text-black/70">{service.overview}</p>
                      <Link href="/services" className="mt-10 inline-flex text-[11px] font-semibold leading-none">
                        More details +
                      </Link>
                    </div>
                    <div>
                      <p className="mb-5 text-[12px] font-semibold leading-none">Core Capabilities</p>
                      <ul className="space-y-3 text-[12px] font-medium leading-none text-black/70">
                        {service.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center gap-2">
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
    <section id="works" className="pb-[105px] md:pb-[130px]">
      <Container>
        <div className="mx-auto mb-12 max-w-[620px] text-center">
          <SectionKicker className="mb-3">Projects</SectionKicker>
          <h2 className="text-[clamp(35px,4.8vw,58px)] font-semibold leading-[1.02] tracking-[-0.055em]">
            Selected work that
            <br />
            speaks for itself
          </h2>
          <p className="mx-auto mt-5 max-w-[450px] text-[12px] font-medium leading-[1.28] text-black/58">
            Our work combines creativity, strategy, and data to deliver digital marketing solutions that drive real growth and meaningful connections.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {works.map((work) => (
            <article key={work.title} className="bg-white">
              <div className="relative h-[300px] overflow-hidden bg-neutral-200 md:h-[365px] lg:h-[405px]">
                <Image src={work.image} alt={work.title} fill sizes="(max-width: 768px) 100vw, 620px" className="object-cover" />
              </div>
              <div className="grid grid-cols-[1fr_18px] gap-4 px-5 pb-5 pt-4">
                <div>
                  <p className="mb-3 text-[11px] font-medium leading-none text-black/50">{work.year}</p>
                  <h3 className="text-[16px] font-semibold leading-[1.12] tracking-[-0.035em]">{work.title}</h3>
                </div>
                <span className="mt-1 grid h-[17px] w-[17px] place-items-center rounded-full bg-black text-[10px] leading-none text-white">
                  +
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Pill href="/projects">View all works</Pill>
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="pb-[112px] md:pb-[130px]">
      <Container>
        <div className="mx-auto max-w-[560px] text-center">
          <SectionKicker className="mb-3">Your future, together</SectionKicker>
          <h2 className="text-[clamp(34px,4.6vw,54px)] font-semibold leading-[1.02] tracking-[-0.055em]">
            Ready to build a bold,
            <br />
            purposeful brand?
          </h2>
          <p className="mx-auto mt-5 max-w-[400px] text-[12px] font-medium leading-[1.28] text-black/58">
            Have questions? We are ready to help you clarify what to do next, together, one step forward.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Pill href="/contact">Start your project</Pill>
            <Pill href="/contact" variant="light">
              Book free consultation
            </Pill>
          </div>
        </div>
      </Container>
      <div className="mt-12 flex gap-4 overflow-hidden px-5 md:px-8">
        {ctaImages.map((image, index) => (
          <div
            key={image}
            className={`relative h-[235px] shrink-0 overflow-hidden bg-neutral-200 md:h-[315px] ${
              index === 0 ? "w-[310px] md:w-[420px]" : "w-[275px] md:w-[360px]"
            }`}
          >
            <Image src={image} alt="Humaneframes brand detail" fill sizes="420px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 pb-10 pt-20 md:pt-24">
      <Container>
        <h2 className="text-[24px] font-extrabold leading-none tracking-[-0.035em] md:text-[30px]">
          Humaneframes<span className="text-[#d71916]">.</span>
        </h2>
        <div className="mt-14 grid gap-12 border-t border-black/10 pt-10 md:grid-cols-[1.35fr_0.55fr_0.8fr_0.5fr]">
          <div className="max-w-[330px]">
            <p className="text-[12px] font-medium leading-[1.25] text-black/75">
              A trusted Kerala based digital marketing and social media company delivering creative strategies and measurable results.
            </p>
            <div className="mt-6">
              <Pill href="/contact">Schedule a call</Pill>
            </div>
          </div>
          <FooterList title="Quick links" items={["Home", "Services", "Projects", "About", "Contact"]} />
          <FooterList title="Get in touch" items={["hello.humaneframes@gmail.com", "+91 90745 55835", "+91 81380 08357"]} />
          <FooterList title="Follow us" items={["LinkedIn", "Instagram", "Facebook"]} />
        </div>
        <div className="mt-24 flex flex-col gap-5 border-t border-black/10 pt-10 text-[11px] font-medium leading-none text-black/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Humaneframes. All rights reserved.</p>
          <p>
            <Link href="/legal/terms-of-service">Terms of Service</Link>
            <span className="mx-3" />
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-5 text-[11px] font-medium leading-none text-black/55">{title}</p>
      <ul className="space-y-2 text-[11px] font-semibold leading-[1.08] text-black/80">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function HumaneframesLanding() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-black">
      <Nav />
      <Hero />
      <FeatureImage />
      <Intro />
      <Services />
      <Work />
      <CTA />
      <Footer />
    </main>
  );
}
