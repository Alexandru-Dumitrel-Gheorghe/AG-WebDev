import BeratungClient from "./BeratungClient";
import StructuredDataBeratung from "./StructuredDataBeratung";
import StructuredBreadcrumbsBeratung from "./StructuredBreadcrumbsBeratung";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digitale Beratung & Strategie Freelancer Deutschland | AG WebDev",
  description:
    "Individuelle digitale Beratung, Strategieentwicklung und persönliche Begleitung vom Freelance Webentwickler – AG WebDev. Für Unternehmen und Selbstständige deutschlandweit.",
  keywords: [
    "Beratung",
    "Digitale Strategie",
    "Webentwicklung Beratung",
    "SEO Beratung",
    "Webdesign Beratung",
    "Online Marketing",
    "Digitale Transformation",
    "Strategieberatung Freelancer",
    "AG WebDev",
    "Freelance Beratung Deutschland",
  ],
  openGraph: {
    title: "Digitale Beratung & Strategie Freelancer Deutschland | AG WebDev",
    description:
      "Digitale Beratung, Strategieentwicklung und persönliche Begleitung zum Online-Erfolg. Beratung deutschlandweit für Unternehmen und Selbstständige.",
    url: "https://www.ag-webdev.de/beratung",
    siteName: "AG WebDev",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/beratung-hero.png",
        width: 1200,
        height: 630,
        alt: "Digitale Beratung & Strategie bei AG WebDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitale Beratung & Strategie Freelancer | AG WebDev",
    description:
      "Digitale Beratung, Strategieentwicklung und Online-Erfolg deutschlandweit mit AG WebDev.",
    images: ["https://www.ag-webdev.de/images/beratung-hero.png"],
    creator: "@ag_webdev",
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/beratung",
  },
};

export default function Page() {
  return (
    <>
      <StructuredDataBeratung />
      <StructuredBreadcrumbsBeratung />
      <BeratungClient />
    </>
  );
}
