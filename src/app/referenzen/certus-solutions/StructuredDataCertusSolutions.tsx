// components/StructuredDataCertusSolutions.jsx
"use client";

import React from "react";

export default function StructuredDataCertusSolutions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Shopify Webentwicklung & Design für Certus Solutions",
    image: "https://www.ag-webdev.de/images/oberholzer-projekt1.png",
    description:
      "Case Study: Maßgeschneiderte Webentwicklung, UI/UX Design und Shopify-Anbindung für Certus Solutions.",
    brand: {
      "@type": "Organization",
      name: "AG WebDev",
    },
    url: "https://www.ag-webdev.de/referenzen/certus-solutions",
    review: [
      {
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="structured-data-certus-product"
    />
  );
}
