"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  clientFits,
  engagements,
  metrics,
  navLinks,
  processSteps,
  projects,
  services,
} from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1540px] px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B8652E]">
      <span className="h-px w-9 bg-[#B8652E]" />
      {children}
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <h2
        className={cn(
          "font-display text-[clamp(2.7rem,8vw,8.8rem)] font-black uppercase leading-[0.88] text-[#050505]",
          className,
        )}
      >
        {children}
      </h2>
    </Reveal>
  );
}

function Button({
  children,
  href,
  variant = "dark",
  className,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "dark" | "light" | "outline";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8341F]",
        variant === "dark" && "bg-[#050505] text-[#FAF8F3] hover:bg-[#B8652E]",
        variant === "light" && "bg-[#FAF8F3] text-[#050505] hover:bg-[#D8341F] hover:text-white",
        variant === "outline" &&
          "border border-[#050505]/20 bg-transparent text-[#050505] hover:border-[#050505] hover:bg-[#050505] hover:text-[#FAF8F3]",
        className,
      )}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#FAF8F3]/10 bg-[#050505]/85 text-[#FAF8F3] backdrop-blur-xl">
      <Container className="flex h-[4.5rem] items-center justify-between">
        <a href="#top" className="font-display text-2xl uppercase leading-none tracking-normal">
          Humaneframes
        </a>
        <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF8F3]/70 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#FAF8F3]">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="#contact" variant="light" className="min-h-10 px-4 text-[11px]">
            Start a Project
          </Button>
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 md:hidden"
        >
          <span className="relative h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-5 bg-white transition-transform",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-px w-5 bg-white transition-transform",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease }}
          className="fixed inset-x-0 top-[4.5rem] h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-[#050505] md:hidden"
        >
          <Container className="flex min-h-full flex-col justify-between py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="border-b border-white/10 py-4 font-display text-4xl uppercase leading-none"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="pt-8">
              <Button href="#contact" variant="light" className="w-full" onClick={onClose}>
                Start a Project
              </Button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ImageSlot({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const isAbsolute = className?.includes("absolute");

  return (
    <div className={cn(!isAbsolute && "relative", "overflow-hidden bg-[#151515]", className)}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, 48vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,5,5,0.06),rgba(5,5,5,0.55))]" />
    </div>
  );
}

