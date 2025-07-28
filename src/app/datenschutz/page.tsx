import type { Metadata } from "next";
import DatenschutzClient from "./DatenschutzClient";

export const metadata: Metadata = {
  title: "Datenschutz – AG WebDev München & Fürstenfeldbruck",
  description:
    "Erfahren Sie mehr über den Datenschutz bei AG WebDev. Transparenz, Sicherheit und Schutz Ihrer persönlichen Daten stehen an erster Stelle.",
  openGraph: {
    title: "Datenschutz – AG WebDev München & Deutschland",
    description:
      "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten durch AG WebDev – professionell, transparent, DSGVO-konform.",
    url: "https://www.ag-webdev.de/datenschutz",
    type: "article",
    images: [
      {
        url: "https://www.ag-webdev.de/logo-2.png",
        width: 1200,
        height: 630,
        alt: "AG WebDev Datenschutz – DSGVO Konformität",
      },
    ],
    siteName: "AG WebDev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutz – AG WebDev München & Deutschland",
    description:
      "Transparenter Umgang mit Ihren Daten. AG WebDev schützt Ihre Privatsphäre und erfüllt alle DSGVO-Richtlinien.",
    images: ["https://www.ag-webdev.de/logo-2.png"],
    site: "@agwebdev",
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/datenschutz",
  },
  metadataBase: new URL("https://www.ag-webdev.de"),
  robots: "index, follow",
};

export default function DatenschutzPage() {
  return <DatenschutzClient />;
}
