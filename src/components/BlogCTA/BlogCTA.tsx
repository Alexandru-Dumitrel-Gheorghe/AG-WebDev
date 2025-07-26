"use client";
import styles from "./BlogCTA.module.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";

export default function BlogCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.iconWrapper}>
            <FaBookOpen className={styles.icon} />
          </div>
          <h2 className={styles.title}>
            Vertiefen Sie Ihr Wissen mit unseren Fachartikeln
          </h2>
          <p className={styles.description}>
            Entdecken Sie exklusive Insights, Tipps und Trends in unserem Blog.
            Perfekt für Unternehmer und Marketing-Enthusiasten, die ihre
            Online-Präsenz verbessern möchten.
          </p>
          <motion.a
            href="/blog"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Zum Blog gehen
            <FaArrowRight className={styles.arrowIcon} />
          </motion.a>
        </motion.div>

        <div className={styles.gridPattern} aria-hidden="true">
          {[...Array(36)].map((_, i) => (
            <div key={i} className={styles.gridDot} />
          ))}
        </div>
      </div>
    </section>
  );
}
