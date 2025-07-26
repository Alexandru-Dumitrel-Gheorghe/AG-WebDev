"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import styles from "./PremiumCTA.module.css";

export default function PremiumCTA() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  // Glow effect animation
  const glowVariants = {
    initial: { opacity: 0.7, scale: 1 },
    animate: {
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.03, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <section className={styles.ctaSection} ref={ref}>
      <motion.div
        className={styles.ctaContainer}
        style={{
          y,
          opacity,
          scale,
        }}
      >
        <div className={styles.ctaContent}>
          <motion.div
            className={styles.glowEffect}
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />

          <div className={styles.textGroup}>
            <motion.h2
              className={styles.ctaTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              Bereit für Ihr nächstes Projekt?
            </motion.h2>

            <motion.p
              className={styles.ctaSubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen. Ich
              freue mich auf Ihre Nachricht!
            </motion.p>
          </div>

          <motion.div
            className={styles.buttonGroup}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="#contact"
              className={styles.primaryButton}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px var(--accent-glow)",
              }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Projekt anfragen
              <motion.span
                animate={{
                  x: isHovered ? 5 : 0,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                →
              </motion.span>
            </motion.a>

            <a href="#about" className={styles.secondaryButton}>
              Mehr erfahren
            </a>
          </motion.div>
        </div>

        <div className={styles.footerNote}>
          <span>✨ 100% individuell auf Ihre Bedürfnisse zugeschnitten</span>
          <span>🚀 Modernste Technologien</span>
          <span>💡 Kreative Lösungen</span>
        </div>

        {/* Decorative elements */}
        <motion.div
          className={styles.decorativeOrb}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </section>
  );
}
