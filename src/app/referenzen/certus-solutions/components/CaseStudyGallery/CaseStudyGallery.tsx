"use client";
import { useRef } from "react";
import styles from "./CaseStudyGallery.module.css";

const images = [
  {
    src: "/images/cta-background.png",
    alt: "Dashboard Certus Solutions",
    caption: "Neues Dashboard: Alle Aufträge und Leads im Blick",
    highlight: true,
    orbColor: "var(--orb1-gradient)",
  },
  {
    src: "/images/cta-background.png",
    alt: "Mobile Optimierung Certus",
    caption: "Mobile First – blitzschnell und responsive",
    orbColor: "var(--orb2-gradient)",
  },
  {
    src: "/images/cta-background.png",
    alt: "Leadgenerierung Certus",
    caption: "Effiziente Leadgenerierung direkt aus dem Portal",
    wide: true,
    orbColor: "var(--orb3-gradient)",
  },
  {
    src: "/images/cta-background.png",
    alt: "SEO Performance Certus",
    caption: "SEO-Optimierte Landingpages für Top-Rankings",
    orbColor: "var(--orb1-gradient)",
  },
];

export default function CaseStudyGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.gallerySection}>
      {/* Floating Orbs Background */}
      <div className={styles.parallaxOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      {/* Header Content */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.sectionTitle}>Projekt Galerie</h2>
          <p className={styles.sectionDesc}>
            Eine visuelle Reise durch unsere Lösungen und deren messbaren Impact
            auf das Business unserer Kunden.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className={styles.cardsGrid}>
        {images.map((img, idx) => (
          <div
            className={`${styles.card} ${
              img.highlight ? styles.highlightItem : ""
            } ${img.wide ? styles.wideItem : ""}`}
            key={idx}
          >
            <div className={styles.imageContainer}>
              <img
                src={img.src}
                alt={img.alt}
                className={styles.galleryImage}
                loading="lazy"
              />
              <div
                className={styles.imageOverlay}
                style={{ background: img.orbColor }}
              ></div>
              <div className={styles.imageCaption}>
                <div className={styles.captionInner}>
                  <h3 className={styles.title}>{img.alt}</h3>
                  <p className={styles.description}>{img.caption}</p>
                </div>
              </div>
            </div>
            <div className={styles.hoverIndicator}></div>
          </div>
        ))}
      </div>

      {/* Results Card */}
      <div className={styles.resultsCard}>
        <div className={styles.resultsContent}>
          <h3 className={styles.resultsTitle}>Ergebnisse</h3>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>+69%</div>
              <div className={styles.statLabel}>Leadgenerierung</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>#1</div>
              <div className={styles.statLabel}>Google Ranking</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>3.2x</div>
              <div className={styles.statLabel}>Conversion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
