"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function WebDesignHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (titleRef.current) {
        titleRef.current.style.animation = `${styles.fadeInUp} 0.8s ease-out forwards`;
      }
      if (subtitleRef.current) {
        subtitleRef.current.style.animation = `${styles.fadeInUp} 0.8s ease-out 0.2s forwards`;
      }
      if (buttonRef.current) {
        buttonRef.current.style.animation = `${styles.fadeInUp} 0.8s ease-out 0.4s forwards`;
      }
    };

    animateElements();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundPattern} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} ref={titleRef}>
            Webdesign auf{" "}
            <span className={styles.highlight}>höchstem Niveau</span>
          </h1>

          <p className={styles.subtitle} ref={subtitleRef}>
            Wir schaffen unvergessliche digitale Erlebnisse, individuell
            abgestimmt auf Ihr Unternehmen. Jeder Pixel ist darauf ausgerichtet,
            Besucher in Kunden zu verwandeln.
          </p>

          <div className={styles.buttons} ref={buttonRef}>
            <a href="#contact" className={styles.primaryButton}>
              Projekt besprechen
              <span className={styles.buttonArrow}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

            <a href="#portfolio" className={styles.secondaryButton}>
              Zum Portfolio
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero-webdesign.svg"
              alt="Moderne Webdesign Benutzeroberfläche"
              fill
              className={styles.image}
              quality={90}
              priority
            />
          </div>
          <div className={styles.gradientOverlay} />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scrollen</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
