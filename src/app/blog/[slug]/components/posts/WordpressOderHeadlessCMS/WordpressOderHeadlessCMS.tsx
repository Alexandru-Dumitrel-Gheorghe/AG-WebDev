"use client";
import styles from "./WordpressOderHeadlessCMS.module.css";
import WordpressOderHeadlessCMSHero from "./WordpressOderHeadlessCMSHero";

export default function WordpressOderHeadlessCMS() {
  return (
    <>
      {/* Hero component */}
      <WordpressOderHeadlessCMSHero />

      {/* Restul conținutului blogului */}
      <div className={styles.blogContainer}>
        <div className={styles.introBox}>
          <h2 className={styles.mainTitle}>
            WordPress vs Headless CMS: Der Strategische Vergleich
          </h2>
          <p className={styles.introText}>
            Die Wahl des richtigen CMS ist eine strategische Entscheidung mit
            langfristigen Auswirkungen. In diesem detaillierten Vergleich
            analysieren wir WordPress und Headless CMS für verschiedene
            Anwendungsfälle - mit klaren Empfehlungen.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            WordPress im Detail: Wann es die beste Wahl ist
          </h2>
          <div className={styles.cmsUseCases}>
            <div className={styles.useCaseCard}>
              <div className={styles.cardIcon}>💼</div>
              <h3 className={styles.cardTitle}>Ideale Einsatzgebiete</h3>
              <ul className={styles.cardList}>
                <li>Kleine bis mittlere Unternehmenswebsites</li>
                <li>Blogs und Content-Portale</li>
                <li>WooCommerce Shops (bis 500 Produkte)</li>
                <li>Projekte mit begrenztem Budget</li>
              </ul>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.cardIcon}>🏆</div>
              <h3 className={styles.cardTitle}>Stärken</h3>
              <ul className={styles.cardList}>
                <li>Riesige Community und Plugin-Ökosystem</li>
                <li>Einfache Redakteursbedienung</li>
                <li>Schnelle Implementierung</li>
                <li>Gute SEO-Basis</li>
              </ul>
            </div>
            <div className={styles.useCaseCard}>
              <div className={styles.cardIcon}>⚠️</div>
              <h3 className={styles.cardTitle}>Grenzen</h3>
              <ul className={styles.cardList}>
                <li>Technische Schulden durch Plugins</li>
                <li>Sicherheitsanfälligkeiten</li>
                <li>Performance-Probleme bei komplexen Sites</li>
                <li>Begrenzte Multichannel-Fähigkeiten</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Headless CMS: Die Enterprise-Lösung
          </h2>
          <div className={styles.headlessDetails}>
            <div className={styles.techStack}>
              <h3 className={styles.subsectionTitle}>
                Beliebte Headless CMS Optionen
              </h3>
              <div className={styles.techGrid}>
                <div className={styles.techColumn}>
                  <h4 className={styles.techHeading}>Open Source</h4>
                  <ul className={styles.techList}>
                    <li>Strapi</li>
                    <li>Directus</li>
                    <li>Payload CMS</li>
                  </ul>
                </div>
                <div className={styles.techColumn}>
                  <h4 className={styles.techHeading}>Kommerziell</h4>
                  <ul className={styles.techList}>
                    <li>Contentful</li>
                    <li>Sanity</li>
                    <li>Storyblok</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.architecture}>
              <h3 className={styles.subsectionTitle}>
                Typische Headless-Architektur
              </h3>
              <div className={styles.archDiagram}>
                <div className={styles.archStep}>CMS Backend</div>
                <div className={styles.archArrow}>↓</div>
                <div className={styles.archStep}>API Layer</div>
                <div className={styles.archArrow}>↓</div>
                <div className={styles.archStep}>
                  Frontend (React, Vue etc.)
                </div>
                <div className={styles.archArrow}>↓</div>
                <div className={styles.archStep}>
                  Mobile Apps, IoT, Digital Signage
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.caseStudy}>
          <h3 className={styles.caseStudyTitle}>
            📈 Fallstudie: Migration von WordPress zu Headless
          </h3>
          <p className={styles.caseStudyText}>
            Ein Medienunterstand mit 200.000 monatlichen Besuchern migrierte zu
            einem Headless-Setup:
          </p>
          <ul className={styles.caseStudyList}>
            <li>
              Ladezeit reduziert von <strong>4,2s auf 1,1s</strong>
            </li>
            <li>
              Serverkosten gesenkt um <strong>60%</strong>
            </li>
            <li>
              Developer Productivity um <strong>40%</strong> gesteigert
            </li>
            <li>
              Conversion-Rate erhöht von <strong>2,1% auf 3,8%</strong>
            </li>
          </ul>
          <p className={styles.caseStudyResult}>
            <strong>ROI:</strong> Die Investition amortisierte sich nach{" "}
            <strong>14 Monaten</strong>.
          </p>
        </div>

        <div className={styles.decisionGuide}>
          <h3 className={styles.decisionTitle}>
            🤔 Entscheidungshilfe: Was passt zu Ihnen?
          </h3>
          <div className={styles.decisionGrid}>
            <div className={styles.decisionOption}>
              <h4 className={styles.optionTitle}>
                Wählen Sie WordPress wenn...
              </h4>
              <ul className={styles.optionList}>
                <li>Budget unter €10.000</li>
                <li>Schnelles Setup benötigt</li>
                <li>Redakteure technisch nicht versiert</li>
                <li>Standard-Funktionen ausreichen</li>
              </ul>
            </div>
            <div className={styles.decisionOption}>
              <h4 className={styles.optionTitle}>
                Wählen Sie Headless wenn...
              </h4>
              <ul className={styles.optionList}>
                <li>Custom UX/UI essenziell ist</li>
                <li>Multichannel-Strategie verfolgt wird</li>
                <li>Enterprise-Anforderungen bestehen</li>
                <li>Langfristige Skalierbarkeit benötigt wird</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.conclusion}>
          <h3 className={styles.conclusionTitle}>
            🔮 Die Zukunft: Hybrid-Ansätze
          </h3>
          <p className={styles.conclusionText}>
            Die Grenzen verschwimmen - neue Lösungen wie WordPress Headless oder
            "Decoupled Drupal" kombinieren die Vorteile beider Welten. Für viele
            Projekte ist ein schrittweiser Übergang sinnvoll:
          </p>
          <ol className={styles.migrationSteps}>
            <li>Start mit WordPress</li>
            <li>Kritische Teile als Headless-Microservices</li>
            <li>Vollständige Migration bei Bedarf</li>
          </ol>
          <p className={styles.finalThought}>
            <strong>Unser Rat:</strong> Treffen Sie Ihre Entscheidung nicht nur
            nach aktuellen Bedürfnissen, sondern auch nach der geplanten
            Entwicklung in den nächsten 3-5 Jahren.
          </p>
        </div>
      </div>
    </>
  );
}
