// app/domain-check/components/DomainSearch.tsx
"use client";

import { useState } from "react";
import styles from "../styles.module.css";

interface DomainSearchProps {
  query: string;
  setQuery: (query: string) => void;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onExpand: () => void;
  expanded: boolean;
}

export default function DomainSearch({
  query,
  setQuery,
  loading,
  onSubmit,
  onExpand,
  expanded,
}: DomainSearchProps) {
  return (
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
          onClick={onExpand}
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
  );
}
