// components/SEO/StructuredBreadcrumbsWebentwicklung.tsx
"use client";
import React from "react";

export default function StructuredBreadcrumbsWebentwicklung() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ag-webdev.de/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Webentwicklung",
        item: "https://www.ag-webdev.de/Webentwicklung",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-breadcrumb-webentwicklung"
    />
  );
}
