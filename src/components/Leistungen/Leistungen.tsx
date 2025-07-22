"use client";
import styles from "./Leistungen.module.css";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Wir gestalten moderne, responsive Websites, die nicht nur gut aussehen, sondern auch Ergebnisse liefern.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="4"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="3"
          y="9"
          width="18"
          height="4"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="3"
          y="15"
          width="18"
          height="4"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
  {
    title: "Brand Design",
    description:
      "Egal ob Markenlaunch, Auffrischung oder Skalierung – wir bringen Ihre Marke auf das nächste Level.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 19V18C4 14.6863 6.68629 12 10 12H14C17.3137 12 20 14.6863 20 18V19"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Webdesign",
    description:
      "Unsere UI/UX-Prozesse vereinen Strategie, Storytelling und Nutzerpsychologie zu perfekten digitalen Erlebnissen.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <rect
          x="7"
          y="8"
          width="10"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
  {
    title: "App Design",
    description:
      "Von Wireframes bis zum pixelperfekten Interface – wir begleiten Sie bei jedem Schritt zur perfekten App.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect
          x="7"
          y="2"
          width="10"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Leistungen() {
  return (
    <section className={`${styles.leistungenSection} leistungen-section`}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.sectionTitle}>Leistungen</h2>
          <p className={styles.sectionDesc}>
            Hochwertige Dienstleistungen für moderne Unternehmen. Von kreativen
            Markenauftritten bis zu leistungsstarken Web-Lösungen.
          </p>
        </div>
      </div>
      <div className={styles.cardsGrid}>
        {services.map((service, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <div className={styles.hoverIndicator}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
