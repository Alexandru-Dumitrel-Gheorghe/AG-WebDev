"use client";
export default function StructuredBreadcrumbsWartungSupport() {
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
        name: "Wartung & Support",
        item: "https://www.ag-webdev.de/wartung-support",
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
