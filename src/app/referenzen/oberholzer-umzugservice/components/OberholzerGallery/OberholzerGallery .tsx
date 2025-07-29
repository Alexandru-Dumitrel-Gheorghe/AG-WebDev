"use client";
import { useRef } from "react";
import styles from "./OberholzerGallery.module.css";

const images = [
  {
    src: "/referenzen/laptop-oberholzer.png",
    alt: "Homepage auf Laptop – Oberholzer",
    caption: "Moderne Startseite in voller Größe für PC & Laptop",
    highlight: true,
    orbColor: "var(--orb1-gradient)",
  },
  {
    src: "/referenzen/oberholzer-phone.png",
    alt: "Homepage auf Smartphone – Oberholzer",
    caption: "Mobile Ansicht – optimiert für alle Smartphones",
    orbColor: "var(--orb2-gradient)",
  },
  {
    src: "/referenzen/oberrholzer-tablet.png",
    alt: "Homepage auf Tablet – Oberholzer",
    caption: "Flexibles Webdesign – ideal für Tablets jeder Größe",
    wide: true,
    orbColor: "var(--orb3-gradient)",
  },
];

export default function OberholzerGallery() {
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
            Entdecken Sie die digitale Transformation von Oberholzer – eine
            Reise durch unser modernes Webdesign, optimierte Buchungsprozesse
            und nachweisbare Erfolge für den Umzugsservice.
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
              <div className={styles.statValue}>+52%</div>
              <div className={styles.statLabel}>Buchungsanfragen</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>#1</div>
              <div className={styles.statLabel}>Google Ranking Schweiz</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>2.8x</div>
              <div className={styles.statLabel}>Conversion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
