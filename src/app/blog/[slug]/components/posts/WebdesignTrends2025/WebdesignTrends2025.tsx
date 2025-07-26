"use client";
import styles from "./WebdesignTrends2025.module.css";
import HeroWebdesignTrends2025 from "./HeroWebdesignTrends2025";

export default function WebdesignTrends2025() {
  return (
    <>
      {/* Hero component */}
      <HeroWebdesignTrends2025 />

      {/* Blog content */}
      <div className={styles.blogContainer}>
        <div className={styles.introBox}>
          <h1 className={styles.mainTitle}>
            Webdesign Trends 2025: Die Zukunft gestalten
          </h1>
          <p className={styles.introText}>
            2025 steht im Zeichen einer neuen Ära des Webdesigns - wo Ästhetik
            auf Nutzerzentrierung trifft und immersive Erlebnisse zum Standard
            werden. Entdecken Sie die Trends, die nicht nur beeindrucken,
            sondern nachweislich Conversion-Raten steigern.
          </p>
        </div>

        <section className={styles.trendSection}>
          <h2 className={styles.sectionTitle}>
            Die 7 bahnbrechenden Webdesign-Trends 2025
          </h2>
          <div className={styles.trendGrid}>
            <div className={styles.trendCard}>
              <span className={styles.trendNumber}>1</span>
              <h3 className={styles.trendName}>Hyper-Personalisierung</h3>
              <p className={styles.trendDescription}>
                KI-gesteuerte individuelle UI-Anpassungen in Echtzeit basierend
                auf Nutzerverhalten
              </p>
            </div>
            <div className={styles.trendCard}>
              <span className={styles.trendNumber}>2</span>
              <h3 className={styles.trendName}>Neuro-Design</h3>
              <p className={styles.trendDescription}>
                Wissenschaftlich fundierte Designs, die unbewusste
                Nutzerbedürfnisse ansprechen
              </p>
            </div>
            <div className={styles.trendCard}>
              <span className={styles.trendNumber}>3</span>
              <h3 className={styles.trendName}>Zero-UI Interfaces</h3>
              <p className={styles.trendDescription}>
                Sprachsteuerung, Gestenerkennung und AR-Integration ersetzen
                traditionelle Navigation
              </p>
            </div>
            <div className={styles.trendCard}>
              <span className={styles.trendNumber}>4</span>
              <h3 className={styles.trendName}>Dynamische 3D-Welten</h3>
              <p className={styles.trendDescription}>
                WebGL und WebGPU ermöglichen konsolenähnliche Erlebnisse direkt
                im Browser
              </p>
            </div>
            <div className={styles.trendCard}>
              <span className={styles.trendNumber}>5</span>
              <h3 className={styles.trendName}>Biophile Designs</h3>
              <p className={styles.trendDescription}>
                Natürliche Texturen, organische Formen und beruhigende
                Farbpaletten dominieren
              </p>
            </div>
            <div className={styles.trendCard}>
              <span className={styles.trendNumber}>6</span>
              <h3 className={styles.trendName}>Micro-Interactions 2.0</h3>
              <p className={styles.trendDescription}>
                Haptisches Feedback und kontextsensitive Animationen führen
                Nutzer intuitiv
              </p>
            </div>
            <div className={styles.trendCard}>
              <span className={styles.trendNumber}>7</span>
              <h3 className={styles.trendName}>Sustainable Webdesign</h3>
              <p className={styles.trendDescription}>
                CO2-optimierte Websites mit reduziertem Datenverbrauch werden
                zum Standard
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Farbschemata: Die Psychologie hinter den Trendfarben
          </h2>
          <div className={styles.colorTrends}>
            <div className={styles.colorPalette}>
              <div
                className={styles.colorSwatch}
                style={{ backgroundColor: "#E8F5E9" }}
              >
                <h4 className={styles.colorName}>Digital Mint</h4>
                <p className={styles.colorDescription}>
                  Fördert Konzentration und wirkt beruhigend
                </p>
              </div>
              <div
                className={styles.colorSwatch}
                style={{ backgroundColor: "#F5F0E6" }}
              >
                <h4 className={styles.colorName}>Warm Sand</h4>
                <p className={styles.colorDescription}>
                  Vermittelt Natürlichkeit und Vertrauen
                </p>
              </div>
              <div
                className={styles.colorSwatch}
                style={{ backgroundColor: "#E6F3F5" }}
              >
                <h4 className={styles.colorName}>Polar Ice</h4>
                <p className={styles.colorDescription}>
                  Assoziiert Sauberkeit und Professionalität
                </p>
              </div>
              <div
                className={styles.colorSwatch}
                style={{ backgroundColor: "#FFECF1" }}
              >
                <h4 className={styles.colorName}>Soft Coral</h4>
                <p className={styles.colorDescription}>
                  Erzeugt positive Emotionen und Aufmerksamkeit
                </p>
              </div>
            </div>
            <p className={styles.colorCaption}>
              Die Trendfarben 2025 kombinieren beruhigende Grundtöne mit
              gezielten Akzenten für wichtige CTAs
            </p>
          </div>
        </section>

        <div className={styles.caseStudy}>
          <h3 className={styles.caseStudyTitle}>
            📊 Fallstudie: Conversion-Steigerung durch Dark Mode
          </h3>
          <p className={styles.caseStudyText}>
            Für einen E-Commerce-Kunden testeten wir verschiedene
            Design-Varianten:
          </p>
          <div className={styles.resultsTable}>
            <div className={styles.tableRow}>
              <span className={styles.tableLabel}>Standard-Design</span>
              <span className={styles.tableValue}>2,1% Conversion</span>
            </div>
            <div className={styles.tableRow}>
              <span className={styles.tableLabel}>Dark Mode (optional)</span>
              <span className={styles.tableValue}>2,8% Conversion (+33%)</span>
            </div>
            <div className={styles.tableRow}>
              <span className={styles.tableLabel}>
                Adaptives Design (KI-basiert)
              </span>
              <span className={styles.tableValue}>3,4% Conversion (+62%)</span>
            </div>
          </div>
          <p className={styles.caseStudyConclusion}>
            <strong>Erkenntnis:</strong> Personalisierte UI-Optionen führen zu
            signifikant besseren Ergebnissen!
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Typografie-Revolution: Mehr als nur schöne Schrift
          </h2>
          <div className={styles.typographyTrends}>
            <div className={styles.typoCard}>
              <h3 className={styles.typoTitle}>Variable Fonts</h3>
              <p className={styles.typoDescription}>
                Einzelne Schriftdateien die sich dynamisch anpassen (Gewicht,
                Breite, etc.)
              </p>
            </div>
            <div className={styles.typoCard}>
              <h3 className={styles.typoTitle}>Kinetic Typography</h3>
              <p className={styles.typoDescription}>
                Bewegte Texte die Aufmerksamkeit lenken und Emotionen wecken
              </p>
            </div>
            <div className={styles.typoCard}>
              <h3 className={styles.typoTitle}>3D-Texturen</h3>
              <p className={styles.typoDescription}>
                Tiefenwirkung durch subtile Schatten und Lichteffekte
              </p>
            </div>
          </div>
        </section>

        <div className={styles.proTip}>
          <h3 className={styles.proTipTitle}>
            💡 Experten-Tipp: Balance finden
          </h3>
          <p className={styles.proTipText}>
            "Die größte Herausforderung 2025 ist die Balance zwischen visueller
            Innovation und Usability. Ein atemberaubendes Design nützt nichts,
            wenn Nutzer ihre Ziele nicht erreichen können. Testen Sie immer mit
            echten Nutzern!"
            <br />
            <em className={styles.proTipAuthor}>
              - Sarah Meier, Creative Director bei Pixelkraft
            </em>
          </p>
        </div>

        <div className={styles.conclusion}>
          <h3 className={styles.conclusionTitle}>
            🔮 Zukunftsvision: Wohin entwickelt sich Webdesign?
          </h3>
          <p className={styles.conclusionText}>
            Die Grenzen zwischen Web und App verschwimmen immer mehr. 2025
            werden wir sehen:
          </p>
          <ul className={styles.futureList}>
            <li>KI-generierte individuelle Designs in Echtzeit</li>
            <li>Volle AR/VR-Integration ohne Plugins</li>
            <li>Haptisches Feedback durch fortschrittliche Browser-APIs</li>
            <li>Voice-First Interfaces als Standard</li>
          </ul>
          <p className={styles.finalThought}>
            <strong>Unsere Empfehlung:</strong> Bleiben Sie flexibel und setzen
            Sie auf modulare Designs, die sich an zukünftige Technologien
            anpassen lassen.
          </p>
        </div>
      </div>
    </>
  );
}
