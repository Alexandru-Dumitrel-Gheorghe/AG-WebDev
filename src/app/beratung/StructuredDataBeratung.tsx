export default function StructuredDataBeratung() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digitale Beratung & Strategie",
    provider: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      alternateName: "AG WebDev",
      url: "https://www.ag-webdev.de",
      description:
        "Freelance Berater für digitale Strategien, Webentwicklung und Online-Marketing – deutschlandweit.",
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
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    description:
      "Digitale Beratung und Strategieentwicklung für Unternehmen, Startups und Selbstständige. Persönlich, individuell und deutschlandweit vom Freelance Webentwickler.",
    offers: {
      "@type": "Offer",
      url: "https://www.ag-webdev.de/beratung",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-data-beratung"
    />
  );
}
