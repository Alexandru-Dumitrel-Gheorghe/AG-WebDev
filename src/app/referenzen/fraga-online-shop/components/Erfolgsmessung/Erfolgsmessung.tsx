"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import styles from "./Erfolgsmessung.module.css";

export default function Erfolgsmessung() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statCardsRef = useRef<HTMLDivElement[]>([]);

  statCardsRef.current = [];
  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !statCardsRef.current.includes(el)) {
      statCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let splitTitle: any;
    if (headingRef.current) {
      splitTitle = new SplitText(headingRef.current, { type: "chars,words" });
      gsap.set(splitTitle.chars, { opacity: 0, y: 30, rotateX: 90 });

      gsap.to(splitTitle.chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.03,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }

    if (leftRef.current && rightRef.current && statsRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      tl.fromTo(
        leftRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        0
      )
        .fromTo(
          rightRef.current,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.2
        )
        .fromTo(
          statsRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
          0.4
        );
    }
    // Hover timeline... (ca la celelalte)
    // ... mousemove effect ...
    // ... cleanup ...
  }, []);

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.topContent}>
        <div className={styles.left} ref={leftRef}>
          <h1 ref={headingRef} className={styles.typewriter}>
            Case Study: <span className={styles.name}>Fraga Online Shop</span>
            <br />
            Modernes E-Commerce mit Headless Shopify – von Backend bis UI, alles
            nahtlos verknüpft und für Conversion optimiert.
          </h1>
        </div>
        <div className={styles.right} ref={rightRef}>
          <p>
            <b>Über das Projekt:</b> <br />
            Für <b>Fraga</b> wurde ein flexibles Shop-System entwickelt:
            Produktpflege, Bestellungen und Zahlungen laufen bequem über
            Shopify, während das Next.js-Frontend für ein einzigartiges
            Nutzererlebnis sorgt. Ziel: Mehr Umsatz, bestes Google-Ranking,
            einfache Verwaltung.
          </p>
          <a
            className={styles.button}
            href="https://e-commerce-one-tau-76.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Ansehen
            <span className={styles.icon}>{/* SVG arrow */}</span>
          </a>
        </div>
      </div>
      <div className={styles.stats} ref={statsRef}>
        <div className={styles.statCard} ref={addToCardsRef}>
          <span className={styles.statLabel}>Steigerung der Verkäufe</span>
          <span className={styles.statValue}>+114%</span>
        </div>
        <div className={styles.statCard} ref={addToCardsRef}>
          <span className={styles.statLabel}>Warenkorb-Abschlüsse</span>
          <span className={styles.statValue}>+76%</span>
        </div>
        <div className={styles.statCard} ref={addToCardsRef}>
          <span className={styles.statLabel}>Ladezeit (Frontend)</span>
          <span className={styles.statValue}>1,0s</span>
        </div>
      </div>
    </section>
  );
}
