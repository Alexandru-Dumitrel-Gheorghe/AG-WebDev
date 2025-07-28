"use client";

import styles from "./Datenschutz.module.css";
import { useState } from "react";
import {
  Shield,
  User,
  Eye,
  Database,
  Lock,
  Cookie,
  Share2,
  Clock,
  RefreshCcw,
  Users,
  Mail,
  Phone,
  Server,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    icon: <Eye size={20} />,
    title: "Ihre Privatsphäre",
    content: `Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir mit Ihren Daten umgehen.`,
  },
  {
    icon: <User size={20} />,
    title: "Welche Daten wir sammeln",
    content: `Wir sammeln personenbezogene Daten, die Sie uns freiwillig zur Verfügung stellen – z. B. Name, E-Mail-Adresse, Telefonnummer.`,
  },
  {
    icon: <Database size={20} />,
    title: "Wie wir Ihre Daten verwenden",
    content: `Die Daten dienen zur Kontaktaufnahme, Angebotserstellung und zur Optimierung unserer Services. Eine Weitergabe erfolgt nur, wenn gesetzlich vorgeschrieben oder von Ihnen autorisiert.`,
  },
  {
    icon: <Lock size={20} />,
    title: "Wie wir Ihre Daten schützen",
    content: `Wir nutzen SSL/TLS-Verschlüsselung, Firewalls und Zugriffskontrollen, um Ihre Daten vor unbefugtem Zugriff zu schützen.`,
  },
  {
    icon: <Users size={20} />,
    title: "Ihre Rechte",
    content: `Sie können jederzeit Auskunft über Ihre gespeicherten Daten verlangen sowie deren Berichtigung oder Löschung beantragen.`,
  },
  {
    icon: <Cookie size={20} />,
    title: "Cookies und Tracking",
    content: `Unsere Website setzt keine eigenen Tracking-Cookies ein. Drittanbieter können Cookies zur Funktionssicherung verwenden.`,
  },
  {
    icon: <Share2 size={20} />,
    title: "Weitergabe von Daten an Dritte",
    content: `Eine Weitergabe erfolgt nur zur Vertragserfüllung oder wenn wir rechtlich dazu verpflichtet sind.`,
  },
  {
    icon: <Clock size={20} />,
    title: "Speicherdauer",
    content: `Wir speichern personenbezogene Daten nur solange, wie dies für die genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.`,
  },
  {
    icon: <RefreshCcw size={20} />,
    title: "Änderungen der Datenschutzerklärung",
    content: `Wir können diese Erklärung anpassen, um rechtliche Anforderungen zu erfüllen. Die aktuelle Version finden Sie stets auf unserer Website.`,
  },
  {
    icon: <Shield size={20} />,
    title: "Datenschutz bei Drittanbietern",
    content: `Für externe Dienste gelten deren eigene Datenschutzrichtlinien, auf die wir keinen Einfluss haben.`,
  },
  {
    icon: <Server size={20} />,
    title: "Hosting",
    content: `Unsere Website wird gehostet bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.`,
  },
  {
    icon: <Mail size={20} />,
    title: "Kontakt zum Datenschutz",
    content: (
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <Mail size={18} />
          <span>contact@ag-webdev.de</span>
        </div>
        <div className={styles.contactItem}>
          <Phone size={18} />
          <span>+49 157 7215 8264</span>
        </div>
      </div>
    ),
  },
];

export default function DatenschutzClient() {
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
              <Shield size={32} />
            </motion.div>
            <div>
              <h1 className={styles.title}>Datenschutzerklärung</h1>
              <p className={styles.subtitle}>
                Stand:{" "}
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
                <div className={styles.sectionIcon}>{section.icon}</div>
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
                  >
                    {section.content}
                  </motion.div>
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
