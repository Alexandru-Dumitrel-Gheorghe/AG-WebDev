"use client";
import { useRef } from "react";
import styles from "./Gallery.module.css";

const images = [
  {
    src: "/referenzen/fraga-refernezen.png",
    alt: "Homepage auf Laptop – Fraga Online-Shop",
    caption: "Hochwertige Startseite für Desktop und Laptop – klar & modern",
    highlight: true,
    orbColor: "var(--orb1-gradient)",
  },
  {
    src: "/referenzen/referenzen-phone-fraga.png",
    alt: "Homepage auf Smartphone – Fraga Online-Shop",
    caption: "Perfekte Darstellung und schnelle Bestellungen auf jedem Handy",
    orbColor: "var(--orb2-gradient)",
  },
  {
    src: "/referenzen/fraga-referenzen-tablet.png",
    alt: "Homepage auf Tablet – Fraga Online-Shop",
    caption: "Responsive Webdesign – Ihr Shop optimal auf jedem Tablet",
    wide: true,
    orbColor: "var(--orb3-gradient)",
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
