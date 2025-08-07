"use client";
import { useRef } from "react";
import styles from "./CaseStudyGallery.module.css";

const images = [
  {
    src: "/referenzen/mitarbeiter-dashboard.png",
    alt: "Mitarbeiter Dashboard",
    caption:
      "Modernes Mitarbeiter-Dashboard für effiziente Auftragsverwaltung und Zeiterfassung direkt im Unternehmen.",
  },
  {
    src: "/referenzen/tv-prezentation.png",
    alt: "Live Präsentation im Unternehmen",
    caption:
      "Digitale Projektpräsentation direkt auf dem Großbildschirm – Echtzeit-Daten und Statistiken im Meeting.",
  },
  {
    src: "/referenzen/admin-login.png",
    alt: "Sicherer Admin Login",
    caption:
      "Geschützter Zugang für Administratoren mit zweistufiger Authentifizierung und DSGVO-konformer Sicherheit.",
  },
  {
    src: "/referenzen/admin-dashboard.png",
    alt: "Admin Dashboard Übersicht",
    caption:
      "Intuitives Admin-Panel zur Verwaltung von Aufträgen, Prioritäten, Arbeitsanweisungen und Mitarbeiteraktivitäten.",
  },
  {
    src: "/referenzen/dashboard-mitarbeiter.png",
    alt: "Auftragskalender",
    caption:
      "Kalenderansicht für die übersichtliche Planung und Nachverfolgung von Aufgaben, Deadlines und Schichten.",
  },
  {
    src: "/referenzen/admin-dashboard2.png",
    alt: "Auftragsmanagement & Artikelnummern",
    caption:
      "Detaillierte Verwaltung und Nachverfolgung von Aufträgen und Artikelnummern mit transparentem Status und Verantwortlichen.",
  },
];

export default function FullHdGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.gallerySection}>
      {/* Header Content */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.sectionTitle}>
            Digitale Business-Lösung – Projekt Galerie
          </h2>
          <p className={styles.sectionDesc}>
            Einblick in die wichtigsten Module unserer unternehmensinternen
            Applikation: Dashboard, Zeiterfassung, Auftragsmanagement, digitale
            Arbeitsanweisungen und Live-Präsentation – alles für moderne
            Firmenprozesse.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className={styles.galleryGrid} ref={galleryRef}>
        {images.map((img, idx) => (
          <div className={styles.galleryItem} key={idx}>
            <div className={styles.imageContainer}>
              <img
                src={img.src}
                alt={img.alt}
                className={styles.hdImage}
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className={styles.imageOverlay}></div>
              <div className={styles.imageCaption}>
                <h3>{img.alt}</h3>
                <p>{img.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
