"use client";
import React from "react";

export default function StructuredDataHome() {
  return (
    <>
      {/* Organization + LocalBusiness + Reviews + AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            name: "AG WebDev - Webdesign Agentur Fürstenfeldbruck",
            url: "https://www.ag-webdev.de",
            logo: "https://www.ag-webdev.de/images/logo.png",
            image: ["https://www.ag-webdev.de/images/ffb-hero.png"],
            description:
              "Professionelle Webdesign Agentur in Fürstenfeldbruck. Spezialisiert auf moderne Websites, Webentwicklung mit React/Next.js und SEO-Optimierung für Unternehmen in Bayern.",
            telephone: "+49 157 7215 8264",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Stockmeierweg 11",
              addressLocality: "Fürstenfeldbruck",
              addressRegion: "Bayern",
              postalCode: "82256",
              addressCountry: "DE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "48.177772",
              longitude: "11.251801",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+49 157 7215 8264",
                email: "contact@ag-webdev.de",
                contactType: "customer support",
                availableLanguage: ["German", "English"],
                areaServed: "DE",
              },
            ],
            sameAs: [
              "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
              "https://github.com/Alexandru-Dumitrel-Gheorghe",
            ],
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Paul-Cornelius Peter",
                },
                datePublished: "2023-04-10",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Ich habe mit Alex an meiner neuen Website gearbeitet und bin absolut begeistert! Von der ersten Idee bis zur finalen Umsetzung war alles professionell, schnell und auf meine Wünsche abgestimmt. Besonders beeindruckt hat mich sein Know-how im Bereich Webentwicklung und Design. Ich kann AG WebDev jedem empfehlen, der eine moderne und leistungsstarke Webseite braucht!",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Diezi Zenki",
                },
                datePublished: "2023-02-15",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Meine Erwartungen wurden weit übertroffen. Schnelle Umsetzung, leichte Einrichtung und top Support! Vielen Dank Alex! Grüsse aus der Schweiz :)",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Lirim Zenki",
                },
                datePublished: "2023-01-20",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Sehr professionelles Webdesign in Fürstenfeldbruck. Schnelle Umsetzung und zeitgemäßes Design. Ich bin mit meiner neuen Website sehr zufrieden. Klare Empfehlung.",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "3",
            },
          }),
        }}
      />

      {/* mainContentOfPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Webdesign Freelancer in Fürstenfeldbruck | AG WebDev",
            url: "https://www.ag-webdev.de",
            mainContentOfPage: {
              "@type": "WebPageElement",
              cssSelector: "#main-content",
              text: "AG WebDev ist Ihr Webdesign Freelancer und Experte für individuelle Webentwicklung in Fürstenfeldbruck und Umgebung. Wir bieten modernes Webdesign, leistungsstarke Websites mit Next.js und React, SEO-Optimierung, professionelle Animationen, UI/UX Design und persönliche Beratung. Spezialisiert auf maßgeschneiderte Lösungen für Unternehmen, Start-ups und Selbstständige in Deutschland. Unser Fokus liegt auf Performance, Sicherheit, Responsive Design, Google-Indexierung und nachhaltigem Online-Erfolg. Kostenlose Erstberatung & langfristiger Support inklusive.",
            },
          }),
        }}
      />

      {/* Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Alexandru Gheorghe",
            jobTitle: "Freelancer Webdesigner & Entwickler",
            url: "https://www.ag-webdev.de",
            image: "https://www.ag-webdev.de/images/profil.jpg",
            worksFor: {
              "@type": "Organization",
              name: "AG WebDev - Webdesign Agentur Fürstenfeldbruck",
            },
            sameAs: [
              "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
              "https://github.com/Alexandru-Dumitrel-Gheorghe",
            ],
            email: "contact@ag-webdev.de",
            telephone: "+49 157 7215 8264",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Fürstenfeldbruck",
              addressRegion: "Bayern",
              postalCode: "82256",
              addressCountry: "DE",
            },
            alumniOf: [
              {
                "@type": "EducationalOrganization",
                name: "IT School Timisoara",
                url: "https://itschool.ro/timisoara/",
                description: "Frontend Development",
              },
              {
                "@type": "EducationalOrganization",
                name: "IT School Romania",
                url: "https://itschool.ro/",
                description: "UI/UX Design",
              },
            ],
            knowsAbout: [
              "Webdesign",
              "Webentwicklung",
              "React",
              "Next.js",
              "SEO",
              "UI/UX Design",
            ],
          }),
        }}
      />

      {/* WebSite + SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AG WebDev - Webdesign & Entwicklung",
            url: "https://www.ag-webdev.de",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.ag-webdev.de/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            inLanguage: "de",
            copyrightHolder: {
              "@type": "Organization",
              name: "AG WebDev - Webdesign Agentur Fürstenfeldbruck",
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: "https://www.ag-webdev.de",
              },
            ],
          }),
        }}
      />
    </>
  );
}
