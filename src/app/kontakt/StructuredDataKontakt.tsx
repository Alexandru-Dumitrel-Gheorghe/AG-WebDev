"use client";
import React from "react";

export default function StructuredDataKontakt() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["ContactPage", "WebPage"],
    name: "Kontakt",
    description:
      "Kontaktformular für Webdesign, Webentwicklung und SEO von AG WebDev.",
    url: "https://www.ag-webdev.de/kontakt",
    mainEntity: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      alternateName: "AG WebDev",
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
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+49 157 7215 8264",
          email: "contact@ag-webdev.de",
          contactType: "customer support",
          areaServed: ["DE", "AT", "CH"],
          availableLanguage: ["German", "English", "Romanian"],
        },
      ],
      knowsAbout: [
        "Webdesign",
        "Webentwicklung",
        "SEO",
        "Beratung",
        "React",
        "Next.js",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-data-kontakt"
    />
  );
}
