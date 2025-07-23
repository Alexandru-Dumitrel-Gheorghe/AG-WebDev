"use client";
import { useEffect, useRef } from "react";
import styles from "./About.module.css";

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Typewriter effect for h1
    const heading = headingRef.current;
    if (heading) {
      const text = heading.textContent;
      heading.textContent = "";

      let i = 0;
      const speed = 20; // typing speed in ms

      const typeWriter = () => {
        if (text && i < text.length) {
          heading.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      };

      // Start typing after the element is visible
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            typeWriter();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(heading);
    }

    // Scroll animations for other elements
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`.${styles.animateOnScroll}`).forEach((el) => {
      scrollObserver.observe(el);
    });

    return () => scrollObserver.disconnect();
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.topContent}>
        <div className={`${styles.left} ${styles.animateOnScroll}`}>
          <h1 ref={headingRef} className={styles.typewriter}>
            Hey! Ich bin <span className={styles.name}>Alexandru</span>, ein
            leidenschaftlicher Webentwickler und UI/UX-Designer aus Deutschland.
            Ich kombiniere modernes Design mit klarer Strategie, um einzigartige
            digitale Erlebnisse und starke Markenauftritte zu schaffen.
          </h1>
        </div>
        <div className={`${styles.right} ${styles.animateOnScroll}`}>
          <p>
            <b>Über mich:</b> <br />
            Ich setze auf Qualität, Zuverlässigkeit und kreative Lösungen –
            immer mit Fokus auf die Ziele meiner Kunden.
            <br />
            <br />
            Mit über <b>5 Jahren Erfahrung</b> in Webdesign, UI/UX und Branding
            habe ich zahlreiche Projekte für Start-ups, Agenturen und
            Unternehmen erfolgreich umgesetzt.
          </p>
          <a className={styles.button} href="/about">
            Über mich
            <span className={styles.icon}>
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12l5-5-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className={`${styles.stats} ${styles.animateOnScroll}`}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>
            Zusammenarbeit auf Augenhöhe – das ist mein Credo.
          </span>
          <span className={styles.statValue}>10+</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Abgeschlossene Projekte</span>
          <span className={styles.statValue}>120+</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>
            Auszeichnungen & Plattform-Features
          </span>
          <span className={styles.statValue}>30+</span>
        </div>
      </div>
    </section>
  );
}
