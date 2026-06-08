import AboutPage from "@/components/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Learn how Humaneframes shapes how businesses are seen, experienced, trusted, and remembered through strategy, identity, digital presence, content, and growth systems.",
  path: "/about",
});

export default function About() {
  return <AboutPage />;
}
