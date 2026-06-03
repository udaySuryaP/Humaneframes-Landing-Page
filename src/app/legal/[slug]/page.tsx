import { notFound } from "next/navigation";
import FramerMirror from "@/components/FramerMirror";
import { legalPages } from "@/lib/site-content";

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export default async function Legal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!(slug in legalPages)) {
    notFound();
  }

  return <FramerMirror route={`/legal/${slug}`} />;
}
