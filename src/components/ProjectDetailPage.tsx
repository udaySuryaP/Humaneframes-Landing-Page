import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site-content";
import { Container, Pill, SiteFooter, SiteNav } from "@/components/SiteChrome";

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug) ?? projects[0];
  const more = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f3f3f1] text-black">
      <SiteNav active="Projects" />
      <section className="pt-[170px]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="mb-8 text-[13px] leading-none tracking-[-0.035em] text-black/65">{project.year}</p>
              <h1 className="max-w-[720px] text-[clamp(42px,5.2vw,72px)] font-semibold leading-[0.98] tracking-[-0.075em]">
                {project.title}
              </h1>
            </div>
            <div className="max-w-[620px] self-end">
              <p className="text-[22px] font-semibold leading-[1.07] tracking-[-0.06em] text-black/82">
                {project.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.scope.map((item) => (
                  <span key={item} className="rounded-full border border-black/15 px-3 py-2 text-[11px] font-medium leading-none">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-[92px]">
        <Container>
          <div className="relative h-[720px] overflow-hidden bg-neutral-200">
            <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {project.gallery.slice(1).map((image, index) => (
              <div key={image} className={`${index === 2 ? "md:col-span-2" : ""} relative h-[520px] overflow-hidden bg-neutral-200`}>
                <Image src={image} alt={`${project.title} image ${index + 2}`} fill sizes="(max-width: 768px) 100vw, 680px" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-28">
        <Container>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-[42px] font-semibold leading-none tracking-[-0.065em]">More Projects</h2>
            <Pill href="/projects">See all projects</Pill>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {more.map((item) => (
              <Link key={item.slug} href={`/projects/${item.slug}`} className="bg-white">
                <div className="relative h-[360px] overflow-hidden bg-neutral-200">
                  <Image src={item.image} alt={item.title} fill sizes="50vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="mb-2 text-[10px] leading-none text-black/55">{item.year}</p>
                  <h3 className="text-[15px] font-semibold leading-[1.08] tracking-[-0.04em]">{item.title}</h3>
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
