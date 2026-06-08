import ProjectsPage from "@/components/ProjectsPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "View selected Humaneframes projects shaped around business perception, trust, digital experience, content systems, visibility, and measurable growth.",
  path: "/projects",
});

export default function Projects() {
  return <ProjectsPage />;
}
