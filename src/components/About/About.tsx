"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Content animation
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Image animation
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
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
      {/* ==== VIDEO BACKGROUND ==== */}
      <div className={styles.background}>
        <video autoPlay loop muted playsInline className={styles.videoBg}>
          <source src="/images/about.webm" type="video/mp4" />
          {/* fallback pentru browsere vechi */}
        </video>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        {/* Profile Image - Left Side */}
        <motion.div
          ref={imageRef}
          className={styles.imageContainer}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/profil.jpg"
              alt="Profilbild"
              width={400}
              height={500}
              className={styles.profileImage}
              priority
            />
            <div className={styles.imageGlow}></div>
          </div>
        </motion.div>

        {/* Content - Right Side */}
        <div ref={contentRef} className={styles.content}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>Über mich</span>
            <span className={styles.titleSub}>
              Ihr Partner für digitale Exzellenz
            </span>
          </h2>
          <div className={styles.divider}></div>

          <div className={styles.textContent}>
            <p>
              Hi, ich bin Alexandru – Webentwickler & UI/UX Designer aus
              Leidenschaft. Seit über 10 Jahren lebe ich digitale Innovation und
              entwickle maßgeschneiderte Websites und smarte Lösungen, die
              begeistern und Ergebnisse bringen.
            </p>
            <p>
              Für mich zählt nicht nur der Code, sondern das Gesamterlebnis:
              moderne Technik, einzigartiges Design und absolute
              Zuverlässigkeit. Jedes Projekt ist für mich eine neue Chance,
              meine Kunden zu begeistern – mit Präzision, Kreativität und 100%
              Commitment.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projekte umgesetzt</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Jahre Erfahrung</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>
                  Leidenschaft & Präzision
                </span>
              </div>
            </div>

            <button className={styles.ctaButton}>
              Kontakt aufnehmen
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
