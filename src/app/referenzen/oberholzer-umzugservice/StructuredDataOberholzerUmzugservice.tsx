// components/StructuredDataOberholzerUmzugservice.jsx
"use client";

import React from "react";

export default function StructuredDataOberholzerUmzugservice() {
  // 1) Contextul proiectului (CreativeWork)
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

  // 2) Pentru rich snippet cu stele: tratăm proiectul ca un "Product"
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Oberholzer Umzugservice Website",
    image: ["https://www.ag-webdev.de/images/oberholzer-projekt1.png"],
    description:
      "Website, Branding und Performance-Optimierung für Oberholzer Umzugservice, realisiert von AG WebDev.",
    brand: {
      "@type": "Organization",
      name: "AG WebDev",
    },
    url: "https://www.ag-webdev.de/referenzen/oberholzer-umzugservice",
    review: [
      {
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        key="ld-json-oberholzer-project"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />
      <script
        type="application/ld+json"
        key="ld-json-oberholzer-product"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
    </>
  );
}
