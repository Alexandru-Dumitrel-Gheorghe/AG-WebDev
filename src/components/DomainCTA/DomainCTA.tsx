// components/CTADomain.tsx
import Link from "next/link";
import styles from "./DomainCTA.module.css";

export default function CTADomain() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBackground}></div>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <div className={styles.header}>
            <span className={styles.kicker}>Domain-Service</span>
            <h2 className={styles.ctaTitle}>
              <span className={styles.titleHighlight}>Perfekte Domain</span> für
              Ihren Erfolg
            </h2>
            <p className={styles.ctaDescription}>
              Finden und registrieren Sie Ihre Wunschdomain in Sekundenschnelle.
              Mit unserer einfachen Suchfunktion und kompetenten Beratung machen
              wir Ihren Online-Auftritt zum Erfolg.
            </p>
          </div>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>Sofortige Verfügbarkeitsprüfung</h4>
                <p>Echtzeit-Ergebnisse in weniger als 3 Sekunden</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>Sichere Transaktionen</h4>
                <p>Verschlüsselte und DSGVO-konforme Abwicklung</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>Blitzschnelle Registrierung</h4>
                <p>Ihre Domain ist in weniger als 5 Minuten aktiv</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/domain-check" className={styles.ctaButtonPrimary}>
              <span>Jetzt Domain prüfen</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.ctaVisual}>
          <div className={styles.domainCard}>
            <div className={styles.domainCardHeader}>
              <div className={styles.domainCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <div className={styles.domainCardTitle}>Domain Check</div>
            </div>

            <div className={styles.domainExample}>
              <span className={styles.domainName}>ihre-domain</span>
              <span className={styles.domainTld}>.de</span>
            </div>

            <div className={styles.domainStatus}>
              <div className={styles.availabilityBadge}>
                <div className={styles.badgeIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Verfügbar</span>
              </div>
              <div className={styles.domainPrice}>ab 9,99€/Jahr</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
