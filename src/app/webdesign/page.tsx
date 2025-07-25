// app/webdesign/page.tsx

import { Metadata } from "next";
import WebdesignClient from "./WebdesignClient";

// SEO Meta Tags pentru pagina de Webdesign
export const metadata: Metadata = {
  title: "Webdesign Agentur – Modernes Webdesign | AG WebDev",
  description:
    "Modernes, responsives und performantes Webdesign für Ihren Erfolg. Jetzt individuell beraten lassen – AG WebDev.",
  keywords: [
    "Webdesign",
    "Webdesign Agentur",
    "Responsive Webdesign",
    "SEO",
    "Website erstellen",
    "AG WebDev",
    "WordPress",
    "Modernes Webdesign",
    "Webentwicklung",
    "Webseite Deutschland",
  ],
  openGraph: {
    title: "Webdesign Agentur – Modernes Webdesign | AG WebDev",
    description:
      "Modernes, responsives und performantes Webdesign für Ihren Erfolg. Jetzt individuell beraten lassen – AG WebDev.",
    url: "https://www.ag-webdev.de/webdesign",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/og-webdesign.jpg",
        width: 1200,
        height: 630,
        alt: "Modernes Webdesign von AG WebDev",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/webdesign",
  },
};

export default function WebdesignPage() {
  return <WebdesignClient />;
}
