"use client";
import React from "react";

export default function StructuredServices() {
  // Listă servicii – modifică linkurile dacă sunt diferite
  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Webdesign",
      name: "Webdesign",
      description: "Modernes, responsives und performantes Webdesign.",
      provider: {
        "@type": "LocalBusiness",
        name: "AG WebDev",
        url: "https://www.ag-webdev.de",
      },
      areaServed: { "@type": "Country", name: "Deutschland" },
      url: "https://www.ag-webdev.de/webdesign",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Webentwicklung",
      name: "Webentwicklung",
      description: "Moderne Websites und Web-Apps mit neuesten Technologien.",
      provider: {
        "@type": "LocalBusiness",
        name: "AG WebDev",
        url: "https://www.ag-webdev.de",
      },
      areaServed: { "@type": "Country", name: "Deutschland" },
      url: "https://www.ag-webdev.de/Webentwicklung",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "SEO & Marketing",
      name: "SEO & Marketing",
      description: "Ihre Website auf Top-Positionen bei Google.",
      provider: {
        "@type": "LocalBusiness",
        name: "AG WebDev",
        url: "https://www.ag-webdev.de",
      },
      areaServed: { "@type": "Country", name: "Deutschland" },
      url: "https://www.ag-webdev.de/seo",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Google Indexierung",
      name: "Google Indexierung",
      description:
        "Wir sorgen dafür, dass Ihre Website von Google schnell & effektiv gefunden wird.",
      provider: {
        "@type": "LocalBusiness",
        name: "AG WebDev",
        url: "https://www.ag-webdev.de",
      },
      areaServed: { "@type": "Country", name: "Deutschland" },
      url: "https://www.ag-webdev.de/google-indexierung",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Wartung & Support",
      name: "Wartung & Support",
      description: "Zuverlässige Pflege und technische Unterstützung.",
      provider: {
        "@type": "LocalBusiness",
        name: "AG WebDev",
        url: "https://www.ag-webdev.de",
      },
      areaServed: { "@type": "Country", name: "Deutschland" },
      url: "https://www.ag-webdev.de/wartung-support",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Beratung",
      name: "Beratung",
      description: "Individuelle Strategien für Ihren Online-Erfolg.",
      provider: {
        "@type": "LocalBusiness",
        name: "AG WebDev",
        url: "https://www.ag-webdev.de",
      },
      areaServed: { "@type": "Country", name: "Deutschland" },
      url: "https://www.ag-webdev.de/beratung",
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Poți folosi direct un array: Google îl acceptă!
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
    />
  );
}
