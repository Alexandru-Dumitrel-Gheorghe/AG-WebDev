import { Metadata } from "next";
import GoogleIndexierungClient from "./GoogleIndexierungClient";

export const metadata: Metadata = {
  title: "Google Indexierung Agentur Deutschland | Schneller im Google-Index",
  description:
    "Wir sorgen dafür, dass Ihre Website schnell und zuverlässig in Google indexiert wird – für maximale Sichtbarkeit und nachhaltigen SEO-Erfolg.",
  keywords:
    "Google Indexierung, Google Index, SEO, Website Indexierung, Sichtbarkeit, Google Ranking, Agentur Deutschland",
  alternates: { canonical: "https://dein-domain.de/google-indexierung" },
  openGraph: {
    title: "Google Indexierung Service Deutschland",
    description:
      "Professionelle Unterstützung für Ihre Google Indexierung – jetzt sichtbar werden!",
    url: "https://dein-domain.de/google-indexierung",
    type: "website",
  },
};

export default function GoogleIndexierungPage() {
  return <GoogleIndexierungClient />;
}
