"use client";
import React from "react";

const providerDetails = {
  "@type": ["LocalBusiness", "Organization"],
  name: "AG WebDev - Webdesign Agentur Augsburg",
  url: "https://www.ag-webdev.de/augsburg",
  logo: "https://www.ag-webdev.de/logo.png",
  image: ["https://www.ag-webdev.de/images/augsburg-hero.png"],
  description:
    "Professionelle Webdesign Agentur in Augsburg. Spezialisiert auf moderne Websites, Webentwicklung mit React/Next.js und SEO-Optimierung für Unternehmen in Augsburg und Bayern.",
  telephone: "+49 157 7215 8264",
  email: "contact@ag-webdev.de",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Augsburg",
    addressRegion: "Bayern",
    postalCode: "86150",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.366512",
    longitude: "10.89851",
  },
};

export default function StructuredServicesAugsburg() {
  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Webdesign",
      name: "Webdesign Augsburg",
      description:
        "Modernes, responsives Webdesign für Unternehmen in Augsburg und Umgebung. Mobile-optimierte Websites mit Fokus auf Conversion.",
      provider: providerDetails,
      areaServed: {
        "@type": "City",
        name: "Augsburg",
      },
      url: "https://www.ag-webdev.de/augsburg",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Webentwicklung",
      name: "Webentwicklung Augsburg",
      description:
        "Individuelle Webentwicklung und Web-Apps mit React, Next.js und modernen Technologien für Firmen in Augsburg.",
      provider: providerDetails,
      areaServed: {
        "@type": "City",
        name: "Augsburg",
      },
      url: "https://www.ag-webdev.de/augsburg",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "SEO & Marketing",
      name: "SEO Augsburg",
      description:
        "SEO-Optimierung speziell für Unternehmen in Augsburg. OnPage, OffPage und technisches SEO für lokale Top-Rankings.",
      provider: providerDetails,
      areaServed: {
        "@type": "City",
        name: "Augsburg",
      },
      url: "https://www.ag-webdev.de/augsburg",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Wartung & Support",
      name: "Website Wartung Augsburg",
      description:
        "Regelmäßige Wartung, Updates und Support für Ihre Website in Augsburg. Sicherheit, Performance und Zuverlässigkeit.",
      provider: providerDetails,
      areaServed: {
        "@type": "City",
        name: "Augsburg",
      },
      url: "https://www.ag-webdev.de/augsburg",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Beratung",
      name: "Beratung Augsburg",
      description:
        "Individuelle Beratung und digitale Strategie für Unternehmen aus Augsburg.",
      provider: providerDetails,
      areaServed: {
        "@type": "City",
        name: "Augsburg",
      },
      url: "https://www.ag-webdev.de/augsburg",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
    />
  );
}
