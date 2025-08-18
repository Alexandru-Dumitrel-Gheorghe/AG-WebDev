// app/domain-check/SeoContent.tsx
"use client";

import Link from "next/link";
import styles from "./SeoContent.module.css";

export default function SeoContent() {
  return (
    <section className={styles.seoSection}>
      <div className={styles.container}>
        <h2 className={styles.h2}>
          Domain Verfügbarkeit prüfen – schnell, zuverlässig, deutschlandweit
        </h2>
        <p className={styles.lead}>
          Mit unserem kostenlosen Domain-Check prüfen Sie die{" "}
          <strong>Domain Verfügbarkeit</strong> in Sekunden – für <em>.de</em>,{" "}
          <em>.com</em>, <em>.io</em>, <em>.ai</em>, <em>.co</em>,<em>.net</em>{" "}
          und viele weitere Endungen. Finden Sie die passende Adresse für Ihr
          Unternehmen, Startup oder Projekt in Deutschland.
        </p>

        <h3 className={styles.h3}>Warum die richtige TLD wichtig ist</h3>
        <p>
          Für die Zielgruppe in Deutschland ist <strong>.de</strong> oft die
          erste Wahl. Internationale Ausrichtung? Dann ist <strong>.com</strong>{" "}
          eine solide Alternative. Technische Projekte nutzen häufig{" "}
          <strong>.io</strong>, KI-Produkte setzen auf <strong>.ai</strong>.
          Unser Tool zeigt Ihnen passende Optionen und alternative
          Schreibweisen.
        </p>

        <h3 className={styles.h3}>So funktioniert der Domain-Check</h3>
        <ol className={styles.ol}>
          <li>Wunschname eingeben (z.&nbsp;B. „meine-website.de”).</li>
          <li>
            Auf <strong>„Verfügbarkeit prüfen“</strong> klicken – Sofort-Check
            startet.
          </li>
          <li>
            Ist die Domain frei, können Sie sie direkt{" "}
            <strong>registrieren</strong>.
          </li>
          <li>
            Belegt? Wir zeigen <strong>ähnliche Domains</strong> und weitere
            Endungen.
          </li>
        </ol>

        <h3 className={styles.h3}>Mehr als nur Domain Verfügbarkeit</h3>
        <p>
          Auf Wunsch unterstützen wir Sie bei <strong>Webdesign</strong>,{" "}
          <strong>Webentwicklung</strong> und <strong>SEO</strong> – damit Ihre
          neue Domain von Anfang an performt.{" "}
          <Link href="/kontakt" className={styles.ctaLink}>
            Jetzt unverbindlich anfragen
          </Link>
          .
        </p>

        <div className={styles.inlineLinks}>
          <Link href="/leistungen/webentwicklung">Webentwicklung</Link>
          <span>·</span>
          <Link href="/leistungen/webdesign">Webdesign</Link>
          <span>·</span>
          <Link href="/seo">SEO-Beratung</Link>
        </div>
      </div>
    </section>
  );
}
