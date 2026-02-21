import type { Metadata } from "next";
import { siteConfig, footerData } from "@/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sbsco.jo";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Construction Equipment in Jordan | Sustainable Building Solutions | SBS Co.",
    template: "%s | SBS Co.",
  },
  description:
    "Hakmi & Abbas Sustainable Building Solutions Co. - Premium construction equipment, heavy machinery supplier, and sustainable building solutions in Jordan and the Middle East.",
  keywords: [
    "construction equipment Jordan",
    "sustainable building solutions",
    "heavy machinery supplier",
    "construction equipment supplier",
    "building solutions Jordan",
    "SBS Co.",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.shortName,
    title: "Construction Equipment in Jordan | Sustainable Building Solutions | SBS Co.",
    description:
      "Premium construction equipment, heavy machinery supplier, and sustainable building solutions in Jordan and the Middle East.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Equipment in Jordan | SBS Co.",
    description: "Sustainable building solutions and heavy machinery supplier in Jordan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = image ? `${siteUrl}${image}` : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Premium construction equipment, heavy machinery supplier, and sustainable building solutions in Jordan and the Middle East.",
    address: {
      "@type": "PostalAddress",
      addressLocality: footerData.address.line1,
      addressRegion: "Amman",
      addressCountry: "JO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: footerData.phone,
      email: footerData.email,
      contactType: "customer service",
      areaServed: "JO",
    },
  };
}
