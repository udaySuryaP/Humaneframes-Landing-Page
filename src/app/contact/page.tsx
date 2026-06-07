import ContactPage from "@/components/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Humaneframes to discuss brand strategy, websites, content systems, social media management, digital marketing, and complete digital presence work.",
  path: "/contact",
});

export default function Contact() {
  return <ContactPage />;
}
