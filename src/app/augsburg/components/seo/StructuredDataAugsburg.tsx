"use client";
import React from "react";

export default function StructuredDataAugsburg() {
  return (
    <>
      {/* Organization + LocalBusiness + Reviews + AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            name: "AG WebDev - Webdesign Agentur Augsburg",
            url: "https://www.ag-webdev.de/augsburg",
            logo: "https://www.ag-webdev.de/logo.png",
            image: ["https://www.ag-webdev.de/images/augsburg-hero.png"],
            description:
              "Professionelle Webdesign Agentur in Augsburg. Spezialisiert auf moderne Websites, Webentwicklung mit React/Next.js und SEO-Optimierung für Unternehmen in Augsburg und Bayern.",
            telephone: "+49 157 7215 8264",
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
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+49 157 7215 8264",
                email: "contact@ag-webdev.de",
                contactType: "customer support",
                availableLanguage: ["German", "English"],
                areaServed: "DE",
              },
            ],
            sameAs: [
              "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
              "https://github.com/Alexandru-Dumitrel-Gheorghe",
            ],
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Sven Müller",
                },
                datePublished: "2024-07-01",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Top Webdesign-Agentur in Augsburg! Die Umsetzung war schnell und genau auf unsere Wünsche abgestimmt.",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Anna Schuster",
                },
                datePublished: "2024-06-15",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Sehr gute Kommunikation und professionelle Webseiten für unser Augsburger Unternehmen.",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "2",
            },
          }),
        }}
      />

      {/* WebPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Webdesign & Webentwicklung Augsburg | AG WebDev",
            url: "https://www.ag-webdev.de/augsburg",
            mainContentOfPage: {
              "@type": "WebPageElement",
              cssSelector: "#main-content",
              text: "AG WebDev ist Ihr Partner für modernes Webdesign, Webentwicklung und SEO in Augsburg. Individuelle Websites mit Next.js & React, gezielt für Unternehmen, Startups und Selbstständige in Augsburg.",
            },
          }),
        }}
      />

      {/* Person Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Alexandru Gheorghe",
            jobTitle: "Freelancer Webdesigner & Entwickler",
            url: "https://www.ag-webdev.de",
            image: "https://www.ag-webdev.de/images/profil.jpg",
            worksFor: {
              "@type": "Organization",
              name: "AG WebDev - Webdesign Agentur Augsburg",
            },
            sameAs: [
              "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
              "https://github.com/Alexandru-Dumitrel-Gheorghe",
            ],
            email: "contact@ag-webdev.de",
            telephone: "+49 157 7215 8264",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Augsburg",
              addressRegion: "Bayern",
              postalCode: "86150",
              addressCountry: "DE",
            },
          }),
        }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: "https://www.ag-webdev.de",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Augsburg",
                item: "https://www.ag-webdev.de/augsburg",
              },
            ],
          }),
        }}
      />
    </>
  );
}
