import BlogClient from "./BlogClient";
import StructuredDataBlog from "./StructuredDataBlog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AG WebDev – Webdesign, SEO & Online-Strategien",
  description:
    "Tipps, Anleitungen & Insights zu Webdesign, SEO, Webentwicklung, Google Indexierung und Online-Strategien. Praxiswissen vom Freelance Webentwickler AG WebDev.",
  keywords: [
    "Webdesign Blog",
    "SEO Blog",
    "Webentwicklung",
    "Online Marketing",
    "WordPress Tipps",
    "Google Indexierung",
    "Digitale Strategie",
    "Freelance Webentwickler",
    "AG WebDev Blog",
    "Webdesign Deutschland",
  ],
  openGraph: {
    title: "Blog | AG WebDev – Webdesign, SEO & Online-Strategien",
    description:
      "Praxis-Tipps, Guides und News zu Webdesign, SEO, Webentwicklung, Google Index & mehr – im AG WebDev Blog.",
    url: "https://www.ag-webdev.de/blog",
    type: "website",
    siteName: "AG WebDev",
    images: [
      {
        url: "https://www.ag-webdev.de/images/Google-Indexierung-hero2.png",
        width: 1200,
        height: 630,
        alt: "AG WebDev Blog – Webdesign, SEO & Online-Strategien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | AG WebDev – Webdesign, SEO & Online-Strategien",
    description:
      "Tipps & Insights zu Webdesign, SEO, Online-Marketing und Entwicklung im AG WebDev Blog.",
    images: ["https://www.ag-webdev.de/images/Google-Indexierung-hero2.png"],
    creator: "@ag_webdev",
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/blog",
  },
};

export default function Page() {
  return (
    <>
      <StructuredDataBlog />
      <BlogClient />
    </>
  );
}
