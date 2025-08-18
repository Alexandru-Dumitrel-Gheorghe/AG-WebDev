// app/domain-check/SEOJsonLd.tsx
"use client";

import Script from "next/script";

type Props = {
  siteUrl: string;
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
  imageUrl: string;
};

export default function SEOJsonLd({
  siteUrl,
  pageUrl,
  pageTitle,
  pageDescription,
  imageUrl,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: "de-DE",
        primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        isPartOf: { "@id": `${siteUrl}#website` },
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#primaryimage`,
        url: imageUrl,
        width: 1200,
        height: 630,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Domain-Check",
            item: pageUrl,
          },
        ],
      },
      // FAQPage se aliniază cu întrebările din FaqSection
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Wie prüfe ich die Domain Verfügbarkeit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Geben Sie Ihren gewünschten Namen ein und starten Sie den Sofort-Check. Wir prüfen in Echtzeit gängige TLDs wie .de, .com, .io, .ai u.v.m.",
            },
          },
          {
            "@type": "Question",
            name: "Welche TLD ist für Deutschland sinnvoll?",
            acceptedAnswer: {
              "@type": "Answer",
              text: ".de ist der Standard für Deutschland. Auch .com wird häufig genutzt. Je nach Zielgruppe können .io oder .ai sinnvoll sein.",
            },
          },
          {
            "@type": "Question",
            name: "Was kostet eine Domain-Registrierung?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Die Preise variieren je nach Endung und Anbieter. Nach dem Check leiten wir Sie zur Registrierung bei unserem Partner weiter, wo Sie die aktuellen Preise sehen.",
            },
          },
          {
            "@type": "Question",
            name: "Kann ich ähnliche Domains finden, wenn meine Wunschdomain belegt ist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ja. Wir zeigen Vorschläge und leiten Sie zur Suche nach alternativen Schreibweisen und Endungen weiter.",
            },
          },
          {
            "@type": "Question",
            name: "Beeinflusst die Domain meine SEO?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Eine klare, merkbare Domain hilft Nutzern und kann CTR verbessern. Für SEO zählen vor allem Inhalte, Technik und Backlinks.",
            },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "AG WebDev",
        url: siteUrl,
      },
    ],
  };

  return (
    <Script
      id="domaincheck-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
