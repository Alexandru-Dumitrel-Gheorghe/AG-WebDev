"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import BuchenModal from "@/components/Buchenmodal/Buchenmodal";

const HERO_PLAN = { name: "Individuelles Webprojekt" };

export default function WebDesignHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  // Animatie titlu litera cu litera
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

  // Animatie subtitle & butoane
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

  const titleText = "Digitale Erlebnisse";
  const highlightStart = 0;
  const highlightEnd = "Digitale".length;

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
            Unser Ziel ist es, nicht einfach nur schöne Webseiten zu erstellen,
            sondern{" "}
            <span className={styles.subtitleHighlight}>
              digitale Erlebnisse zu schaffen
            </span>
            , die Ihre Zielgruppe emotional erreichen, Ihre Marke stärken und
            nachhaltig zum geschäftlichen Wachstum beitragen – mit einem klaren
            Fokus auf Benutzerfreundlichkeit, Performance und Sichtbarkeit.
          </p>

          <div className={styles.buttons} ref={buttonRef}>
            {/* <a> păstrat, doar adaugi onClick */}
            <a
              href="#"
              className={styles.primaryButton}
              onClick={handleOpenModal}
            >
              Projekt besprechen
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
              <span className={styles.buttonText}>Kostenlose Beratung</span>
              <span className={styles.buttonHoverEffect} />
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero-about1.png"
              alt="Moderne Webdesign Benutzeroberfläche"
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
      {/* MODAL */}
      <BuchenModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        plan={HERO_PLAN}
      />
    </section>
  );
}
