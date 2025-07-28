export default function StructuredDataWebdesign() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Webdesign",
    provider: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      alternateName: "AG WebDev",
      url: "https://www.ag-webdev.de",
      description:
        "Modernes, responsives und performantes Webdesign von Freelance Webdesigner Alexandru Gheorghe (AG WebDev) für Unternehmen, Startups und Selbstständige in Deutschland.",
      email: "contact@ag-webdev.de",
      telephone: "+49 157 7215 8264",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fürstenfeldbruck",
        postalCode: "82256",
        addressCountry: "DE",
      },
      sameAs: [
        "https://github.com/Alexandru-Dumitrel-Gheorghe",
        "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
      ],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Deutschland",
      },
    ],
    description:
      "Modernes, responsives und performantes Webdesign für Unternehmen, Startups und Selbständige – deutschlandweit. Maßgeschneiderte Lösungen für Ihren digitalen Erfolg.",
    offers: {
      "@type": "Offer",
      url: "https://www.ag-webdev.de/webdesign",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-data-webdesign"
    />
  );
}
