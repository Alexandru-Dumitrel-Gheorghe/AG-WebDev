// StructuredBreadcrumbsGoogleIndexierung.tsx
"use client";
export default function StructuredBreadcrumbsGoogleIndexierung() {
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
        name: "Google Indexierung",
        item: "https://www.ag-webdev.de/google-indexierung",
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
