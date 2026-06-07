import AboutPage from "@/components/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Learn how Humaneframes combines strategy, design, and technology to help brands build clearer digital experiences and measurable business growth.",
  path: "/about",
});

export default function About() {
  return <AboutPage />;
}
