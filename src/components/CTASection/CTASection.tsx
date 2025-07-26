"use client";
import styles from "./CTASection.module.css";
import Image from "next/image";

export default function WebentwicklungCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.left}>
        <div className={styles.phoneWrapper}>
          <Image
            src="/images/fraga-mockup.png"
            alt="Webentwicklung am Handy"
            width={220}
            height={410}
            className={styles.phoneImg}
            priority
          />
          <span className={styles.badge}>
            100%
            <br />
            INDIVIDUELL
          </span>
        </div>
        {/* Laptop mockup peste telefon */}
        <div className={styles.laptopImgWrapper}>
          <Image
            src="/images/Fraga-projekt.png"
            alt="Web-Projekt am Laptop"
            width={270}
            height={160}
            className={styles.laptopImg}
            priority
          />
        </div>
      </div>

      {/* Separator vertical */}
      <div className={styles.separator} aria-hidden="true" />

      <div className={styles.right}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.mainTitle}>Moderne</h1>
          <h2 className={styles.subTitle}>Webentwicklung für Ihren Erfolg</h2>
        </div>
        <p className={styles.desc}>
          Skalierbare Lösungen, perfekte Performance und höchste Sicherheit –
          <br />
          maßgeschneidert für Ihr Business.
          <br />
          Starten Sie Ihr nächstes Projekt mit uns!
        </p>
        <a className={styles.ctaBtn} href="#contact">
          Jetzt Projekt starten
        </a>
      </div>
    </section>
  );
}
