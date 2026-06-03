import Image from "next/image";
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Clarity Over Noise",
    body: "Every project starts with understanding. We strip away the unnecessary and focus on what truly matters: the idea, the story, and the solution.",
  },
  {
    number: "02",
    title: "Collaboration at the Core",
    body: "We believe the best ideas come from open minds and shared perspectives. At Humaneframes, every voice matters, with the freedom to challenge, explore, and create.",
  },
  {
    number: "03",
    title: "Design With Impact",
    body: "Good design does more than decorate; it solves problems. We approach every project with the belief that our craft should drive real growth for founders, teams, and brands.",
  },
  {
    number: "04",
    title: "Balance and Humanity",
    body: "We value people as much as the work. Creativity thrives when there's room to breathe, reflect, and recharge.",
  },
];

const quickLinks = ["Home", "Services", "Projects", "About", "Contact"];
const socials = ["LinkedIn", "Instagram", "Facebook"];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1376px] px-5 sm:px-7 lg:px-8 ${className}`}>{children}</div>;
}

function Pill({ children, href = "/#contact" }: { children: React.ReactNode; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex h-[31px] items-center gap-1 rounded-full bg-black px-4 text-[11px] font-semibold leading-none tracking-[-0.02em] text-white"
    >
      {children}
      <span className="h-1 w-1 rounded-full bg-[#d71916]" />
    </Link>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-[10px] font-medium uppercase leading-none tracking-[-0.015em] text-black">[<span className="text-[#d71916]">{children}</span>]</p>;
}

function Nav() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about", active: true },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#works" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f3f3f1]/95 backdrop-blur-sm">
      <Container className="flex h-[82px] items-center justify-between">
        <Link href="/" className="text-[15px] font-bold leading-none tracking-[-0.05em]">
          Humaneframes.
        </Link>
        <nav className="hidden items-center gap-9 text-[12px] font-semibold leading-none tracking-[-0.035em] md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="relative hover:opacity-60">
              {link.label}
              {link.active && <span className="absolute -right-2 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#d71916]" />}
            </Link>
          ))}
        </nav>
        <Pill href="/#contact">Contact us</Pill>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-[190px]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_2.05fr]">
          <div>
            <h1 className="text-[clamp(44px,5.2vw,64px)] font-semibold leading-none tracking-[-0.065em]">About</h1>
            <p className="mt-16 max-w-[130px] text-[13px] leading-[1.18] tracking-[-0.035em] text-black/70">
              Where strategy
              <br />
              meets growth
            </p>
          </div>
          <div className="max-w-[735px] justify-self-start lg:pt-[116px]">
            <p className="text-[clamp(19px,2.2vw,25px)] font-semibold leading-[1.06] tracking-[-0.055em] text-black/78">
              We do more than market; we create meaningful digital experiences that build stronger
              brands and drive measurable growth. Based in Kerala, Humaneframes combines strategy,
              design, and technology to help businesses stand out and scale with confidence.
            </p>
            <div className="mt-5">
              <Pill href="/#services">Our services</Pill>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ImageCard({
  src,
  alt,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden bg-neutral-200 ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      {children}
    </div>
  );
}

function Bento() {
  return (
    <section className="pt-[92px]">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1.45fr_0.95fr_0.95fr] lg:grid-rows-[320px_320px]">
          <ImageCard
            src="/images/about/sxgSA7cXJI7Dz9f0EEMmC2mUl6M.jpg"
            alt="Camera operator filming in studio"
            className="min-h-[560px] lg:row-span-2 lg:min-h-0"
          >
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 text-white">
              <p className="mb-6 text-[11px] font-bold leading-none tracking-[-0.03em]">Humaneframes.</p>
              <h2 className="max-w-[440px] text-[23px] font-bold leading-[1.02] tracking-[-0.055em]">
                Scaling Brands Through Strategy and Digital Excellence
              </h2>
            </div>
          </ImageCard>

          <ImageCard src="/images/about/qXcB9XEZCElq0s0XaO7p1oeY4.jpg" alt="Dark studio portrait session" className="min-h-[320px]" />

          <div className="bg-white p-8">
            <h3 className="max-w-[280px] text-[21px] font-bold leading-[1.02] tracking-[-0.055em]">
              Empowering Brands with Digital Excellence
            </h3>
            <p className="mt-24 text-[68px] font-semibold leading-none tracking-[-0.065em]">40%</p>
            <p className="mt-3 max-w-[220px] text-[12px] leading-[1.18] tracking-[-0.035em] text-black/65">
              average increase in client engagement within 3 months
            </p>
          </div>

          <div className="bg-black p-8 text-white">
            <h3 className="max-w-[315px] text-[23px] font-bold leading-[1.02] tracking-[-0.055em]">
              Driving 1M+ views across social, web, and performance campaigns.
            </h3>
            <p className="mt-28 text-[68px] font-semibold leading-none tracking-[-0.065em]">1M</p>
          </div>

          <ImageCard src="/images/about/l76m0lr2EgbRud7R5HwNGQxO4Zs.jpg" alt="Team reviewing digital strategy" className="min-h-[320px]" />
        </div>
      </Container>
    </section>
  );
}

function Values() {
  return (
    <section className="pt-[190px]">
      <Container>
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr_0.95fr]">
          <div>
            <Kicker>Our Values</Kicker>
            <h2 className="max-w-[430px] text-[clamp(42px,5vw,58px)] font-semibold leading-[1.02] tracking-[-0.07em]">
              Values that
              <br />
              drive real results
            </h2>
          </div>
          <div />
          <p className="max-w-[325px] self-end text-[13px] leading-[1.22] tracking-[-0.035em] text-black/70">
            Our core values guide every decision, shaping how we work to deliver strong results and
            lasting partnerships.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
          <ImageCard
            src="/images/about/PWfvFMTAX9QxuNdLqTee3TBu4Js.jpg"
            alt="Team planning strategy on wall"
            className="min-h-[700px] grayscale lg:min-h-0"
          />
          <div className="grid gap-5">
            {values.filter((_, index) => index % 2 === 0).map((value) => (
              <ValueCard key={value.number} {...value} />
            ))}
          </div>
          <div className="grid gap-5">
            {values.filter((_, index) => index % 2 === 1).map((value) => (
              <ValueCard key={value.number} {...value} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ValueCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <article className="flex min-h-[335px] flex-col justify-between bg-white p-8">
      <p className="text-[40px] font-semibold leading-none tracking-[-0.065em]">
        {number}
        <span className="ml-2 text-[22px] tracking-[-0.05em] text-black/70">/04</span>
      </p>
      <div>
        <h3 className="mb-3 text-[21px] font-bold leading-[1.05] tracking-[-0.055em]">{title}</h3>
        <p className="text-[13px] leading-[1.22] tracking-[-0.035em] text-black/72">{body}</p>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="mt-[760px] border-t border-black/10 pb-12 pt-28">
      <Container>
        <h2 className="text-[38px] font-bold leading-none tracking-[-0.065em]">
          Humaneframes<span className="text-[#d71916]">.</span>
        </h2>

        <div className="mt-16 grid gap-12 border-t border-black/10 pt-12 lg:grid-cols-[1.6fr_0.55fr_0.8fr_0.45fr]">
          <div className="max-w-[335px]">
            <p className="text-[13px] font-medium leading-[1.2] tracking-[-0.04em]">
              A trusted Kerala based digital marketing and social media company delivering creative
              strategies and measurable results.
            </p>
            <div className="mt-6">
              <Pill href="/#contact">Schedule a call</Pill>
            </div>
          </div>
          <div>
            <p className="mb-5 text-[12px] leading-none text-black/55">Quick links</p>
            <ul className="space-y-2 text-[12px] font-medium leading-none tracking-[-0.035em]">
              {quickLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-[12px] leading-none text-black/55">Get in touch</p>
            <ul className="space-y-2 text-[12px] font-medium leading-none tracking-[-0.035em]">
              <li>hello.humaneframes@gmail.com</li>
              <li>+91 90745 55835</li>
              <li>+91 81380 08357</li>
            </ul>
          </div>
          <div>
            <p className="mb-5 text-[12px] leading-none text-black/55">Follow us</p>
            <ul className="space-y-2 text-[12px] font-medium leading-none tracking-[-0.035em]">
              {socials.map((social) => (
                <li key={social}>{social}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 flex flex-col gap-5 border-t border-black/10 pt-10 text-[11px] font-medium leading-none tracking-[-0.03em] sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Humaneframes. All rights reserved.</p>
          <p>Terms of Service&nbsp;&nbsp;&nbsp; Privacy Policy</p>
        </div>
      </Container>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-black">
      <Nav />
      <Hero />
      <Bento />
      <Values />
      <Footer />
    </main>
  );
}
