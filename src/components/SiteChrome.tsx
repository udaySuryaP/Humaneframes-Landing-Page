import Link from "next/link";
import { footerCopy, navItems } from "@/lib/site-content";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1328px] px-5 sm:px-7 lg:px-8 ${className}`}>{children}</div>;
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
      className={`inline-flex h-[29px] items-center gap-1.5 rounded-full px-4 text-[11px] font-semibold leading-none ${
        variant === "dark"
          ? "bg-black text-white"
          : "border border-black/20 bg-transparent text-black"
      }`}
    >
      {children}
      {variant === "dark" && <span className="h-1 w-1 rounded-full bg-[#d71916]" />}
    </Link>
  );
}

export function SiteNav({ active }: { active?: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f3f3f1]/95 backdrop-blur-sm">
      <Container className="flex h-[54px] items-center justify-between md:h-[58px]">
        <Link href="/" className="text-[13px] font-extrabold leading-none md:text-[14px]">
          Humaneframes.
        </Link>
        <nav className="hidden items-center gap-8 text-[11px] font-semibold leading-none md:flex">
          {navItems.map((link) => (
            <Link key={link.label} href={link.href} className="relative hover:opacity-60">
              {link.label}
              {active === link.label && (
                <span className="absolute -right-2 top-1/2 h-[4px] w-[4px] -translate-y-1/2 rounded-full bg-[#d71916]" />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Pill href="/contact">Contact us</Pill>
        </div>
        <Link href="/contact" className="text-[13px] font-semibold leading-none md:hidden">
          Menu
        </Link>
      </Container>
    </header>
  );
}

export function SiteFooter({ largeGap = true }: { largeGap?: boolean }) {
  return (
    <footer className={`${largeGap ? "mt-[520px]" : "mt-28"} border-t border-black/10 pb-12 pt-24`}>
      <Container>
        <h2 className="text-[30px] font-extrabold leading-none tracking-[-0.035em]">
          Humaneframes<span className="text-[#d71916]">.</span>
        </h2>

        <div className="mt-14 grid gap-12 border-t border-black/10 pt-10 lg:grid-cols-[1.35fr_0.55fr_0.8fr_0.5fr]">
          <div className="max-w-[335px]">
            <p className="text-[12px] font-medium leading-[1.25] text-black/75">{footerCopy}</p>
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
            &nbsp;&nbsp;&nbsp;
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
      <p className="mb-5 text-[11px] leading-none text-black/55">{title}</p>
      <ul className="space-y-2 text-[11px] font-semibold leading-[1.08] text-black/80">
        {items.map((item) => (
          <li key={item}>{item}</li>
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
          <span className="text-black/70">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
