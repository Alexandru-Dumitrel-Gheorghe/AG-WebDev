"use client";
import { useRef } from "react";
import styles from "./CaseStudyGallery.module.css";

const images = [
  {
    src: "/referenzen/laptop-certus.png",
    alt: "Homepage auf Laptop",
    caption: "Modernes Webdesign – große Darstellung für Desktop und Laptop",
    highlight: true,
    orbColor: "var(--orb1-gradient)",
  },
  {
    src: "/referenzen/referenzen-phone-certus.png",
    alt: "Homepage auf Smartphone",
    caption: "Mobile Ansicht – perfekt optimiert für alle Smartphones",
    orbColor: "var(--orb2-gradient)",
  },
  {
    src: "/referenzen/referenzen-certus-tablet.png",
    alt: "Homepage auf Tablet",
    caption: "Optimale Darstellung auch auf Tablets – flexibel und elegant",
    wide: true,
    orbColor: "var(--orb3-gradient)",
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
