"use client";
import React from "react";

export default function StructuredLocalBusiness() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    name: "AG WebDev - Webdesign Agentur Fürstenfeldbruck",
    alternateName: "AG Web Development",
    url: "https://www.ag-webdev.de",
    logo: "https://www.ag-webdev.de/images/logo.png",
    image: ["https://www.ag-webdev.de/images/ffb-hero.png"],
    description:
      "Professionelle Webdesign Agentur in Fürstenfeldbruck. Spezialisiert auf moderne Websites, Webentwicklung mit React/Next.js und SEO-Optimierung für Unternehmen in Bayern.",
    keywords: "Webdesign, Webentwicklung, SEO, Fürstenfeldbruck, Freelancer",
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+49 157 7215 8264",
        contactType: "customer service",
        email: "contact@ag-webdev.de",
        availableLanguage: ["German", "English"],
        areaServed: ["DE", "AT", "CH"],
        contactOption: "TollFree",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webdesign",
          description: "Moderne Website-Gestaltung für Unternehmen",
        },
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
      "https://github.com/Alexandru-Dumitrel-Gheorghe",
    ],
    hasMap: "https://maps.google.com/?q=48.177772,11.251801",
    areaServed: [
      {
        "@type": "City",
        name: "Fürstenfeldbruck",
      },
      {
        "@type": "City",
        name: "München",
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
