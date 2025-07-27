"use client";
import { useRef } from "react";
import styles from "./Gallery.module.css";

const images = [
  {
    src: "/images/fraga-dashboard.png",
    alt: "Dashboard Fraga Online-Shop",
    caption:
      "Shop-Dashboard: Produkte, Bestellungen, Analytics auf einen Blick.",
    highlight: true,
    orbColor: "var(--orb1-gradient)",
  },
  {
    src: "/images/fraga-mobile.png",
    alt: "Mobile Optimierung Fraga",
    caption: "Mobile First – schneller Checkout und perfekte Darstellung.",
    orbColor: "var(--orb2-gradient)",
  },
  {
    src: "/images/fraga-collection.png",
    alt: "Produktübersicht Fraga",
    caption: "Conversion-starke Produktübersicht mit Filter und Animation.",
    wide: true,
    orbColor: "var(--orb3-gradient)",
  },
  {
    src: "/images/fraga-seo.png",
    alt: "SEO Performance Fraga",
    caption: "SEO-Optimierte Shopseiten für Top-Rankings bei Google.",
    orbColor: "var(--orb1-gradient)",
  },
];

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.parallaxOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.sectionTitle}>Projekt Galerie</h2>
          <p className={styles.sectionDesc}>
            Einblicke in die Umsetzung des Fraga Online-Shops: Modernes Design,
            Top Performance und exzellente User Experience.
          </p>
        </div>
      </div>
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
      <div className={styles.resultsCard}>
        <div className={styles.resultsContent}>
          <h3 className={styles.resultsTitle}>Ergebnisse</h3>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>+114%</div>
              <div className={styles.statLabel}>Umsatzsteigerung</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>#1</div>
              <div className={styles.statLabel}>Shop-Ranking</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>4.5★</div>
              <div className={styles.statLabel}>Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
