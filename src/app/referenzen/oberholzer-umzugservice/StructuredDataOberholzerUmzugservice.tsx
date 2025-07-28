export default function StructuredDataOberholzerUmzugservice() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: "Oberholzer Umzugservice Website",
    alternateName: "Oberholzer Umzugservice Webdesign",
    description:
      "Website, Branding, SEO und Performance-Optimierung für Oberholzer Umzugservice. Umgesetzt von AG WebDev für maximale Sichtbarkeit und Conversion.",
    url: "https://www.ag-webdev.de/referenzen/oberholzer-umzugservice",
    image: ["https://www.ag-webdev.de/images/oberholzer-projekt1.png"],
    datePublished: "2024-07-25",
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
      name: "Oberholzer Umzugservice",
      url: "https://oberholzerch.netlify.app/",
    },
    keywords: [
      "Webdesign",
      "Webentwicklung",
      "Umzugservice",
      "Schweiz",
      "SEO",
      "Branding",
      "Referenz",
      "AG WebDev",
    ],
    inLanguage: "de",
    workPerformed:
      "Konzeption, Webentwicklung, Branding, Performance-Optimierung, SEO.",
    audience: {
      "@type": "Audience",
      audienceType: "B2B",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      key="structured-data-oberholzer"
    />
  );
}
