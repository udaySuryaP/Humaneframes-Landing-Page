import HumaneframesLanding from "@/components/HumaneframesLanding";
import { pageMetadata, siteDescription, siteTitle } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: siteTitle,
    description: siteDescription,
    path: "/",
  }),
  title: {
    absolute: siteTitle,
  },
};

export default function Home() {
  return <HumaneframesLanding />;
}
