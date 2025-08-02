"use client";
import React from "react";

export default function StructuredBreadcrumbsFFB() {
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
        name: "Webdesign Fürstenfeldbruck",
        item: "https://www.ag-webdev.de/fuerstenfeldbruck",
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
