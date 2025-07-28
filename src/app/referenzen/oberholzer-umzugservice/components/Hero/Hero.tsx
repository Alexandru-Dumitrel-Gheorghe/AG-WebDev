"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateTitle = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        const letters = lettersRef.current;
        letters.forEach((letter, index) => {
          if (letter) {
            letter.style.animation = `${
              styles.letterFadeIn
            } 0.1s ease-out forwards ${index * 0.03}s`;
          }
        });
      }
    };
    const timer = setTimeout(animateTitle, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animateElements = () => {
      if (subtitleRef.current) {
        subtitleRef.current.style.animation = `${styles.fadeInUp} 0.8s ease-out 0.6s forwards`;
      }
      if (buttonRef.current) {
        buttonRef.current.style.animation = `${styles.fadeInUp} 0.8s ease-out 0.8s forwards`;
      }
    };
    animateElements();
  }, []);

  // Titlu și subtitle pentru Oberholzer
  const line1 = "Oberholzer Umzugservice –";
  const line2 = "Schweizer Präzision, digital umgesetzt";

  return (
    <section className={styles.hero}>
      {/* Elemente decorative */}
      <div className={styles.decorativeCircle1} />
      <div className={styles.decorativeCircle2} />
      <div className={styles.decorativeLine} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} ref={titleRef} style={{ opacity: 0 }}>
            {line1.split("").map((char, idx) => (
              <span
                key={idx}
                ref={(el) => {
                  lettersRef.current[idx] = el;
                }}
                className={`${styles.letter} ${styles.highlightLetter}`}
                style={{
                  opacity: 0,
                  display: char === " " ? "inline" : "inline-block",
                }}
              >
                {char}
              </span>
            ))}
            <br />
            {line2.split("").map((char, idx) => (
              <span
                key={idx + 100}
                ref={(el) => {
                  lettersRef.current[idx + 100] = el;
                }}
                className={styles.letter}
                style={{
                  opacity: 0,
                  display: char === " " ? "inline" : "inline-block",
                }}
              >
                {char}
              </span>
            ))}
          </h1>

          <div className={styles.titleUnderline} />

          <p className={styles.subtitle} ref={subtitleRef}>
            Für <b>Oberholzer</b>, einen der bekanntesten Umzugsdienstleister in
            der Schweiz, entstand ein modernes Webdesign mit Fokus auf
            Conversion, SEO und Ladezeit.
            <br />
            Die neue Website vereint
            <span className={styles.subtitleHighlight}>
              {" "}
              Schweizer Präzision mit digitaler Effizienz.
            </span>
          </p>

          <div className={styles.buttons} ref={buttonRef}>
            <a href="/kontakt" className={styles.primaryButton}>
              Projekt starten
              <span className={styles.buttonArrow}>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.33325 12.6667L12.6666 3.33337"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.33325 3.33337H12.6666V10.6667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <a href="/referenzen" className={styles.secondaryButton}>
              <span className={styles.buttonText}>Weitere Projekte</span>
              <span className={styles.buttonHoverEffect} />
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/oberholzer-projekt.png" // schimbă dacă ai alt path pentru imagine!
              alt="Case Study Oberholzer Umzugservice Website"
              fill
              className={styles.image}
              quality={100}
              priority
            />
          </div>
          <div className={styles.imageDecoration} />
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scrollen</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
