"use client";
import React, { useState } from "react";
import styles from "./BenefitsSection.module.css";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import BuchenModal from "../Buchenmodal/Buchenmodal";

const benefits = [
  "Direkte Kommunikation ohne Zwischeninstanzen",
  "Flexible und individuelle Umsetzung Ihrer Wünsche",
  "Transparente Prozesse und ehrliche Beratung",
  "Schnelle Reaktionszeiten durch persönliche Betreuung",
  "Unkomplizierte Projektabwicklung aus einer Hand",
  "Moderne Technologien und maßgeschneiderte Lösungen",
];

const description = `
Als selbständiger Webentwickler begleite ich Sie persönlich vom ersten Gespräch bis zum fertigen Webauftritt und darüber hinaus. 
Sie profitieren von einer flexiblen, direkten Zusammenarbeit auf Augenhöhe – ganz ohne Umwege oder Agentur-Kosten.
`;

export default function BenefitsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plan = { name: "Website-Angebot" };

  return (
    <section className={styles.section}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Ihr persönlicher Webentwickler – modern, direkt & transparent
          </h2>
          <p className={styles.subtitle}>
            Direkte Zusammenarbeit. Individuelle Lösungen. Persönliche
            Betreuung.
          </p>
        </div>
        <div className={styles.content}>
          <ul className={styles.benefitsList}>
            {benefits.map((text, idx) => (
              <li key={idx} className={styles.benefitItem}>
                <div className={styles.iconWrapper}>
                  <FaCheckCircle className={styles.icon} />
                </div>
                <span className={styles.benefitText}>{text}</span>
              </li>
            ))}
          </ul>
          <div className={styles.rightColumn}>
            <div className={styles.descriptionBox}>
              <p className={styles.description}>{description}</p>
              <button
                className={styles.ctaButton}
                type="button"
                onClick={() => setIsModalOpen(true)}
              >
                Jetzt Angebot anfordern
                <FaArrowRight className={styles.arrowIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modalul */}
      <BuchenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={plan}
      />
    </section>
  );
}
