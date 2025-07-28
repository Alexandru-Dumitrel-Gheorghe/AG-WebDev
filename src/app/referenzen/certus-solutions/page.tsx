import type { Metadata } from "next";
import CertusSolutionsClient from "./certus-solutionsClient";
import StructuredDataCertusSolutions from "./StructuredDataCertusSolutions";

export const metadata: Metadata = {
  title:
    "Referenz: Certus Solutions – Individuelle Webentwicklung & Design | AG WebDev",
  description:
    "Case Study: Maßgeschneiderte Webentwicklung, UI/UX Design und Shop-Anbindung für Certus Solutions. Hochwertige Referenz von AG WebDev – Ihr Partner für digitale Projekte.",
  keywords: [
    "Referenz",
    "Webentwicklung",
    "Webdesign",
    "Next.js",
    "TypeScript",
    "Shopify Integration",
    "UI/UX Design",
    "Certus Solutions",
    "Projekt",
    "AG WebDev",
    "Individuelle Webseiten",
    "Website Entwicklung",
  ],
  openGraph: {
    title: "Referenz: Certus Solutions – Webentwicklung & Design | AG WebDev",
    description:
      "Individuelle Webentwicklung, modernes Design und Shopify-Anbindung für Certus Solutions. Jetzt Referenz entdecken!",
    url: "https://www.ag-webdev.de/referenzen/certus-solutions",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/oberholzer-projekt1.png",
        width: 1200,
        height: 630,
        alt: "Referenz Certus Solutions Webentwicklung",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/referenzen/certus-solutions",
  },
};

export default function CertusSolutionsPage() {
  return (
    <>
      <StructuredDataCertusSolutions />
      <CertusSolutionsClient />
    </>
  );
}
