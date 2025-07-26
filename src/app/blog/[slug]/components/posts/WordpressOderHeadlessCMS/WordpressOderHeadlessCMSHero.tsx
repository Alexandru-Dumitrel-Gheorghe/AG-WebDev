import styles from "./WordpressOderHeadlessCMSHero.module.css";

export default function WordpressOderHeadlessCMSHero() {
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
        <h1 className={styles.title}>
          WordPress vs Headless CMS: Der Strategische Vergleich
        </h1>
        <p className={styles.description}>
          Entdecken Sie die Vor- und Nachteile von WordPress und Headless CMS.
          Erfahren Sie, welche Lösung für Ihr nächstes Projekt am besten
          geeignet ist und wie Sie die richtige Entscheidung treffen.
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
