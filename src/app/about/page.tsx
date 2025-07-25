// app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Über uns | AG WebDev",
  description:
    "Erfahren Sie mehr über AG WebDev – wer wir sind, wofür wir stehen und warum unsere Kunden auf uns vertrauen.",
  alternates: {
    canonical: "https://www.ag-webdev.de/about",
  },
  openGraph: {
    title: "Über uns | AG WebDev",
    description:
      "Professionelles Webdesign & Entwicklung aus einer Hand. Lernen Sie unser Team und unsere Mission kennen.",
    url: "https://www.ag-webdev.de/about",
    siteName: "AG WebDev",
    locale: "de_DE",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
