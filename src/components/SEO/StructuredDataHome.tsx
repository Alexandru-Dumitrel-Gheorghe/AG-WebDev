"use client";
import Script from "next/script";

export default function StructuredDataHome() {
  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alexandru Gheorghe",
          url: "https://www.ag-webdev.de/",
          image: "https://www.ag-webdev.de/images/profil.jpg", // pune poza reală dacă ai!
          jobTitle: "Webentwickler & Webdesigner Freelancer",
          description:
            "Ich bin Alexandru Gheorghe, Freiberufler für modernes Webdesign und Webentwicklung in Deutschland. Spezialisiert auf Next.js, React und individuelle Lösungen.",
          sameAs: [
            "https://www.linkedin.com/in/alexandru-gheorghe/",
            "https://github.com/gheorghe-alexandru",
          ],
        }),
      }}
    />
  );
}
