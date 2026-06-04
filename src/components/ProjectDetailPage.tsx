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

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug) ?? projects[0];
  const detail = projectDetails[project.slug as keyof typeof projectDetails];
  const more = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const visuals = getProjectVisuals(project);

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <SiteNav active="Projects" />

      <section className="pt-[76px] md:pt-[105px] xl:pt-[122px]">
        <Container>
          <div className="max-w-[740px]">
            <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.14] md:text-[42px] md:leading-[1.08] xl:text-[46px]">
              {project.title}
            </h1>
            <p className="mt-[14px] max-w-[570px] text-[9px] font-medium leading-[1.38] tracking-[-0.03em] text-black/68 md:mt-[20px] md:text-[13px] xl:text-[14px]">
              {detail?.intro ?? project.summary}
            </p>
          </div>

          <ProjectMeta project={project} detail={detail} />

          <DetailImage src={project.image} alt={project.title} className="mt-[20px] h-[156px] sm:h-[250px] md:mt-[34px] md:h-[430px] xl:h-[520px]" priority />
        </Container>
      </section>

      {detail && (
        <section className="pt-[34px] md:pt-[54px] xl:pt-[62px]">
          <Container>
            <ProjectTextBlock title="Overview" paragraphs={detail.overview} />
            <DetailImage src={visuals.overview} alt={`${project.title} overview`} className="mt-[22px] h-[180px] sm:h-[280px] md:mt-[32px] md:h-[430px] xl:h-[520px]" />

            <ProjectTextBlock title="Process" paragraphs={detail.process} className="mt-[38px] md:mt-[58px]" />
            <div className="mt-[22px] grid grid-cols-2 gap-[12px] md:mt-[32px] md:gap-[20px]">
              {visuals.process.map((image, index) => (
                <DetailImage key={image} src={image} alt={`${project.title} process ${index + 1}`} className="h-[110px] sm:h-[190px] md:h-[300px] xl:h-[360px]" />
              ))}
            </div>

            <ResultBlock detail={detail} image={visuals.result} projectTitle={project.title} />
          </Container>
        </section>
      )}

      <section className="pt-[54px] md:pt-[76px] xl:pt-[92px]">
        <Container>
          <div className="mb-[22px] flex items-end justify-between gap-5 md:mb-[32px]">
            <h2 className="text-[18px] font-semibold leading-[1.15] tracking-[-0.04em] md:text-[30px] xl:text-[34px]">
              Related Projects
            </h2>
            <DetailPill href="/projects">See all projects</DetailPill>
          </div>
          <div className="grid gap-[20px] md:grid-cols-1 xl:grid-cols-3">
            {more.map((item) => (
              <Link key={item.slug} href={`/projects/${item.slug}`} className="group bg-white">
                <DetailImage src={item.image} alt={item.title} className="h-[145px] sm:h-[230px] md:h-[360px] xl:h-[260px]" />
                <div className="grid min-h-[74px] grid-cols-[1fr_16px] gap-3 p-[14px] md:min-h-[86px] md:p-[18px]">
                  <div>
                    <p className="mb-[7px] text-[10px] font-medium leading-none text-black/55 md:text-[12px]">{item.year}</p>
                    <h3 className="text-[12px] font-semibold leading-[1.2] tracking-[-0.035em] md:text-[16px]">{item.title}</h3>
                  </div>
                  <span className="mt-1 grid h-[15px] w-[15px] place-items-center rounded-full bg-black text-[9px] leading-none text-white">
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

function ProjectMeta({ project, detail }: { project: Project; detail?: ProjectDetail }) {
  const items = [
    ["Year", project.year],
    ["Service", project.scope.slice(0, 2).join(", ")],
    ["Industry", detail?.industry ?? project.scope.at(-1) ?? "Brand Growth"],
  ];

  return (
    <div className="mt-[20px] grid gap-[12px] border-t border-black/10 pt-[14px] md:mt-[44px] md:grid-cols-3 md:gap-[28px] md:pt-[24px]">
      {items.map(([label, value]) => (
        <div key={label}>
          <p className="mb-[5px] text-[7px] font-medium leading-none text-black/45 md:mb-[7px] md:text-[10px]">{label}</p>
          <p className="max-w-[210px] text-[8px] font-semibold leading-[1.25] tracking-[-0.03em] text-black/78 md:text-[13px]">{value}</p>
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
    <div className={`grid items-start gap-[14px] md:grid-cols-[minmax(0,220px)_minmax(0,650px)] md:justify-between md:gap-[40px] xl:grid-cols-[minmax(0,260px)_minmax(0,760px)] ${className}`}>
      <h2 className="text-[15px] font-semibold leading-[1.16] tracking-[-0.04em] md:text-[24px] xl:text-[28px]">{title}</h2>
      <div className="space-y-[10px] text-[8px] font-medium leading-[1.45] tracking-[-0.02em] text-black/72 md:space-y-[14px] md:text-[13px] xl:text-[14px]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function ResultBlock({ detail, image, projectTitle }: { detail: ProjectDetail; image: string; projectTitle: string }) {
  return (
    <div className="mt-[38px] md:mt-[58px]">
      <div className="grid items-start gap-[14px] md:grid-cols-[minmax(0,220px)_minmax(0,650px)] md:justify-between md:gap-[40px] xl:grid-cols-[minmax(0,260px)_minmax(0,760px)]">
        <h2 className="text-[15px] font-semibold leading-[1.16] tracking-[-0.04em] md:text-[24px] xl:text-[28px]">Result</h2>
        <ul className="space-y-[5px] text-[8px] font-medium leading-[1.4] tracking-[-0.02em] text-black/72 md:space-y-[8px] md:text-[13px] xl:text-[14px]">
          {detail.outcomes.map((item) => (
            <li key={item} className="relative pl-[10px] before:absolute before:left-0 before:top-[5px] before:h-[3px] before:w-[3px] before:rounded-full before:bg-black md:pl-[14px] md:before:top-[8px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <DetailImage src={image} alt={`${projectTitle} result`} className="mt-[22px] h-[190px] sm:h-[300px] md:mt-[32px] md:h-[470px] xl:h-[560px]" />
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
