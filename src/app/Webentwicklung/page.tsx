import type { Metadata } from "next";
import WebentwicklungClient from "./WebentwicklungClient";

// SEO Meta Tags (fără Agentur!)
export const metadata: Metadata = {
  title:
    "Webentwicklung Freelancer Deutschland – Moderne Web-Apps & Websites | AG WebDev",
  description:
    "Moderne Webentwicklung für Unternehmen & Startups in ganz Deutschland. Full-Stack Entwicklung, APIs und individuelle Lösungen mit Next.js, React, Node.js – von AG WebDev, Freelance Webentwickler.",
  keywords: [
    "Webentwicklung",
    "Freelancer Webentwicklung",
    "Webentwicklung Deutschland",
    "Full-Stack Entwicklung",
    "Web-App Entwicklung",
    "API Entwicklung",
    "Individuelle Webentwicklung",
    "React",
    "Next.js",
    "Node.js",
    "AG WebDev",
    "Business Websites",
    "Softwareentwicklung",
    "Digitale Lösungen",
    "Webentwicklung Services",
    "Webseite erstellen lassen",
  ],
  openGraph: {
    title:
      "Webentwicklung Freelancer Deutschland – Moderne Web-Apps & Websites | AG WebDev",
    description:
      "Moderne Webentwicklung für Unternehmen und Startups in ganz Deutschland. Individuelle, leistungsstarke Lösungen mit modernsten Technologien – Next.js, React, Node.js.",
    url: "https://www.ag-webdev.de/webentwicklung",
    siteName: "AG WebDev",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/webentwicklung-hero.png",
        width: 1200,
        height: 630,
        alt: "Moderne Webentwicklung von AG WebDev",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/webentwicklung",
  },
};

// Structured Data (fără Agentur!)
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alexandru Gheorghe – Webentwicklung Freelancer",
    alternateName: "AG WebDev",
    description:
      "Freelance Webentwickler – Full-Stack Webentwicklung & digitale Lösungen für Unternehmen in Deutschland. Entwicklung von Websites, Web-Apps und APIs.",
    url: "https://www.ag-webdev.de/webentwicklung",
    image: "https://www.ag-webdev.de/images/webentwicklung-hero.png",
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
    hasOccupation: {
      "@type": "Occupation",
      name: "Webentwickler (Freiberufler)",
      description:
        "Full-Stack Entwicklung, API Entwicklung, Web-App Entwicklung",
    },
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
      <WebentwicklungClient />
      <StructuredData />
    </>
  );
}
