import styles from "./HeroWebdesignTrends2025.tsx.module.css";

export default function HeroWebdesignTrends2025() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img
          src="/images/hero-design-blog.png"
          alt="Webdesign Trends 2025 Hero Image"
          className={styles.heroImage}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.badge}>Neuer Blogbeitrag</span>
        <h1 className={styles.title}>Webdesign Trends 2025</h1>
        <p className={styles.description}>
          Entdecken Sie die wichtigsten Webdesign-Trends für 2025 – von
          minimalistischen Layouts bis zu interaktiven Elementen. Bleiben Sie
          innovativ und gestalten Sie Ihre Website zukunftssicher.
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
