"use client";
import React from "react";

const providerDetails = {
  "@type": ["LocalBusiness", "Organization"],
  name: "AG WebDev - Webdesign Agentur Fürstenfeldbruck",
  url: "https://www.ag-webdev.de",
  logo: "https://www.ag-webdev.de/images/logo.png",
  image: ["https://www.ag-webdev.de/images/ffb-hero.png"],
  description:
    "Professionelle Webdesign Agentur in Fürstenfeldbruck. Spezialisiert auf moderne Websites, Webentwicklung mit React/Next.js und SEO-Optimierung für Unternehmen in Bayern.",
  telephone: "+49 157 7215 8264",
  email: "contact@ag-webdev.de",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stockmeierweg 11",
    addressLocality: "Fürstenfeldbruck",
    addressRegion: "Bayern",
    postalCode: "82256",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.177772",
    longitude: "11.251801",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
    "https://github.com/Alexandru-Dumitrel-Gheorghe",
  ],
};

export default function StructuredServices() {
  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Webdesign",
      name: "Webdesign Fürstenfeldbruck",
      description:
        "Modernes, responsives Webdesign für Unternehmen in Fürstenfeldbruck und ganz Deutschland. Mobile-optimierte Websites die konvertieren.",
      provider: providerDetails,
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Webdesign Pakete",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Basic Webdesign Paket",
              description: "Einstiegs-Webdesign für kleine Unternehmen",
            },
          },
        ],
      },
      url: "https://www.ag-webdev.de/webdesign",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Webentwicklung",
      name: "Webentwicklung mit React & Next.js",
      description:
        "Moderne Websites und Web-Apps mit React, Next.js und neuesten Technologien. Hochperformante Lösungen maßgeschneidert für Ihre Anforderungen.",
      provider: providerDetails,
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      url: "https://www.ag-webdev.de/Webentwicklung",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "SEO & Marketing",
      name: "SEO Optimierung",
      description:
        "Umfassende SEO-Maßnahmen für bessere Sichtbarkeit in Suchmaschinen. OnPage, OffPage und technisches SEO für Top-Rankings.",
      provider: providerDetails,
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      url: "https://www.ag-webdev.de/seo",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Google Indexierung",
      name: "Google Indexierung Service",
      description:
        "Schnelle Indexierung Ihrer Website in Google. Behebung von Indexierungsproblemen und Optimierung für bessere Auffindbarkeit.",
      provider: providerDetails,
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      url: "https://www.ag-webdev.de/google-indexierung",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Wartung & Support",
      name: "Website Wartung",
      description:
        "Regelmäßige Wartung, Updates und technischer Support für Ihre Website. Sicherheit, Performance und Zuverlässigkeit garantiert.",
      provider: providerDetails,
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      url: "https://www.ag-webdev.de/wartung-support",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Beratung",
      name: "Webstrategie Beratung",
      description:
        "Individuelle Beratung für Ihre Online-Strategie. Von Konzeptentwicklung bis Umsetzungsplanung für Ihren digitalen Erfolg.",
      provider: providerDetails,
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      url: "https://www.ag-webdev.de/beratung",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
    />
  );
}
