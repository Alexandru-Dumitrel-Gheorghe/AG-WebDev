// app/domain-check/FaqSection.tsx
"use client";

import styles from "./FAQstyles.module.css";

const FAQ = [
  {
    q: "Wie prüfe ich die Domain Verfügbarkeit?",
    a: "Geben Sie Ihren gewünschten Namen ein und starten Sie den Sofort-Check. Wir prüfen gängige TLDs wie .de, .com, .io, .ai u.v.m. in Echtzeit.",
  },
  {
    q: "Welche Domain-Endung ist für Deutschland sinnvoll?",
    a: ".de ist Standard im deutschen Markt. Für internationale Zielgruppen eignet sich .com. Je nach Use-Case sind auch .io oder .ai beliebt.",
  },
  {
    q: "Was kostet eine Domain-Registrierung?",
    a: "Der Preis hängt von der Endung und dem Anbieter ab. Nach dem Check gelangen Sie zur Registrierung, wo die aktuellen Preise transparent angezeigt werden.",
  },
  {
    q: "Kann ich ähnliche Domains finden, wenn meine Wunschdomain belegt ist?",
    a: "Ja. Wir schlagen alternative Schreibweisen und Endungen vor, damit Sie schnell eine verfügbare Adresse finden.",
  },
  {
    q: "Verbessert eine Keyword-Domain mein Ranking?",
    a: "Eine sprechende, merkbare Domain kann die Klickrate erhöhen. Für SEO sind jedoch vor allem Inhalte, Technik (Core Web Vitals) und Backlinks entscheidend.",
  },
  {
    q: "Kann ich die Domain später umziehen?",
    a: "Ja. Ein Domain-Transfer zu einem anderen Anbieter ist jederzeit möglich. Achten Sie auf Auth-Code und Transfer-Fristen.",
  },
];

export default function FaqSection() {
  return (
    <section className={styles.faqSection} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <h2 id="faq-heading" className={styles.heading}>
          Häufige Fragen zur Domain Verfügbarkeit
        </h2>
        <div className={styles.faqList}>
          {FAQ.map((item, index) => (
            <details key={index} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                <span>{item.q}</span>
                <svg
                  className={styles.chevron}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <div className={styles.faqAnswer}>
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
