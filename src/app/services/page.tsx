import ServicesPage from "@/components/ServicesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore Humaneframes services across brand strategy, identity design, UI/UX, website and app development, content, social media, ads, and growth systems.",
  path: "/services",
});

export default function Services() {
  return <ServicesPage />;
}
