"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statCardsRef = useRef<HTMLDivElement[]>([]);

  // Add card to ref array
  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !statCardsRef.current.includes(el)) {
      statCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Reset animation props to avoid glitches
    gsap.set([leftRef.current, rightRef.current, statsRef.current], {
      clearProps: "opacity,transform",
    });

    // Typewriter effect with parallax
    if (headingRef.current) {
      const originalText = headingRef.current.textContent || "";
      headingRef.current.textContent = "";

      const splitTitle = new SplitText(headingRef.current, {
        type: "chars,words",
      });

      gsap.set(splitTitle.chars, {
        opacity: 0,
        y: 30,
        rotateX: 90,
      });

      // Scroll trigger for section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          // Typewriter effect
          let i = 0;
          const speed = 20;

          const typeWriter = () => {
            if (i < originalText.length) {
              headingRef.current!.textContent += originalText.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            } else {
              // Animate characters after typing completes
              gsap.to(splitTitle.chars, {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 1,
                stagger: 0.03,
                ease: "back.out(1.7)",
              });
            }
          };

          typeWriter();
        },
        once: true,
      });
    }

    // Parallax and fade animations
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

    // Card hover animations
    statCardsRef.current.forEach((card, index) => {
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl
        .to(card, {
          y: -15,
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          card.querySelector(`.${styles.statLabel}`),
          { color: "#fff", duration: 0.2 },
          0
        )
        .to(
          card.querySelector(`.${styles.statValue}`),
          { color: "#fff", duration: 0.2 },
          0
        );

      card.addEventListener("mouseenter", () => hoverTl.play());
      card.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    // 3D tilt effect on mouse move
    if (sectionRef.current) {
      sectionRef.current.addEventListener("mousemove", (e) => {
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
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (sectionRef.current) {
        sectionRef.current.removeEventListener("mousemove", () => {});
      }
      statCardsRef.current.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
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
          ref={(el) => addToCardsRef(el)}
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className={styles.statLabel}>
            Zusammenarbeit auf Augenhöhe – das ist mein Credo.
          </span>
          <span className={styles.statValue}>10+</span>
        </div>
        <div
          className={styles.statCard}
          ref={(el) => addToCardsRef(el)}
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className={styles.statLabel}>Abgeschlossene Projekte</span>
          <span className={styles.statValue}>120+</span>
        </div>
        <div
          className={styles.statCard}
          ref={(el) => addToCardsRef(el)}
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
