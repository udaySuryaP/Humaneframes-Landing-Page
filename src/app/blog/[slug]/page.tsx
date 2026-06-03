import FramerMirror from "@/components/FramerMirror";
import { blogPosts } from "@/lib/site-content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <FramerMirror route={`/blog/${slug}`} />;
}
