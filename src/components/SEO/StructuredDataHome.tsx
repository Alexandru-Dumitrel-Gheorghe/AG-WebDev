"use client";
import React from "react";

export default function StructuredDataHome() {
  return (
    <>
      {/* Organization + Reviews + AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AG WebDev",
            url: "https://www.ag-webdev.de",
            logo: "https://www.ag-webdev.de/images/logo.png",
            description:
              "Professionelles Webdesign, Webentwicklung und SEO in ganz Deutschland.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Stockmeierweg 11",
              addressLocality: "Fürstenfeldbruck",
              postalCode: "82256",
              addressCountry: "DE",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+49 157 7215 8264",
                email: "contact@ag-webdev.de",
                contactType: "customer support",
                availableLanguage: ["German", "English"],
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
            worksFor: {
              "@type": "Organization",
              name: "AG WebDev",
            },
            sameAs: [
              "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
              "https://github.com/Alexandru-Dumitrel-Gheorghe",
            ],
            email: "contact@ag-webdev.de",
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
            name: "AG WebDev",
            url: "https://www.ag-webdev.de",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.ag-webdev.de/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}
