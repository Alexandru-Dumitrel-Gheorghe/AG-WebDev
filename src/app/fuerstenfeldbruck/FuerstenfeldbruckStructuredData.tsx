"use client";
import React from "react";

export default function FFBStructuredData() {
  return (
    <>
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AG WebDev",
            url: "https://www.ag-webdev.de/fuerstenfeldbruck",
            logo: "https://www.ag-webdev.de/images/logo.png",
            description:
              "Remote Webdesign und SEO für Fürstenfeldbruck: Moderne Webseiten, digitale Beratung und individuelle Lösungen für Unternehmen, Startups und Selbstständige.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Stockmeierweg 11",
              addressLocality: "Fürstenfeldbruck",
              postalCode: "82256",
              addressCountry: "DE",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+49 157 7215 8264",
                email: "contact@ag-webdev.de",
                contactType: "customer support",
                availableLanguage: ["German", "English"],
              },
            ],
            sameAs: [
              "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
              "https://github.com/Alexandru-Dumitrel-Gheorghe",
            ],
          }),
        }}
      />
      {/* Review Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: "AG WebDev",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            author: {
              "@type": "Person",
              name: "Max B.",
            },
            datePublished: "2025-07-28",
            reviewBody:
              "Sehr kompetente Webagentur für Fürstenfeldbruck. Schnelle Umsetzung, kreatives Design und top Support – 100% empfehlenswert!",
          }),
        }}
      />
    </>
  );
}
