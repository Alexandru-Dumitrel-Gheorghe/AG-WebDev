"use client";
import styles from "./WarumWir.module.css";
import {
  FiAward,
  FiThumbsUp,
  FiZap,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function WarumIch() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className={styles.warumSection} id="why">
      <div className={styles.contentWrapper}>
        <div className={styles.left}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.titleBlack}>Warum</span>
            <span className={styles.titleGradient}>Wir?</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Wir stehen für moderne Webentwicklung, absolute Zuverlässigkeit &
            digitale Leidenschaft.
          </motion.p>

          <motion.ul
            className={styles.benefits}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li variants={item}>
              <FiCheckCircle className={styles.icon} />
              <span>Individuelle Lösungen – keine Templates!</span>
            </motion.li>
            <motion.li variants={item}>
              <FiThumbsUp className={styles.icon} />
              <span>Top Bewertungen & langfristige Partnerschaften</span>
            </motion.li>
            <motion.li variants={item}>
              <FiZap className={styles.icon} />
              <span>Schnelle, reibungslose Prozesse</span>
            </motion.li>
            <motion.li variants={item}>
              <FiUsers className={styles.icon} />
              <span>Persönliche Betreuung auf Augenhöhe</span>
            </motion.li>
          </motion.ul>
        </div>

        <div className={styles.right}>
          <motion.div
            className={styles.statsBox}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.statMain}>
              <FiAward className={styles.statIcon} />
              <div>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statText}>Jahre Erfahrung</span>
              </div>
            </div>
            <div className={styles.statRow}>
              <motion.span className={styles.badge} whileHover={{ y: -3 }}>
                100+ Projekte
              </motion.span>
              <motion.span className={styles.badge} whileHover={{ y: -3 }}>
                Top 5% Freelancer
              </motion.span>
            </div>
            <div className={styles.rating}>
              ★★★★★
              <span> (18 Google Bewertungen)</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.gradientCircle}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
}
