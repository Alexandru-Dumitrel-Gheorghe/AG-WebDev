// components/StructuredDataFragaOnlineShop.jsx
"use client";

export default function StructuredDataFragaOnlineShop() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: "Fraga Online Shop (Demo Projekt)",
    alternateName: "Fraga Online Shop Referenz (Demo)",
    description:
      "Demo Case Study: E-Commerce Entwicklung, Webdesign und Shopify-Schnittstelle für Fraga Online Shop. Präsentiert von AG WebDev als Demonstration individueller Lösungen für maximale Performance. Kein echter Shop, nur ein Demo-Projekt für Portfolio-Zwecke.",
    url: "https://www.ag-webdev.de/referenzen/fraga-online-shop",
    image: ["https://www.ag-webdev.de/images/certus-projekt.png"],
    datePublished: "2024-07-20",
    creator: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      url: "https://www.ag-webdev.de/",
      sameAs: [
        "https://github.com/Alexandru-Dumitrel-Gheorghe",
        "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
      ],
    },
    about: {
      "@type": "CreativeWork",
      name: "Fraga Online Shop Demo",
      url: "https://www.ag-webdev.de/referenzen/fraga-online-shop",
    },
    keywords: [
      "E-Commerce",
      "Demo",
      "Online Shop",
      "Webentwicklung",
      "Shopify",
      "UI/UX Design",
      "Referenz",
      "AG WebDev",
      "Portfolio",
    ],
    inLanguage: "de",
    workPerformed:
      "Konzeption, E-Commerce Webentwicklung, UI/UX Design, Shopify-Anbindung, Performance-Optimierung (Demo-Projekt).",
    audience: {
      "@type": "Audience",
      audienceType: "B2B",
    },
    isAccessibleForFree: true,
    educationalUse: "Demo, Portfolio",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      key="structured-data-fraga"
    />
  );
}
