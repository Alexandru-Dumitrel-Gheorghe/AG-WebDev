"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { FaGoogle, FaStar } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import styles from "./About.module.css";

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
  const ratingsRef = useRef<HTMLDivElement>(null);
  const ratingCardsRef = useRef<HTMLDivElement[]>([]);

  ratingCardsRef.current = [];

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !ratingCardsRef.current.includes(el)) {
      ratingCardsRef.current.push(el);
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

    if (leftRef.current && rightRef.current && ratingsRef.current) {
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
          ratingsRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
          0.4
        );
    }

    const hoverTimelines: HoverTimelineData[] = [];
    ratingCardsRef.current.forEach((card) => {
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl
        .to(card, { y: -15, scale: 1.03, duration: 0.3, ease: "power2.out" }, 0)
        .to(
          card.querySelector(`.${styles.platformName}`),
          { color: "var(--active-tag-text)", duration: 0.2 },
          0
        )
        .to(
          card.querySelector(`.${styles.ratingValue}`),
          { color: "var(--active-tag-text)", duration: 0.2 },
          0
        )
        .to(
          card.querySelector(`.${styles.glow}`),
          { opacity: 1, duration: 0.3 },
          0
        );

      const onEnter = () => hoverTl.play();
      const onLeave = () => hoverTl.reverse();

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);

      hoverTimelines.push({ card, onEnter, onLeave, hoverTl });
    });

    const handleMouseMove = (e: MouseEvent) => {
      const xPos = e.clientX / window.innerWidth - 0.5;
      const yPos = e.clientY / window.innerHeight - 0.5;

      gsap.to(ratingCardsRef.current, {
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      sectionRef.current?.removeEventListener("mousemove", handleMouseMove);

      hoverTimelines.forEach(({ card, onEnter, onLeave }) => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
      if (splitTitle && splitTitle.revert) splitTitle.revert();
    };
  }, []);

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.topContent}>
        <div className={styles.left} ref={leftRef}>
          <h2 ref={headingRef} className={styles.typewriter}>
            Hallo! Ich bin <span className={styles.name}>Alexandru</span>, ein
            leidenschaftlicher Webentwickler und UI/UX-Designer aus Deutschland.
            Ich kombiniere modernes Design mit klarer Strategie, um einzigartige
            digitale Erlebnisse und starke Markenauftritte zu schaffen.
          </h2>
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
            Mehr über mich
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
      <div className={styles.ratings} ref={ratingsRef}>
        {/* Google Rating Card */}
        <div
          className={`${styles.ratingCard} ${styles.googleCard}`}
          ref={addToCardsRef}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={styles.platform}>
            <FaGoogle className={styles.platformIcon} />
            <span className={styles.platformName}>Google</span>
          </div>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={`google-${i}`} className={styles.starIcon} />
            ))}
          </div>
          <div className={styles.ratingValue}>5.0 Bewertung</div>
          <div className={styles.reviews}>Empfohlen von Kunden</div>
          <div className={styles.cardHoverEffect}></div>
        </div>

        {/* Trustpilot Rating Card */}
        <div
          className={`${styles.ratingCard} ${styles.trustpilotCard}`}
          ref={addToCardsRef}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className={styles.platform}>
            <SiTrustpilot className={styles.platformIcon} />
            <span className={styles.platformName}>Trustpilot</span>
          </div>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={`trustpilot-${i}`} className={styles.starIcon} />
            ))}
          </div>
          <div className={styles.ratingValue}>Ausgezeichnet</div>
          <div className={styles.reviews}>Verifiziertes Profil</div>
          <div className={styles.cardHoverEffect}></div>
        </div>

        {/* Listando Badge Card */}
        <div
          className={`${styles.ratingCard} ${styles.listandoCard}`}
          ref={addToCardsRef}
          style={{ transformStyle: "preserve-3d" }}
        >
          <a
            href="https://www.listando.de/bayern/fuerstenfeldbruck/FHPOV50AE6/webdesign/ag-webdev/UHBUZMYf9I"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.listandoLink}
          >
            <img
              src="https://listando.s3.eu-central-1.amazonaws.com/logo/badge/listando_topexperte_badge.png"
              alt="Webdesigner auf Listando"
              className={styles.listandoBadge}
            />
            <span className={styles.ratingValue}>Top Experte 2025</span>
            <div className={styles.cardHoverEffect}></div>
          </a>
        </div>
      </div>
    </section>
  );
}
