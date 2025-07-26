import BlogPostClient from "./BlogPostClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Configurare SEO pentru fiecare slug (meta, keywords, OG, canonical etc.)
const blogMeta: Record<string, Metadata> = {
  "wie-funktioniert-google-indexierung": {
    title: "Wie funktioniert Google Indexierung? - AG WebDev",
    description:
      "Der ultimative Leitfaden zur Google Indexierung: So landet Ihre Website garantiert im Suchindex. Tipps, Strategien und aktuelle Statistiken.",
    keywords:
      "Google Indexierung, SEO, Suchmaschine, Index, Website optimieren, Crawling",
    openGraph: {
      title: "Wie funktioniert Google Indexierung? - AG WebDev",
      description:
        "Erfahren Sie alles über Google Indexierung: Schritt-für-Schritt Guide, Faktoren und Profi-Tipps für maximale Sichtbarkeit.",
      images: [
        {
          url: "https://www.ag-webdev.de/images/google-blog.png",
          width: 1200,
          height: 630,
          alt: "Wie funktioniert Google Indexierung",
        },
      ],
      type: "article",
      url: "https://www.ag-webdev.de/blog/wie-funktioniert-google-indexierung",
    },
    alternates: {
      canonical:
        "https://www.ag-webdev.de/blog/wie-funktioniert-google-indexierung",
    },
  },
  "webdesign-trends-2025": {
    title: "Webdesign Trends 2025 - AG WebDev",
    description:
      "Die wichtigsten Webdesign Trends 2025: Farben, Layouts, Animationen und konkrete Beispiele. Inspiration für modernes Webdesign.",
    keywords:
      "Webdesign Trends 2025, UI, UX, moderne Webseiten, Design Inspiration",
    openGraph: {
      title: "Webdesign Trends 2025 - AG WebDev",
      description:
        "Aktuelle Trends für Webdesign 2025: Ästhetik, Usability, und Beispiele für Ihre nächste Webseite.",
      images: [
        {
          url: "https://www.ag-webdev.de/images/design-blog.png",
          width: 1200,
          height: 630,
          alt: "Webdesign Trends 2025",
        },
      ],
      type: "article",
      url: "https://www.ag-webdev.de/blog/webdesign-trends-2025",
    },
    alternates: {
      canonical: "https://www.ag-webdev.de/blog/webdesign-trends-2025",
    },
  },
  "seo-fuer-anfanger": {
    title: "SEO für Anfänger: Basics & Guide - AG WebDev",
    description:
      "Einsteiger-Guide für SEO: Wie funktioniert Suchmaschinenoptimierung? Schritt-für-Schritt Anleitung für erste Top-Rankings.",
    keywords: "SEO für Anfänger, Suchmaschinenoptimierung, SEO Guide, Ranking",
    openGraph: {
      title: "SEO für Anfänger: Basics & Guide - AG WebDev",
      description:
        "SEO einfach erklärt: Basics, Strategie und Tipps für mehr Sichtbarkeit in Suchmaschinen.",
      images: [
        {
          url: "https://www.ag-webdev.de/images/blog-seo.png",
          width: 1200,
          height: 630,
          alt: "SEO für Anfänger",
        },
      ],
      type: "article",
      url: "https://www.ag-webdev.de/blog/seo-fuer-anfanger",
    },
    alternates: {
      canonical: "https://www.ag-webdev.de/blog/seo-fuer-anfanger",
    },
  },
  "wordpress-oder-headless-cms": {
    title: "WordPress vs. Headless CMS: Vergleich 2025 - AG WebDev",
    description:
      "Vergleich: Vorteile & Nachteile von WordPress und modernen Headless CMS Lösungen. Was passt zu deinem Projekt?",
    keywords:
      "WordPress, Headless CMS, CMS Vergleich, Webentwicklung, Content Management",
    openGraph: {
      title: "WordPress vs. Headless CMS: Vergleich 2025 - AG WebDev",
      description:
        "Alle Unterschiede zwischen WordPress und Headless CMS: Was ist besser? Entscheidungshilfe für moderne Webseiten.",
      images: [
        {
          url: "https://www.ag-webdev.de/images/headless-blog.png",
          width: 1200,
          height: 630,
          alt: "WordPress vs. Headless CMS",
        },
      ],
      type: "article",
      url: "https://www.ag-webdev.de/blog/wordpress-oder-headless-cms",
    },
    alternates: {
      canonical: "https://www.ag-webdev.de/blog/wordpress-oder-headless-cms",
    },
  },
};

// Funcție SEO dinamică pentru fiecare blog
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const awaitedParams = await params;
  const meta = blogMeta[awaitedParams.slug];
  return (
    meta || {
      title: "Blogartikel | AG WebDev",
      description: "Ein ausführlicher Blogartikel.",
    }
  );
}

// Funcție pentru JSON-LD schema.org (tip Article)
function generateJsonLd(meta: Metadata, slug: string) {
  const url = `https://www.ag-webdev.de/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: meta.title,
    description: meta.description,
    image: Array.isArray(meta.openGraph?.images)
      ? (meta.openGraph?.images[0] as { url: string })?.url ?? ""
      : (meta.openGraph?.images as { url: string })?.url ?? "",
    author: {
      "@type": "Person",
      name: "AG WebDev",
    },
    publisher: {
      "@type": "Organization",
      name: "AG WebDev",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ag-webdev.de/logo.png",
      },
    },
    datePublished: "2025-01-01T08:00:00+08:00", // pune data reală dacă ai
    dateModified: "2025-01-01T08:00:00+08:00", // pune data reală dacă ai
  };
}

// Componenta Page, cu fallback la notFound() pentru slugs necunoscute
export default async function Page({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  if (!blogMeta[awaitedParams.slug]) return notFound();

  const meta = blogMeta[awaitedParams.slug];
  const jsonLd = generateJsonLd(meta, awaitedParams.slug);

  return (
    <>
      {/* Injectează JSON-LD în head pentru SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="jsonld"
      />
      {/* Afișează conținutul blogului */}
      <BlogPostClient slug={awaitedParams.slug} />
    </>
  );
}
