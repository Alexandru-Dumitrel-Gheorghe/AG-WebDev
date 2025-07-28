import type { Metadata } from "next";
import OberholzerUmzugserviceClient from "./oberholzer-umzugserviceClient";
import StructuredDataOberholzerUmzugservice from "./StructuredDataOberholzerUmzugservice";

// -- SEO & OG Metadata --
export const metadata: Metadata = {
  title: "Referenz: Oberholzer Umzugservice – Website & Branding | AG WebDev",
  description:
    "Individuelles Webdesign und Branding für Oberholzer Umzugservice. Komplettlösung: Design, Entwicklung, SEO & Performance von AG WebDev.",
  keywords: [
    "Referenz",
    "Webdesign",
    "Webentwicklung",
    "Umzugservice",
    "Branding",
    "SEO",
    "Oberholzer Umzugservice",
    "AG WebDev",
    "Schweiz",
    "Individuelle Webseiten",
    "Performance Optimierung",
    "UX Design",
  ],
  openGraph: {
    title: "Referenz: Oberholzer Umzugservice – Website & Branding | AG WebDev",
    description:
      "Webdesign, Webentwicklung und Branding für Oberholzer Umzugservice. Moderne Lösungen für maximale Sichtbarkeit und Vertrauen.",
    url: "https://www.ag-webdev.de/referenzen/oberholzer-umzugservice",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/oberholzer-projekt1.png",
        width: 1200,
        height: 630,
        alt: "Oberholzer Umzugservice Referenz von AG WebDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referenz: Oberholzer Umzugservice – Website & Branding | AG WebDev",
    description:
      "Website-Design und -Entwicklung für Oberholzer Umzugservice in der Schweiz.",
    images: ["https://www.ag-webdev.de/images/oberholzer-projekt1.png"],
    creator: "@ag_webdev",
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/referenzen/oberholzer-umzugservice",
  },
};

export default function OberholzerUmzugservicePage() {
  return (
    <>
      <StructuredDataOberholzerUmzugservice />
      <OberholzerUmzugserviceClient />
    </>
  );
}
