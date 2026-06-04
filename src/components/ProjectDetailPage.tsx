import Image from "next/image";
import Link from "next/link";
import { projectDetails, projects } from "@/lib/site-content";
import { Container, SiteFooter, SiteNav } from "@/components/SiteChrome";

type Project = (typeof projects)[number];
type ProjectDetail = (typeof projectDetails)[keyof typeof projectDetails];

const imismVisuals = {
  overview: "/images/current-site/K72jNVDdKwDqbGplj2RlpIZU8.jpg",
  process: ["/images/current-site/3B9h8AV1jrN4BPLKUhldIYfIUrw.jpg", "/images/current-site/1r2LGaCQOkbFk3UfEYBqSTrA0t0.jpg"],
  result: "/images/current-site/lhoHMdTticNqDZXQbLc1TIfM3M.jpg",
};

const ctaImages = [
  "/images/current-site/GpKoxUJWRs9yBbuqb8nstIUxI.jpg",
  "/images/current-site/kTTGVfoms9rtssvzZgyiMB64GmM.jpg",
  "/images/current-site/JBpQeQXOMbjJ6ODB1cBghiYAxV8.jpg",
  "/images/current-site/EJepzkyS2M6RtQT3j0VG2s9Vso.jpg",
  "/images/current-site/OslGeYkhcn7grxI5MyYovBUtyE.jpg",
  "/images/current-site/PkSKDiO6ZIzVgbahlsXNxmUHJ0.jpg",
];

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug) ?? projects[0];
  const detail = projectDetails[project.slug as keyof typeof projectDetails];
  const more = projects.filter((item) => item.slug !== project.slug).slice(0, 4);
  const visuals = getProjectVisuals(project);

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Projects" />

      <section className="pt-[86px] md:pt-[128px] xl:pt-[136px]">
        <Container>
          <div className="flex items-start justify-between gap-[40px]">
            <div className="max-w-[720px]">
              <h1 className="max-w-[690px] text-[38px] font-semibold leading-[1.1] tracking-[-0.04em] md:text-[56px] md:leading-[1.08] xl:text-[64px]">
              {project.title}
              </h1>
              <p className="mt-[24px] max-w-[690px] text-[15px] font-medium leading-[1.45] tracking-[-0.03em] text-black/70 md:mt-[28px] md:text-[17px] xl:text-[18px]">
                {detail?.intro ?? project.summary}
              </p>
            </div>
            <span className="mt-[132px] hidden h-[16px] w-[16px] shrink-0 place-items-center rounded-full bg-black text-[10px] leading-none text-white md:grid">
              +
            </span>
          </div>

          <ProjectMeta project={project} detail={detail} />

          <DetailImage src={project.image} alt={project.title} className="mt-[46px] h-[220px] sm:h-[330px] md:h-[520px] xl:h-[610px]" priority />
        </Container>
      </section>

      {detail && (
        <section className="pt-[62px] md:pt-[86px] xl:pt-[92px]">
          <Container>
            <ProjectTextBlock title="Overview" paragraphs={detail.overview} />
            <DetailImage src={visuals.overview} alt={`${project.title} overview`} className="mt-[46px] h-[230px] sm:h-[360px] md:h-[520px] xl:h-[610px]" />

            <ProjectTextBlock title="Process" paragraphs={detail.process} className="mt-[64px] md:mt-[88px]" />
            <div className="mt-[46px] grid grid-cols-2 gap-[12px] md:gap-[20px]">
              {visuals.process.map((image, index) => (
                <DetailImage key={image} src={image} alt={`${project.title} process ${index + 1}`} className="h-[140px] sm:h-[230px] md:h-[330px] xl:h-[390px]" />
              ))}
            </div>

            <ResultBlock detail={detail} image={visuals.result} projectTitle={project.title} />
          </Container>
        </section>
      )}

      <section className="border-t border-black/10 pt-[58px] md:mt-[86px] md:pt-[72px] xl:mt-[100px] xl:pt-[82px]">
        <Container>
          <div className="mb-[34px] flex items-end justify-between gap-5 md:mb-[42px]">
            <h2 className="text-[24px] font-semibold leading-[1.15] tracking-[-0.04em] md:text-[28px] xl:text-[32px]">
              Related Projects
            </h2>
          </div>
          <div className="grid gap-[20px] md:grid-cols-2">
            {more.map((item) => (
              <Link key={item.slug} href={`/projects/${item.slug}`} className="group bg-white">
                <DetailImage src={item.image} alt={item.title} className="h-[190px] sm:h-[260px] md:h-[350px] xl:h-[390px]" />
                <div className="grid min-h-[86px] grid-cols-[1fr_18px] gap-4 p-[16px] md:min-h-[102px] md:p-[20px]">
                  <div>
                    <p className="mb-[8px] text-[10px] font-medium leading-none text-black/55 md:text-[11px]">{item.year}</p>
                    <h3 className="text-[13px] font-semibold leading-[1.18] tracking-[-0.035em] md:text-[14px] xl:text-[15px]">{item.title}</h3>
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

      <ProjectCTA />
      <SiteFooter largeGap={false} />
    </main>
  );
}

function ProjectMeta({ project, detail }: { project: Project; detail?: ProjectDetail }) {
  const items = [
    ["", project.year],
    ["Service", project.scope.slice(0, 2).join(", ")],
    ["Industry", detail?.industry ?? project.scope.at(-1) ?? "Brand Growth"],
  ];

  return (
    <div className="mt-[54px] grid gap-[22px] border-t border-black/10 pt-[30px] md:grid-cols-[1fr_1fr_1fr] md:gap-[28px] md:pt-[34px]">
      {items.map(([label, value]) => (
        <div key={label}>
          {label ? <p className="mb-[12px] text-[12px] font-medium leading-none text-black/70 md:text-[15px]">{label}</p> : null}
          <p className={`max-w-[300px] font-medium leading-[1.3] tracking-[-0.03em] text-black ${label ? "text-[15px] md:text-[17px] xl:text-[18px]" : "text-[28px] font-semibold md:text-[36px] xl:text-[40px]"}`}>{value}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectTextBlock({
  title,
  paragraphs,
  className = "",
}: {
  title: string;
  paragraphs: readonly string[];
  className?: string;
}) {
  return (
    <div className={`grid items-start gap-[20px] md:grid-cols-[minmax(0,320px)_minmax(0,720px)] md:justify-between md:gap-[70px] xl:grid-cols-[minmax(0,360px)_minmax(0,760px)] ${className}`}>
      <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.04em] md:text-[44px] xl:text-[48px]">{title}</h2>
      <div className="space-y-[22px] text-[15px] font-medium leading-[1.48] tracking-[-0.02em] text-black md:text-[17px] xl:text-[18px]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function ResultBlock({ detail, image, projectTitle }: { detail: ProjectDetail; image: string; projectTitle: string }) {
  return (
    <div className="mt-[64px] md:mt-[88px]">
      <div className="grid items-start gap-[20px] md:grid-cols-[minmax(0,320px)_minmax(0,720px)] md:justify-between md:gap-[70px] xl:grid-cols-[minmax(0,360px)_minmax(0,760px)]">
        <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.04em] md:text-[44px] xl:text-[48px]">Result</h2>
        <ul className="space-y-[8px] text-[15px] font-medium leading-[1.45] tracking-[-0.02em] text-black md:space-y-[10px] md:text-[17px] xl:text-[18px]">
          {detail.outcomes.map((item) => (
            <li key={item} className="relative pl-[10px] before:absolute before:left-0 before:top-[5px] before:h-[3px] before:w-[3px] before:rounded-full before:bg-black md:pl-[14px] md:before:top-[8px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <DetailImage src={image} alt={`${projectTitle} result`} className="mt-[46px] h-[240px] sm:h-[380px] md:h-[560px] xl:h-[670px]" />
    </div>
  );
}

function DetailImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-neutral-200 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized={src.endsWith(".png")}
        sizes="(max-width: 767px) calc(100vw - 30px), (max-width: 1199px) calc(100vw - 40px), 1380px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

function ProjectCTA() {
  const marquee = [...ctaImages, ...ctaImages, ...ctaImages];

  return (
    <section className="overflow-hidden py-[92px] md:py-[120px]">
      <Container>
        <div className="mx-auto max-w-[550px] text-center">
          <p className="mb-[10px] text-[12px] font-semibold uppercase leading-[1.4] text-[#4f4f4f] md:text-[14px]">
            <span className="text-[#fd2400]">[</span>Your future, together<span className="text-[#fd2400]">]</span>
          </p>
          <h2 className="text-[30px] font-semibold leading-[1.16] tracking-[-0.04em] md:text-[46px] xl:text-[54px]">
            Ready to build a bold, purposeful brand?
          </h2>
          <p className="mx-auto mt-[20px] max-w-[550px] text-[12px] font-medium leading-[1.4] tracking-[-0.03em] text-[#4f4f4f] md:text-[16px]">
            Have questions? We are ready to help you clarify what to do next, together, one step forward.
          </p>
          <div className="mt-[30px] flex flex-wrap justify-center gap-[10px]">
            <DetailPill href="/contact">Start your project</DetailPill>
            <Link
              href="https://cal.com/humaneframes/30min"
              className="inline-flex h-[24px] shrink-0 items-center rounded-full border border-black/20 px-2.5 text-[9px] font-semibold leading-none tracking-[-0.02em] text-black transition-all duration-300 hover:scale-[0.98] hover:border-black md:h-[30px] md:px-3 md:text-[13px]"
            >
              Book free consultation
            </Link>
          </div>
        </div>
      </Container>
      <div className="mt-[50px] max-w-full overflow-hidden">
        <div className="hf-marquee flex w-max gap-[20px]">
          {marquee.map((image, index) => (
            <div key={`${image}-${index}`} className="relative h-[220px] w-[220px] shrink-0 overflow-hidden bg-neutral-200 md:h-[350px] md:w-[350px] xl:h-[400px] xl:w-[400px]">
              <Image src={image} alt="Humaneframes brand detail" fill sizes="(max-width: 767px) 220px, (max-width: 1199px) 350px, 400px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailPill({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex h-[24px] shrink-0 items-center gap-1.5 rounded-full bg-black px-2.5 text-[9px] font-semibold leading-none tracking-[-0.02em] text-white transition-all duration-300 hover:scale-[0.98] hover:bg-black/75 md:h-[30px] md:px-3 md:text-[13px]"
    >
      {children}
      <span className="h-1.5 w-1.5 rounded-full bg-[#fd2400]" />
    </Link>
  );
}

function getProjectVisuals(project: Project) {
  if (project.slug === "imism-from-idea-to-full-brand-launch") {
    return imismVisuals;
  }

  return {
    overview: project.gallery[1] ?? project.image,
    process: [project.gallery[2] ?? project.image, project.gallery[3] ?? project.gallery[1] ?? project.image],
    result: project.gallery[3] ?? project.gallery[2] ?? project.image,
  };
}
