import type { Metadata } from "next";
import FragaOnlineShopClient from "./fraga-online-shopClient";
import StructuredDataFragaOnlineShop from "./StructuredDataFragaOnlineShop";

export const metadata: Metadata = {
  title:
    "Referenz: Fraga Online Shop – E-Commerce Entwicklung & Webdesign | AG WebDev",
  description:
    "Erfolgreicher Launch des Fraga Online Shops – individuelle E-Commerce Entwicklung, modernes Webdesign, Schnittstellen & Optimierung. Ihr Referenz-Projekt von AG WebDev.",
  keywords: [
    "Referenz",
    "E-Commerce",
    "Online Shop",
    "Webentwicklung",
    "Webdesign",
    "Shopify Integration",
    "UI/UX Design",
    "Fraga Online Shop",
    "Projekt",
    "AG WebDev",
    "Individuelle Webseiten",
    "Website Entwicklung",
  ],
  openGraph: {
    title: "Referenz: Fraga Online Shop – E-Commerce & Webdesign | AG WebDev",
    description:
      "Individuelle Entwicklung, Shopify-Anbindung und Design für Fraga Online Shop. Premium E-Commerce Referenz von AG WebDev.",
    url: "https://www.ag-webdev.de/referenzen/fraga-online-shop",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/certus-projekt.png",
        width: 1200,
        height: 630,
        alt: "Referenz Fraga Online Shop Webentwicklung",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/referenzen/fraga-online-shop",
  },
};

export default function FragaOnlineShopPage() {
  return (
    <>
      <StructuredDataFragaOnlineShop />
      <FragaOnlineShopClient />
    </>
  );
}
