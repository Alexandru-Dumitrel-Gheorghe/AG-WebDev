import { Metadata } from "next";
import GoogleIndexierungClient from "./GoogleIndexierungClient";
import StructuredDataGoogleIndexierung from "./StructuredDataGoogleIndexierung";

export const metadata: Metadata = {
  title:
    "Google Indexierung Freelancer Deutschland | Schneller im Google-Index",
  description:
    "Google Indexierung vom Freelancer: Wir sorgen dafür, dass Ihre Website schnell, zuverlässig und nachhaltig in Google indexiert wird. Maximale Sichtbarkeit & SEO-Erfolg deutschlandweit.",
  keywords: [
    "Google Indexierung",
    "Google Index",
    "SEO Freelancer",
    "Website Indexierung",
    "Sichtbarkeit",
    "Google Ranking",
    "Indexierungsservice",
    "SEO Service Deutschland",
    "Freelancer SEO",
    "AG WebDev",
  ],
  alternates: { canonical: "https://www.ag-webdev.de/google-indexierung" },
  openGraph: {
    title: "Google Indexierung Service Deutschland – AG WebDev",
    description:
      "Professionelle Unterstützung vom Freelancer für Ihre Google Indexierung – Schnell & zuverlässig sichtbar werden.",
    url: "https://www.ag-webdev.de/google-indexierung",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/google-indexierung-hero.png",
        width: 1200,
        height: 630,
        alt: "Google Indexierung vom Freelancer",
      },
    ],
  },
};

export default function GoogleIndexierungPage() {
  return (
    <>
      <StructuredDataGoogleIndexierung />
      <GoogleIndexierungClient />
    </>
  );
}
