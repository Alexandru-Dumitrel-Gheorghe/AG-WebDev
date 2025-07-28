export default function StructuredDataBlog() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AG WebDev Blog",
    url: "https://www.ag-webdev.de/blog",
    description:
      "Praxis-Tipps, Guides & Insights zu Webdesign, SEO, Webentwicklung und digitalen Strategien vom Freelance Webentwickler Alexandru Gheorghe.",
    publisher: {
      "@type": "Person",
      name: "Alexandru Gheorghe",
      alternateName: "AG WebDev",
      url: "https://www.ag-webdev.de",
      email: "contact@ag-webdev.de",
      sameAs: [
        "https://github.com/Alexandru-Dumitrel-Gheorghe",
        "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
      ],
    },
    inLanguage: "de",
    blogPost: [], // Dacă ai postări poți popula aici la SSR/SSG (SEO avansat)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="structured-data-blog"
    />
  );
}
