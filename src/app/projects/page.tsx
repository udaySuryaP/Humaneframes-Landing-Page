import ProjectsPage from "@/components/ProjectsPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "View selected Humaneframes projects across brand launches, premium digital experiences, social media growth, travel visibility, and content systems.",
  path: "/projects",
});

export default function Projects() {
  return <ProjectsPage />;
}
