import { notFound } from "next/navigation";
import LegalPage from "@/components/LegalPage";
import { legalPages } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = legalPages[slug as keyof typeof legalPages];

  if (!page) {
    return pageMetadata({
      title: "Legal",
      description: "Humaneframes legal information.",
      path: "/",
    });
  }

  return pageMetadata({
    title: page.title,
    description: `${page.title} for Humaneframes. Last updated ${page.date}.`,
    path: `/legal/${slug}`,
  });
}

export default async function Legal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!(slug in legalPages)) {
    notFound();
  }

  return <LegalPage slug={slug as keyof typeof legalPages} />;
}
