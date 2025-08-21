// app/domain-check/components/SEOJsonLd.tsx
interface SEOJsonLdProps {
  siteUrl: string;
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
  imageUrl: string;
}

export default function SEOJsonLd({
  siteUrl,
  pageUrl,
  pageTitle,
  pageDescription,
  imageUrl,
}: SEOJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    mainEntity: {
      "@type": "Service",
      name: "Domain Check",
      description: pageDescription,
    },
    image: imageUrl,
    publisher: {
      "@type": "Organization",
      name: "AG WebDev",
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
