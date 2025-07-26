"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./PersonalSection.module.css";

const funFacts = [
  {
    emoji: "🌍",
    title: "Weltreisen",
    description:
      "Bereiste über 15 Länder und lebte in 3 verschiedenen Ländern. Besonders prägend: 1 Jahr in Asien mit intensiver Auseinandersetzung mit lokalen Kulturen.",
    highlight: "Spreche fließend 4 Sprachen",
  },
  {
    emoji: "📷",
    title: "Fotografie & Ästhetik",
    description:
      "Fotografie ist meine kreative Auszeit. Ich liebe es, besondere Momente und Perspektiven festzuhalten. Das schärft auch meinen Blick für Details im Design.",
    highlight: "Jede Reise = neue Fotostory",
  },
  {
    emoji: "🧠",
    title: "Lern-Junkie",
    description:
      "Autodidakt in verschiedenen Disziplinen – von Webentwicklung über Design bis Psychologie. Lerne täglich Neues, um kreativ und up-to-date zu bleiben.",
    highlight: "Lesekonsum: 3-5 Bücher/Monat",
  },
  {
    emoji: "🌲",
    title: "Natur & Ausgleich",
    description:
      "Die Natur ist mein Rückzugsort und Energiequelle. Lange Spaziergänge, Ruhe im Grünen und Waldluft bringen mir Fokus & Inspiration.",
    highlight: "Meistens mit Kamera unterwegs",
  },
  {
    emoji: "🚀",
    title: "Selbstständigkeit als Lebensstil",
    description:
      "Ich liebe es, eigenständig und strategisch zu arbeiten. Frei und unabhängig meinen Weg zu gestalten, ist für mich ein Lebensprinzip.",
    highlight: "Mehr als 5 Jahre Selfmade-Mindset",
  },
];

export default function PersonalSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  // Animation effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  // Auto-rotate facts
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % funFacts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.personalSection} ref={ref}>
      <motion.div
        className={styles.container}
        style={{
          y,
          opacity,
          scale,
        }}
      >
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              Persönliches
            </motion.h2>
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Einblicke in meine Welt jenseits des Codes
            </motion.p>
          </div>

          <button
            className={styles.themeToggle}
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={
              isDarkMode ? "Zum Light Mode wechseln" : "Zum Dark Mode wechseln"
            }
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.factsContainer}>
            <div className={styles.factsNavigation}>
              {funFacts.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.navDot} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Gehe zu Fakt ${index + 1}`}
                />
              ))}
            </div>

            <div className={styles.factsWrapper}>
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className={`${styles.fact} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : index % 2 === 0 ? 50 : -50,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className={styles.emoji}>{fact.emoji}</div>
                  <h3 className={styles.factTitle}>{fact.title}</h3>
                  <p className={styles.factDescription}>{fact.description}</p>
                  <div className={styles.highlight}>
                    <span>✨</span> {fact.highlight}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className={styles.decorativeCircle1}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className={styles.decorativeCircle2}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>
    </section>
  );
}
