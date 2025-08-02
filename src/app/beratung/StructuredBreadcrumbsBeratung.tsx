"use client";
export default function StructuredBreadcrumbsBeratung() {
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
        name: "Beratung",
        item: "https://www.ag-webdev.de/beratung",
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
