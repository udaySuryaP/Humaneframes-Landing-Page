import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { projects } from "@/lib/site-content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!projects.some((project) => project.slug === slug)) {
    notFound();
  }

  return <ProjectDetailPage slug={slug} />;
}
