"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import styles from "./CaseStudies.module.css";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    client: "Oberholzer Umzugservice",
    tech: "Next.js",
    title: "Modernes Webdesign & SEO",
    description:
      "Neues Corporate Design, ultra-schnelle Ladezeiten und Google #1 für das Haupt-Keyword. Mobile-first UI/UX mit maximaler Conversion.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    result: "+69% mehr Anfragen",
    link: "/cases/oberholzer",
    image: "/images/oberholzer-case-ag.png",
    accentColor: "#6366F1",
  },
  {
    id: 2,
    client: "Certus Solutions",
    tech: "Next.js",
    title: "B2B Website & SEO für Bauelemente",
    description:
      "Webauftritt für Vertrieb von Fenstern, Türen, Aluminiumzäunen & Rollläden. Komplett in Next.js mit TypeScript, inklusive mehrsprachigem SEO, Referenz-Galerie & Kontaktmodul.",
    tags: ["Next.js", "TypeScript", "CSS Modules", "SEO"],
    result: "+47% B2B-Anfragen",
    link: "/cases/certus",
    image: "/images/certus-case-ag.png",
    accentColor: "#10B981",
  },
  {
    id: 3,
    client: "Fraga Online Shop",
    tech: "Shopify",
    title: "Headless E-Commerce mit Shopify",
    description:
      "Modernes Shop-Erlebnis mit Shopify-Backend und Next.js-Frontend. Individuelles Design, Conversion-Optimierung & superschnelle Pages für mobile Kunden.",
    tags: ["Shopify", "Next.js", "React", "Figma"],
    result: "+62% Umsatzsteigerung",
    link: "/cases/fraga",
    image: "/images/fraga-case-ag.png",
    accentColor: "#F59E0B",
  },
];

export default function CaseStudies() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  useEffect(() => {
    // Animate cards on scroll
    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
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
      {/* Enhanced Spline Background */}
      <div className={styles.background}>
        <Spline
          scene="https://prod.spline.design/uRGLBV26pumVyiAv/scene.splinecode"
          className={styles.spline}
        />
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>
              <span className={styles.titleMain}>Unsere Projekte</span>
              <span className={styles.titleSub}>Mit messbarem Erfolg</span>
            </h2>
            <div className={styles.divider}></div>
          </div>
          <p className={styles.introText}>
            Entdecken Sie unsere erfolgreichsten Projekte, die durch innovative
            Technologien und strategisches Design beeindruckende Ergebnisse
            erzielt haben.
          </p>
        </header>

        <div className={styles.grid}>
          {caseStudies.map((project, index) => (
            <article
              key={project.id}
              ref={(el: HTMLDivElement | null) => {
                cardsRef.current[index] = el;
              }}
              className={`${styles.card} ${
                expandedCard === project.id ? styles.expanded : ""
              }`}
              onClick={() => toggleCard(project.id)}
              style={
                {
                  "--accent-color": project.accentColor,
                } as React.CSSProperties
              }
            >
              <div className={styles.cardMedia}>
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className={styles.cardOverlay}></div>
                  <span className={styles.cardBadge}>{project.tech}</span>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNumber}>0{project.id}</span>
                    <h3 className={styles.cardTitle}>{project.client}</h3>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.contentInner}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <footer className={styles.cardFooter}>
                    <span className={styles.result}>{project.result}</span>
                    <a
                      href={project.link}
                      className={styles.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Fallstudie ansehen
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </footer>
                </div>
              </div>

              {/* Glow effect */}
              <div className={styles.glow}></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
