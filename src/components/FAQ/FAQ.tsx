"use client";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Was ist der Unterschied zwischen Webdesign und Webentwicklung?",
    answer:
      "Webdesign fokussiert sich auf das visuelle Erscheinungsbild und die Nutzererfahrung, während Webentwicklung die technische Umsetzung und Funktionalität betrifft.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="6"
          width="16"
          height="3"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="4"
          y="11"
          width="16"
          height="3"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="4"
          y="16"
          width="16"
          height="3"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
  {
    question: "Wie lange dauert die Umsetzung einer Website?",
    answer:
      "Je nach Umfang und Komplexität in der Regel zwischen 2 und 5 Wochen. Einfache Seiten sind oft schneller realisiert.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    question: "Ist Suchmaschinenoptimierung (SEO) inklusive?",
    answer:
      "Ja, wir achten bei jedem Projekt auf saubere SEO-Basics – schnelle Ladezeiten, saubere Struktur, mobile Optimierung und Meta-Tags.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    question: "Kann ich mein Projekt später erweitern?",
    answer:
      "Natürlich! Wir setzen flexible, skalierbare Lösungen um, sodass neue Funktionen problemlos integriert werden können.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="11"
          width="18"
          height="4"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="11"
          y="3"
          width="4"
          height="18"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
];

export default function FAQ() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <p className={styles.sectionDesc}>
            Antworten auf häufig gestellte Fragen rund um Webentwicklung, Design
            & Zusammenarbeit.
          </p>
        </div>
      </div>
      <div className={styles.cardsGrid}>
        {faqs.map((faq, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.icon}>{faq.icon}</div>
            <h3 className={styles.title}>{faq.question}</h3>
            <p className={styles.description}>{faq.answer}</p>
            <div className={styles.hoverIndicator}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
