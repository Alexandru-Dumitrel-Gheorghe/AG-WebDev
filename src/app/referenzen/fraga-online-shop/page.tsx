// app/referenzen/fraga-online-shop/page.tsx sau .jsx
import type { Metadata } from "next";
import FragaOnlineShopClient from "./fraga-online-shopClient";
import StructuredDataFragaOnlineShop from "./StructuredDataFragaOnlineShop";

export const metadata: Metadata = {
  title:
    "Demo Referenz: Fraga Online Shop – E-Commerce Entwicklung & Webdesign | AG WebDev",
  description:
    "Demo-Projekt für Fraga Online Shop: Individuelle E-Commerce Entwicklung, modernes Webdesign und Shopify-Anbindung. Diese Referenz dient nur zur Demonstration im AG WebDev Portfolio.",
  keywords: [
    "Demo",
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
    "Portfolio",
  ],
  openGraph: {
    title:
      "Demo Referenz: Fraga Online Shop – E-Commerce & Webdesign | AG WebDev",
    description:
      "Premium Demo-Projekt: Entwicklung, Shopify-Anbindung und Design für Fraga Online Shop. Kein echter Shop, nur ein Portfolio-Referenz von AG WebDev.",
    url: "https://www.ag-webdev.de/referenzen/fraga-online-shop",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/images/certus-projekt.png",
        width: 1200,
        height: 630,
        alt: "Demo Referenz Fraga Online Shop Webentwicklung",
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
