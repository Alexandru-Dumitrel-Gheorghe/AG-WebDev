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
    "Webdesign",
    "Freiberufler",
    "WordPress",
    "Next.js",
    "React",
    "Fürstenfeldbruck",
  ],
  alternates: {
    canonical: "https://www.ag-webdev.de/fuerstenfeldbruck",
  },
  openGraph: {
    type: "website",
    url: "https://www.ag-webdev.de/fuerstenfeldbruck",
    title: "Webdesign Fürstenfeldbruck | Webseite erstellen Freiberufler",
    description:
      "AG WebDev ist Ihre Agentur für Webdesign, Webseiten-Erstellung und Suchmaschinenoptimierung in Fürstenfeldbruck.",
    siteName: "AG WebDev",
    locale: "de_DE",
    images: [
      {
        url: "https://www.ag-webdev.de/images/ffb-hero.png",
        width: 1200,
        height: 630,
        alt: "Webdesign Fürstenfeldbruck AG WebDev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Fürstenfeldbruck | Webseite erstellen Freiberufler",
    description:
      "AG WebDev: Professionelles Webdesign & moderne Webseiten vom Freelancer in Fürstenfeldbruck. Beratung, SEO & Umsetzung aus einer Hand.",
    images: ["https://www.ag-webdev.de/images/ffb-hero.png"],
    site: "@agwebdev",
    creator: "@agwebdev",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};
