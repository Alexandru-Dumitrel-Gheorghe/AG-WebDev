// app/domain-check/DomainCheckClient.tsx
"use client";

import { useMemo, useState } from "react";
import styles from "./styles.module.css";

type Props = { affiliateBase?: string };

const DEFAULT_TLDS = [
  ".com",
  ".net",
  ".org",
  ".de",
  ".eu",
  ".ro",
  ".io",
  ".ai",
  ".co",
  ".dev",
];

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, "");
}
function hasTld(s: string) {
  return s.includes(".");
}
function buildNamecheapUrl(d: string) {
  return `https://www.namecheap.com/domains/registration/results/?domain=${encodeURIComponent(
    d
  )}`;
}

export default function DomainCheckClient({ affiliateBase = "" }: Props) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    domain: string;
    available: boolean;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const suggestions = useMemo(() => {
    const base = normalize(query)
      .replace(/\.+$/, "")
      .replace(/\.[a-z0-9.-]{2,}$/, "");
    if (!base || hasTld(normalize(query))) return [];
    return DEFAULT_TLDS.map((tld) => `${base}${tld}`);
  }, [query]);

  async function check(domain: string) {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const r = await fetch(
        `/api/domain-check?domain=${encodeURIComponent(domain)}`,
        { cache: "no-store" }
      );
      const data = await r.json();
      if (!r.ok) throw new Error(data?.error || "Überprüfung fehlgeschlagen");
      setResult({ domain: data.domain, available: !!data.available });
    } catch (e: any) {
      setError(e?.message || "Unerwarteter Fehler");
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const d = normalize(query);
    if (!d) return;
    if (!hasTld(d) && suggestions[0]) return check(suggestions[0]);
    check(d);
  }

  function buildAffiliateUrl(dest: string) {
    if (!affiliateBase) return dest;
    return `${affiliateBase}${encodeURIComponent(dest)}`;
  }

  const showResult = result && !error;
  const showSuggestions = !hasTld(normalize(query)) && suggestions.length > 0;

  return (
    <div className={styles.clientContainer}>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <div className={styles.searchInputWrapper}>
          <input
            className={styles.searchInput}
            placeholder="Ihre Wunschdomain eingeben (z.B. meine-website.de)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            inputMode="url"
            aria-label="Domain eingeben"
          />
          <button
            type="button"
            className={styles.expandButton}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="TLD-Empfehlungen anzeigen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {expanded ? (
                <path d="M5 15l7-7 7 7" />
              ) : (
                <path d="M19 9l-7 7-7-7" />
              )}
            </svg>
          </button>
        </div>
        <button
          className={styles.searchButton}
          disabled={loading || !query}
          aria-busy={loading}
        >
          {loading ? (
            <span className={styles.spinner}></span>
          ) : (
            <>
              <span className={styles.buttonText}>Verfügbarkeit prüfen</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </form>

      {(showSuggestions || expanded) && (
        <div
          className={`${styles.suggestionsPanel} ${
            expanded ? styles.expanded : ""
          }`}
        >
          <div className={styles.suggestionsHeader}>
            <h3 className={styles.suggestionsTitle}>
              Beliebte Domain-Endungen
            </h3>
            <button
              className={styles.closeButton}
              onClick={() => setExpanded(false)}
              aria-label="Schließen"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className={styles.suggestionsGrid}>
            {suggestions.map((s) => (
              <button
                key={s}
                className={styles.suggestionItem}
                onClick={() => {
                  setQuery(s);
                  check(s);
                  setExpanded(false);
                }}
              >
                {s}
                <span className={styles.popularBadge}>Beliebt</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className={styles.errorMessage}>
          <div className={styles.errorIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className={styles.errorText}>{error}</div>
        </div>
      )}

      {showResult && (
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
                  Glückwunsch! Diese Domain ist verfügbar und kann jetzt
                  registriert werden.
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
                  Diese Domain ist bereits registriert. Wir zeigen Ihnen
                  alternative Optionen.
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
      )}
    </div>
  );
}
