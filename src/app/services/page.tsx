import ServicesPage from "@/components/ServicesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore Humaneframes services for strategy, identity, digital experience, content experience, campaign systems, and business experience support.",
  path: "/services",
});

export default function Services() {
  return <ServicesPage />;
}
