"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import BuchenModal from "@/components/Buchenmodal/Buchenmodal";

const HERO_PLAN = { name: "Fraga Demo Online Shop" };

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

  const titleFirst = "Fraga";
  const titleSecond = "Demo";
  const space = " ";

  // Combini ambele cuvinte într-un singur array, marchezi separat pentru highlight
  const fullTitleArr = [
    ...titleFirst.split("").map((char) => ({ char, highlight: true })),
    { char: space, highlight: false },
    ...titleSecond.split("").map((char) => ({ char, highlight: false })),
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.decorativeCircle1} />
      <div className={styles.decorativeCircle2} />
      <div className={styles.decorativeLine} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} ref={titleRef} style={{ opacity: 0 }}>
            {fullTitleArr.map((item, idx) => (
              <span
                key={idx}
                ref={(el) => {
                  lettersRef.current[idx] = el;
                }}
                className={
                  item.highlight
                    ? `${styles.letter} ${styles.highlightLetter}`
                    : styles.letter
                }
                style={{
                  opacity: 0,
                  display: item.char === " " ? "inline" : "inline-block",
                  color: item.highlight ? undefined : "var(--text-primary)",
                }}
              >
                {item.char}
              </span>
            ))}
          </h1>

          <div className={styles.titleUnderline} />

          <p className={styles.subtitle} ref={subtitleRef}>
            Interaktiver Demo-Shop für <b>Fraga</b> – gebaut mit modernem
            Tech-Stack:
            <span className={styles.subtitleHighlight}>
              {" "}
              Shopify-Backend, Next.js & React-Frontend, modularem CSS,
              blitzschnell & SEO-optimiert.
            </span>
            <br />
            Schnelle Produktdarstellung, responsives Design & intuitive User
            Experience – ideal als Vorlage für moderne E-Commerce Projekte!
          </p>

          <div className={styles.buttons} ref={buttonRef}>
            <a
              href="https://e-commerce-one-tau-76.vercel.app/"
              className={styles.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zur Website
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
              <span className={styles.buttonText}>Kontakt aufnehmen</span>
              <span className={styles.buttonHoverEffect} />
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/fraga-refernezen.png"
              alt="Fraga Demo Online Shop Vorschau"
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
