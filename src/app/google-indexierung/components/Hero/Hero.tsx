"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function GoogleIndexierungHero() {
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
            } 0.4s ease-out forwards ${index * 0.05}s`;
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

  const titleFirst = "Google";
  const titleSecond = "Indexierung";
  let idxCount = 0;

  return (
    <section className={styles.hero}>
      {/* Elemente decorative */}
      <div className={styles.decorativeCircle1} />
      <div className={styles.decorativeCircle2} />
      <div className={styles.decorativeLine} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} ref={titleRef} style={{ opacity: 0 }}>
            {/* Google (highlight) */}
            {titleFirst.split("").map((char, idx) => {
              idxCount = idx;
              return (
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
              );
            })}
            {/* Linie nouă */}
            <br />
            {/* Indexierung (normal) */}
            {titleSecond.split("").map((char, idx) => (
              <span
                key={idx + idxCount + 1}
                ref={(el) => {
                  lettersRef.current[idx + idxCount + 1] = el;
                }}
                className={styles.letter}
                style={{
                  opacity: 0,
                  display: char === " " ? "inline" : "inline-block",
                  color: "var(--text-primary)",
                }}
              >
                {char}
              </span>
            ))}
          </h1>
          <div className={styles.titleUnderline} />
          <p className={styles.subtitle} ref={subtitleRef}>
            Sichtbarkeit beginnt mit einer effektiven{" "}
            <span className={styles.subtitleHighlight}>Google Indexierung</span>
            . Wir sorgen dafür, dass Ihre Website korrekt von Suchmaschinen
            erkannt, regelmäßig gecrawlt und optimal platziert wird – für
            maximale Reichweite, nachhaltigen Traffic und messbaren SEO-Erfolg.
          </p>

          <div className={styles.buttons} ref={buttonRef}>
            <a href="/kontakt" className={styles.primaryButton}>
              Kostenlose Beratung
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
            <a href="/kontakt" className={styles.secondaryButton}>
              <span className={styles.buttonText}>Projekt besprechen</span>
              <span className={styles.buttonHoverEffect} />
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/google-indexierung-hero.png"
              alt="SEO Indexierung Illustration"
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
