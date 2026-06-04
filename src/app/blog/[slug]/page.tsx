import { notFound } from "next/navigation";
import BlogDetailPage from "@/components/BlogDetailPage";
import { blogPosts } from "@/lib/site-content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!blogPosts.some((post) => post.slug === slug)) {
    notFound();
  }

  return <BlogDetailPage slug={slug} />;
}
