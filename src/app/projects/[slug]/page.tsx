import { notFound } from "next/navigation";
import FramerMirror from "@/components/FramerMirror";
import { projects } from "@/lib/site-content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!projects.some((project) => project.slug === slug)) {
    notFound();
  }

  return <FramerMirror route={`/projects/${slug}`} />;
}
