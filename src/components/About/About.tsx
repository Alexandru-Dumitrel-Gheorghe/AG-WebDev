"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import styles from "./About.module.css";

// DECLARĂ TIPUL FOLOSIT LA hoverTimelines!
type HoverTimelineData = {
  card: HTMLDivElement;
  onEnter: () => void;
  onLeave: () => void;
  hoverTl: gsap.core.Timeline;
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statCardsRef = useRef<HTMLDivElement[]>([]);

  // RESETĂ ARRAY-UL DE REFURI LA FIECARE RENDER!
  statCardsRef.current = [];

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !statCardsRef.current.includes(el)) {
      statCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // SplitText Animation (fără typewriter)
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

    // Parallax și fade pe content la scroll
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

    // Animatii hover pe carduri, cu cleanup corect!
    const hoverTimelines: HoverTimelineData[] = [];
    statCardsRef.current.forEach((card) => {
      const statLabel = card.querySelector(
        `.${styles.statLabel}`
      ) as HTMLElement;
      const statValue = card.querySelector(
        `.${styles.statValue}`
      ) as HTMLElement;
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(card, { y: -15, scale: 1.03, duration: 0.3, ease: "power2.out" }, 0)
        .to(statLabel, { color: "var(--stat-hover-text)", duration: 0.2 }, 0)
        .to(statValue, { color: "var(--stat-hover-text)", duration: 0.2 }, 0);

      const onEnter = () => hoverTl.play();
      const onLeave = () => hoverTl.reverse();

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);

      // Push pentru cleanup!
      hoverTimelines.push({ card, onEnter, onLeave, hoverTl });
    });

    // Parallax 3D la mouse move pe toată secțiunea
    const handleMouseMove = (e: MouseEvent) => {
      const xPos = e.clientX / window.innerWidth - 0.5;
      const yPos = e.clientY / window.innerHeight - 0.5;

      gsap.to(statCardsRef.current, {
        rotationY: xPos * 10,
        rotationX: yPos * -10,
        transformPerspective: 1000,
        ease: "power1.out",
        duration: 1.5,
      });
      gsap.to(headingRef.current, {
        x: xPos * -20,
        ease: "power1.out",
        duration: 1.5,
      });
    };
    sectionRef.current?.addEventListener("mousemove", handleMouseMove);

    // CLEANUP
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      sectionRef.current?.removeEventListener("mousemove", handleMouseMove);

      hoverTimelines.forEach(({ card, onEnter, onLeave }) => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
      // SplitText cleanup dacă vrei să revii la starea inițială
      if (splitTitle && splitTitle.revert) splitTitle.revert();
    };
  }, []);

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.topContent}>
        <div className={styles.left} ref={leftRef}>
          <h1 ref={headingRef} className={styles.typewriter}>
            Hey! Ich bin <span className={styles.name}>Alexandru</span>, ein
            leidenschaftlicher Webentwickler und UI/UX-Designer aus Deutschland.
            Ich kombiniere modernes Design mit klarer Strategie, um einzigartige
            digitale Erlebnisse und starke Markenauftritte zu schaffen.
          </h1>
        </div>
        <div className={styles.right} ref={rightRef}>
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

      <div className={styles.stats} ref={statsRef}>
        <div
          className={styles.statCard}
          ref={addToCardsRef}
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className={styles.statLabel}>
            Zusammenarbeit auf Augenhöhe – das ist mein Credo.
          </span>
          <span className={styles.statValue}>10+</span>
        </div>
        <div
          className={styles.statCard}
          ref={addToCardsRef}
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className={styles.statLabel}>Abgeschlossene Projekte</span>
          <span className={styles.statValue}>120+</span>
        </div>
        <div
          className={styles.statCard}
          ref={addToCardsRef}
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className={styles.statLabel}>
            Auszeichnungen & Plattform-Features
          </span>
          <span className={styles.statValue}>30+</span>
        </div>
      </div>
    </section>
  );
}
