"use client";
export default function StructuredDataProjekte() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projekte & Referenzen",
          description:
            "Erfolgreiche Webdesign- und Entwicklungsprojekte von AG WebDev.",
          url: "https://www.ag-webdev.de/projekte",
          // Poți adăuga o listă de proiecte cu @type: WebSite sau CreativeWork
        }),
      }}
    />
  );
}
