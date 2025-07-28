import type { Metadata } from "next";
import Impressum from "./ImpressumClient";

export const metadata: Metadata = {
  title: "Impressum | AG WebDev",
  description:
    "Rechtliche Angaben gemäß § 5 TMG, Kontaktdaten, Haftungsausschluss und Bildnachweise. AG WebDev, Alexandru Gheorghe, Webdesign und Entwicklung.",
  keywords: [
    "Impressum",
    "AG WebDev",
    "Alexandru Gheorghe",
    "Webdesign Impressum",
    "Rechtliche Angaben",
    "Fürstenfeldbruck",
    "Kontakt",
    "Kleinunternehmerregelung",
  ],
  openGraph: {
    title: "Impressum | AG WebDev",
    description:
      "Impressum und rechtliche Angaben zu AG WebDev, Alexandru Gheorghe, Webdesign und Webentwicklung aus Deutschland.",
    url: "https://www.ag-webdev.de/impressum",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/logo.png",
        width: 1200,
        height: 630,
        alt: "Impressum AG WebDev",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/impressum",
  },
};

export default function ImpressumPage() {
  return <Impressum />;
}
