"use client";
import { useState, useEffect, useRef } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === faqs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? faqs.length - 1 : prev - 1));
  };

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

      {isMobile ? (
        <div className={styles.mobileSliderContainer}>
          <div className={styles.sliderWrapper} ref={sliderRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className={styles.sliderCard}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.icon}>{faqs[currentSlide].icon}</div>
                <h3 className={styles.title}>{faqs[currentSlide].question}</h3>
                <p className={styles.description}>
                  {faqs[currentSlide].answer}
                </p>
                <div className={styles.hoverIndicator}></div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={styles.sliderControls}>
            <button onClick={prevSlide} className={styles.controlButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className={styles.sliderDots}>
              {faqs.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${
                    currentSlide === idx ? styles.activeDot : ""
                  }`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
            <button onClick={nextSlide} className={styles.controlButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
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
      )}
    </section>
  );
}
