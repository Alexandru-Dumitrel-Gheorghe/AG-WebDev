"use client";
import styles from "./Hero.module.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Helper pentru a detecta mobil
const isMobileDevice = () =>
  typeof window !== "undefined" && window.innerWidth < 800;

export default function HeroSection() {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const preheadRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  // Arată Spline doar pe desktop
  const [showSpline, setShowSpline] = useState(false);

  // Inject Spline script o singură dată (doar desktop)
  useEffect(() => {
    if (!isMobileDevice()) {
      setShowSpline(true);
      if (!document.getElementById("spline-viewer-script")) {
        const script = document.createElement("script");
        script.id = "spline-viewer-script";
        script.type = "module";
        script.src =
          "https://unpkg.com/@splinetool/viewer@1.10.35/build/spline-viewer.js";
        document.body.appendChild(script);
      }
    }
  }, []);

  // GSAP Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(
      [
        leftRef.current,
        rightRef.current,
        titleRef.current,
        preheadRef.current,
        subtitleRef.current,
        ctaRef.current,
        splineRef.current,
      ],
      { clearProps: "opacity,transform" }
    );

    const isMobile = isMobileDevice();
    const tl = gsap.timeline();
    tl.set(
      [
        preheadRef.current,
        titleRef.current,
        subtitleRef.current,
        ctaRef.current,
        splineRef.current,
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
        titleRef.current,
        { y: 0, opacity: 1, duration: 1, ease: "expo.out" },
        "-=0.5"
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
        splineRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
          y: isMobile ? 0 : 20,
        },
        "-=1"
      );

    if (!isMobile) {
      gsap.to(splineRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(splineRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(titleRef.current, {
        scale: 0.92,
        opacity: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(rightRef.current, {
        x: 100,
        opacity: 0.7,
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
      gsap.killTweensOf("*");
    };
  }, [showSpline]);

  const renderAnimatedLine = (line: string, highlight = false) => (
    <span className={highlight ? styles.highlight : undefined}>
      {line.split("").map((char, idx) => (
        <span
          key={idx}
          className={styles.titleChar}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char}
        </span>
      ))}
    </span>
  );

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.left} ref={leftRef}>
        <span className={styles.prehead} ref={preheadRef}>
          → Hey! Ich bin Alex
        </span>
        <h1 className={styles.title} ref={titleRef}>
          {renderAnimatedLine("DIGITALER ")}
          <br />
          {renderAnimatedLine("WEBDESIGNER", true)}
        </h1>
        <p className={styles.subtitle} ref={subtitleRef}>
          Ich spezialisiere mich auf moderne Webentwicklung &{" "}
          <span className={styles.highlight}>individuelles Webdesign</span> mit
          Next.js & CSS Modules, blitzschnell, nutzerorientiert & professionell.
        </p>
        <a href="#kontakt" className={styles.ctaBtn} ref={ctaRef}>
          <span className={styles.ctaText}>Jetzt Kontakt aufnehmen</span>
          <span className={styles.ctaArrow}>&rarr;</span>
          <span className={styles.ctaHover}></span>
        </a>
      </div>
      <div className={styles.right} ref={rightRef}>
        <div className={styles.videoWrapper} ref={splineRef}>
          {/* Pe mobil - imagine statică, pe desktop - Spline Viewer */}
          {showSpline ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "2rem",
                overflow: "hidden",
              }}
              dangerouslySetInnerHTML={{
                __html: `
                  <spline-viewer
                    url="https://prod.spline.design/mJSz379-hZOozSNA/scene.splinecode"
                    style="width:100%;height:100%;border:none;background:transparent;border-radius:2rem;margin-left:32px"
                  ></spline-viewer>
                `,
              }}
            />
          ) : (
            <img
              src="/images/robot-static.png"
              alt="Robot 3D"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "2rem",
                objectFit: "contain",
                background: "#0e0e11",
                marginLeft: 32,
              }}
            />
          )}
          <div className={styles.videoOverlay}></div>
          <div className={styles.imageDecoration}></div>
        </div>
      </div>
    </section>
  );
}
