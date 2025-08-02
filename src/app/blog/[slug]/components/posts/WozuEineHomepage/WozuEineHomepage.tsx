"use client";
import styles from "./WozuEineHomepage.module.css";
import WozuEineHomepageHero from "./WozuEineHomepageHero";

export default function WozuEineHomepage() {
  return (
    <>
      {/* HERO mare pe toată lățimea paginii */}
      <WozuEineHomepageHero />

      {/* Blog-ul/articolul în container limitat */}
      <div className={styles.blogContainer}>
        {/* Titlu și Intro */}
        <div className={styles.introBox}>
          <h2 className={styles.mainTitle}>Wozu eine eigene Homepage?</h2>
          <p className={styles.introText}>
            Im digitalen Zeitalter ist eine professionelle Homepage für
            Freelancer unverzichtbar. Sie ist nicht nur Ihre Visitenkarte im
            Internet, sondern auch das wichtigste Werkzeug, um neue Kunden zu
            gewinnen und Vertrauen zu schaffen.
          </p>
          <p className={styles.introText}>
            Die meisten Menschen suchen heute zuerst online nach
            Dienstleistungen – und Ihre Website ist der erste Eindruck, den
            potenzielle Kunden von Ihnen bekommen. Besonders für Freiberufler
            ist eine individuelle und moderne Homepage der Schlüssel zu mehr
            Sichtbarkeit und Seriosität.
          </p>
        </div>

        {/* Vorteile */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Ihre Vorteile mit einer eigenen Website:
          </h2>
          <ul className={styles.statList}>
            <li>24/7 erreichbar für potenzielle Kunden</li>
            <li>Aufbau von Vertrauen &amp; Professionalität</li>
            <li>Präsentation Ihres Portfolios und Angebots</li>
            <li>
              Optimale Auffindbarkeit durch SEO (Suchmaschinenoptimierung)
            </li>
            <li>Stärkung Ihrer Marke im Wettbewerb</li>
          </ul>
          <p className={styles.sectionDesc}>
            Die Erstellung einer Website ist heute dank moderner Tools wie
            WordPress, Wix oder individuellen Lösungen von{" "}
            <a href="https://www.ag-webdev.de" target="_blank" rel="noopener">
              AG WebDev
            </a>{" "}
            deutlich einfacher geworden. Dennoch kommt es darauf an, die Seite
            klar zu strukturieren, mobil zu optimieren und mit den richtigen
            Inhalten zu füllen.
          </p>
        </section>

        {/* Die 7 wichtigsten Schritte */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Die 7 wichtigsten Schritte für eine erfolgreiche Freelancer-Website:
          </h2>
          <ol className={styles.actionPlan}>
            <li className={styles.actionItem}>
              <b>Zielgruppe analysieren:</b> Wer sind Ihre Wunschkunden?
            </li>
            <li className={styles.actionItem}>
              <b>Design & Struktur:</b> Klar, modern und auf Ihre Zielgruppe
              zugeschnitten.
            </li>
            <li className={styles.actionItem}>
              <b>Portfolio präsentieren:</b> Zeigen Sie Ihre besten Projekte und
              Referenzen.
            </li>
            <li className={styles.actionItem}>
              <b>Kontaktmöglichkeiten:</b> Einfach & direkt erreichbar
              (Formular, E-Mail, Telefon).
            </li>
            <li className={styles.actionItem}>
              <b>SEO & Sichtbarkeit:</b> Relevante Keywords, Backlinks und
              schnelle Ladezeiten.
            </li>
            <li className={styles.actionItem}>
              <b>Mobile Optimierung:</b> Ihre Seite muss auf allen Geräten
              perfekt funktionieren.
            </li>
            <li className={styles.actionItem}>
              <b>Impressum & Rechtliches:</b> Rechtssicher und vertrauenswürdig
              auftreten.
            </li>
          </ol>
        </section>

        {/* Extra-Tipps */}
        <div className={styles.proTip}>
          <h3 className={styles.proTipTitle}>✨ Extra-Tipps von AG WebDev:</h3>
          <ul className={styles.caseStudyList}>
            <li>
              Nutzen Sie einen prägnanten Meta-Title und eine aussagekräftige
              Meta-Description.
            </li>
            <li>
              Fesseln Sie Besucher direkt mit einer starken Headline oder einem
              spannenden Bild.
            </li>
            <li>
              Halten Sie die Ladezeit Ihrer Website so gering wie möglich – das
              wirkt sich auch auf Ihr Google-Ranking aus!
            </li>
          </ul>
        </div>

        {/* Fazit */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fazit</h2>
          <p className={styles.sectionDesc}>
            Die Technik ist heute kein Hindernis mehr. Entscheidend sind
            Struktur, Design und der richtige Content! Bei Fragen oder für
            individuelle Unterstützung kontaktieren Sie uns gerne direkt auf{" "}
            <a href="https://www.ag-webdev.de" target="_blank" rel="noopener">
              ag-webdev.de
            </a>
            .
          </p>
          <p className={styles.sectionDesc}>
            <b>Stichworte:</b> Homepage Freelancer, Website erstellen, AG
            WebDev, Webdesign Bayern, SEO Freelancer, professionelle Website,
            Sichtbarkeit, Portfolio online
          </p>
        </section>
      </div>
    </>
  );
}
