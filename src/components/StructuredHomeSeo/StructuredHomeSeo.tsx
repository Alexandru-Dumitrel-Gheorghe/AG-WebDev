// app/components/StructuredHomeSeo.tsx
export default function StructuredHomeSeo() {
  return (
    <>
      <title>AG WebDev | Professionelles Webdesign & Webentwicklung</title>
      <meta
        name="description"
        content="Individuelle Webseiten, modernes Webdesign, Entwicklung und SEO – alles aus einer Hand für Ihr Business."
      />
      <meta
        name="keywords"
        content="Webdesign, Webentwicklung, SEO, Next.js, React, Berlin, München, Stuttgart, professionelle Webseite, Firmenwebseite"
      />
      <meta
        property="og:title"
        content="AG WebDev | Professionelles Webdesign & Webentwicklung"
      />
      <meta
        property="og:description"
        content="Individuelle Webseiten, modernes Webdesign, Entwicklung und SEO – alles aus einer Hand für Ihr Business."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ag-webdev.de" />
      <meta property="og:site_name" content="AG WebDev" />
      {/* Adaugă JSON-LD dacă vrei Structured Data mai complex */}
    </>
  );
}
