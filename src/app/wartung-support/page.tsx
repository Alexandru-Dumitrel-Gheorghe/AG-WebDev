import WartungSupportClient from "./WartungSupportClient";
import StructuredDataWartungSupport from "./StructuredDataWartungSupport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wartung & Support | AG WebDev",
  description:
    "Zuverlässige Wartung, regelmäßige Updates, Performance-Monitoring & persönlicher Support für Ihre Website. Bleiben Sie sorgenfrei – mit unserem Wartungsservice.",
  keywords: [
    "Wartung",
    "Webseiten Support",
    "Website Pflege",
    "Updates",
    "Sicherheitsupdates",
    "Backup",
    "Performance Monitoring",
    "Fehlerbehebung",
    "Webseite Service",
    "AG WebDev",
  ],
  openGraph: {
    title: "Wartung & Support | AG WebDev",
    description:
      "Wartung, Pflege, Updates und Support für Ihre Website – damit Ihr Online-Auftritt sicher, performant und immer aktuell bleibt.",
    url: "https://www.ag-webdev.de/wartung-support",
    siteName: "AG WebDev",
    type: "website",
    images: [
      {
        url: "/images/maintenance-support.png",
        width: 1200,
        height: 630,
        alt: "Wartung & Support bei AG WebDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wartung & Support | AG WebDev",
    description:
      "Professionelle Wartung, Support & Webseiten-Pflege für Ihr Business.",
    images: ["/images/maintenance-support-og.jpg"],
    creator: "@ag_webdev",
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/wartung-support",
  },
};

export default function Page() {
  return (
    <>
      <StructuredDataWartungSupport />
      <WartungSupportClient />
    </>
  );
}
