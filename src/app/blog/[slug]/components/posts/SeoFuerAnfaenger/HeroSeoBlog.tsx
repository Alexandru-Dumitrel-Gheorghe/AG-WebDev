import styles from "./HeroSeoBlog.module.css";

export default function HeroSeoFuerAnfaenger() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img
          src="/images/blog-hero.png"
          alt="Blog hero image"
          className={styles.heroImage}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.badge}>Neuer Blogbeitrag</span>
        <h1 className={styles.title}>Digitale Strategien & Insights</h1>
        <p className={styles.description}>
          Entdecken Sie die neuesten Insights und Strategien rund um Webdesign,
          SEO und digitales Marketing. Bleiben Sie auf dem Laufenden und
          verbessern Sie Ihre Online-Präsenz mit wertvollen Tipps und
          Praxisbeispielen.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Jetzt lesen</button>
          <button className={styles.secondaryBtn}>Alle Artikel</button>
        </div>
        <div className={styles.author}>
          <span className={styles.arrow}>→</span> AG WebDev
        </div>
      </div>
    </section>
  );
}
