// app/domain-check/components/SuggestionsPanel.tsx
"use client";

import styles from "../styles.module.css";

interface SuggestionsPanelProps {
  suggestions: string[];
  expanded: boolean;
  onSelect: (suggestion: string) => void;
  onClose: () => void;
}

export default function SuggestionsPanel({
  suggestions,
  expanded,
  onSelect,
  onClose,
}: SuggestionsPanelProps) {
  if (!expanded && suggestions.length === 0) return null;

  return (
    <div
      className={`${styles.suggestionsPanel} ${
        expanded ? styles.expanded : ""
      }`}
    >
      <div className={styles.suggestionsHeader}>
        <h3 className={styles.suggestionsTitle}>Beliebte Domain-Endungen</h3>
        <button
          className={styles.closeButton}
          onClick={onClose}
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
            onClick={() => onSelect(s)}
          >
            {s}
            <span className={styles.popularBadge}>Beliebt</span>
          </button>
        ))}
      </div>
    </div>
  );
}
