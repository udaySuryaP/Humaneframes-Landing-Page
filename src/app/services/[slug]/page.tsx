import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { serviceCards } from "@/lib/site-content";

export function generateStaticParams() {
  return serviceCards.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!serviceCards.some((service) => service.slug === slug)) {
    notFound();
  }

  return <ServiceDetailPage slug={slug} />;
}
