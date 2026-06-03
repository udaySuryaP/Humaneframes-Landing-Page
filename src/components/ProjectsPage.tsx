import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site-content";
import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-black">
      <SiteNav active="Projects" />
      <section className="pt-[170px]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <h1 className="text-[clamp(48px,5.6vw,72px)] font-semibold leading-none tracking-[-0.075em]">
                Projects
              </h1>
              <p className="mt-14 text-[13px] leading-none tracking-[-0.035em] text-black/70">(2021-2026)</p>
            </div>
            <div className="max-w-[650px] self-end">
              <p className="text-[23px] font-semibold leading-[1.06] tracking-[-0.06em] text-black/82">
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

      <section className="pt-[92px]">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group bg-white">
                <div className="relative h-[440px] overflow-hidden bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 650px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="grid grid-cols-[1fr_18px] gap-4 p-4">
                  <div>
                    <p className="mb-2 text-[10px] leading-none text-black/55">{project.year}</p>
                    <h2 className="text-[15px] font-semibold leading-[1.08] tracking-[-0.04em]">{project.title}</h2>
                  </div>
                  <span className="mt-1 grid h-[14px] w-[14px] place-items-center rounded-full bg-black text-[9px] leading-none text-white">
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
