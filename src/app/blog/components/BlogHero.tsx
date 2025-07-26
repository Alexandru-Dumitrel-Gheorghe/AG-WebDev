"use client";
import { motion } from "framer-motion";
import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      {/* Gradient Background */}
      <div className={styles.gradientBg}></div>

      {/* Abstract Grid Pattern */}
      <div className={styles.gridPattern}>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className={styles.floatingCircle}
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className={styles.floatingTriangle}
        animate={{
          rotate: [0, 5, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className={styles.titleWrapper}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className={styles.titleMain}>Digitales Wissen</span>
            <span className={styles.titleSub}>
              Expertenwissen für Ihren Online-Erfolg
            </span>
          </motion.h1>
        </div>

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Entdecken Sie aktuelle Trends, bewährte Strategien und innovative
          Ansätze in Webdesign, Entwicklung und Digitalmarketing.
        </motion.p>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <span className={styles.scrollText}>Scrollen zum Entdecken</span>
          <div className={styles.scrollLine}></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
