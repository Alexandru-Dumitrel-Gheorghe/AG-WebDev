import type { Metadata } from "next";
import WebentwicklungClient from "./WebentwicklungClient";
import StructuredDataWebentwicklungService from "./StructuredDataWebentwicklungService";
import StructuredBreadcrumbsWebentwicklung from "./StructuredBreadcrumbsWebentwicklung";

// SEO Meta (puternic business tools, fără Agentur)
export const metadata: Metadata = {
  title: "Digitale Tools & Prozess-Software für Unternehmen | AG WebDev",
  description:
    "Wir entwickeln individuelle digitale Tools, interne Dashboards, Auftragsmanagement- und Zeiterfassungssysteme für Unternehmen. Optimieren Sie Ihre internen Abläufe mit maßgeschneiderten Business-Lösungen von AG WebDev.",
  keywords: [
    "Digitale Tools",
    "Business Software",
    "Tool Entwicklung Unternehmen",
    "Interne Tools",
    "Auftragsmanagement Software",
    "Mitarbeiter Dashboard",
    "Zeiterfassungssystem",
    "Arbeitsanweisungen digital",
    "Prozessoptimierung",
    "Prozessdigitalisierung",
    "Unternehmenssoftware",
    "Digitale Lösungen Unternehmen",
    "AG WebDev",
    "B2B Software",
    "Freelancer Tools",
    "Individuelle Software",
    "Workflow Digitalisierung",
    "Software für Firmen",
    "Custom Tools für Unternehmen",
    "Deutschland",
  ],
  openGraph: {
    title: "Digitale Tools & Prozess-Software für Unternehmen | AG WebDev",
    description:
      "Individuelle Tools, interne Dashboards, Zeiterfassung und Auftragsmanagement-Software für Unternehmen in Deutschland. Digitalisierung von Prozessen für mehr Effizienz.",
    url: "https://www.ag-webdev.de/Webentwicklung",
    siteName: "AG WebDev",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/referenzen/mitarbeiter-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Digitale Tools und Dashboards für Unternehmen",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/Webentwicklung",
  },
};

// Structured Data suplimentar (pentru freelancer/business tools)
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alexandru Gheorghe – Webentwicklung Freelancer",
    alternateName: "AG WebDev",
    description:
      "Freelance Webentwickler – Full-Stack Webentwicklung & digitale Lösungen für Unternehmen in Deutschland. Entwicklung von Websites, Web-Apps und APIs.",
    url: "https://www.ag-webdev.de/Webentwicklung",
    image: "https://www.ag-webdev.de/referenzen/mitarbeiter-dashboard.png",
    email: "contact@ag-webdev.de",
    telephone: "+49 157 7215 8264",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fürstenfeldbruck",
      postalCode: "82256",
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    sameAs: [
      "https://www.ag-webdev.de/",
      "https://github.com/Alexandru-Dumitrel-Gheorghe",
      "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+49 157 7215 8264",
        email: "contact@ag-webdev.de",
        contactType: "customer service",
        areaServed: "DE",
        availableLanguage: ["de", "en", "ro"],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function WebentwicklungPage() {
  return (
    <>
      <StructuredDataWebentwicklungService />
      <StructuredBreadcrumbsWebentwicklung />
      <StructuredData />
      <WebentwicklungClient />
    </>
  );
}