function Hero() {
  const heroTags = ["Brand", "Web", "Content", "Growth"];
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#050505] pt-24 text-[#FAF8F3]">
      <div className="absolute inset-x-0 top-28 font-display text-[23vw] uppercase leading-none text-white/[0.035]">
        Frames
      </div>
      <Container className="relative grid min-h-[calc(100vh-6rem)] items-end gap-8 pb-10 lg:grid-cols-[1.02fr_0.98fr] lg:pb-10">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-5xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#B8652E]"
          >
            Brand / Web / Content / Growth
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease }}
            className="font-display text-[clamp(3.8rem,9.2vw,11.8rem)] uppercase leading-[0.8] tracking-normal"
          >
            Your business is better than your brand. We fix that.
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease }}
            className="mt-8 max-w-2xl text-base leading-7 text-[#FAF8F3]/72 sm:text-lg"
          >
            Humaneframes is an independent brand and digital studio crafting identities, websites,
            content systems, and growth assets for businesses ready to look as serious as they are.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#contact" variant="light">
              Start a Project
            </Button>
            <Button href="#work" variant="outline" className="border-white/20 text-[#FAF8F3] hover:bg-[#FAF8F3] hover:text-[#050505]">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.97 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative min-h-[420px] lg:min-h-[460px] 2xl:min-h-[calc(100vh-9rem)]"
        >
          <ImageSlot
            src="/images/dark-cinematic-object.svg"
            alt="Dark cinematic Humaneframes studio placeholder"
            priority
            className="absolute inset-x-0 bottom-0 h-[78%] rounded-[2rem]"
          />
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 top-4 rounded-3xl border border-white/15 bg-[#FAF8F3] p-5 text-[#050505] shadow-2xl sm:left-8 sm:top-10"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B8652E]">Studio index</p>
            <p className="mt-5 font-display text-6xl uppercase leading-none">08</p>
            <p className="mt-2 max-w-36 text-xs uppercase tracking-[0.14em] text-black/60">Digital presence setup</p>
          </motion.div>
          <div className="absolute bottom-6 left-4 right-4 flex flex-wrap gap-2 sm:left-8 sm:right-8">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/18 bg-[#050505]/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute right-4 top-24 max-w-48 rounded-full border border-white/15 bg-[#050505]/70 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur sm:right-8">
            India / UAE / UK ready
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function StudioIntro() {
  return (
    <section id="studio" className="overflow-hidden bg-[#F4F1EA] py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <Reveal>
            <SectionLabel>/ Studio</SectionLabel>
            <h2 className="font-display text-[clamp(3.2rem,8.5vw,9rem)] uppercase leading-[0.86] text-[#050505]">
              We build the digital layer your business is judged by.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="max-w-2xl lg:ml-auto">
            <p className="text-xl leading-8 text-[#151515]/72">
              From brand identity and websites to social media systems, campaigns, content, and
              automation - we help businesses move from scattered presence to clear, credible,
              premium execution.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-16">
          <div className="flex flex-wrap gap-3 border-y border-[#050505]/15 py-6">
            {["We", "Create", "Digital", "Presence"].map((word, index) => (
              <motion.div
                key={word}
                whileHover={{ y: -6, backgroundColor: index === 1 ? "#D8341F" : "#050505", color: "#FAF8F3" }}
                className="rounded-full border border-[#050505]/20 px-6 py-4 font-display text-[clamp(2.2rem,6vw,6rem)] uppercase leading-none text-[#050505] transition-colors sm:px-9"
              >
                {word}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="bg-[#FAF8F3] py-24 sm:py-32">
      <Container>
        <SectionLabel>/ Capabilities</SectionLabel>
        <AnimatedHeading>Everything your business needs to look credible, move faster, and sell better.</AnimatedHeading>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group min-h-[440px] overflow-hidden rounded-[1.45rem] border border-[#050505]/10 bg-[#F4F1EA] shadow-[0_24px_80px_rgba(5,5,5,0.07)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <ImageSlot src={service.image} alt={`${service.title} visual placeholder`} className="h-full rounded-none" />
                  <span className="absolute left-5 top-5 font-display text-6xl uppercase leading-none text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[clamp(2.2rem,4vw,4.4rem)] uppercase leading-[0.86] text-[#050505]">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-[#151515]/68">{service.description}</p>
                  <div className="mt-8 h-px w-full bg-[#050505]/10" />
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B8652E]">
                    Build asset / {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="bg-[#050505] py-24 text-[#FAF8F3] sm:py-32">
      <Container>
        <SectionLabel>/ Proof</SectionLabel>
        <Reveal>
          <h2 className="font-display text-[clamp(4rem,12vw,13rem)] uppercase leading-[0.78]">
            Real work. Real movement.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              From <span className="text-[#B8652E]">1.9K</span> average reel views to{" "}
              <span className="text-[#D8341F]">59K</span> peak reach.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/68">
              For Matha Higher Secondary School, we helped shift their Instagram presence from
              low-performing content to high-reach, audience-relevant reels - with multiple posts
              reaching 11K-29K+ views and one crossing 59K.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <Reveal key={metric.value} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="border border-white/12 bg-white/[0.035] p-6"
                >
                  <p className="font-display text-[clamp(4.4rem,8vw,8.5rem)] uppercase leading-none text-[#FAF8F3]">
                    {metric.value}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/52">
                    {metric.label}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-10">
          <p className="border-t border-white/12 pt-5 text-sm uppercase tracking-[0.18em] text-white/45">
            Growth-focused content systems, measured by movement instead of noise.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function WorkSection() {
  return (
    <section id="work" className="bg-[#F4F1EA] py-24 sm:py-32">
      <Container>
        <SectionLabel>/ Work</SectionLabel>
        <AnimatedHeading>Selected frames of what we build.</AnimatedHeading>
        <div className="mt-14 grid gap-4">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.04}>
              <motion.article
                whileHover={{ x: 4 }}
                className={cn(
                  "group grid min-h-[420px] overflow-hidden rounded-[1.65rem] border border-[#050505]/10 md:grid-cols-[1fr_0.82fr]",
                  index % 2 === 0 ? "bg-[#050505] text-[#FAF8F3]" : "bg-[#FAF8F3] text-[#050505]",
                )}
              >
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-55">
                      {String(index + 1).padStart(2, "0")} / Selected work
                    </p>
                    <h3 className="mt-6 font-display text-[clamp(3.2rem,8vw,9.5rem)] uppercase leading-[0.8]">
                      {project.name}
                    </h3>
                    <p className="mt-6 max-w-2xl text-base leading-7 opacity-68">{project.context}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-current/18 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em]">
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto grid h-12 w-12 place-items-center rounded-full border border-current/18 text-2xl transition-transform group-hover:translate-x-1">
                      +
                    </span>
                  </div>
                </div>
                <ImageSlot src={project.image} alt={`${project.name} project placeholder`} className="min-h-[300px] rounded-none" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="bg-[#FAF8F3] py-24 sm:py-32">
      <Container>
        <SectionLabel>/ Process</SectionLabel>
        <AnimatedHeading>Our process is simple. The execution is not.</AnimatedHeading>
        <div className="mt-14 border-t border-[#050505]/14">
          {processSteps.map((step, index) => (
            <Reveal key={step.title}>
              <motion.div
                whileHover={{ backgroundColor: "#050505", color: "#FAF8F3" }}
                className="grid gap-6 border-b border-[#050505]/14 py-8 text-[#050505] transition-colors md:grid-cols-[0.35fr_0.55fr_1fr] md:items-center"
              >
                <p className="font-display text-[clamp(4rem,10vw,12rem)] uppercase leading-none text-[#B8652E]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-[clamp(2.8rem,6vw,7rem)] uppercase leading-none">{step.title}</h3>
                <p className="max-w-2xl text-lg leading-7 opacity-72">{step.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClientFitSection() {
  return (
    <section className="bg-[#151515] py-24 text-[#FAF8F3] sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionLabel>/ Clients</SectionLabel>
            <Reveal>
              <h2 className="font-display text-[clamp(3.6rem,9vw,10.5rem)] uppercase leading-[0.82]">
                For businesses that are already good, but don&apos;t look like it yet.
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/68">
                We work with founders, studios, schools, hospitality brands, fashion labels,
                service businesses, and growing companies across India, UAE, and UK markets.
              </p>
            </Reveal>
          </div>
          <div className="self-end border-t border-white/12">
            {clientFits.map((fit, index) => (
              <Reveal key={fit} delay={index * 0.04}>
                <div className="flex items-center gap-5 border-b border-white/12 py-5">
                  <span className="font-display text-4xl text-[#B8652E]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-lg font-medium">{fit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function EngagementSection() {
  return (
    <section className="bg-[#F4F1EA] py-24 sm:py-32">
      <Container>
        <SectionLabel>/ Engagement</SectionLabel>
        <AnimatedHeading>Choose the depth of build your business needs.</AnimatedHeading>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {engagements.map((engagement, index) => (
            <Reveal key={engagement.title} delay={index * 0.04}>
              <motion.article
                whileHover={{ y: -8 }}
                className="flex min-h-[410px] flex-col justify-between rounded-[1.4rem] border border-[#050505]/12 bg-[#FAF8F3] p-6 text-[#050505]"
              >
                <div>
                  <p className="font-display text-5xl text-[#B8652E]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-8 font-display text-[clamp(2.5rem,4.5vw,5rem)] uppercase leading-[0.86]">
                    {engagement.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-[#151515]/66">{engagement.bestFor}</p>
                </div>
                <ul className="mt-8 space-y-3 border-t border-[#050505]/12 pt-5 text-sm text-[#151515]/75">
                  {engagement.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8341F]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Button href="#contact" variant="dark">
            Request a Proposal
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

function MovingBand() {
  return (
    <div className="overflow-hidden border-y border-[#050505]/12 bg-[#FAF8F3] py-4 text-[#050505]">
      <motion.div
        className="flex w-max gap-8 font-display text-[clamp(3rem,7vw,8rem)] uppercase leading-none"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex gap-8">
            <span>Brand</span>
            <span className="text-[#B8652E]">Web</span>
            <span>Content</span>
            <span className="text-[#D8341F]">Growth</span>
            <span>Systems</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="bg-[#050505] py-24 text-[#FAF8F3] sm:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-7xl font-display text-[clamp(4rem,12.5vw,15rem)] uppercase leading-[0.78]">
            If your business is serious, your digital presence should stop looking accidental.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <Reveal>
            <p className="max-w-2xl text-xl leading-8 text-white/68">
              Tell us what you are building. We&apos;ll show you what needs to change.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="lg:text-right">
            <Button href="mailto:hello.humaneframes@gmail.com" variant="light" className="w-full sm:w-auto">
              Start a Project
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] pb-8 text-[#FAF8F3]">
      <Container>
        <div className="border-t border-white/12 pt-8">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr_1fr]">
            <div>
              <p className="font-display text-5xl uppercase leading-none">Humaneframes</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                Brand / Web / Content / Growth
              </p>
            </div>
            <div className="text-sm leading-7 text-white/62">
              <p>Independent brand and digital studio.</p>
              <p>India / UAE / UK-ready positioning.</p>
              <a className="transition-colors hover:text-white" href="mailto:hello.humaneframes@gmail.com">
                hello.humaneframes@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3 md:justify-end">
              {["Instagram", "LinkedIn", "Behance"].map((item) => (
                <a
                  key={item}
                  href="#top"
                  className="rounded-full border border-white/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/62 transition-colors hover:border-white hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.16em] text-white/32">
            Copyright {new Date().getFullYear()} Humaneframes. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default function HumaneframesLanding() {
  return (
    <main className="min-h-screen bg-[#F4F1EA]">
      <Nav />
      <Hero />
      <StudioIntro />
      <Capabilities />
      <ProofSection />
      <WorkSection />
      <ProcessSection />
      <ClientFitSection />
      <EngagementSection />
      <MovingBand />
      <FinalCTA />
      <Footer />
    </main>
  );
}
