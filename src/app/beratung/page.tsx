import BeratungClient from "./BeratungClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beratung & Strategie | AG WebDev",
  description:
    "Individuelle Beratung und maßgeschneiderte Strategien für Ihren digitalen Erfolg. Wir begleiten Sie von der Analyse bis zur Umsetzung – persönlich & kompetent.",
  keywords: [
    "Beratung",
    "Digitale Strategie",
    "Webentwicklung Beratung",
    "SEO Beratung",
    "Webdesign Beratung",
    "Online Marketing",
    "Digitale Transformation",
    "AG WebDev",
  ],
  openGraph: {
    title: "Beratung & Strategie | AG WebDev",
    description:
      "Individuelle Beratung, digitale Strategien und persönliche Begleitung auf dem Weg zum Online-Erfolg.",
    url: "https://www.ag-webdev.de/beratung",
    siteName: "AG WebDev",
    type: "website",
    images: [
      {
        url: "/images/beratung-og.jpg",
        width: 1200,
        height: 630,
        alt: "Beratung & Strategie bei AG WebDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beratung & Strategie | AG WebDev",
    description:
      "Digitale Beratung, Strategieentwicklung und Online-Erfolg mit AG WebDev.",
    images: ["/images/beratung-og.jpg"],
    creator: "@ag_webdev",
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/beratung",
  },
};

// AICI este cheia: trebuie să existe și un default export cu un React Component!
export default function Page() {
  return <BeratungClient />;
}
