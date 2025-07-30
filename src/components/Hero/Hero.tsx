"use client";
import Image from "next/image";
import styles from "./Hero.module.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Only load GSAP plugins on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

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
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current) return;

    const isMobile = window.innerWidth < 1100; // Adjusted breakpoint
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.fonts.ready.then(() => {
      let splitTitle: SplitText | null = null;
      let ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          const chars =
            titleRef.current?.querySelectorAll(`.${styles.titleChar}`) ?? [];
          gsap.set(
            [
              preheadRef.current,
              subtitleRef.current,
              ctaRef.current,
              ...chars,
              imageRef.current,
              decorationRef.current,
            ],
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
            }
          );
          return;
        }

        gsap.set(
          [
            leftRef.current,
            rightRef.current,
            titleRef.current,
            preheadRef.current,
            subtitleRef.current,
            ctaRef.current,
            decorationRef.current,
          ],
          { clearProps: "opacity,transform,scale" }
        );

        if (titleRef.current) {
          splitTitle = new SplitText(titleRef.current, {
            type: "chars,words",
            charsClass: styles.titleChar,
          });
          gsap.set(splitTitle.chars, {
            y: 40,
            opacity: 0,
            rotateX: 90,
          });
        }

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.set([preheadRef.current, subtitleRef.current, ctaRef.current], {
          opacity: 0,
          y: isMobile ? 20 : 30,
        })
          .set([leftRef.current, rightRef.current], { opacity: 1 })
          .to(preheadRef.current, { y: 0, opacity: 1, duration: 0.7 })
          .to(
            splitTitle?.chars || [],
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
          .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.7 }, "-=0.7")
          .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
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

        if (!isMobile && !isTouchDevice && heroRef.current) {
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

          let lastTime = 0;
          const mouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastTime < 16) return;
            lastTime = now;

            const xPos = e.clientX / window.innerWidth - 0.5;
            const yPos = e.clientY / window.innerHeight - 0.5;

            gsap.to(imageRef.current, {
              x: xPos * 30,
              y: yPos * 20,
              duration: 1.5,
              ease: "power1.out",
              overwrite: true,
            });
            gsap.to(decorationRef.current, {
              x: xPos * 40,
              y: yPos * 30,
              duration: 1.5,
              ease: "power1.out",
              overwrite: true,
            });
            gsap.to(titleRef.current, {
              x: xPos * -10,
              duration: 1.5,
              ease: "power1.out",
              overwrite: true,
            });
          };

          heroRef.current.addEventListener("mousemove", mouseMove);

          return () => {
            heroRef.current?.removeEventListener("mousemove", mouseMove);
          };
        }
      }, heroRef);

      return () => {
        ctx.revert();
        splitTitle?.revert();
      };
    });
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.left} ref={leftRef}>
        <span className={styles.prehead} ref={preheadRef}>
          → BRANDING
        </span>
        <h1 className={styles.title} ref={titleRef}>
          Webdesign & <br />
          <span className={styles.highlight}>Webentwicklung </span>
        </h1>
        <p className={styles.subtitle} ref={subtitleRef}>
          Moderner <span className={styles.highlight}>Webdesigner</span> für
          individuelle, leistungsstarke und benutzerfreundliche Websites. Marken
          sichtbar machen, Vertrauen schaffen und nachhaltige Online-Ergebnisse
          liefern.
        </p>
        <a href="/kontakt" className={styles.ctaBtn} ref={ctaRef}>
          <span className={styles.ctaText}>Jetzt Kontakt aufnehmen</span>
          <span className={styles.ctaArrow}>&rarr;</span>
          <span className={styles.ctaHover}></span>
        </a>
      </div>
      <div className={styles.right} ref={rightRef}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero.png"
            alt="Profilbild – Webdesigner aus Deutschland"
            width={720}
            height={900}
            priority
            className={`${styles.heroImage} ${
              imageLoaded ? styles.loaded : ""
            }`}
            ref={imageRef}
            loading="eager"
            onLoadingComplete={() => setImageLoaded(true)}
          />
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageDecoration} ref={decorationRef}></div>
        </div>
      </div>
    </section>
  );
}
