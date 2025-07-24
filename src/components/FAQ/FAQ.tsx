"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    question: "Wie funktioniert die Zusammenarbeit während des Projekts?",
    answer:
      "Wir kommunizieren transparent über E-Mail, Telefon oder Videocall. Du erhältst regelmäßige Updates, Feedback-Schleifen und hast jederzeit Einblick in den Stand des Projekts.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M4 8l8 5 8-5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    question: "Was kostet eine professionelle Website?",
    answer:
      "Die Kosten hängen vom Umfang und den gewünschten Features ab. Nach einem kostenlosen Erstgespräch erhältst du ein transparentes, individuelles Angebot.",
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
          d="M12 8v8M9.5 10.5C9.5 9.11929 10.6193 8 12 8s2.5 1.11929 2.5 2.5c0 1.3807-1.1193 2.5-2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          {/* TITLU & SUBTITLU ÎN STIL LEISTUNGEN */}
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <p className={styles.sectionDesc}>
            Antworten auf häufig gestellte Fragen rund um Webentwicklung, Design
            & Zusammenarbeit.
          </p>
        </div>
      </div>

      <div className={styles.accordionContainer}>
        {faqs.map((faq, index) => (
          <div className={styles.accordionItem} key={index}>
            <button
              className={`${styles.accordionButton} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-content-${index}`}
            >
              <div className={styles.accordionHeader}>
                <div className={styles.icon}>{faq.icon}</div>
                <h3 className={styles.title}>{faq.question}</h3>
              </div>
              <svg
                className={styles.accordionIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d={activeIndex === index ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  id={`accordion-content-${index}`}
                  className={styles.accordionContent}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className={styles.accordionAnswer}>
                    <p className={styles.description}>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
