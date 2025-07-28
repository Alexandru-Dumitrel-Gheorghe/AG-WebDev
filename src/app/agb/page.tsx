import type { Metadata } from "next";
import AGBClient from "./AGBClient";

export const metadata: Metadata = {
  title: "AGB – AG WebDev München & Fürstenfeldbruck",
  description:
    "Hier finden Sie die Allgemeinen Geschäftsbedingungen (AGB) von AG WebDev. Transparente Webentwicklung & faire Zusammenarbeit in München und ganz Deutschland.",
  openGraph: {
    title: "AGB – AG WebDev München & Deutschland",
    description:
      "Allgemeine Geschäftsbedingungen für transparente Webentwicklung, faire Projektabwicklung und rechtliche Sicherheit.",
    url: "https://www.ag-webdev.de/agb",
    type: "article",
    images: [
      {
        url: "https://www.ag-webdev.de/logo-2.png",
        width: 1200,
        height: 630,
        alt: "AG WebDev AGB – Recht & Transparenz",
      },
    ],
    siteName: "AG WebDev",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGB – AG WebDev München & Deutschland",
    description:
      "Rechtliche Grundlagen & transparente Bedingungen für Webentwicklung & digitale Dienstleistungen.",
    images: ["https://www.ag-webdev.de/logo-2.png"],
    site: "@agwebdev",
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/agb",
  },
  metadataBase: new URL("https://www.ag-webdev.de"),
  robots: "index, follow",
};

export default function AGBPage() {
  return <AGBClient />;
}
