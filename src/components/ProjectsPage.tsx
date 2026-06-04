import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site-content";
import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Projects" />
      <section className="pb-[17px] pt-[121px] md:pb-[134px] md:pt-[190px]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[minmax(220px,426px)_minmax(0,650px)] lg:justify-between">
            <div>
              <h1 className="text-[clamp(42px,5vw,64px)] font-semibold leading-[1.2]">
                Projects
              </h1>
              <p className="mt-14 text-[16px] font-medium leading-[1.35] tracking-[-0.03em] text-black/70">(2021-2026)</p>
            </div>
            <div className="max-w-[650px] justify-self-end self-end">
              <p className="text-[clamp(20px,1.65vw,24px)] font-semibold leading-[1.16] tracking-[-0.045em] text-black/82">
                Our work combines creativity, strategy, and data to deliver digital marketing
                solutions that drive real growth and meaningful connections.
              </p>
              <div className="mt-5">
                <Pill href="/contact">Start a project</Pill>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-0 md:pt-[84px]">
        <Container>
          <div className="grid gap-[20px] md:grid-cols-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group bg-white">
                <div className="relative aspect-[3/2] overflow-hidden bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 650px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="grid min-h-[136px] grid-cols-[1fr_18px] gap-4 px-[20px] py-[20px] md:min-h-[146px]">
                  <div>
                    <p className="mb-[10px] text-[16px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f]">{project.year}</p>
                    <h2 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.03em]">{project.title}</h2>
                  </div>
                  <span className="mt-1 grid h-[17px] w-[17px] place-items-center rounded-full bg-black text-[10px] leading-none text-white">
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
