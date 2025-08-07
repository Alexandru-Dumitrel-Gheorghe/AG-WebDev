"use client";

import Image from "next/image";
import styles from "./BlogHero.module.css";

export default function BlogMainHero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.textWrapper}>
          <div className={styles.badge}>
            <span>AG WebDev Blog</span>
            <div className={styles.badgeAccent}></div>
          </div>

          <h1 className={styles.mainTitle}>
            Experten <span className={styles.highlight}>Blog</span>
          </h1>

          <p className={styles.subtitle}>
            Entdecken Sie die neuesten Trends in Webentwicklung, SEO und
            digitalem Marketing durch unsere gut recherchierten Artikel und
            praxisnahen Fallstudien.
          </p>

          <div className={styles.ctaWrapper}>
            <button className={styles.primaryButton}>
              Letzten Artikel lesen
            </button>
            <button className={styles.secondaryButton}>
              Kategorien durchsuchen
            </button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          {/* Eliminăm gradientOverlay, gridPattern și circleAccent pentru că vrem doar imaginea */}
          <Image
            src="/images/blog-hero1.png" // Înlocuiește cu calea ta corectă
            alt="Blog Hero Bild"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      <div className={styles.scrollCue}>
        <div className={styles.mouseIcon}>
          <div className={styles.mouseWheel}></div>
        </div>
        <span>Nach unten scrollen für mehr</span>
      </div>
    </div>
  );
}
