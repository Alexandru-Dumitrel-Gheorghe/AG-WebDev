"use client";
import { motion } from "framer-motion";
import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.parallaxOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>
      <div className={styles.container}>
        <motion.div
          className={styles.testimonialCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className={styles.quoteWrapper}>
            <svg
              className={styles.quoteIcon}
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17H11C11 14.7909 9.20914 13 7 13V17ZM4 12C4 8.68629 6.68629 6 10 6V12H4ZM17 17H21C21 14.7909 19.2091 13 17 13V17ZM14 12C14 8.68629 16.6863 6 20 6V12H14Z"
                fill="var(--menu-box-bg)"
                opacity="0.4"
              />
            </svg>
            <motion.blockquote
              className={styles.quoteText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              „Unser Onlineshop läuft super stabil, die Verwaltung ist endlich
              einfach und die Kunden lieben das neue Design! Top Zusammenarbeit
              – klare Empfehlung!“
            </motion.blockquote>
          </div>
          <motion.div
            className={styles.authorInfo}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.authorName}>Fraga Online Shop</div>
            <div className={styles.authorTitle}>Daniel Fraga</div>
            <div className={styles.authorCompany}>Inhaber, fraga-shop.de</div>
          </motion.div>
          <div className={styles.companyLogo}>
            <svg width="120" height="40" viewBox="0 0 120 40">
              <rect
                width="120"
                height="40"
                rx="8"
                fill="var(--menu-box-bg)"
                opacity="0.1"
              />
              <text
                x="60"
                y="25"
                fontFamily="Inter, sans-serif"
                fontSize="14"
                fontWeight="700"
                fill="var(--menu-box-bg)"
                textAnchor="middle"
              >
                Shopify
              </text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
