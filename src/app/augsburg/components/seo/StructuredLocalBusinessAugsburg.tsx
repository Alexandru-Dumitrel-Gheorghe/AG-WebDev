"use client";
import React from "react";

export default function StructuredLocalBusinessAugsburg() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    name: "AG WebDev - Webdesign Agentur Augsburg",
    alternateName: "AG Web Development Augsburg",
    url: "https://www.ag-webdev.de/augsburg",
    logo: "https://www.ag-webdev.de/logo.png",
    image: ["https://www.ag-webdev.de/images/augsburg-hero.png"],
    description:
      "Professionelle Webdesign Agentur in Augsburg. Spezialisiert auf moderne Websites, Webentwicklung mit React/Next.js und SEO-Optimierung für Unternehmen in Augsburg und Bayern.",
    keywords: "Webdesign, Webentwicklung, SEO, Augsburg, Bayern, Freelancer",
    telephone: "+49 157 7215 8264",
    email: "contact@ag-webdev.de",
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    foundingDate: "2022-01-01",
    founder: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Maximilianstraße 1",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+49 157 7215 8264",
        contactType: "customer service",
        email: "contact@ag-webdev.de",
        availableLanguage: ["German", "English", "Romanian"],
        areaServed: ["DE", "AT", "CH"],
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webdesign",
          description:
            "Modernes Webdesign für Unternehmen in Augsburg und Bayern",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webentwicklung",
          description:
            "Entwicklung maßgeschneiderter Websites mit React und Next.js",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO-Optimierung",
          description: "Suchmaschinenoptimierung für bessere Google-Rankings",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wartung & Support",
          description: "Regelmäßige Website-Wartung und technischer Support",
        },
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
      "https://github.com/Alexandru-Dumitrel-Gheorghe",
    ],
    hasMap: "https://maps.google.com/?q=48.366512,10.89851",
    areaServed: [
      {
        "@type": "City",
        name: "Augsburg",
      },
      {
        "@type": "State",
        name: "Bayern",
      },
      {
        "@type": "Country",
        name: "Deutschland",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
