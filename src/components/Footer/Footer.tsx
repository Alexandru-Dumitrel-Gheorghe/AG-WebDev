// WowFooter.tsx
"use client";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function WowFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <motion.div
          className={styles.circle}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 0.9, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={styles.circleSmall}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main footer content */}
      <div className={styles.container}>
        {/* Footer grid */}
        <div className={styles.grid}>
          {/* Brand column */}
          <motion.div
            className={styles.brandColumn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className={styles.brand}>
              <span className={styles.brandName}>AG WebDev</span>
              <span className={styles.brandTagline}>Premium Web Solutions</span>
            </Link>
            <p className={styles.brandDescription}>
              Creating exceptional digital experiences with cutting-edge
              technology and innovative design.
            </p>
          </motion.div>

          {/* Links columns */}
          <motion.div
            className={styles.linksColumn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.columnTitle}>Navigation</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.link}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className={styles.link}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.linksColumn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.linksList}>
              <li>
                <Link href="/services/web-development" className={styles.link}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/design" className={styles.link}>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className={styles.link}>
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className={styles.link}>
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className={styles.link}>
                  Maintenance
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div
            className={styles.contactColumn}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.columnTitle}>Get in Touch</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:contact@agwebdev.com" className={styles.link}>
                  contact@agwebdev.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <a href="tel:+49123456789" className={styles.link}>
                  +49 123 456 789
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span className={styles.link}>Berlin, Germany</span>
              </li>
            </ul>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span className={styles.socialIcon}>📸</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <span className={styles.socialIcon}>💼</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <span className={styles.socialIcon}>🐦</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="GitHub">
                <span className={styles.socialIcon}>💻</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.copyright}>
            © {currentYear} AG WebDev. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
            <Link href="/cookies" className={styles.legalLink}>
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
