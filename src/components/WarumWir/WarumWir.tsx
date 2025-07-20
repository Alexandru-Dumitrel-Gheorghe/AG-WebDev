"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import styles from "./WarumWir.module.css";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  {
    title: "Technologische Exzellenz",
    description:
      "Wir setzen auf modernste Technologien wie Next.js, TypeScript und Headless CMS, um zukunftssichere Lösungen mit herausragender Performance zu entwickeln.",
    icon: "💻",
    color: "#6366F1",
  },
  {
    title: "Strategisches Design",
    description:
      "Jedes Design ist das Ergebnis strategischer Überlegungen, die UX-Psychologie mit Geschäftszielen verbinden, um maximale Conversion zu erreichen.",
    icon: "🎨",
    color: "#10B981",
  },
  {
    title: "Nachhaltige SEO-Strategien",
    description:
      "Unsere datengesteuerten SEO-Maßnahmen sorgen für langfristigen Erfolg in den Suchergebnissen und nachhaltiges Wachstum Ihres Online-Business.",
    icon: "📈",
    color: "#F59E0B",
  },
  {
    title: "Transparente Prozesse",
    description:
      "Durch klare Kommunikation und agile Methoden halten wir Sie in jedem Projektschritt informiert und garantieren termingerechte Lieferung.",
    icon: "🔍",
    color: "#EC4899",
  },
];

export default function WarumWir() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Cards animation
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "back.out(1.7)",
      });
    });

    // Background animation
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      backgroundPositionY: "30%",
    });
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 ref={titleRef} className={styles.title}>
            <span className={styles.titleMain}>Warum Wir</span>
            <span className={styles.titleSub}>
              Ihre digitale Transformation
            </span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.introText}>
            Wir verbinden technologische Expertise mit kreativem Design und
            strategischem Denken, um digitale Lösungen zu schaffen, die nicht
            nur beeindrucken, sondern auch messbare Ergebnisse liefern.
          </p>
        </header>

        <div className={styles.grid}>
          {strengths.map((strength, index) => (
            <article
              key={index}
              ref={(el: HTMLDivElement | null) => {
                cardsRef.current[index] = el;
              }}
              className={styles.card}
              style={
                { "--accent-color": strength.color } as React.CSSProperties
              }
            >
              <div className={styles.cardGlow}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{strength.icon}</div>
                <h3 className={styles.cardTitle}>{strength.title}</h3>
                <p className={styles.cardDescription}>{strength.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
