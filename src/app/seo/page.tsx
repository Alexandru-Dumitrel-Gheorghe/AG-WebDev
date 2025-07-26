import { Metadata } from "next";
import SeoClient from "./SeoClient";

export const metadata: Metadata = {
  title: "SEO Agentur Deutschland | Suchmaschinenoptimierung vom Profi",
  description:
    "SEO Dienstleistungen für Unternehmen in Deutschland – Steigern Sie Ihre Sichtbarkeit, Besucherzahlen und Umsatz mit professioneller Suchmaschinenoptimierung.",
  keywords:
    "SEO, Suchmaschinenoptimierung, Deutschland, Google Ranking, SEO Agentur, Sichtbarkeit, Online Marketing",
  alternates: { canonical: "https://dein-domain.de/seo" },
  openGraph: {
    title: "SEO Dienstleistungen Deutschland",
    description: "SEO vom Profi – Sichtbarkeit & Umsatz steigern",
    url: "https://dein-domain.de/seo",
    type: "website",
  },
};

// Default export trebuie să fie o funcție React component:
export default function Page() {
  return <SeoClient />;
}
