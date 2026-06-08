import { notFound } from "next/navigation";
import BlogDetailPage from "@/components/BlogDetailPage";
import { blogPosts } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return pageMetadata({
      title: "News and Insights",
      description: "Read Humaneframes thinking on brand experience and digital presence.",
      path: "/blog",
    });
  }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!blogPosts.some((post) => post.slug === slug)) {
    notFound();
  }

  return <BlogDetailPage slug={slug} />;
}
