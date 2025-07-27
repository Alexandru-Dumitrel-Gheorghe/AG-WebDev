import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign Fürstenfeldbruck | Webseite erstellen & SEO Agentur",
  description:
    "AG WebDev ist Ihre professionelle Agentur für Webdesign, moderne Webseiten, SEO und Webentwicklung in Fürstenfeldbruck. Jetzt beraten lassen!",
  keywords: [
    "Webdesign Fürstenfeldbruck",
    "Webseite erstellen Fürstenfeldbruck",
    "Webentwicklung",
    "SEO Agentur Fürstenfeldbruck",
    "Webagentur Fürstenfeldbruck",
    "Homepage erstellen",
    "AG WebDev",
  ],
  alternates: {
    canonical: "https://ag-webdev.de/fuerstenfeldbruck",
  },
  openGraph: {
    type: "website",
    url: "https://ag-webdev.de/fuerstenfeldbruck",
    title: "Webdesign Fürstenfeldbruck | Webseite erstellen & SEO Agentur",
    description:
      "AG WebDev ist Ihre Agentur für Webdesign, Webseiten-Erstellung und Suchmaschinenoptimierung in Fürstenfeldbruck.",
    siteName: "AG WebDev",
    locale: "de_DE",
    images: [
      {
        url: "https://ag-webdev.de/images/ffb-hero.png", // Pune o poză reprezentativă reală aici!
        width: 1200,
        height: 630,
        alt: "Webdesign Fürstenfeldbruck AG WebDev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ag_webdev",
    title: "Webdesign Fürstenfeldbruck | Webseite erstellen & SEO Agentur",
    description:
      "Webdesign & SEO vom Profi in Fürstenfeldbruck. Lassen Sie sich unverbindlich beraten!",
    images: [
      "https://ag-webdev.de/images/ffb-hero.png", // Pune o poză reprezentativă reală aici!
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
