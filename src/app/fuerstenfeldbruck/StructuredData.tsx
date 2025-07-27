export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AG WebDev",
    url: "https://ag-webdev.de/fuerstenfeldbruck",
    logo: "https://ag-webdev.de/logo.png",
    description: "Webdesign, Webseiten erstellen und SEO in Fürstenfeldbruck.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fürstenfeldbruck",
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "Place",
      name: "Fürstenfeldbruck",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@ag-webdev.de",
      contactType: "customer support",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
