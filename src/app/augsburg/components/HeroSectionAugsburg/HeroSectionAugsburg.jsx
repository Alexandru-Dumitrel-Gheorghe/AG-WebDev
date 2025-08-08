"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, rotateY: 15 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function HeroSectionAugsburg() {
  return (
    <section className={styles.hero}>
      {/* Background elements */}
      <div className={styles.heroBackground}>
        <div className={styles.backgroundOverlay}></div>
        <div className={styles.augsburgSkyline}></div>
      </div>

      {/* Content */}
      <motion.div
        className={styles.heroContent}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className={styles.textContainer}
          variants={containerVariants}
        >
          <motion.h1 className={styles.title} variants={itemVariants}>
            <motion.span
              className={styles.titleHighlight}
              whileHover={{ scale: 1.05 }}
            >
              Webdesign
            </motion.span>{" "}
            &{" "}
            <motion.span
              className={styles.titleHighlight}
              whileHover={{ scale: 1.05 }}
            >
              Webentwicklung
            </motion.span>{" "}
            in Augsburg
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Professionelle Webseiten & digitale Lösungen für Unternehmen in
            Augsburg – modern, SEO-optimiert und maßgeschneidert.
          </motion.p>

          <motion.div
            className={styles.ctaButtons}
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            <Link href="/kontakt" className={styles.primaryButton}>
              <motion.span
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 20px rgba(252, 107, 40, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ display: "inline-block" }}
              >
                Kostenlose Beratung
              </motion.span>
            </Link>
            <Link
              href="#leistungen"
              className={styles.secondaryButton}
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("leistungen");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <motion.span
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 20px rgba(252, 107, 40, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ display: "inline-block" }}
              >
                Unsere Leistungen
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          variants={imageVariants}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className={styles.imageWrapper}
            whileHover={{
              rotateY: 0,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image
              src="/images/augsburg-hero.png"
              alt="Augsburg Rathaus"
              width={600}
              height={400}
              className={styles.heroImage}
              priority
            />
            <motion.div
              className={styles.imageBadge}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <span className={styles.badgeText}>Augsburg</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scrolling indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className={styles.scrollText}>Scrollen</span>
        <div className={styles.scrollArrow}></div>
      </motion.div>
    </section>
  );
}
