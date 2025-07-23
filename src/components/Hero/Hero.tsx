"use client";
import Image from "next/image";
import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const preheadRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Reset animation props to avoid glitches
    gsap.set(
      [
        leftRef.current,
        rightRef.current,
        titleRef.current,
        preheadRef.current,
        subtitleRef.current,
        ctaRef.current,
        imageRef.current,
      ],
      { clearProps: "opacity,transform" }
    );

    // Check if mobile view
    const isMobile = window.innerWidth < 800;

    // Sequential load animation
    const tl = gsap.timeline();
    tl.set(
      [
        preheadRef.current,
        titleRef.current,
        subtitleRef.current,
        ctaRef.current,
        imageRef.current,
      ],
      { opacity: 0, y: isMobile ? 20 : 30 }
    )
      .set([leftRef.current, rightRef.current], { opacity: 1 })
      .to(preheadRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      })
      .to(
        titleRef.current,
        { y: 0, opacity: 1, duration: 1, ease: "expo.out" },
        "-=0.5"
      )
      .to(
        subtitleRef.current,
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.7"
      )
      .to(
        ctaRef.current,
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      )
      .to(
        imageRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
          y: isMobile ? 0 : 20, // Only float on desktop
        },
        "-=1"
      );

    // Floating animation for image (desktop only)
    if (!isMobile) {
      gsap.to(imageRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll animations (desktop only)
      gsap.to(imageRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(titleRef.current, {
        scale: 0.92,
        opacity: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(rightRef.current, {
        x: 100,
        opacity: 0.7,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  const renderAnimatedLine = (line: string, highlight = false) => (
    <span className={highlight ? styles.highlight : undefined}>
      {line.split("").map((char, idx) => (
        <span
          key={idx}
          className={styles.titleChar}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char}
        </span>
      ))}
    </span>
  );

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.left} ref={leftRef}>
        <span className={styles.prehead} ref={preheadRef}>
          → Hey! Ich bin Alex
        </span>
        <h1 className={styles.title} ref={titleRef}>
          {renderAnimatedLine("DIGITALER ")}
          <br />
          {renderAnimatedLine("WEBDESIGNER", true)}
        </h1>
        <p className={styles.subtitle} ref={subtitleRef}>
          Ich spezialisiere mich auf moderne Webentwicklung &{" "}
          <span className={styles.highlight}>individuelles Webdesign</span> mit
          Next.js & CSS Modules, blitzschnell, nutzerorientiert & professionell.
        </p>
        <a href="#kontakt" className={styles.ctaBtn} ref={ctaRef}>
          <span className={styles.ctaText}>Jetzt Kontakt aufnehmen</span>
          <span className={styles.ctaArrow}>&rarr;</span>
          <span className={styles.ctaHover}></span>
        </a>
      </div>
      <div className={styles.right} ref={rightRef}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/profil.jpg"
            alt="Profilbild"
            width={720}
            height={900}
            priority
            className={styles.heroImage}
            ref={imageRef}
          />
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageDecoration}></div>
        </div>
      </div>
    </section>
  );
}
