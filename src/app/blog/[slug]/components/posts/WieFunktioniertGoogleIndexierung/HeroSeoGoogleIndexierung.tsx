import styles from "./HeroSeoGoogleIndexierung.module.css";

export default function HeroSeoGoogleIndexierung() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img
          src="/images/google-blog.png"
          alt="Google Indexierung Blog Hero Image"
          className={styles.heroImage}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.badge}>Neuer Blogbeitrag</span>
        <h1 className={styles.title}>Wie funktioniert Google Indexierung?</h1>
        <p className={styles.description}>
          Erfahren Sie in diesem Leitfaden, wie Google Ihre Website indexiert,
          welche Faktoren den Suchmaschinen-Rankings zugrunde liegen und wie Sie
          Ihre Sichtbarkeit im Netz effektiv steigern können.
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
