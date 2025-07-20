"use client";
import styles from "./Hero.module.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const [isHoveringPrimary, setIsHoveringPrimary] = useState(false);
  const [isHoveringSecondary, setIsHoveringSecondary] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup
    gsap.set(
      [titleRef.current, subtitleRef.current, ctaRef.current, glassRef.current],
      {
        opacity: 0,
        y: 20,
      }
    );

    // Main animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.2 },
    });

    tl.to(glassRef.current, { opacity: 1, duration: 0.8 })
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      })
      .to(
        subtitleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(2)",
        },
        "-=0.8"
      )
      .to(
        ctaRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          onComplete: () => {
            // Enable pointer events after animation
            if (ctaRef.current) {
              ctaRef.current.style.pointerEvents = "auto";
            }
          },
        },
        "-=0.6"
      );

    // Parallax effect
    gsap.to(heroRef.current, {
      backgroundPositionY: "30%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Floating particles
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = styles.particle;
      heroRef.current?.appendChild(particle);

      gsap.set(particle, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        opacity: gsap.utils.random(0.2, 0.6),
        scale: gsap.utils.random(0.5, 1.5),
      });

      particles.push(particle);
    }

    particles.forEach((particle) => {
      gsap.to(particle, {
        x: "+=random(-100,100)",
        y: "+=random(-50,50)",
        duration: gsap.utils.random(10, 20),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* ==== VIDEO BACKGROUND ==== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBg}
        // Preload, fallback, etc.
      >
        <source src="/images/clarity-stream.mp4" type="video/mp4" />
        {/* fallback pentru browsere vechi */}
      </video>

      {/* Glassmorphism overlay with gradient */}
      <div ref={glassRef} className={styles.glassOverlay}></div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 ref={titleRef} className={styles.title}>
            Steigern Sie Ihre <span className={styles.highlight}>digitale</span>{" "}
            Präsenz
          </h1>
          <p ref={subtitleRef} className={styles.subtitle}>
            Wir entwickeln hochwertige Webseiten und digitale Lösungen,
            <br />
            die Besucher begeistern und zu Kunden machen.
          </p>
        </div>
        <div ref={ctaRef} className={styles.ctaContainer}>
          <button
            className={styles.primaryCta}
            onMouseEnter={() => setIsHoveringPrimary(true)}
            onMouseLeave={() => setIsHoveringPrimary(false)}
          >
            <span className={styles.ctaText}>Projekt starten</span>
            <div className={styles.ctaIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {isHoveringPrimary && <div className={styles.ctaRipple}></div>}
          </button>
          <button
            className={styles.secondaryCta}
            onMouseEnter={() => setIsHoveringSecondary(true)}
            onMouseLeave={() => setIsHoveringSecondary(false)}
          >
            Unsere Arbeiten ansehen
            {isHoveringSecondary && <div className={styles.ctaRipple}></div>}
          </button>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
