"use client";
import styles from "./WebDesignServicesSection.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiTool,
  FiClock,
  FiSearch,
  FiShield,
  FiBarChart2,
  FiRefreshCw,
} from "react-icons/fi";

const services = [
  {
    title: "Individuelle Firmen-Tools",
    description:
      "Wir entwickeln digitale Tools für interne Unternehmensprozesse – z.B. Timetask für Zeiterfassung, Auftragsverwaltung, Arbeitsanweisung-Suche und vieles mehr.",
    icon: <FiTool size={36} />,
    link: "#tools",
  },
  {
    title: "Zeiterfassung & Aufgabenmanagement",
    description:
      "Mit Timetask erfassen und verwalten Ihre Teams Arbeitszeiten und Aufträge effizient und transparent – alles nach Ihren Anforderungen.",
    icon: <FiClock size={36} />,
    link: "#timetask",
  },
  {
    title: "Arbeitsanweisung-Suche",
    description:
      "Schnelles Auffinden und Verwalten von Arbeitsanweisungen, Dokumenten oder Produktionshinweisen für alle Mitarbeiter.",
    icon: <FiSearch size={36} />,
    link: "#arbeitsanweisung",
  },
  {
    title: "Sicherheit & Datenschutz",
    description:
      "Datenschutzkonforme Entwicklung, sichere Datenübertragung und Schutz vor externen Angriffen (DSGVO ready).",
    icon: <FiShield size={36} />,
    link: "#sicherheit",
  },
  {
    title: "Reporting & Effizienz-Analysen",
    description:
      "Individuelle Dashboards und Statistiken zur Optimierung von Arbeitsabläufen und zur transparenten Erfolgsmessung.",
    icon: <FiBarChart2 size={36} />,
    link: "#reporting",
  },
  {
    title: "Wartung & Support",
    description:
      "Updates, Monitoring und schnelle Fehlerbehebung für Ihre digitalen Tools – alles aus einer Hand.",
    icon: <FiRefreshCw size={36} />,
    link: "#wartung",
  },
];

export default function WebDesignServicesSection() {
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
            Digitale Tools & Webentwicklung
          </h2>
          <p className={styles.sectionDesc} ref={descRef}>
            Wir entwickeln maßgeschneiderte digitale Tools wie Timetask,
            Arbeitsanweisung-Suche & mehr – speziell für interne Abläufe in
            Unternehmen. Effizienz, Performance und höchste Sicherheit stehen
            dabei im Fokus.
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
