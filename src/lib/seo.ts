import type { Metadata } from "next";

export const siteUrl = "https://humaneframes.com";

export const siteName = "Humaneframes";

export const siteTitle = "Humaneframes | Brand Experience Studio";

export const siteDescription =
  "Humaneframes is an independent brand experience studio helping businesses shape how they are seen, experienced, trusted, and remembered across digital touchpoints.";

export const contactEmail = "hello.humaneframes@gmail.com";

export const socialLinks = [
  "https://www.linkedin.com/company/humaneframes",
  "https://www.instagram.com/humaneframes",
  "https://www.facebook.com/share/18fKMQJGyB/",
];

export const ogImage = "/images/current-site/5dPICNVskiIoFCUXZ8nPQsij8.png";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: ogImage,
          alt: `${siteName} brand experience studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  email: contactEmail,
  sameAs: socialLinks,
  description: siteDescription,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    name: siteName,
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  email: contactEmail,
  description: siteDescription,
  areaServed: "India",
  sameAs: socialLinks,
  serviceType: [
    "Brand strategy and positioning",
    "Identity and visual systems",
    "Digital experience",
    "Content experience",
    "Campaign and growth systems",
    "Business experience systems",
  ],
};
