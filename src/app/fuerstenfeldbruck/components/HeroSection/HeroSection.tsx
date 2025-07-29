"use client";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Simple base64 placeholder for the image
const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDgwMCI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAwIiB5PSI0MDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0MCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=";

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

    // Set initial styles to prevent layout shift
    gsap.set([leftRef.current, rightRef.current], {
      opacity: 1,
      visibility: "visible",
    });

    gsap.set([preheadRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 0, // Start from final position to prevent shift
    });

    if (titleRef.current) {
      const splitTitle = new SplitText(titleRef.current, {
        type: "chars,words",
        charsClass: styles.titleChar,
      });
      gsap.set(splitTitle.chars, {
        y: 0, // Start from final position
        opacity: 0, // Still start invisible
        rotateX: 90,
      });
    }

    const isMobile = window.innerWidth < 800;

    const tl = gsap.timeline();
    tl.set([preheadRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: isMobile ? 20 : 30,
    })
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
          y: isMobile ? 0 : 20,
          duration: 1,
          ease: "expo.out",
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

    if (!isMobile) {
      gsap.to(imageRef.current, {
        y: 20,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(decorationRef.current, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none",
      });

      const parallaxTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      parallaxTl
        .to(imageRef.current, { y: -200, scale: 1.05, ease: "none" }, 0)
        .to(rightRef.current, { x: 150, opacity: 0.8, ease: "none" }, 0)
        .to(leftRef.current, { y: 100, opacity: 0.9, ease: "none" }, 0)
        .to(
          titleRef.current,
          { scale: 0.9, y: 50, opacity: 0.8, ease: "none" },
          0
        )
        .to(
          decorationRef.current,
          { y: -100, x: 50, scale: 1.2, ease: "none" },
          0
        );

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
      <div className={`${styles.left} ${styles.initialLoad}`} ref={leftRef}>
        <span className={styles.prehead} ref={preheadRef}>
          → Webdesign Fürstenfeldbruck
        </span>
        <h1 className={styles.title} ref={titleRef}>
          Webdesign &<br />
          Entwicklung in{" "}
          <span className={styles.highlight}>Fürstenfeldbruck</span>
        </h1>
        <p className={styles.subtitle} ref={subtitleRef}>
          Wir erstellen <span className={styles.highlight}>moderne</span>{" "}
          Websites und Online-Shops für Unternehmen aus Fürstenfeldbruck und
          Umgebung. Profitieren Sie von starker Sichtbarkeit, mehr Kunden und
          nachhaltigem Geschäftserfolg – individuell entwickelt für Ihre Ziele.
        </p>
        <a href="/kontakt" className={styles.ctaBtn} ref={ctaRef}>
          <span className={styles.ctaText}>Kostenlose Beratung sichern</span>
          <span className={styles.ctaArrow}>&rarr;</span>
          <span className={styles.ctaHover}></span>
        </a>
      </div>
      <div className={styles.right} ref={rightRef}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/ffb-hero.png"
            alt="Webdesign Fürstenfeldbruck"
            width={720}
            height={900}
            priority
            className={styles.heroImage}
            ref={imageRef}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageDecoration} ref={decorationRef}></div>
        </div>
      </div>
    </section>
  );
}
