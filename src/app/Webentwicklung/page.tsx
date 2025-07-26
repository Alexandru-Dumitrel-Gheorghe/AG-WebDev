import type { Metadata } from "next";
import WebentwicklungClient from "./WebentwicklungClient";

export const metadata: Metadata = {
  title: "Webentwicklung | AG WebDev",
  description: "Professionelle Webentwicklung für moderne Unternehmen.",
  alternates: {
    canonical: "https://www.ag-webdev.de/webentwicklung",
  },
  openGraph: {
    title: "Webentwicklung | AG WebDev",
    description:
      "Full-Stack & API Webentwicklung – leistungsstarke Lösungen für Ihr Unternehmen.",
    url: "https://www.ag-webdev.de/webentwicklung",
    siteName: "AG WebDev",
    locale: "de_DE",
    type: "website",
  },
};

export default function WebentwicklungPage() {
  return <WebentwicklungClient />;
}
