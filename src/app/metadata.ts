// app/metadata.ts
const siteUrl = "https://www.ag-webdev.de";

export const metadata = {
  title: "Webdesign & Webentwicklung Freelancer | Alexandru Gheorghe",
  description:
    "Freelancer für modernes Webdesign und Webentwicklung mit Next.js und React. Individuelle Websites, SEO & Support direkt vom Entwickler. Jetzt beraten lassen!",
  keywords: [
    "Webdesign Freelancer",
    "Webentwicklung",
    "Freelancer",
    "Website erstellen lassen",
    "SEO",
    "Next.js",
    "React",
    "Freiberufler",
    "Deutschland",
    "Wartung",
    "Support",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Alexandru Gheorghe – Webdesign & Entwicklung Freelancer",
    description:
      "Modernes Webdesign, starke Entwicklung, direkt vom Freelancer. Persönlich, individuell, zuverlässig.",
    url: siteUrl,
    siteName: "AG WebDev",
    images: [
      {
        url: `${siteUrl}/images/ffb-hero.png`,
        width: 1200,
        height: 630,
        alt: "Webdesign Freelancer Hero",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandru Gheorghe – Webdesign Freelancer",
    description:
      "Modernes Webdesign, starke Entwicklung, direkt vom Freelancer.",
    images: [`${siteUrl}/images/ffb-hero.png`],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};
