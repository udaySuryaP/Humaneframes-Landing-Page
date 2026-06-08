import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { serviceCards } from "@/lib/site-content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return serviceCards.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceCards.find((item) => item.slug === slug);

  if (!service) {
    return pageMetadata({
      title: "Service",
      description: "Explore Humaneframes brand experience services.",
      path: "/services",
    });
  }

  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!serviceCards.some((service) => service.slug === slug)) {
    notFound();
  }

  return <ServiceDetailPage slug={slug} />;
}
