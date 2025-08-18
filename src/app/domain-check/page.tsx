// app/domain-check/page.tsx
import type { Metadata } from "next";
import DomainCheckClient from "./DomainCheckClient";
import SEOJsonLd from "./SEOJsonLd";
import styles from "./styles.module.css";

// Constants for reusable values
const DOMAIN_CHECK_CONSTANTS = {
  TITLE: "DomainCheck – Domain Verfügbarkeitsprüfung",
  DESCRIPTION:
    "Schnelle Domain-Verfügbarkeitsprüfung mit sofortigen Ergebnissen. Sichern Sie Ihre Wunschdomain direkt bei unserem Partner Namecheap.",
  KEYWORDS: [
    "domain check",
    "domain verfügbarkeit",
    "domain prüfen",
    "namecheap",
    "ag webdev domain check",
  ],
  FEATURES: [
    {
      title: "Blitzschnelle Prüfung",
      description:
        "Echtzeit-Abfrage der Domainverfügbarkeit in Sekundenschnelle",
      icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    },
    {
      title: "Sichere Verbindung",
      description: "Verschlüsselte API-Anfragen für maximalen Datenschutz",
      icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    },
    {
      title: "Direkte Registrierung",
      description:
        "Integration mit Namecheap für eine schnelle Domain-Registrierung",
      icon: "M20 12l-8-8-8 8 8 8 8-8z M12 4v16",
    },
  ],
};

export const metadata: Metadata = {
  title: `${DOMAIN_CHECK_CONSTANTS.TITLE} | AG WebDev`,
  description: DOMAIN_CHECK_CONSTANTS.DESCRIPTION,
  keywords: DOMAIN_CHECK_CONSTANTS.KEYWORDS,
  alternates: { canonical: "/domain-check" },
  openGraph: {
    title: DOMAIN_CHECK_CONSTANTS.TITLE,
    description: DOMAIN_CHECK_CONSTANTS.DESCRIPTION,
    url: "/domain-check",
    type: "website",
    images: [
      {
        url: "/og-domaincheck.png",
        width: 1200,
        height: 630,
        alt: "DomainCheck",
      },
    ],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: DOMAIN_CHECK_CONSTANTS.TITLE,
    images: ["/og-domaincheck.png"],
  },
};

export default function Page() {
  // Environment variables with fallbacks
  const env = {
    affiliateBase: process.env.NEXT_PUBLIC_AFFILIATE_BASE || "",
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
      "https://www.ag-webdev.de",
    pagePath: "/domain-check",
    pageUrl: `${
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
      "https://www.ag-webdev.de"
    }/domain-check`,
  };

  return (
    <main className={styles.main}>
      <SEOJsonLd
        siteUrl={env.siteUrl}
        pageUrl={env.pageUrl}
        pageTitle={`${DOMAIN_CHECK_CONSTANTS.TITLE} | AG WebDev`}
        pageDescription={DOMAIN_CHECK_CONSTANTS.DESCRIPTION}
        imageUrl={`${env.siteUrl}/og-domaincheck.png`}
      />

      <div className={styles.gradientBackground}></div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.kicker}>Domain-Tool</span>
            <h1 className={styles.title}>
              <span className={styles.titleHighlight}>Domain</span>{" "}
              Verfügbarkeit
            </h1>
            <p className={styles.subtitle}>
              Prüfen Sie in Echtzeit, ob Ihre Wunschdomain verfügbar ist und
              sichern Sie sie direkt bei unserem Partner.
            </p>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <DomainCheckClient affiliateBase={env.affiliateBase} />
            </div>
          </div>

          <div className={styles.features}>
            {DOMAIN_CHECK_CONSTANTS.FEATURES.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <p className={styles.disclosure}>
            Hinweis: Dies ist ein Affiliate-Link. Wenn Sie über diesen Link
            kaufen, erhalte ich ggf. eine Provision – ohne Mehrkosten für Sie.
          </p>
        </div>
      </section>
    </main>
  );
}
