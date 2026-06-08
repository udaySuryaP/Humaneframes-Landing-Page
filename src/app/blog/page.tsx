import BlogPage from "@/components/BlogPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "News and Insights",
  description:
    "Read Humaneframes thinking on brand experience, digital presence, content, customer trust, and business clarity.",
  path: "/blog",
});

export default function Page() {
  return <BlogPage />;
}
