"use client";
import Image from "next/image";
import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const preheadRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

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
        decorationRef.current,
      ],
      { clearProps: "opacity,transform,scale" }
    );

    // Check if mobile view
    const isMobile = window.innerWidth < 800;

    // Split text for title animation
    if (titleRef.current) {
      const splitTitle = new SplitText(titleRef.current, {
        type: "chars,words",
        charsClass: styles.titleChar,
      });

      gsap.set(splitTitle.chars, {
        y: 40,
        opacity: 0,
        rotateX: 90,
      });
    }

    // Sequential load animation
    const tl = gsap.timeline();
    tl.set(
      [
        preheadRef.current,
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
        titleRef.current
          ? titleRef.current.querySelectorAll(`.${styles.titleChar}`)
          : [],
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.03,
          ease: "back.out(1.7)",
        },
        "-=0.3"
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
          y: isMobile ? 0 : 20,
        },
        "-=1"
      )
      .to(
        decorationRef.current,
        {
          scale: 1,
          opacity: 0.3,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
        },
        "-=1.2"
      );

    // Floating animation for image (desktop only)
    if (!isMobile) {
      // Multi-axis floating effect
      gsap.to(imageRef.current, {
        y: 20,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Decoration rotation
      gsap.to(decorationRef.current, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none",
      });

      // Parallax scroll animations
      const parallaxTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      parallaxTl
        .to(
          imageRef.current,
          {
            y: -200,
            scale: 1.05,
            ease: "none",
          },
          0
        )
        .to(
          rightRef.current,
          {
            x: 150,
            opacity: 0.8,
            ease: "none",
          },
          0
        )
        .to(
          leftRef.current,
          {
            y: 100,
            opacity: 0.9,
            ease: "none",
          },
          0
        )
        .to(
          titleRef.current,
          {
            scale: 0.9,
            y: 50,
            opacity: 0.8,
            ease: "none",
          },
          0
        )
        .to(
          decorationRef.current,
          {
            y: -100,
            x: 50,
            scale: 1.2,
            ease: "none",
          },
          0
        );

      // Mouse move parallax effect
      if (heroRef.current) {
        heroRef.current.addEventListener("mousemove", (e) => {
          const xPos = e.clientX / window.innerWidth - 0.5;
          const yPos = e.clientY / window.innerHeight - 0.5;

          gsap.to(imageRef.current, {
            x: xPos * 30,
            y: yPos * 20,
            duration: 1.5,
            ease: "power1.out",
          });

          gsap.to(decorationRef.current, {
            x: xPos * 40,
            y: yPos * 30,
            duration: 1.5,
            ease: "power1.out",
          });

          gsap.to(titleRef.current, {
            x: xPos * -10,
            duration: 1.5,
            ease: "power1.out",
          });
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
      if (heroRef.current) {
        heroRef.current.removeEventListener("mousemove", () => {});
      }
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.left} ref={leftRef}>
        <span className={styles.prehead} ref={preheadRef}>
          → WEBDESIGN & WEBENTWICKLUNG
        </span>

        <h1 className={styles.title} ref={titleRef}>
          DIGITALER <br />
          <span className={styles.highlight}>WEBDESIGNER</span>
        </h1>
        <p className={styles.subtitle} ref={subtitleRef}>
          Maßgeschneidertes <span className={styles.highlight}>Webdesign</span>{" "}
          & moderne Webentwicklung – vom Konzept bis zur fertigen Website.{" "}
          <br />
          Beratung, Umsetzung und Support – alles aus einer Hand, für Ihren
          nachhaltigen Online-Erfolg.
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
          <div className={styles.imageDecoration} ref={decorationRef}></div>
        </div>
      </div>
    </section>
  );
}
