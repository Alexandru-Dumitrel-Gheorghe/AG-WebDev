"use client";
import { useRef, useEffect, useState } from "react";
import styles from "./HeroAbout.module.css";

export default function HeroAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.hero} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="/images/profil.jpg"
            alt="Alexandru AG WebDev"
            className={styles.image}
            width={390}
            height={550}
            loading="eager"
          />
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>LET ME SHARE A LITTLE</span>
          <h1 className={styles.title}>Über Mich</h1>
          <div className={styles.divider} />
          <div className={styles.name}>
            ALEXANDRU / <span className={styles.highlight}>AG WebDev</span>
          </div>
          <div className={styles.divider} />
        </div>
      </div>
    </section>
  );
}
