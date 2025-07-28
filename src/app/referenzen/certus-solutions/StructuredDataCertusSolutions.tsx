export default function StructuredDataCertusSolutions() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: "Certus Solutions",
    alternateName: "Certus Solutions Referenz",
    description:
      "Shopify-basierte Webentwicklung, modernes UI/UX Design und individuelle Funktionen für Certus Solutions. Realisiert von AG WebDev.",
    url: "https://www.ag-webdev.de/referenzen/certus-solutions",
    image: ["https://www.ag-webdev.de/images/oberholzer-projekt1.png"],
    datePublished: "2024-06-12",
    creator: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      url: "https://www.ag-webdev.de/",
      email: "contact@ag-webdev.de",
      sameAs: [
        "https://github.com/Alexandru-Dumitrel-Gheorghe",
        "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
      ],
    },
    about: {
      "@type": "Organization",
      name: "Certus Solutions",
      url: "https://certussolutions.de",
    },
    keywords: [
      "Webentwicklung",
      "Webdesign",
      "Shopify Integration",
      "UI/UX Design",
      "Referenz",
      "AG WebDev",
    ],
    inLanguage: "de",
    workPerformed:
      "Konzeption, Webentwicklung, Design, Shopify-Integration, Performance-Optimierung.",
    audience: {
      "@type": "Audience",
      audienceType: "B2B",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      key="structured-data-certus"
    />
  );
}
