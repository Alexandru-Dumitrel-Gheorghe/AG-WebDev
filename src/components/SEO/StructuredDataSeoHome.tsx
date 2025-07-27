// components/SEO/StructuredDataSeoHome.tsx
"use client";
import Script from "next/script";

export default function StructuredDataSeoHome() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: "https://www.ag-webdev.de/",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AG WebDev",
      url: "https://www.ag-webdev.de/",
      logo: "https://www.ag-webdev.de/logo.png",
      sameAs: [
        "https://www.linkedin.com/in/alexandru-gheorghe/",
        "https://github.com/gheorghe-alexandru",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "23",
      },
    },
  ];

  return (
    <Script
      id="seo-structured-home"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
