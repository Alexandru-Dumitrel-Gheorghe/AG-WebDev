"use client";
import styles from "./About.module.css";

export default function AboutMe() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.left}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>
            Hey! Ich bin Alexandru,
            <br />
            ein digitaler Webentwickler
          </h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.expertiseBadge}>
          <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M7 12L10 15L17 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>3+ Jahre Erfahrung</span>
        </div>

        <p className={styles.leftText}>
          Mit Leidenschaft für <strong>moderne Webentwicklung</strong> und{" "}
          <strong>individuelles Webdesign</strong> mit:
        </p>

        <div className={styles.techStack}>
          <div className={styles.techItem}>
            <svg className={styles.techIcon} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#61DAFB" />
              <text x="7" y="17" fontSize="9" fontWeight="bold" fill="#111">
                R
              </text>
            </svg>
            <span>React</span>
          </div>
          <div className={styles.techItem}>
            <svg className={styles.techIcon} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" fill="#111" />
              <text x="4.2" y="16" fontSize="9" fontWeight="bold" fill="#fff">
                Next.js
              </text>
            </svg>
            <span>Next.js</span>
          </div>
          <div className={styles.techItem}>
            <svg className={styles.techIcon} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#2C65FF" />
              <text x="6" y="16" fontSize="9" fontWeight="bold" fill="#fff">
                CSS
              </text>
            </svg>
            <span>CSS Modules</span>
          </div>
        </div>

        <p className={styles.funFact}>
          <span className={styles.funFactIcon}>💡</span>
          Fun Fact: Ich habe meine erste Website mit 14 Jahren erstellt – sie
          war schrecklich, aber der Beginn meiner Leidenschaft!
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.statsCard}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Projekte</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Zufriedenheit</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>∞</span>
            <span className={styles.statLabel}>Kreativität</span>
          </div>
        </div>
        <p className={styles.rightText}>
          Ich entwickle <strong>blitzschnelle</strong>,{" "}
          <strong>nutzerorientierte</strong> & <strong>professionelle</strong>{" "}
          Webseiten, die nicht nur gut aussehen, sondern sich auch richtig
          anfühlen.
        </p>
        <a href="#kontakt" className={styles.ctaBtn}>
          Jetzt Projekt besprechen <span className={styles.arrow}>&rarr;</span>
        </a>
      </div>
    </section>
  );
}
