"use client";
import React from "react";
import styles from "./DomainCTA.module.css";
import Link from "next/link";

const DomainCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ihr perfekter Domainname wartet!</h2>
          <p className={styles.subtitle}>
            Überprüfen Sie jetzt die Verfügbarkeit und sichern Sie sich Ihre
            Wunschdomain
          </p>

          <div className={styles.ctaButtons}>
            <Link href="/domain-check" className={styles.primaryButton}>
              Jetzt Domain prüfen
            </Link>
            <Link href="/domain/hilfe" className={styles.secondaryButton}>
              Wie wähle ich eine Domain?
            </Link>
          </div>

          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>✓</span>
              <span>Schnelle Verfügbarkeitsprüfung</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>✓</span>
              <span>Über 500 Domainendungen</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>✓</span>
              <span>Einfache Registrierung</span>
            </div>
          </div>
        </div>

        <div className={styles.illustration}>
          <div className={styles.domainSphere}></div>
          <div className={styles.domainCheckBadge}>
            <span>Check</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainCTA;
