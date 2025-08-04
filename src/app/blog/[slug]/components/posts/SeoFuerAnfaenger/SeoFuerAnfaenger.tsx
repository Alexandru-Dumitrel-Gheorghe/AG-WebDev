"use client";
import styles from "./SeoFuerAnfaenger.module.css";
import HeroSeoBlog from "./HeroSeoBlog";

export default function SeoFuerAnfaenger() {
  return (
    <>
      {/* Hero separat, fără restricții de lățime */}
      <HeroSeoBlog />

      {/* Conținut blog cu container limitat */}
      <div className={styles.blogContainer}>
        <div className={styles.introBox}>
          <h2 className={styles.mainTitle}>
            SEO für Anfänger: Der Komplette Leitfaden
          </h2>
          <p className={styles.introText}>
            SEO ist kein Hexenwerk, sondern eine erlernbare Fähigkeit. Dieser
            umfassende Guide führt Sie Schritt für Schritt durch alle Aspekte
            der Suchmaschinenoptimierung - von den absoluten Basics bis zu
            fortgeschrittenen Techniken.
          </p>
        </div>

        <div className={styles.statBox}>
          <h3 className={styles.statTitle}>
            📈 Warum SEO? Die Zahlen sprechen für sich
          </h3>
          <ul className={styles.statList}>
            <li>
              <strong>93%</strong> aller Online-Erfahrungen beginnen mit einer
              Suchmaschine
            </li>
            <li>
              Die erste Google Position erhält <strong>31,7%</strong> aller
              Klicks
            </li>
            <li>
              SEO generiert <strong>1000% mehr Traffic</strong> als Social Media
            </li>
          </ul>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Phase 1: Die technische Grundlage schaffen
          </h2>
          <div className={styles.seoPhase}>
            <h3 className={styles.phaseSubtitle}>
              🚀 Technisches SEO-Checkliste
            </h3>
            <div className={styles.checklistGrid}>
              <div className={styles.checklistColumn}>
                <h4 className={styles.checklistHeading}>Ladegeschwindigkeit</h4>
                <ul className={styles.checklistItems}>
                  <li>Bilder optimieren (WebP Format)</li>
                  <li>Lazy Loading implementieren</li>
                  <li>CSS/JS minifizieren</li>
                </ul>
              </div>
              <div className={styles.checklistColumn}>
                <h4 className={styles.checklistHeading}>Mobile Optimierung</h4>
                <ul className={styles.checklistItems}>
                  <li>Responsive Design testen</li>
                  <li>Viewport-Einstellungen prüfen</li>
                  <li>Touch-Ziele (min. 48px)</li>
                </ul>
              </div>
              <div className={styles.checklistColumn}>
                <h4 className={styles.checklistHeading}>Sicherheit</h4>
                <ul className={styles.checklistItems}>
                  <li>HTTPS implementieren</li>
                  <li>Sicherheitsheader setzen</li>
                  <li>Regelmäßige Updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Phase 2: Keyword-Strategie entwickeln
          </h2>
          <div className={styles.keywordStrategy}>
            <div className={styles.strategyCard}>
              <span className={styles.strategyNumber}>1</span>
              <h3 className={styles.strategyTitle}>Keyword-Recherche</h3>
              <p className={styles.strategyDetail}>
                Tools: Google Keyword Planner, SEMrush, Ahrefs
              </p>
              <p className={styles.strategyDetail}>
                Fokus auf: Suchvolumen, Keyword-Schwierigkeit, Intent
              </p>
            </div>
            <div className={styles.strategyCard}>
              <span className={styles.strategyNumber}>2</span>
              <h3 className={styles.strategyTitle}>Clusterbildung</h3>
              <p className={styles.strategyDetail}>
                Thematische Gruppierung verwandter Keywords
              </p>
              <p className={styles.strategyDetail}>
                Pillar-Content und Unterstützungsseiten erstellen
              </p>
            </div>
            <div className={styles.strategyCard}>
              <span className={styles.strategyNumber}>3</span>
              <h3 className={styles.strategyTitle}>Intent-Mapping</h3>
              <p className={styles.strategyDetail}>Informational</p>
              <p className={styles.strategyDetail}>Commercial</p>
              <p className={styles.strategyDetail}>Transactional</p>
            </div>
          </div>
        </section>

        <div className={styles.caseStudy}>
          <h3 className={styles.caseStudyTitle}>
            📊 Fallstudie: Von 0 auf 10.000 Besucher in 3 Monaten
          </h3>
          <p className={styles.caseStudyText}>
            Für einen Nischenblog in der Fitnessbranche implementierten wir:
          </p>
          <ul className={styles.caseStudyList}>
            <li>Technisches SEO-Audit mit 32 umgesetzten Optimierungen</li>
            <li>Content-Strategie mit 15 thematischen Clustern</li>
            <li>
              Gezielter Linkaufbau mit 35 qualitativ hochwertigen Backlinks
            </li>
          </ul>
          <p className={styles.caseStudyResult}>
            <strong>Ergebnis:</strong> Organischer Traffic stieg von 87 auf{" "}
            <strong>10.432 Besucher/Monat</strong>!
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Phase 3: Content-Exzellenz</h2>
          <div className={styles.contentExcellence}>
            <div className={styles.excellenceCard}>
              <div className={styles.excellenceIcon}>✓</div>
              <h3 className={styles.excellenceTitle}>Tiefe & Umfang</h3>
              <p className={styles.excellenceText}>
                Mindestens 1.500 Wörter für Hauptthemen
              </p>
            </div>
            <div className={styles.excellenceCard}>
              <div className={styles.excellenceIcon}>✓</div>
              <h3 className={styles.excellenceTitle}>Einzigartigkeit</h3>
              <p className={styles.excellenceText}>
                Kein Duplicate Content, eigene Perspektive
              </p>
            </div>
            <div className={styles.excellenceCard}>
              <div className={styles.excellenceIcon}>✓</div>
              <h3 className={styles.excellenceTitle}>Multimedia</h3>
              <p className={styles.excellenceText}>
                Videos, Infografiken, interaktive Elemente
              </p>
            </div>
            <div className={styles.excellenceCard}>
              <div className={styles.excellenceIcon}>✓</div>
              <h3 className={styles.excellenceTitle}>Nutzerfreundlichkeit</h3>
              <p className={styles.excellenceText}>
                Klare Struktur, lesbare Schrift, logische Hierarchie
              </p>
            </div>
          </div>
        </section>

        <div className={styles.proTip}>
          <h3 className={styles.proTipTitle}>
            ⚡ Profi-Tipp: Die 10/10/10-Regel
          </h3>
          <p className={styles.proTipText}>
            Bevor Sie Content veröffentlichen, fragen Sie sich:
            <br />
            <strong>10% besser</strong> als die Top-Ergebnisse?
            <br />
            <strong>10 einzigartige</strong> Erkenntnisse/Beispiele?
            <br />
            <strong>10 verschiedene</strong> Medienformate integriert?
          </p>
        </div>

        <div className={styles.conclusion}>
          <h3 className={styles.conclusionTitle}>
            🏆 Ihr 30-Tage SEO-Aktionsplan
          </h3>
          <ol className={styles.actionPlan}>
            <li className={styles.actionItem}>
              <strong>Woche 1:</strong> Technisches Setup & Keyword-Recherche
            </li>
            <li className={styles.actionItem}>
              <strong>Woche 2:</strong> Content-Erstellung & Onpage-Optimierung
            </li>
            <li className={styles.actionItem}>
              <strong>Woche 3:</strong> Linkaufbau & lokale SEO
            </li>
            <li className={styles.actionItem}>
              <strong>Woche 4:</strong> Analyse & Feinjustierung
            </li>
          </ol>
          <p className={styles.finalThought}>
            <strong>Wichtig:</strong> SEO ist ein Marathon, kein Sprint. Bleiben
            Sie konsequent und passen Sie Ihre Strategie regelmäßig an
            Algorithmus-Updates an.
          </p>
        </div>
      </div>
    </>
  );
}
