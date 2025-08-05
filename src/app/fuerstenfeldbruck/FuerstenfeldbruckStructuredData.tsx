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

      {/* mainContentOfPage Structured Data (SEO Boost) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Webdesign Fürstenfeldbruck – Freelancer & Agentur | AG WebDev",
            url: "https://www.ag-webdev.de/fuerstenfeldbruck",
            mainContentOfPage: {
              "@type": "WebPageElement",
              cssSelector: "#main-content",
              text: "AG WebDev ist Ihr Webdesign Freelancer und Ihre Agentur für Fürstenfeldbruck. Wir bieten modernes Webdesign, individuelle Webentwicklung mit Next.js und React, lokale SEO-Optimierung, UI/UX Design und umfassende Beratung für Unternehmen, Selbstständige und Start-ups aus der Region. Schnelle Umsetzung, kreative Lösungen und langfristiger Support direkt aus Fürstenfeldbruck. Jetzt kostenlose Beratung sichern!",
            },
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
