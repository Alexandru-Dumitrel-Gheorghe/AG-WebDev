"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head"; // Folosim Head DOAR pentru metadata customă și JSON-LD
import styles from "./NotFound.module.css";
import { FiArrowRight, FiMail } from "react-icons/fi";

// --- Metadata SEO & JSON-LD (Schema.org) ---
const SEO = () => (
  <Head>
    <title>404 – Seite nicht gefunden | AG WebDev</title>
    <meta
      name="description"
      content="Die angeforderte Seite existiert nicht oder wurde verschoben. Zurück zur Startseite von AG WebDev."
    />
    <meta name="robots" content="noindex, follow" />
    <meta
      property="og:title"
      content="404 – Seite nicht gefunden | AG WebDev"
    />
    <meta
      property="og:description"
      content="Die angeforderte Seite existiert nicht oder wurde verschoben."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ag-web-dev.vercel.app/404" />
    <meta property="og:site_name" content="AG WebDev" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "404 – Seite nicht gefunden",
          description:
            "Die angeforderte Seite existiert nicht oder wurde verschoben.",
          isPartOf: {
            "@type": "WebSite",
            name: "AG WebDev",
            url: "https://ag-web-dev.vercel.app",
          },
        }),
      }}
    />
  </Head>
);

export default function NotFound() {
  return (
    <>
      <SEO />
      <section className={styles.container}>
        {/* Floating Orbs Background */}
        <div className={styles.parallaxOrbs}>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>

        {/* Minimalist Illustration */}
        <motion.div
          className={styles.illustration}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <svg width="200" height="160" viewBox="0 0 200 160">
            {/* Magnifying glass */}
            <circle
              cx="80"
              cy="80"
              r="50"
              fill="none"
              stroke="var(--menu-box-bg)"
              strokeWidth="3"
              strokeDasharray="4 4"
            />
            <line
              x1="130"
              y1="130"
              x2="180"
              y2="180"
              stroke="var(--menu-box-bg)"
              strokeWidth="3"
            />

            {/* Animated emoji face */}
            <motion.circle
              cx="150"
              cy="50"
              r="20"
              fill="none"
              stroke="var(--menu-box-bg)"
              strokeWidth="2"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <circle cx="145" cy="45" r="2" fill="var(--menu-box-bg)" />
            <circle cx="155" cy="45" r="2" fill="var(--menu-box-bg)" />
            <motion.path
              d="M140 60 Q150 70 160 60"
              fill="none"
              stroke="var(--menu-box-bg)"
              strokeWidth="2"
              animate={{
                d: [
                  "M140 60 Q150 70 160 60",
                  "M140 62 Q150 68 160 62",
                  "M140 60 Q150 70 160 60",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>

        {/* Animated 404 Text */}
        <div className={styles.errorContainer}>
          <motion.div
            className={styles.errorCode}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className={styles.four}>4</span>
            <motion.span
              className={styles.zero}
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            >
              0
            </motion.span>
            <span className={styles.four}>4</span>
          </motion.div>

          {/* Error Message */}
          <motion.h1
            className={styles.errorTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Seite nicht gefunden
          </motion.h1>

          <motion.p
            className={styles.errorDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
          </motion.p>

          {/* Interactive Buttons */}
          <div className={styles.buttonGroup}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="/" className={styles.homeButton}>
                Zur Startseite
                <motion.span
                  className={styles.arrow}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FiArrowRight />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a
                href="mailto:contact@ag-webdev.de"
                className={styles.supportButton}
              >
                <FiMail className={styles.mailIcon} />
                E-Mail Support
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating Certus Logo */}
        <motion.div
          className={styles.floatingLogo}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="180" height="60" viewBox="0 0 180 60">
            <rect
              width="180"
              height="60"
              rx="12"
              fill="var(--menu-box-bg)"
              opacity="0.08"
            />
            <text
              x="90"
              y="38"
              fontFamily="Inter, sans-serif"
              fontSize="18"
              fontWeight="700"
              fill="var(--menu-box-bg)"
              textAnchor="middle"
            >
              AG WebDev
            </text>
          </svg>
        </motion.div>

        {/* Animated Grid Background */}
        <div className={styles.gridBackground}>
          {[...Array(36)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.gridItem}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: i * 0.01, duration: 0.5 }}
              whileHover={{ opacity: 0.6 }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
