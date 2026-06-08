import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { projectDetails, projects } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const detail = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    return pageMetadata({
      title: "Project",
      description: "View selected Humaneframes brand experience projects.",
      path: "/projects",
    });
  }

  return pageMetadata({
    title: project.title,
    description: detail?.intro ?? project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!projects.some((project) => project.slug === slug)) {
    notFound();
  }

  return <ProjectDetailPage slug={slug} />;
}
