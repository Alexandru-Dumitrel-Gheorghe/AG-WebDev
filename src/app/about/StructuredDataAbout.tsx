// app/about/StructuredDataAbout.tsx
export default function StructuredDataAbout() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alexandru Gheorghe",
    alternateName: "AG WebDev",
    url: "https://www.ag-webdev.de/about",
    image: "https://www.ag-webdev.de/images/profil.jpg", // înlocuiește cu poza ta reală dacă ai
    jobTitle: "Freelance Webdesigner & Entwickler",
    description:
      "Freelance Webdesigner, UI/UX Designer und SEO Spezialist aus Fürstenfeldbruck. Professionelle Websites und Beratung deutschlandweit.",
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
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-data-about"
    />
  );
}
