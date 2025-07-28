export default function StructuredDataGoogleIndexierung() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Google Indexierung",
    provider: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      alternateName: "AG WebDev",
      url: "https://www.ag-webdev.de",
      description:
        "Freelancer für schnelle, zuverlässige Google Indexierung – Sichtbarkeit, SEO-Erfolg und Top-Ranking deutschlandweit.",
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
      "Professionelle Google Indexierung vom SEO-Freelancer: Ihre Website wird schnell, zuverlässig und nachhaltig in Google aufgenommen. Für Unternehmen, Startups und Selbstständige in ganz Deutschland.",
    offers: {
      "@type": "Offer",
      url: "https://www.ag-webdev.de/google-indexierung",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-data-google-indexierung"
    />
  );
}
