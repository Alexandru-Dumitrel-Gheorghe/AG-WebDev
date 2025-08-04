"use client";
import React from "react";

export default function StructuredDataCertusSolutions() {
  // Schema Service + Review (pentru rich snippet cu stele)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shopify Webentwicklung & Design",
    serviceType: "Webentwicklung, Webdesign, Shopify-Integration",
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
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
    url: "https://www.ag-webdev.de/referenzen/certus-solutions",
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Paul-Cornelius Peter",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2025-08-02",
      reviewBody:
        "Hervorragende Arbeit! Alex hat meine Erwartungen bei der Erstellung meiner Website certussolutions.de übertroffen. Die Zusammenarbeit war professionell, effizient. Er hat meine Vorstellungen perfekt umgesetzt und dabei kreative Lösungen für technische Herausforderungen gefunden. Die Seite läuft stabil, ist benutzerfreundlich und optisch ansprechend. Ich bin rundum zufrieden und kann ihn uneingeschränkt weiterempfehlen!",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      key="structured-data-certus-service"
    />
  );
}
