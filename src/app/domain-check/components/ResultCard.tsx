// app/domain-check/components/ResultCard.tsx
"use client";

import styles from "../styles.module.css";

interface ResultCardProps {
  result: {
    domain: string;
    available: boolean;
  };
  affiliateBase: string;
}

function buildNamecheapUrl(d: string) {
  return `https://www.namecheap.com/domains/registration/results/?domain=${encodeURIComponent(
    d
  )}`;
}

export default function ResultCard({ result, affiliateBase }: ResultCardProps) {
  function buildAffiliateUrl(dest: string) {
    if (!affiliateBase) return dest;
    return `${affiliateBase}${encodeURIComponent(dest)}`;
  }

  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <div className={styles.domainInfo}>
          <h3 className={styles.resultTitle}>Ergebnis</h3>
          <p className={styles.domainName}>{result.domain}</p>
        </div>
        <div
          className={`${styles.availabilityBadge} ${
            result.available ? styles.available : styles.unavailable
          }`}
        >
          {result.available ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Verfügbar
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              Belegt
            </>
          )}
        </div>
      </div>

      <div className={styles.resultContent}>
        {result.available ? (
          <>
            <p className={styles.resultDescription}>
              Glückwunsch! Diese Domain ist verfügbar und kann jetzt registriert
              werden.
            </p>
            <div className={styles.actionButtons}>
              <a
                className={styles.primaryButton}
                href={buildAffiliateUrl(buildNamecheapUrl(result.domain))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Domain jetzt sichern
              </a>
              <a className={styles.secondaryButton} href="/kontakt">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Webauftritt buchen
              </a>
            </div>
          </>
        ) : (
          <>
            <p className={styles.resultDescription}>
              Diese Domain ist bereits registriert. Wir zeigen Ihnen alternative
              Optionen.
            </p>
            <div className={styles.actionButtons}>
              <a
                className={styles.secondaryButton}
                href={buildAffiliateUrl(buildNamecheapUrl(result.domain))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Ähnliche Domains finden
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
