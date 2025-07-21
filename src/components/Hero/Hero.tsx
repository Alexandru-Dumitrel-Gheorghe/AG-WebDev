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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Register GSAP plugins
    if (typeof window !== "undefined") {
      // Animate elements on load
      gsap.from(leftRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scale down title on scroll
      gsap.to(".heroTitle", {
        scale: 0.95,
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
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.left} ref={leftRef}>
        <span className={`${styles.prehead} preheadAnimation`}>
          → Hey! Ich bin Alex
        </span>
        <h1 className={`${styles.title} heroTitle`}>
          DIGITAL <br /> WEB DEVELOPER
        </h1>
        <p className={styles.subtitle}>
          Ich spezialisiere mich auf moderne Webentwicklung & <br />
          <b>individuelles Webdesign</b> mit Next.js & CSS Modules,
          <br />
          blitzschnell, nutzerorientiert & professionell.
        </p>
        <a href="#kontakt" className={styles.ctaBtn}>
          <span className={styles.ctaText}>Jetzt Kontakt aufnehmen</span>
          <span className={styles.ctaArrow}>&rarr;</span>
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
        </div>
      </div>
    </section>
  );
}
