import Link from "next/link";
import Image from "next/image";
import { footerCopy, navItems } from "@/lib/site-content";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`w-full px-[30px] max-md:px-[15px] ${className}`}>{children}</div>;
}

export function Pill({
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
      className={`group inline-flex h-[39px] items-center gap-2 overflow-hidden rounded-full px-4 text-[16px] font-medium leading-[1.2] transition-transform duration-300 hover:scale-[0.98] ${
        variant === "dark"
          ? "bg-black text-white"
          : "border border-black/20 bg-transparent text-black"
      }`}
    >
      {children}
      {variant === "dark" && <span className="h-1.5 w-1.5 rounded-full bg-[#fd2400]" />}
    </Link>
  );
}

export function SiteNav({ active }: { active?: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f7f7f7]/95 backdrop-blur-sm">
      <Container className="flex h-[61px] items-center justify-between md:h-[89px]">
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
        <nav className="hidden items-center gap-[30px] text-[16px] font-semibold leading-[1.2] tracking-[-0.03em] md:flex">
          {navItems.map((link) => (
            <Link key={link.label} href={link.href} className="relative hover:opacity-60">
              {link.label}
              {active === link.label && (
                <span className="absolute -right-2.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#fa2837]" />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Pill href="/contact">Contact us</Pill>
        </div>
        <Link href="/contact" className="text-[16px] font-semibold leading-[1.2] tracking-[-0.03em] md:hidden">
          Menu
        </Link>
      </Container>
    </header>
  );
}

export function SiteFooter({ largeGap = true }: { largeGap?: boolean }) {
  return (
    <footer className={`${largeGap ? "mt-[520px]" : ""} pb-[50px] pt-[100px]`}>
      <Container>
        <div className="relative h-[75px] w-[300px] max-md:h-[39px] max-md:w-[156px]">
          <Image src="/assets/framer/humaneframes-logo.png" alt="Humaneframes" fill sizes="300px" className="object-contain" />
        </div>

        <div className="mt-[100px] grid gap-12 border-t border-black/10 pt-[40px] lg:grid-cols-[1.35fr_0.55fr_0.8fr_0.5fr]">
          <div className="max-w-[335px]">
            <p className="text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-black">{footerCopy}</p>
            <div className="mt-[30px]">
              <Pill href="/contact">Schedule a call</Pill>
            </div>
          </div>
          <FooterList
            title="Quick links"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Projects", href: "/projects" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <FooterList
            title="Get in touch"
            items={[
              { label: "hello.humaneframes@gmail.com", href: "mailto:hello.humaneframes@gmail.com" },
              { label: "+91 90745 55835", href: "tel:+919074555835" },
              { label: "+91 81380 08357", href: "tel:+918138008357" },
            ]}
          />
          <FooterList
            title="Follow us"
            items={[
              { label: "LinkedIn", href: "https://www.linkedin.com/company/humaneframes" },
              { label: "Instagram", href: "https://www.instagram.com/humaneframes" },
              { label: "Facebook", href: "https://www.facebook.com/humaneframes" },
            ]}
          />
        </div>

        <div className="mt-[100px] flex flex-col gap-5 border-t border-black/10 pt-[40px] text-[13px] font-medium leading-none text-black sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Humaneframes. All rights reserved.</p>
          <p>
            <Link href="/legal/terms-of-service">Terms of Service</Link>
            &nbsp;&nbsp;&nbsp;
            <Link href="/legal/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-[20px] text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f]">{title}</p>
      <ul className="space-y-[10px] text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-black">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="hover:opacity-60">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3 text-[12px] leading-none">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="text-black/70">{"\u2713"}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
