"use client";
import styles from "./LeistungenAugsburg.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const services = [
  {
    title: "Webdesign",
    description: "Modernes, responsives und performantes Webdesign.",
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
    link: "/webdesign",
  },
  {
    title: "Webentwicklung",
    description: "Moderne Websites und Web-Apps mit neuesten Technologien.",
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
    link: "/Webentwicklung",
  },
  {
    title: "SEO & Marketing",
    description: "Ihre Website auf Top-Positionen bei Google.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    link: "/seo",
  },
  {
    title: "Google Indexierung",
    description:
      "Wir sorgen dafür, dass Ihre Website von Google schnell & effektiv gefunden wird.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 8v8M9.5 10.5C9.5 9.11929 10.6193 8 12 8s2.5 1.11929 2.5 2.5c0 1.3807-1.1193 2.5-2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    link: "/google-indexierung",
  },
  {
    title: "Wartung & Support",
    description: "Zuverlässige Pflege und technische Unterstützung.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M4 8l8 5 8-5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
    link: "/wartung-support",
  },
  {
    title: "Beratung",
    description: "Individuelle Strategien für Ihren Online-Erfolg.",
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
    link: "/beratung",
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

  const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
    cardsRef.current.forEach((card) => {
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
    <section
      className={styles.leistungenSection}
      ref={sectionRef}
      id="leistungen"
    >
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
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>{service.icon}</div>
            </div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <Link href={service.link} className={styles.learnMore}>
              Mehr erfahren<span className={styles.arrow}>&rarr;</span>
            </Link>
            <div className={styles.hoverIndicator}></div>
            <div className={styles.cardGlow}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
