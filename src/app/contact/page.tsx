import ContactPage from "@/components/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Humaneframes to discuss strategy, identity, website, content, growth, and the next right step for your brand experience.",
  path: "/contact",
});

export default function Contact() {
  return <ContactPage />;
}
