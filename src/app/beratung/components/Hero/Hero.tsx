"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import BuchenModal from "@/components/Buchenmodal/Buchenmodal";

const HERO_PLAN = { name: "Beratung & Strategie" };

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

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

  const titleText = "Beratung & Strategie";
  const highlightStart = 0;
  const highlightEnd = "Beratung".length;

  return (
    <section className={styles.hero}>
      {/* Elemente decorative */}
      <div className={styles.decorativeCircle1} />
      <div className={styles.decorativeCircle2} />
      <div className={styles.decorativeLine} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} ref={titleRef} style={{ opacity: 0 }}>
            {titleText.split("").map((char, index) => {
              const isHighlight =
                index >= highlightStart && index < highlightEnd;
              const isSpace = char === " ";
              return (
                <span
                  key={index}
                  ref={(el) => {
                    lettersRef.current[index] = el;
                  }}
                  className={`${styles.letter} ${
                    isHighlight ? styles.highlightLetter : ""
                  }`}
                  style={{
                    opacity: 0,
                    display: isSpace ? "inline" : "inline-block",
                  }}
                >
                  {char}
                </span>
              );
            })}
          </h1>
          <div className={styles.titleUnderline} />
          <p className={styles.subtitle} ref={subtitleRef}>
            Individuelle{" "}
            <span className={styles.subtitleHighlight}>
              Beratung & Strategien
            </span>{" "}
            für Ihren digitalen Erfolg – persönlich, transparent und
            zielgerichtet. Als erfahrener Webdesigner und Entwickler biete ich
            Ihnen maßgeschneiderte Lösungen für erfolgreiche Online-Projekte.
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
            <a
              href="#"
              className={styles.secondaryButton}
              onClick={handleOpenModal}
            >
              <span className={styles.buttonText}>Projekt besprechen</span>
              <span className={styles.buttonHoverEffect} />
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/beratung-hero.png"
              alt="Beratung & Strategie Illustration"
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
      {/* Modal */}
      <BuchenModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        plan={HERO_PLAN}
      />
    </section>
  );
}
