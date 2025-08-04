export default function StructuredDataCertusSolutions() {
  const projectJsonLd = {
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

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "CreativeWork",
      name: "Certus Solutions Website",
      url: "https://www.ag-webdev.de/referenzen/certus-solutions",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Paul-Cornelius Peter",
    },
    publisher: {
      "@type": "Organization",
      name: "Certus Solutions",
    },
    datePublished: "2025-08-02",
    reviewBody:
      "Hervorragende Arbeit! Alex hat meine Erwartungen bei der Erstellung meiner Website certussolutions.de übertroffen. Die Zusammenarbeit war professionell, effizient. Er hat meine Vorstellungen perfekt umgesetzt und dabei kreative Lösungen für technische Herausforderungen gefunden. Die Seite läuft stabil, ist benutzerfreundlich und optisch ansprechend. Ich bin rundum zufrieden und kann ihn uneingeschränkt weiterempfehlen!",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        key="structured-data-certus"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        key="structured-data-certus-review"
      />
    </>
  );
}
