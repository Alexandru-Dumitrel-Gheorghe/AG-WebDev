"use client";
import Link from "next/link";
import styles from "./BlogCTA.module.css";
import { BookOpen, ArrowRight } from "lucide-react";

export default function BlogPreviewSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.heroBlog}>
        {/* Video Background */}
        <video
          className={styles.heroVideoBg}
          src="/images/ctablog.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Enhanced overlay for better text contrast */}
        <div className={styles.heroOverlay} />

        <span className={styles.heroBadge}>Premium Content</span>
        <span className={styles.heroGlowDisc} aria-hidden="true" />

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroIconWrap}>
            <span className={styles.heroIconCircle}>
              <BookOpen className={styles.heroIcon} aria-hidden="true" />
            </span>
          </div>

          <div className={styles.heroContent}>
            <h2 className={styles.title}>
              <span className={styles.titleGradient}>Experten-Blog:</span>
              <span className={styles.titleWhite}>
                Digital Insights für dein Business
              </span>
            </h2>

            <div className={styles.heroSubtitle}>
              Entdecke praxisnahe Artikel, Tipps &amp; Strategien zu{" "}
              <span className={styles.heroAccent}>Webdesign</span>,{" "}
              <span className={styles.heroAccent}>Entwicklung</span>,{" "}
              <span className={styles.heroAccent}>SEO</span> und{" "}
              <span className={styles.heroAccent}>Support</span> direkt von
              unseren Experten.
              <br className={styles.desktopOnly} />
              Alles, was du für deinen Online-Erfolg brauchst – jetzt im Blog!
            </div>

            <Link href="/blog" className={styles.heroButton}>
              Zum Blog
              <ArrowRight className={styles.heroButtonIcon} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
