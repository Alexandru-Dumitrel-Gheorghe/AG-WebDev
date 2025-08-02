import styles from "./WozuEineHomepageHero.module.css";

export default function WozuEineHomepageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img
          src="/images/homepage-blog.png" // Poți schimba imaginea dacă vrei!
          alt="Eigene Homepage Hero"
          className={styles.heroImage}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.badge}>Guide für Freelancer</span>
        <h1 className={styles.title}>
          Wozu eine eigene Homepage? <br />
          Ihr digitaler Erfolg beginnt hier!
        </h1>
        <p className={styles.description}>
          Eine professionelle Website ist heute der Schlüssel zu mehr
          Sichtbarkeit, Vertrauen und neuen Kunden – egal, ob Sie Freelancer
          oder Unternehmen sind. Entdecken Sie, warum Ihre eigene Homepage
          unverzichtbar ist und wie Sie online wirklich überzeugen!
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            Jetzt Vorteile entdecken
          </button>
          <button className={styles.secondaryBtn}>Mehr erfahren</button>
        </div>
        <div className={styles.author}>
          <span className={styles.arrow}>→</span> AG WebDev
        </div>
      </div>
    </section>
  );
}
