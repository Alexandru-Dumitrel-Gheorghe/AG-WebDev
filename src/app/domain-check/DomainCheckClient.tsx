// app/domain-check/DomainCheckClient.tsx
"use client";

import { useMemo, useState } from "react";
import styles from "./styles.module.css";
import DomainSearch from "./components/DomainSearch";
import SuggestionsPanel from "./components/SuggestionsPanel";
import ResultCard from "./components/ResultCard";

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

  function handleSuggestionSelect(suggestion: string) {
    setQuery(suggestion);
    check(suggestion);
    setExpanded(false);
  }

  const showResult = result && !error;
  const showSuggestions = !hasTld(normalize(query)) && suggestions.length > 0;

  return (
    <div className={styles.clientContainer}>
      <DomainSearch
        query={query}
        setQuery={setQuery}
        loading={loading}
        onSubmit={onSubmit}
        onExpand={() => setExpanded(!expanded)}
        expanded={expanded}
      />

      {(showSuggestions || expanded) && (
        <SuggestionsPanel
          suggestions={suggestions}
          expanded={expanded}
          onSelect={handleSuggestionSelect}
          onClose={() => setExpanded(false)}
        />
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
        <ResultCard result={result} affiliateBase={affiliateBase} />
      )}
    </div>
  );
}
