import { Metadata } from "next";
import SeoClient from "./SeoClient";
import StructuredDataSeo from "./StructuredDataSeo";
import StructuredBreadcrumbsSeo from "./StructuredBreadcrumbsSeo";

export const metadata: Metadata = {
  title:
    "SEO Freelancer Deutschland – Suchmaschinenoptimierung vom Profi | AG WebDev",
  description:
    "Professionelle SEO-Dienstleistungen vom Freelancer für Unternehmen und Selbstständige in ganz Deutschland. Bessere Sichtbarkeit, mehr Kunden und nachhaltiges Wachstum durch Suchmaschinenoptimierung von AG WebDev.",
  keywords: [
    "SEO",
    "SEO Freelancer",
    "Suchmaschinenoptimierung",
    "Deutschland",
    "Google Ranking",
    "SEO Beratung",
    "SEO Dienstleistungen",
    "Online Marketing",
    "AG WebDev",
    "SEO Experte",
    "Freelancer SEO",
    "SEO Service Deutschland",
  ],
  alternates: { canonical: "https://www.ag-webdev.de/seo" },
  openGraph: {
    title: "SEO Freelancer Deutschland – SEO vom Profi | AG WebDev",
    description:
      "SEO für Unternehmen und Selbstständige – Optimieren Sie Ihre Website, steigern Sie Sichtbarkeit und Umsatz. Jetzt individuelle SEO-Beratung vom Freelancer sichern.",
    url: "https://www.ag-webdev.de/seo",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/seo-hero.png",
        width: 1200,
        height: 630,
        alt: "SEO Freelancer Deutschland",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <StructuredDataSeo />
      <StructuredBreadcrumbsSeo />
      <SeoClient />
    </>
  );
}
