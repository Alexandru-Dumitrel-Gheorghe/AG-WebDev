"use client";
import React from "react";

export default function StructuredDataOberholzerUmzugservice() {
  // Project (CreativeWork) schema
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Oberholzer Umzugservice Website",
    alternateName: "Oberholzer Umzugservice Webdesign",
    description:
      "Website, Branding, SEO und Performance-Optimierung für Oberholzer Umzugservice. Umgesetzt von AG WebDev für maximale Sichtbarkeit und Conversion.",
    url: "https://www.ag-webdev.de/referenzen/oberholzer-umzugservice",
    image: ["https://www.ag-webdev.de/images/oberholzer-projekt1.png"],
    datePublished: "2024-07-25",
    author: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      url: "https://www.ag-webdev.de/",
      email: "contact@ag-webdev.de",
      sameAs: [
        "https://github.com/Alexandru-Dumitrel-Gheorghe",
        "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
      ],
    },
    about: {
      "@type": "Organization",
      name: "Oberholzer Umzugservice",
      url: "https://oberholzerch.netlify.app/",
    },
    keywords:
      "Webdesign, Webentwicklung, Umzugservice, Schweiz, SEO, Branding, Referenz, AG WebDev",
    inLanguage: "de",
    workPerformed:
      "Konzeption, Webentwicklung, Branding, Performance-Optimierung, SEO",
    audience: {
      "@type": "Audience",
      audienceType: "B2B",
    },
    publisher: {
      "@type": "Organization",
      name: "AG WebDev",
      url: "https://www.ag-webdev.de/",
    },
  };

  // Service + Review pentru stele (dacă vrei rich snippet pe Google)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Webdesign & Webentwicklung für Umzugsunternehmen",
    serviceType: "Webdesign, Webentwicklung",
    areaServed: {
      "@type": "Country",
      name: "Schweiz",
    },
    provider: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      url: "https://www.ag-webdev.de/",
      email: "contact@ag-webdev.de",
      sameAs: [
        "https://github.com/Alexandru-Dumitrel-Gheorghe",
        "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
      ],
    },
    url: "https://www.ag-webdev.de/referenzen/oberholzer-umzugservice",
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Lirim Zenki",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2025-07-14",
      reviewBody:
        "Meine Erwartungen wurden weit übertroffen. Schnelle Umsetzung, leichte Einrichtung und top Support! Vielen Dank Alex! Grüsse aus der Schweiz.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        key="structured-data-oberholzer-project"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        key="structured-data-oberholzer-service"
      />
    </>
  );
}
