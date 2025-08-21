// app/domain-check/components/FeaturesSection.tsx
import styles from "../styles.module.css";

const FEATURES = [
  {
    title: "Blitzschnelle Prüfung",
    description: "Echtzeit-Abfrage der Domainverfügbarkeit in Sekundenschnelle",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    title: "Sichere Verbindung",
    description: "Verschlüsselte API-Anfragen für maximalen Datenschutz",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Direkte Registrierung",
    description:
      "Integration mit Namecheap für eine schnelle Domain-Registrierung",
    icon: "M20 12l-8-8-8 8 8 8 8-8z M12 4v16",
  },
];

export default function FeaturesSection() {
  return (
    <div className={styles.features}>
      {FEATURES.map((feature, index) => (
        <div key={index} className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d={feature.icon} />
            </svg>
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
