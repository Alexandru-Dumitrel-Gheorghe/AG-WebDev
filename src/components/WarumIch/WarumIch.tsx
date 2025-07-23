"use client";
import styles from "./WarumIch.module.css";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const GRUNDS = [
  "Modernes, individuelles Webdesign für dein Business.",
  "Direkter, persönlicher Kontakt – ohne Agentur-Umwege.",
  "Schnelle, transparente Kommunikation & Zuverlässigkeit.",
  "Premium-Support auch nach dem Go-Live.",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WarumIch() {
  return (
    <section className={styles.warumIchSection} id="warum-ich">
      <div className={styles.header}>
        <span className={styles.badge}>AG WebDev Vorteil</span>
        <h2 className={styles.sectionTitle}>Warum ich?</h2>
        <p className={styles.sectionDesc}>
          4 gute Gründe, mit <b>AG WebDev</b> zusammenzuarbeiten
        </p>
      </div>
      <div className={styles.inner}>
        <div className={styles.leftCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/warum-ich.png"
              alt="Modernes Webdesign"
              width={350}
              height={350}
              priority
              className={styles.image}
              onError={(e) =>
                ((e.target as HTMLImageElement).src = "/placeholder.jpg")
              }
            />
          </div>
        </div>
        <div className={styles.divider} />
        <motion.ol
          className={styles.grundList}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {GRUNDS.map((g, i) => (
            <motion.li
              key={i}
              className={styles.grundItem}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <span className={styles.grundNr}>{i + 1}</span>
              <span className={styles.grundText}>{g}</span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
