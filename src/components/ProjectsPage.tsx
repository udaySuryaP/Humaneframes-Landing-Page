import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site-content";
import { Container, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Projects" />
      <section className="pb-0 pt-[76px] md:pb-[8px] md:pt-[100px] xl:pb-[26px] xl:pt-[110px]">
        <Container>
          <div className="grid gap-[10px] md:grid-cols-[minmax(0,280px)_minmax(0,520px)] md:justify-between md:gap-[30px] xl:grid-cols-[minmax(220px,426px)_minmax(0,650px)]">
            <div>
              <h1 className="text-[32px] font-semibold leading-[1.15] md:text-[clamp(42px,5vw,64px)] md:leading-[1.2]">
                Projects
              </h1>
              <p className="mt-[14px] text-[12px] font-medium leading-[1.35] tracking-[-0.03em] text-black/70 md:mt-[32px] md:text-[14px] xl:mt-12 xl:text-[16px]">(2021-2026)</p>
            </div>
            <div className="max-w-[650px] self-end md:justify-self-end">
              <p className="text-[13px] font-semibold leading-[1.25] tracking-[-0.03em] text-black/82 md:text-[18px] md:leading-[1.2] xl:text-[24px] xl:leading-[1.16] xl:tracking-[-0.045em]">
                Our projects show how we help businesses improve how they are seen, experienced,
                trusted, and remembered across digital touchpoints. From full brand launches to
                websites, content systems, booking flows, and social growth, our work is built around
                real business gaps.
              </p>
              <div className="mt-[12px] md:mt-5">
                <ProjectsPill href="/contact">Start a project</ProjectsPill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-[20px] md:grid-cols-1 xl:grid-cols-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group bg-white">
                <div className="relative h-[214px] overflow-hidden bg-neutral-200 sm:h-[290px] md:h-[475px] xl:h-[395px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized={project.image.endsWith(".png")}
                    sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1199px) calc(100vw - 40px), 680px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="grid min-h-[76px] grid-cols-[1fr_18px] gap-4 px-[15px] py-[14px] md:min-h-[86px] md:px-[18px] md:py-[18px] xl:min-h-[96px] xl:px-[20px] xl:py-[20px]">
                  <div>
                    <p className="mb-[7px] text-[11px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f] md:text-[13px] xl:mb-[10px] xl:text-[16px]">{project.year}</p>
                    <h2 className="text-[13px] font-semibold leading-[1.25] tracking-[-0.03em] md:text-[16px] xl:text-[18px]">{project.title}</h2>
                  </div>
                  <span className="mt-1 grid h-[15px] w-[15px] place-items-center rounded-full bg-black text-[9px] leading-none text-white xl:h-[17px] xl:w-[17px] xl:text-[10px]">
                    +
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter largeGap={false} />
    </main>
  );
}

function ProjectsPill({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex h-[26px] items-center gap-1.5 rounded-full bg-black px-3 text-[11px] font-semibold leading-none tracking-[-0.02em] text-white transition-all duration-300 hover:scale-[0.98] hover:bg-black/75 md:h-[39px] md:gap-2 md:px-4 md:text-[16px]"
    >
      {children}
      <span className="h-1.5 w-1.5 rounded-full bg-[#fd2400]" />
    </Link>
  );
}
