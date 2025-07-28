"use client";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import styles from "./ProfessionalTimeline.module.css";
import { Briefcase, GraduationCap, Code, Rocket } from "lucide-react";

const journeyData = [
  {
    year: "2020 – 2021",
    title: "Front-End Web Entwicklung",
    company: "IT School",
    description:
      "Erster intensiver Kontakt mit moderner Webentwicklung. Solide Grundlagen in React, JavaScript, HTML, CSS, Git und Bootstrap erworben. Eigene Projekte gebaut und die Basis für den weiteren Weg gelegt.",
    tags: ["React", "HTML", "CSS", "JavaScript", "Git", "Bootstrap"],
    icon: <Code size={24} />,
    highlights: [
      "Abschluss Front-End Web Entwicklung (IT School)",
      "Erste komplette Projekte in React umgesetzt",
      "Moderne Developer-Workflows mit Git kennengelernt",
    ],
  },
  {
    year: "2021 – 2022",
    title: "UI/UX Design",
    company: "IT School",
    description:
      "Vertiefung im Bereich User Interface & Experience Design mit Figma und Miro. Vom Wireframe bis zum Prototyp, kreative Lösungen für digitale Produkte entwickelt.",
    tags: ["UI/UX", "Figma", "Miro", "Design Thinking"],
    icon: <GraduationCap size={24} />,
    highlights: [
      "UI/UX Design Zertifikat (IT School)",
      "Interaktive Prototypen mit Figma erstellt",
      "Praxisprojekte & Zusammenarbeit im Team",
    ],
  },
  {
    year: "2023 – 2024",
    title: "Selbststudium & Skill-Upgrade",
    company: "Selbststudium",
    description:
      "Eigenständiges Lernen und Vertiefung in Full Stack Entwicklung. Fokus auf Node.js, Next.js, TypeScript, MongoDB und DevOps-Grundlagen. Cloud, API-Integrationen und Automatisierung.",
    tags: [
      "Node.js",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "API",
      "Docker",
      "Linux",
      "AI Integration",
    ],
    icon: <Rocket size={24} />,
    highlights: [
      "Erste Full Stack Projekte mit Next.js & MongoDB realisiert",
      "Deployments auf Linux-Server und in der Cloud",
      "Automatisierungen & OpenAI API Integration",
    ],
  },
  {
    year: "2024 – Jetzt",
    title: "Freiberuflicher Full Stack Entwickler",
    company: "AG WebDev",
    description:
      "Als Freelancer Entwicklung von maßgeschneiderten Webseiten und komplexen Systemen für B2B-Kunden. Komplettservice von Design über Frontend & Backend bis SEO, Wartung und digitales Marketing.",
    tags: [
      "Full Stack",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "SEO",
      "Shopify",
      "Kundenprojekte",
      "Freelancing",
    ],
    icon: <Briefcase size={24} />,
    highlights: [
      "Gründung von AG WebDev als selbstständiges Business",
      "Erfolgreiche Projekte für Kunden in Deutschland & Schweiz",
      "Komplette Kundenbetreuung & Beratung",
      "Implementierung moderner SEO-Strategien",
    ],
  },
];

export default function ProfessionalJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Adăugăm refs pentru fiecare item!
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  // scroll smooth când se schimbă activeIndex
  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <section className={styles.journeySection} ref={ref}>
      <motion.div
        className={styles.journeyContainer}
        style={{
          y,
          opacity,
          scale,
        }}
      >
        <div className={styles.sectionHeader}>
          <div className={styles.headerContent}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              Mein Beruflicher Werdegang
            </motion.h2>
            <motion.p
              className={styles.sectionDesc}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Meine Reise durch die Welt der Webentwicklung und Design
            </motion.p>
          </div>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}>
            <motion.div
              className={styles.progressIndicator}
              animate={{
                height:
                  activeIndex === 0
                    ? "25%"
                    : activeIndex === 1
                    ? "50%"
                    : activeIndex === 2
                    ? "75%"
                    : "100%",
              }}
              transition={{ type: "spring", damping: 15 }}
            />
          </div>

          <div className={styles.timelineItems}>
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`${styles.timelineItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className={styles.itemMarker}
                  animate={{
                    borderColor:
                      activeIndex === index
                        ? "var(--accent-color)"
                        : hoveredIndex === index
                        ? "var(--text-secondary)"
                        : "var(--text-secondary)",
                    scale:
                      activeIndex === index
                        ? 1.1
                        : hoveredIndex === index
                        ? 1.05
                        : 1,
                  }}
                >
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div className={styles.itemYear}>{item.year}</div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      className={styles.itemContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className={styles.itemHeader}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <h4 className={styles.itemCompany}>@ {item.company}</h4>
                      </div>
                      <p className={styles.itemDescription}>
                        {item.description}
                      </p>

                      <div className={styles.itemHighlights}>
                        <h5 className={styles.highlightsTitle}>
                          Wichtige Erfolge:
                        </h5>
                        <ul className={styles.highlightsList}>
                          {item.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              className={styles.highlightItem}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                            >
                              <span className={styles.highlightBullet}>•</span>{" "}
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.itemTags}>
                        {item.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            className={styles.tag}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.controls}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4 }}
        >
          <button
            className={styles.controlButton}
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
          >
            Zurück
          </button>
          <div className={styles.dots}>
            {journeyData.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Gehe zu Schritt ${index + 1}`}
              />
            ))}
          </div>
          <button
            className={styles.controlButton}
            onClick={() =>
              setActiveIndex((prev) =>
                Math.min(journeyData.length - 1, prev + 1)
              )
            }
            disabled={activeIndex === journeyData.length - 1}
          >
            Weiter
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className={styles.decorativeOrb1}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className={styles.decorativeOrb2}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </section>
  );
}
