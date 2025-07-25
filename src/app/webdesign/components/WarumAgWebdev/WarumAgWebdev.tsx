"use client";
import styles from "./WarumAgWebdev.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const highlights = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
          stroke="var(--accent-color)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 11V18L23 21"
          stroke="var(--accent-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 25C19.6569 25 21 23.6569 21 22C21 20.3431 19.6569 19 18 19C16.3431 19 15 20.3431 15 22C15 23.6569 16.3431 25 18 25Z"
          fill="var(--accent-color)"
        />
      </svg>
    ),
    title: "Fokus auf Ergebnisse",
    desc: "Wir liefern nicht nur Design, sondern messbare Resultate: Mehr Anfragen, mehr Umsatz, mehr Sichtbarkeit.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
          stroke="var(--accent-color)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 11V18L23 21"
          stroke="var(--accent-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Termintreue Lieferung",
    desc: "Verlässliche, transparente Prozesse – Ihre Website geht pünktlich live. Planung & Umsetzung mit festen Deadlines.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path
          d="M12 24H10C8.34315 24 7 22.6569 7 21V15C7 13.3431 8.34315 12 10 12H12"
          stroke="var(--accent-color)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M24 24H26C27.6569 24 29 22.6569 29 21V15C29 13.3431 27.6569 12 26 12H24"
          stroke="var(--accent-color)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M12 16L15 19L23 11"
          stroke="var(--accent-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Kunde im Mittelpunkt",
    desc: "Maßgeschneiderte Lösungen, persönlicher Kontakt & ehrliche Beratung – Ihre Ziele bestimmen unser Vorgehen.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle
          cx="18"
          cy="18"
          r="15"
          stroke="var(--accent-color)"
          strokeWidth="3"
        />
        <path
          d="M11 18h14M18 11v14"
          stroke="var(--accent-color)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Transparente Kommunikation",
    desc: "Regelmäßige Updates und klare Absprachen – Sie sind immer im Bilde, von Start bis Launch.",
  },
];

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "97%", label: "Kundenzufriedenheit" },
  { value: "200+", label: "Projekte abgeschlossen" },
];

export default function WarumAgWebdev() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className={`${styles.whySection} ${isDarkMode ? styles.dark : ""}`}
    >
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.bgShape} />

      <div className={styles.container}>
        <div className={styles.left}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.headerContainer}
          >
            <span className={styles.preTitle}>Warum uns wählen?</span>
            <h2 className={styles.sectionTitle}>
              Warum <span>AG WebDev</span>
            </h2>
            <p className={styles.sectionDesc}>
              Digitale Lösungen mit maximalem Impact: Effizient, modern und auf
              Ihr Business abgestimmt.
            </p>
          </motion.div>

          <div className={styles.highlights}>
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className={styles.highlightCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>{item.icon}</div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.imageCircle}>
              <Image
                src="/images/profil.jpg"
                alt="AG WebDev Team"
                fill
                className={styles.image}
                quality={100}
                priority
              />
            </div>
            <div className={styles.imageBadge}>
              <span>10+ Jahre Expertise</span>
            </div>
            <div className={styles.imageDecoration} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
