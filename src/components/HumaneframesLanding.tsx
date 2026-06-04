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
  "/images/current-site/OslGeYkhcn7grxI5MyYovBUtyE.jpg",
  "/images/current-site/PkSKDiO6ZIzVgbahlsXNxmUHJ0.jpg",
];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`w-full max-w-[1265px] px-[30px] max-md:px-5 ${className}`}>{children}</div>;
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
      className={`group inline-flex h-[39px] shrink-0 items-center gap-2 overflow-hidden rounded-full px-4 text-[16px] font-medium leading-[1.2] transition-transform duration-300 hover:scale-[0.98] ${
        variant === "dark"
          ? "bg-black text-white hover:bg-black/75"
          : "border border-black/25 bg-transparent text-black hover:border-black"
      }`}
    >
      <span>{children}</span>
      {variant === "dark" && <span className="h-1.5 w-1.5 rounded-full bg-[#fd2400]" />}
    </Link>
  );
}

function SectionKicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`mb-[10px] text-[14px] font-semibold uppercase leading-[1.4] text-[#4f4f4f] ${className}`}>
      <span className="text-[#fd2400]">[</span>{children}<span className="text-[#fd2400]">]</span>
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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#f7f7f7]/95 backdrop-blur-sm">
      <Container className="flex h-[64px] items-center justify-between md:h-[89px]">
        <Link href="/" className="relative block h-[28px] w-[112px] md:h-[39px] md:w-[156px]">
          <Image
            src="/assets/framer/humaneframes-logo.png"
            alt="Humaneframes"
            fill
            priority
            sizes="156px"
            className="object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-[30px] text-[16px] font-semibold leading-[1.2] md:flex">
          {links.map((link, index) => (
            <Link key={link.label} href={link.href} className="relative transition-opacity hover:opacity-60">
              {link.label}
              {index === 0 && <span className="absolute -right-2.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#fa2837]" />}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Pill href="/contact">Contact us</Pill>
        </div>
        <button className="flex items-center gap-3 text-[16px] font-semibold leading-none md:hidden" type="button">
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
    <section id="top" className="pb-[58px] pt-[96px] md:pt-[138px]">
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
            <div className="mt-[50px] flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <div className="max-w-[325px]">
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
      className="w-full md:w-[300px]"
    >
      <div className="relative h-[180px] w-full overflow-hidden bg-neutral-200">
        {frames.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Humaneframes showreel frame"
            fill
            priority={index === 0}
            sizes="300px"
            className="showreel-frame object-cover"
            style={{ animationDelay: `${index * 2.4}s` }}
          />
        ))}
      </div>
      <p className="mt-[5px] text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">
        Humaneframes showreel
        <br />
        (Clients - 2025/2026)
      </p>
    </motion.div>
  );
}

function PageVideo() {
  return (
    <section className="relative h-[430px] overflow-hidden bg-neutral-200 md:h-[738px]">
      <video
        className="h-full w-full object-cover"
        src="/assets/framer/hero-showreel.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </section>
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
        <div className="mt-[50px] grid gap-[50px] lg:grid-cols-[578px_1fr] lg:items-end">
          <div className="relative h-[320px] overflow-hidden bg-neutral-200 md:h-[385px]">
            <Image
              src="/images/current-site/3B9h8AV1jrN4BPLKUhldIYfIUrw.jpg"
              alt="Red lit editorial portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 578px"
              className="object-cover"
            />
          </div>
          <div className="max-w-[578px] pb-0">
            <p className="text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">
              Humaneframes is a brand and digital experience company based in Kerala, built for founders and businesses seeking more than just a vendor. We unite strategy, design, and technology into one integrated system that builds your brand holistically, not in fragmented pieces. Every decision we make is guided by one outcome: measurable business growth.
            </p>
            <div className="mt-[30px]">
              <Pill href="/about">More about us</Pill>
            </div>
          </div>
        </div>
        <div className="mt-[50px] grid grid-cols-2 gap-px bg-[#efefed] md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-white px-[30px] py-[30px]">
              <p className="text-[clamp(48px,5.7vw,72px)] font-bold leading-[1.2]">{stat.value}</p>
              <p className="text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">{stat.label}</p>
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
    <section id="services" className="pb-[100px]">
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
                    className="grid gap-[100px] px-[30px] pb-[40px] md:grid-cols-[423px_423px] md:pl-[230px]"
                  >
                    <div>
                      <p className="mb-[15px] text-[18px] font-medium leading-[1.4]">What we do</p>
                      <p className="text-[16px] font-medium leading-[1.4] text-[#4f4f4f]">{service.overview}</p>
                      <Link href="/services/brand-design" className="mt-[65px] inline-flex items-center gap-1 text-[16px] font-medium leading-[1.2]">
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
        <div className="grid gap-[20px] md:grid-cols-[repeat(2,minmax(0,593px))]">
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

function Footer() {
  return (
    <footer className="pb-[50px] pt-[100px]">
      <Container>
        <div className="relative h-[75px] w-[300px] max-md:h-[39px] max-md:w-[156px]">
          <Image src="/assets/framer/humaneframes-logo.png" alt="Humaneframes" fill sizes="300px" className="object-contain" />
        </div>
        <div className="mt-[100px] grid gap-12 border-t border-black/10 pt-[40px] md:grid-cols-[1.35fr_0.55fr_0.8fr_0.5fr]">
          <div className="max-w-[330px]">
            <p className="text-[16px] font-medium leading-[1.4] text-black">
              A trusted Kerala based digital marketing and social media company delivering creative strategies and measurable results.
            </p>
            <div className="mt-[30px]">
              <Pill href="/contact">Schedule a call</Pill>
            </div>
          </div>
          <FooterList title="Quick links" items={["Home", "Services", "Projects", "About", "Contact"]} />
          <FooterList title="Get in touch" items={["hello.humaneframes@gmail.com", "+91 90745 55835", "+91 81380 08357"]} />
          <FooterList title="Follow us" items={["LinkedIn", "Instagram", "Facebook"]} />
        </div>
        <div className="mt-[100px] flex flex-col gap-5 border-t border-black/10 pt-[40px] text-[13px] font-medium leading-none text-black sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Humaneframes. All rights reserved.</p>
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
      <p className="mb-[20px] text-[13px] font-medium leading-none text-[#4f4f4f]">{title}</p>
      <ul className="space-y-[10px] text-[13px] font-semibold leading-[1.2] text-black">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function HumaneframesLanding() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <Nav />
      <Hero />
      <PageVideo />
      <Intro />
      <Services />
      <Work />
      <CTA />
      <Footer />
    </main>
  );
}
