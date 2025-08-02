"use client";
import React from "react";

/**
 * Structured data Service schema pentru Fürstenfeldbruck
 * Valabil pentru toate serviciile din ofertă, cu date localizate.
 */
export default function StructuredServicesFFB() {
  return (
    <>
      {/* Service - Webdesign */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Webdesign",
            areaServed: {
              "@type": "Place",
              name: "Fürstenfeldbruck",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fürstenfeldbruck",
                addressCountry: "DE",
              },
            },
            provider: {
              "@type": "Organization",
              name: "AG WebDev",
              url: "https://www.ag-webdev.de/fuerstenfeldbruck",
              logo: "https://www.ag-webdev.de/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+49 157 7215 8264",
                email: "contact@ag-webdev.de",
                contactType: "customer support",
                availableLanguage: ["German", "English"],
              },
            },
            description:
              "Modernes, responsives und performantes Webdesign für Unternehmen aus Fürstenfeldbruck und Umgebung.",
            url: "https://www.ag-webdev.de/fuerstenfeldbruck",
          }),
        }}
      />

      {/* Service - Webentwicklung */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Webentwicklung",
            areaServed: {
              "@type": "Place",
              name: "Fürstenfeldbruck",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fürstenfeldbruck",
                addressCountry: "DE",
              },
            },
            provider: {
              "@type": "Organization",
              name: "AG WebDev",
              url: "https://www.ag-webdev.de/fuerstenfeldbruck",
              logo: "https://www.ag-webdev.de/images/logo.png",
            },
            description:
              "Moderne Websites und Web-Apps für Unternehmen aus Fürstenfeldbruck – schnell, sicher, individuell.",
            url: "https://www.ag-webdev.de/fuerstenfeldbruck",
          }),
        }}
      />

      {/* Service - SEO & Marketing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "SEO & Marketing",
            areaServed: {
              "@type": "Place",
              name: "Fürstenfeldbruck",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fürstenfeldbruck",
                addressCountry: "DE",
              },
            },
            provider: {
              "@type": "Organization",
              name: "AG WebDev",
              url: "https://www.ag-webdev.de/fuerstenfeldbruck",
              logo: "https://www.ag-webdev.de/images/logo.png",
            },
            description:
              "Suchmaschinenoptimierung (SEO) und Online-Marketing für mehr Sichtbarkeit in Fürstenfeldbruck.",
            url: "https://www.ag-webdev.de/fuerstenfeldbruck",
          }),
        }}
      />

      {/* Service - Google Indexierung */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Google Indexierung",
            areaServed: {
              "@type": "Place",
              name: "Fürstenfeldbruck",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fürstenfeldbruck",
                addressCountry: "DE",
              },
            },
            provider: {
              "@type": "Organization",
              name: "AG WebDev",
              url: "https://www.ag-webdev.de/fuerstenfeldbruck",
              logo: "https://www.ag-webdev.de/images/logo.png",
            },
            description:
              "Schnelle und effektive Google Indexierung für Websites in Fürstenfeldbruck.",
            url: "https://www.ag-webdev.de/fuerstenfeldbruck",
          }),
        }}
      />

      {/* Service - Wartung & Support */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Wartung & Support",
            areaServed: {
              "@type": "Place",
              name: "Fürstenfeldbruck",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fürstenfeldbruck",
                addressCountry: "DE",
              },
            },
            provider: {
              "@type": "Organization",
              name: "AG WebDev",
              url: "https://www.ag-webdev.de/fuerstenfeldbruck",
              logo: "https://www.ag-webdev.de/images/logo.png",
            },
            description:
              "Zuverlässige Pflege und technischer Support für Ihre Website in Fürstenfeldbruck.",
            url: "https://www.ag-webdev.de/fuerstenfeldbruck",
          }),
        }}
      />

      {/* Service - Beratung */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Beratung",
            areaServed: {
              "@type": "Place",
              name: "Fürstenfeldbruck",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fürstenfeldbruck",
                addressCountry: "DE",
              },
            },
            provider: {
              "@type": "Organization",
              name: "AG WebDev",
              url: "https://www.ag-webdev.de/fuerstenfeldbruck",
              logo: "https://www.ag-webdev.de/images/logo.png",
            },
            description:
              "Individuelle Beratung und digitale Strategie für Unternehmen in Fürstenfeldbruck.",
            url: "https://www.ag-webdev.de/fuerstenfeldbruck",
          }),
        }}
      />
    </>
  );
}
