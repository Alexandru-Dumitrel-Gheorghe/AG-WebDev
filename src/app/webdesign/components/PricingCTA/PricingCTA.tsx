"use client";

import styles from "./PricingCTA.module.css";
import { useState, useEffect } from "react";

export default function PricingCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.ctaSection}>
      <div className={styles.bgDecor} />
      <div className={styles.cardsWrapper}>
        {/* Left Card */}
        <div
          className={`${styles.card} ${styles.leftCard} ${
            !isMobile ? styles.rotatedCard : ""
          }`}
        >
          <div className={styles.cardHeader}>
            <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
              <path
                d="M7 8h10M7 12h4m-8 8V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.cardTitle}>Landingpage Basic</span>
          </div>
          <div className={styles.cardDesc}>
            Beste Wahl für Startups & Aktionen
          </div>
          <div className={styles.price}>€ 800</div>
          <ul className={styles.featureList}>
            <li>
              <span>✔</span> 1 moderne Landingpage (Onepager), keine
              Unterseiten.
            </li>
            <li>
              <span>✔</span> Individuelles responsives Design.
            </li>
            <li>
              <span>✔</span> Standard SEO-Optimierung (OnPage).
            </li>
            <li>
              <span>✔</span> Kontaktformular & Call-to-Action.
            </li>
            <li>
              <span>✔</span> Schnelle Ladezeiten (Performance Optimierung).
            </li>
          </ul>
          <button className={styles.cardButton}>Jetzt anfragen</button>
        </div>

        {/* Center CTA */}
        <div className={styles.centerContent}>
          <h2>
            Wählen Sie das Paket,
            <br />
            das am besten zu Ihrem Projekt passt.
          </h2>
          <p>
            Vergleichen Sie unsere Angebote und entscheiden Sie sich für die
            Lösung, die Ihren Anforderungen und Zielen am besten entspricht.
          </p>
          <button className={styles.centerButton}>
            Unverbindlich beraten lassen <span>&rarr;</span>
          </button>
        </div>

        {/* Right Card */}
        <div
          className={`${styles.card} ${styles.rightCard} ${
            !isMobile ? styles.rotatedCard : ""
          }`}
        >
          <div className={styles.cardHeader}>
            <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
              <path
                d="M7 8h10M7 12h4m-8 8V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.cardTitle}>Pro Webseite</span>
          </div>
          <div className={styles.cardDesc}>Am beliebtesten</div>
          <div className={styles.price}>€ 2.000</div>
          <ul className={styles.featureList}>
            <li>
              <span>✔</span> Bis zu 10 individuelle Seiten.
            </li>
            <li>
              <span>✔</span> Responsives & modernes Webdesign.
            </li>
            <li>
              <span>✔</span> Erweiterte SEO-Optimierung (OnPage/Struktur).
            </li>
            <li>
              <span>✔</span> Mehrsprachigkeit (DE/EN/weitere).
            </li>
            <li>
              <span>✔</span> Basic Wartung (3 Monate inklusive).
            </li>
          </ul>
          <button className={styles.cardButton}>Jetzt anfragen</button>
        </div>
      </div>
    </section>
  );
}
