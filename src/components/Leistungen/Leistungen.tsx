"use client";
import styles from "./Leistungen.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Wir gestalten moderne, responsive Websites, die nicht nur gut aussehen, sondern auch Ergebnisse liefern.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="4"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="3"
          y="9"
          width="18"
          height="4"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="3"
          y="15"
          width="18"
          height="4"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
  {
    title: "Brand Design",
    description:
      "Egal ob Markenlaunch, Auffrischung oder Skalierung – wir bringen Ihre Marke auf das nächste Level.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 19V18C4 14.6863 6.68629 12 10 12H14C17.3137 12 20 14.6863 20 18V19"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Webdesign",
    description:
      "Unsere UI/UX-Prozesse vereinen Strategie, Storytelling und Nutzerpsychologie zu perfekten digitalen Erlebnissen.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="7"
          y="8"
          width="10"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
  {
    title: "App Design",
    description:
      "Von Wireframes bis zum pixelperfekten Interface – wir begleiten Sie bei jedem Schritt zur perfekten App.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="7"
          y="2"
          width="10"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Leistungen() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const orb1Ref = useRef<HTMLSpanElement>(null);
  const orb2Ref = useRef<HTMLSpanElement>(null);
  const orb3Ref = useRef<HTMLSpanElement>(null);

  // Add card to ref array
  const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Reset animation props to avoid glitches
    gsap.set(
      [
        titleRef.current,
        descRef.current,
        ...cardsRef.current,
        orb1Ref.current,
        orb2Ref.current,
        orb3Ref.current,
      ],
      { clearProps: "opacity,transform" }
    );

    // Main timeline for section entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        0.2
      )
      .fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
        },
        0.4
      );

    // Floating orbs parallax
    gsap.to(orb1Ref.current, {
      y: -90,
      x: 40,
      rotation: 15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.to(orb2Ref.current, {
      y: 60,
      x: -60,
      rotation: -10,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.to(orb3Ref.current, {
      y: -50,
      x: -45,
      rotation: 5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Card hover animations
    cardsRef.current.forEach((card, index) => {
      const icon = card.querySelector(`.${styles.icon}`);
      const hoverIndicator = card.querySelector(`.${styles.hoverIndicator}`);

      const hoverTl = gsap.timeline({ paused: true });

      hoverTl
        .to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(icon, { scale: 1.1, duration: 0.3, ease: "back.out(2)" }, 0)
        .to(
          hoverIndicator,
          { scaleX: 1, duration: 0.4, ease: "power2.out" },
          0
        );

      card.addEventListener("mouseenter", () => hoverTl.play());
      card.addEventListener("mouseleave", () => hoverTl.reverse());
    });

    // Mouse move parallax effect
    if (sectionRef.current) {
      sectionRef.current.addEventListener("mousemove", (e) => {
        const xPos = e.clientX / window.innerWidth - 0.5;
        const yPos = e.clientY / window.innerHeight - 0.5;

        gsap.to(cardsRef.current, {
          x: xPos * 10,
          y: yPos * 5,
          rotation: xPos * 2,
          transformPerspective: 1000,
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
      cardsRef.current.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section className={styles.leistungenSection} ref={sectionRef}>
      {/* Floating orbs background */}
      <div className={styles.parallaxOrbs}>
        <span ref={orb1Ref} className={styles.orb1}></span>
        <span ref={orb2Ref} className={styles.orb2}></span>
        <span ref={orb3Ref} className={styles.orb3}></span>
      </div>

      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.sectionTitle} ref={titleRef}>
            Leistungen
          </h2>
          <p className={styles.sectionDesc} ref={descRef}>
            Hochwertige Dienstleistungen für moderne Unternehmen. Von kreativen
            Markenauftritten bis zu leistungsstarken Web-Lösungen.
          </p>
        </div>
      </div>

      <div className={styles.cardsGrid}>
        {services.map((service, index) => (
          <div
            className={styles.card}
            key={index}
            ref={(el) => addToCardsRef(el, index)}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <div className={styles.hoverIndicator}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
