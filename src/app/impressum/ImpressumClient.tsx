"use client";
import styles from "./Impressum.module.css";
import { useState } from "react";
import {
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
  Link2,
  Image,
  User,
  FileText,
  AlertTriangle,
  ChevronDown,
  BookOpen,
  Globe,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ---- IMPRESSUM GERMAN SECTIONS ----
const ImpressumSections = [
  {
    icon: <FileText size={20} />,
    title: "Angaben gemäß § 5 TMG",
    content: (
      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <BookOpen size={18} />
            <h3>Unternehmensdaten</h3>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.companyName}>
              <strong>AG WebDev</strong>
            </p>
            <div className={styles.infoItem}>
              <MapPin size={16} />
              <span>Stockmeierweg 11, 82256 Fürstenfeldbruck, Deutschland</span>
            </div>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <Globe size={18} />
            <h3>Kontakt</h3>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.infoItem}>
              <Phone size={16} />
              <a href="tel:+4915772158264">+49 157 7215 8264</a>
            </div>
            <div className={styles.infoItem}>
              <Mail size={16} />
              <a href="mailto:contact@ag-webdev.de">kontakt@ag-webdev.de</a>
            </div>
            <div className={styles.infoItem}>
              <Link2 size={16} />
              <a href="https://www.ag-webdev.de" target="_blank" rel="noopener">
                www.ag-webdev.de
              </a>
            </div>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <Shield size={18} />
            <h3>Steuerdaten</h3>
          </div>
          <div className={styles.cardContent}>
            <p>
              <b>
                Kein Ausweis der Umsatzsteuer gemäß § 19 UStG
                (Kleinunternehmerregelung)
              </b>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <User size={20} />,
    title: "Vertretungsberechtigter / Inhaber",
    content: (
      <div className={styles.personCard}>
        <div className={styles.avatar}>
          <User size={24} />
        </div>
        <div className={styles.personInfo}>
          <h3>Alexandru Gheorghe</h3>
          <p>Inhaber & Geschäftsführer</p>
        </div>
      </div>
    ),
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
    content: (
      <div className={styles.legalCard}>
        <ShieldCheck size={24} className={styles.legalIcon} />
        <div>
          <p>Alexandru Gheorghe</p>
          <p className={styles.legalNote}>
            Stockmeierweg 11, 82256 Fürstenfeldbruck
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: <AlertTriangle size={20} />,
    title: "Haftung für Inhalte",
    content: (
      <div className={styles.noticeCard}>
        <div className={styles.noticeHeader}>
          <AlertTriangle size={20} />
          <h3>Rechtlicher Hinweis</h3>
        </div>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Die Nutzung der Inhalte erfolgt auf
          eigene Gefahr.
        </p>
      </div>
    ),
  },
  {
    icon: <Link2 size={20} />,
    title: "Haftung für Links",
    content: (
      <div className={styles.noticeCard}>
        <div className={styles.noticeHeader}>
          <Link2 size={20} />
          <h3>Externe Links</h3>
        </div>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>
      </div>
    ),
  },
  {
    icon: <Image size={20} />,
    title: "Bildnachweise",
    content: (
      <div className={styles.creditsCard}>
        <h3>Bildquellen & Design</h3>
        <ul>
          <li>
            Eigene Designs, individuell erstellt und angepasst (Canva Pro,
            lizenziert)
          </li>
          <li>Unsplash</li>
          <li>Pexels</li>
          <li>Shutterstock</li>
        </ul>
        <p className={styles.licenseText}>
          Alle verwendeten Bilder und Grafiken wurden entweder selbst erstellt,
          individuell angepasst oder im Rahmen einer gültigen Canva Pro Lizenz
          verwendet.
        </p>
      </div>
    ),
  },
];

export default function Impressum() {
  const [activeSection, setActiveSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <ShieldCheck size={40} />
        </div>
        <div>
          <h1 className={styles.title}>Impressum</h1>
          <p className={styles.description}>Rechtliche Angaben gemäß § 5 TMG</p>
        </div>
      </div>

      <div className={styles.content}>
        {ImpressumSections.map((section, index) => (
          <div key={index} className={styles.section}>
            <button
              className={`${styles.sectionButton} ${
                activeSection === index ? styles.active : ""
              }`}
              onClick={() => toggleSection(index)}
            >
              <div className={styles.sectionIcon}>{section.icon}</div>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <ChevronDown
                size={20}
                className={`${styles.chevron} ${
                  activeSection === index ? styles.rotated : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeSection === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.sectionContent}
                >
                  {section.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} AG WebDev. Alle Rechte vorbehalten.</p>
        <p className={styles.footerNote}>Impressum gemäß § 5 TMG.</p>
      </footer>
    </div>
  );
}
