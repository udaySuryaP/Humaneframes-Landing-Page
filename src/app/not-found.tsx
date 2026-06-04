import Link from "next/link";
import { Container, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav />
      <section className="pt-[116px] md:pt-[130px] xl:pt-[145px]">
        <Container>
          <h1 className="text-[104px] font-semibold leading-[0.82] tracking-[-0.075em] md:text-[170px] xl:text-[230px]">
            404
          </h1>

          <div className="mt-[34px] border-t border-black/10 pt-[34px] md:mt-[44px] md:pt-[38px]">
            <div className="max-w-[330px]">
              <h2 className="text-[18px] font-semibold leading-[1.18] tracking-[-0.03em] md:text-[24px]">
                We lost this page
              </h2>
              <p className="mt-[14px] text-[12px] font-medium leading-[1.35] tracking-[-0.03em] text-black/65 md:text-[14px]">
                The page you are looking for doesn&apos;t exist or has been moved. But you&apos;ll
                definitely love our works.
              </p>
              <Link
                href="/"
                className="mt-[22px] inline-flex h-[26px] items-center gap-1.5 rounded-full bg-black px-3 text-[11px] font-semibold leading-none tracking-[-0.02em] text-white transition-all duration-300 hover:scale-[0.98] hover:bg-black/75 md:h-[30px] md:text-[13px]"
              >
                Back to homepage
                <span className="h-1.5 w-1.5 rounded-full bg-[#fd2400]" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}
