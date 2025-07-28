export default function StructuredDataWartungSupport() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wartung & Support",
    provider: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      alternateName: "AG WebDev",
      url: "https://www.ag-webdev.de",
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
      "Zuverlässige Wartung, regelmäßige Updates, Performance-Monitoring & persönlicher Support für Ihre Website in ganz Deutschland. Bleiben Sie sorgenfrei mit dem Wartungsservice von AG WebDev.",
    offers: {
      "@type": "Offer",
      url: "https://www.ag-webdev.de/wartung-support",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-data-wartung-support"
    />
  );
}
