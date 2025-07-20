"use client";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Leistungen.module.css";

const services = [
  {
    title: "Premium Webdesign",
    description:
      "Exklusives, responsives Design das Kunden begeistert und überzeugt. Wir kreieren visuelle Erlebnisse die bleibenden Eindruck hinterlassen.",
    content: [
      "Custom UI/UX Design",
      "Mobile-First Konzept",
      "Performance optimiert",
      "Brand Identity Integration",
      "3D & Animationen",
    ],
    icon: "💎",
  },
  {
    title: "High-Performance Entwicklung",
    description:
      "Blitzschnelle Websites mit modernsten Technologien für maximale Conversion und Nutzererlebnis.",
    content: [
      "Next.js/React Entwicklung",
      "Headless CMS Integration",
      "Serverless Architecture",
      "Micro-Interaktionen",
      "Progressive Web Apps",
    ],
    icon: "⚡",
  },
  {
    title: "SEO Excellence",
    description:
      "Garantierte Top-Platzierungen in Suchmaschinen durch strategische Optimierung und Content-Performance.",
    content: [
      "Technische SEO Audits",
      "Keyword Strategie",
      "Content Optimierung",
      "Backlink Aufbau",
      "Lokale SEO",
    ],
    icon: "🚀",
  },
  {
    title: "Digitale Sichtbarkeit",
    description:
      "Sofortige Indexierung und maximale Reichweite durch strategische Online-Positionierung.",
    content: [
      "Google Ads Management",
      "Social Media Integration",
      "Influencer Marketing",
      "E-Mail Kampagnen",
      "Analytics & Reporting",
    ],
    icon: "🔍",
  },
];

export default function Leistungen() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Animare smooth pe height când se schimbă accordionul activ
  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      // Inchidere
      const contentEl = contentRefs.current[index];
      if (contentEl) {
        gsap.to(contentEl, {
          height: 0,
          duration: 0.5,
          opacity: 0,
          ease: "power2.inOut",
          onComplete: () => setActiveIndex(null),
        });
      } else {
        setActiveIndex(null);
      }
    } else {
      // Deschidere nou
      if (activeIndex !== null) {
        // Inchide vechiul
        const oldContentEl = contentRefs.current[activeIndex];
        if (oldContentEl) {
          gsap.to(oldContentEl, {
            height: 0,
            duration: 0.4,
            opacity: 0,
            ease: "power2.inOut",
          });
        }
      }
      setActiveIndex(index);
      // Asteapta un frame ca sa existe deja DOM-ul deschis
      setTimeout(() => {
        const contentEl = contentRefs.current[index];
        if (contentEl) {
          contentEl.style.display = "block";
          gsap.fromTo(
            contentEl,
            { height: 0, opacity: 0 },
            {
              height: contentEl.scrollHeight,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              clearProps: "height",
            }
          );
        }
      }, 30);
    }
  };

  return (
    <section className={styles.leistungen}>
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <div className={styles.panelContent}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleLine}>Unsere</span>
              <span className={styles.titleLine}>Dienstleistungen</span>
            </h2>
            <div className={styles.divider}></div>
            <p className={styles.sectionDescription}>
              Wir bieten exklusive Lösungen für anspruchsvolle Kunden, die Wert
              auf höchste Qualität und individuelle Betreuung legen. Jedes
              Projekt wird mit Präzision und Leidenschaft umgesetzt.
            </p>
            <div className={styles.highlightBox}>
              <div className={styles.highlightIcon}>✨</div>
              <p className={styles.highlightText}>
                Individuelle Konzepte | 24/7 Support | Garantierte Ergebnisse
              </p>
            </div>
          </div>
        </div>

        <div className={styles.accordion}>
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`${styles.accordionItem} ${
                activeIndex === idx ? styles.active : ""
              }`}
              data-active={activeIndex === idx}
              onClick={() => toggleAccordion(idx)}
            >
              <div className={styles.accordionHeader}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <div className={styles.accordionArrow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={styles.accordionContent}
                ref={(el) => {
                  contentRefs.current[idx] = el;
                }}
                style={{
                  display: activeIndex === idx ? "block" : "none",
                  height: activeIndex === idx ? "auto" : 0,
                  overflow: "hidden",
                }}
                // Prevent click on content from toggling accordion
                onClick={(e) => e.stopPropagation()}
              >
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <ul className={styles.serviceFeatures}>
                  {service.content.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <div className={styles.featureMarker}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
