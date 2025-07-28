export default function StructuredDataSeo() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SEO",
    provider: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      alternateName: "AG WebDev",
      url: "https://www.ag-webdev.de",
      description:
        "SEO Freelancer – Professionelle Suchmaschinenoptimierung für Unternehmen, Startups und Selbstständige in ganz Deutschland. Bessere Sichtbarkeit, mehr Kunden, nachhaltiges Wachstum.",
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
      "SEO vom Freelancer – individuelle Strategien, OnPage- und OffPage-Optimierung, Content-SEO und technische Beratung für Ihren Erfolg bei Google und Co.",
    offers: {
      "@type": "Offer",
      url: "https://www.ag-webdev.de/seo",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-data-seo"
    />
  );
}
