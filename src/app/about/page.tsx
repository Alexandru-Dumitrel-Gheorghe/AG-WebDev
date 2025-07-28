// app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import StructuredDataAbout from "./StructuredDataAbout";
// SEO Meta Tags optimizate pentru freelancer
export const metadata: Metadata = {
  title: "Über mich – Alexandru Gheorghe | AG WebDev",
  description:
    "Freelance Webdesigner aus Fürstenfeldbruck. Erfahre mehr über Alexandru Gheorghe, seine Erfahrung, Werte und warum Unternehmen in ganz Deutschland ihm vertrauen.",
  keywords: [
    "Über mich",
    "Freelance Webdesigner",
    "Webdesign Fürstenfeldbruck",
    "Webdesigner Deutschland",
    "AG WebDev",
    "WordPress Entwickler",
    "Next.js Entwickler",
    "Erfahrung Webdesign",
    "Alexandru Gheorghe",
  ],
  alternates: {
    canonical: "https://www.ag-webdev.de/about",
  },
  openGraph: {
    title: "Über mich – Alexandru Gheorghe | AG WebDev",
    description:
      "Professionelles Webdesign, UI/UX und SEO aus einer Hand. Lerne den Freelancer hinter AG WebDev kennen.",
    url: "https://www.ag-webdev.de/about",
    siteName: "AG WebDev",
    locale: "de_DE",
    type: "profile",
    images: [
      {
        url: "https://www.ag-webdev.de/images/profil.jpg", // Poza ta reală dacă ai, altfel logo
        width: 800,
        height: 800,
        alt: "Alexandru Gheorghe – AG WebDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über mich – Alexandru Gheorghe | AG WebDev",
    description:
      "Freelance Webdesigner & Entwickler in Deutschland. Erfahre mehr über Alexandru Gheorghe.",
    images: ["https://www.ag-webdev.de/images/profil.jpg"],
    creator: "@ag_webdev",
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredDataAbout />
      <AboutClient />
    </>
  );
}
