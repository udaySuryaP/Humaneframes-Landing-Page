import type { Metadata } from "next";
import { serviceCards } from "@/lib/site-content";

export const siteUrl = "https://humaneframes.com";

export const siteName = "Humaneframes";

export const siteTitle = "Humaneframes | Brand Experience Studio";

export const siteDescription =
  "Humaneframes is a Kerala based Brand Experience Studio shaping how businesses look, feel, communicate, and grow across digital touchpoints.";

export const sitePositioning =
  "Humaneframes helps businesses shape how they are seen, experienced, trusted, and remembered across strategy, identity, digital presence, content, campaigns, and business experience systems.";

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
  telephone: ["+91 90745 55835", "+91 81380 08357"],
  description: siteDescription,
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kerala",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    postalCode: "688003",
    addressCountry: "IN",
  },
  sameAs: socialLinks,
  serviceType: serviceCards.map((service) => service.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Humaneframes services",
    itemListElement: serviceCards.map((service) => ({
      "@type": "Offer",
      name: service.title,
      description: service.description,
      url: absoluteUrl(`/services/${service.slug}`),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        description: `Starting from ${service.price}`,
      },
    })),
  },
};
