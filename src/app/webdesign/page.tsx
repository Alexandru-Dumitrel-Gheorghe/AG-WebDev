import type { Metadata } from "next";
import WebdesignClient from "./WebdesignClient";
import StructuredDataWebdesign from "./StructuredDataWebdesign";
import StructuredBreadcrumbsWebdesign from "./StructuredBreadcrumbsWebdesign";

// SEO Meta Tags pentru pagina de Webdesign (doar Freelancer, nu Agentur!)
export const metadata: Metadata = {
  title: "Webdesign Freelancer Deutschland – Modernes Webdesign | AG WebDev",
  description:
    "Modernes, responsives und performantes Webdesign für Unternehmen und Selbstständige in ganz Deutschland. Maßgeschneiderte Websites, WordPress, UI/UX Design & SEO von Freelance Webdesigner AG WebDev.",
  keywords: [
    "Webdesign",
    "Webdesigner Freelancer",
    "Webdesign Deutschland",
    "Responsive Webdesign",
    "SEO",
    "Website erstellen",
    "AG WebDev",
    "WordPress",
    "Modernes Webdesign",
    "Webentwicklung",
    "UI/UX Design",
    "Webseite Deutschland",
    "Freelance Webdesigner",
    "Webdesign Service Deutschland",
  ],
  openGraph: {
    title: "Webdesign Freelancer Deutschland – Modernes Webdesign | AG WebDev",
    description:
      "Modernes, responsives und performantes Webdesign für Unternehmen, Startups und Selbstständige in ganz Deutschland. Individuell, professionell, schnell – AG WebDev, Freelance Webdesigner.",
    url: "https://www.ag-webdev.de/webdesign",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/hero-about1.png",
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
  return (
    <>
      <StructuredDataWebdesign />
      <StructuredBreadcrumbsWebdesign /> {/* <- Adaugă aici */}
      <WebdesignClient />
    </>
  );
}
