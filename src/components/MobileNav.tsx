"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-content";

export function MobileNav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(true)}
        className="flex h-[28px] items-center gap-[8px] text-[16px] font-semibold leading-[1.2] tracking-[-0.03em]"
      >
        <span>Menu</span>
        <span aria-hidden="true" className="grid gap-[5px]">
          <span className="h-px w-[14px] bg-black" />
          <span className="h-px w-[14px] bg-black" />
        </span>
      </button>

      {open && (
        <div id="mobile-navigation" className="fixed inset-0 z-[80] bg-[#f7f7f7] text-black">
          <div className="flex h-[61px] items-center justify-between border-b border-black/10 px-[15px]">
            <Link href="/" aria-label="Humaneframes home" className="relative block h-[28px] w-[112px]" onClick={() => setOpen(false)}>
              <Image src="/assets/framer/humaneframes-logo.png" alt="Humaneframes" fill priority sizes="112px" className="object-contain" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-[28px] items-center gap-[12px] text-[16px] font-semibold leading-[1.2] tracking-[-0.03em]"
              aria-label="Close menu"
            >
              <span>Close</span>
              <span aria-hidden="true" className="relative h-[16px] w-[16px]">
                <span className="absolute left-1/2 top-1/2 h-px w-[17px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                <span className="absolute left-1/2 top-1/2 h-px w-[17px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black" />
              </span>
            </button>
          </div>

          <nav className="grid gap-[28px] px-[15px] pt-[34px] text-[16px] font-semibold leading-[1.2] tracking-[-0.03em]">
            {navItems.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="relative w-fit">
                {link.label}
                {active === link.label && (
                  <span className="absolute -right-2.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#fa2837]" />
                )}
              </Link>
            ))}
            <div className="pt-[26px]">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-[39px] shrink-0 items-center gap-2 rounded-full bg-black px-4 text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-white transition-all duration-300 hover:scale-[0.98] hover:bg-black/75"
              >
                Contact us
                <span className="h-1.5 w-1.5 rounded-full bg-[#fd2400]" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
