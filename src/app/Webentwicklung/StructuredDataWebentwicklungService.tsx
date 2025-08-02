// components/SEO/StructuredDataWebentwicklungService.tsx
"use client";
import React from "react";

export default function StructuredDataWebentwicklungService() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Webentwicklung",
    provider: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      alternateName: "AG WebDev",
      url: "https://www.ag-webdev.de",
      email: "contact@ag-webdev.de",
      telephone: "+49 157 7215 8264",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fürstenfeldbruck",
        postalCode: "82256",
        addressCountry: "DE",
      },
      sameAs: [
        "https://github.com/Alexandru-Dumitrel-Gheorghe",
        "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    description:
      "Moderne Webentwicklung für Unternehmen & Startups in Deutschland. Individuelle Webentwicklung, APIs, Web-Apps, Full-Stack Entwicklung mit React, Next.js und Node.js.",
    offers: {
      "@type": "Offer",
      url: "https://www.ag-webdev.de/Webentwicklung",
      availability: "https://schema.org/InStock",
    },
    url: "https://www.ag-webdev.de/Webentwicklung",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-service-webentwicklung"
    />
  );
}
