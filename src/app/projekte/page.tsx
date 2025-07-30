import type { Metadata } from "next";
import ProjekteClient from "./ProjekteClient";
import StructuredDataProjekte from "./StructuredDataProjekte";

export const metadata: Metadata = {
  title: "Projekte & Referenzen | Webdesign & Entwicklung | AG WebDev",
  description:
    "Erfolgreiche Projekte aus Webdesign, Entwicklung, E-Commerce und SEO. Sehen Sie, wie AG WebDev digitale Lösungen für Kunden realisiert hat.",
  keywords: [
    "Projekte",
    "Webdesign Projekte",
    "Webentwicklung Referenzen",
    "E-Commerce Projekte",
    "SEO Referenzen",
    "Webdesign Portfolio",
    "AG WebDev",
    "Referenzen",
    "Kundenprojekte",
  ],
  openGraph: {
    title: "Projekte & Referenzen | Webdesign & Entwicklung | AG WebDev",
    description:
      "Erfolgreiche Projekte aus Webdesign, Entwicklung, E-Commerce und SEO. Entdecken Sie unsere Referenzen und echte Ergebnisse.",
    url: "https://www.ag-webdev.de/projekte",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/logo-2.png",
        width: 1200,
        height: 630,
        alt: "Webdesign Projekte und Referenzen von AG WebDev",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/projekte",
  },
};

export default function ProjektePage() {
  return (
    <>
      <StructuredDataProjekte />
      <ProjekteClient />
    </>
  );
}
