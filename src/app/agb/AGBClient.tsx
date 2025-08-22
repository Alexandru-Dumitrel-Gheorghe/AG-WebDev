"use client";

import styles from "./AGB.module.css";
import { useState } from "react";
import { Gavel, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "1. Geltungsbereich",
    content: `Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen dem Betreiber dieser Website (im Folgenden "wir", "uns") und dem Kunden (im Folgenden "Kunde" oder "Nutzer"). Sie finden Anwendung auf sämtliche Verträge, die über unsere Website abgeschlossen werden.`,
  },
  {
    title: "2. Vertragspartner",
    content: `Der Vertrag kommt zustande mit:<br /><br />
      <strong>AG WebDev</strong><br />
      Fürstenfeldbruck, Deutschland<br />
      E-Mail: kontakt@ag-webdev.de<br />
      Telefon: +49 157 7215 8264`,
  },
  {
    title: "3. Vertragsgegenstand",
    content: `Wir bieten dem Kunden Dienstleistungen in den Bereichen Webentwicklung, UI/UX-Design und IT-Services an. Die genaue Leistungsbeschreibung ergibt sich aus den individuellen Verträgen, Angeboten oder Projektvereinbarungen.`,
  },
  {
    title: "4. Vertragsabschluss",
    content: `Der Vertrag kommt durch die Bestellung des Kunden sowie unsere schriftliche Auftragsbestätigung zustande. Mit Abgabe der Bestellung erklärt der Kunde, dass er diese AGB gelesen und akzeptiert hat.`,
  },
  {
    title: "5. Preise und Zahlungsbedingungen",
    content: `Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer berechne.`,
  },
  {
    title: "6. Leistungsbeschreibung und Lieferzeiten",
    content: `Lieferzeiten, Projektmeilensteine und sonstige Leistungsfristen werden individuell vereinbart. Verzögerungen außerhalb unseres Einflussbereichs berechtigen nicht zum Vertragsrücktritt.`,
  },
  {
    title: "7. Gewährleistung und Haftung",
    content: `Wir gewährleisten die fachgerechte Erbringung unserer Leistungen. Im Falle von Mängeln hat der Kunde Anspruch auf Nacherfüllung. Schlägt diese fehl, ist unsere Haftung auf den Auftragswert begrenzt; wir haften nicht für indirekte Schäden, es sei denn, Vorsatz oder grobe Fahrlässigkeit liegt vor.`,
  },
  {
    title: "8. Urheberrecht und Nutzungsrechte",
    content: `Alle durch uns erstellten Konzepte, Designs und Softwarelösungen sind urheberrechtlich geschützt. Mit vollständiger Bezahlung erhält der Kunde ein einfaches Nutzungsrecht. Eine weitergehende Nutzung bedarf unserer schriftlichen Zustimmung.`,
  },
  {
    title: "9. Widerrufsrecht",
    content: `Gesetzlich vorgesehene Widerrufsrechte bleiben unberührt. Die Widerrufsfrist beträgt 14 Tage ab Vertragsabschluss.`,
  },
  {
    title: "10. Schlussbestimmungen",
    content: `Änderungen bedürfen der Schriftform. Sollte eine Klausel unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt deutsches Recht; Gerichtsstand ist Fürstenfeldbruck.`,
  },
];

export default function AGBClient() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundGradient}></div>

      <motion.main
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <motion.div
              className={styles.iconContainer}
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Gavel size={32} />
            </motion.div>
            <div>
              <h1 className={styles.title}>Allgemeine Geschäftsbedingungen</h1>
              <p className={styles.subtitle}>
                Gültig ab:{" "}
                {new Date().toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`${styles.section} ${
                openSection === index ? styles.active : ""
              }`}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                className={styles.sectionHeader}
                onClick={() => toggleSection(index)}
                aria-expanded={openSection === index}
              >
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <motion.div
                  animate={{ rotate: openSection === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} className={styles.chevron} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openSection === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.sectionContent}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <footer className={styles.footer}>
          <p>
            © {new Date().getFullYear()} AG WebDev. Alle Rechte vorbehalten.
          </p>
        </footer>
      </motion.main>
    </div>
  );
}
