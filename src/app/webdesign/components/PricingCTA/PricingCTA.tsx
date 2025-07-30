"use client";

import styles from "./PricingCTA.module.css";
import { useState, useEffect } from "react";
import BuchenModal from "@/components/Buchenmodal/Buchenmodal";
import { useRouter } from "next/navigation";

const PLANS = [
  {
    name: "Landingpage Basic",
    price: "€ 800",
    features: [
      "1 moderne Landingpage (Onepager), keine Unterseiten.",
      "Individuelles responsives Design.",
      "Standard SEO-Optimierung (OnPage).",
      "Kontaktformular & Call-to-Action.",
      "Schnelle Ladezeiten (Performance Optimierung).",
    ],
    desc: "Beste Wahl für Startups & Aktionen",
  },
  {
    name: "Pro Webseite",
    price: "€ 2.000",
    features: [
      "Bis zu 10 individuelle Seiten.",
      "Responsives & modernes Webdesign.",
      "Erweiterte SEO-Optimierung (OnPage/Struktur).",
      "Mehrsprachigkeit (DE/EN/weitere).",
      "Basic Wartung (3 Monate inklusive).",
    ],
    desc: "Am beliebtesten",
  },
];

export default function PricingCTA() {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // @ts-ignore
  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
  };

  // Vechea funcție pentru redirect
  // const handleKontakt = () => { router.push("/kontakt"); };

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
            {/* SVG aici */}
            <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
              <path
                d="M7 8h10M7 12h4m-8 8V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.cardTitle}>{PLANS[0].name}</span>
          </div>
          <div className={styles.cardDesc}>{PLANS[0].desc}</div>
          <div className={styles.price}>{PLANS[0].price}</div>
          <ul className={styles.featureList}>
            {PLANS[0].features.map((f, i) => (
              <li key={i}>
                <span>✔</span> {f}
              </li>
            ))}
          </ul>
          <button
            className={styles.cardButton}
            onClick={() => handleOpenModal(PLANS[0])}
          >
            Jetzt anfragen
          </button>
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
          {/* Poți lăsa pe acesta cu redirect sau să deschidă și el modalul fără plan selectat */}
          <button
            className={styles.centerButton}
            onClick={() => handleOpenModal(null)}
          >
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
            <span className={styles.cardTitle}>{PLANS[1].name}</span>
          </div>
          <div className={styles.cardDesc}>{PLANS[1].desc}</div>
          <div className={styles.price}>{PLANS[1].price}</div>
          <ul className={styles.featureList}>
            {PLANS[1].features.map((f, i) => (
              <li key={i}>
                <span>✔</span> {f}
              </li>
            ))}
          </ul>
          <button
            className={styles.cardButton}
            onClick={() => handleOpenModal(PLANS[1])}
          >
            Jetzt anfragen
          </button>
        </div>
      </div>

      {/* MODAL */}
      <BuchenModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        plan={selectedPlan}
      />
    </section>
  );
}
