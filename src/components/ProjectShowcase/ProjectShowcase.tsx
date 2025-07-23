"use client";
import React, { useEffect, useRef } from "react";
import styles from "./ProjectShowcase.module.css";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  background: string;
  thumbnail: string;
};

const sectionTitle = "Completed Projects";
const sectionDesc =
  "Discover how we transformed digital experiences for various industries. Every project is a story of collaboration, innovation and measurable results.";

const projects: Project[] = [
  {
    id: 1,
    title: "FRAGA Fashion Shop",
    subtitle: "Modernes E-Commerce für nachhaltige Mode.",
    description: "",
    features: [
      "Shopify-Integration & animierte Produktseiten",
      "Nachhaltige, handgefertigte Kollektionen",
    ],
    tech: ["Next.js", "TypeScript", "React"],
    background: "/images/fraga-showcase.png",
    thumbnail: "/images/fraga-mockup.png",
  },
  {
    id: 2,
    title: "Oberholzer GmbH",
    subtitle: "Responsive Webprojekt für Schweizer Umzüge.",
    description: "",
    features: [
      "Conversion-optimierte Landingpage",
      "Scroll-Animation & mobile Ansicht",
    ],
    tech: ["Next.js", "React"],
    background: "/images/oberholzer-showcase.png",
    thumbnail: "/images/tablet-mockup-oberholzer.png",
  },
  {
    id: 3,
    title: "Certus Solutions",
    subtitle: "Unternehmenswebsite für Fenster & Zäune.",
    description: "",
    features: ["Produktkatalog mit Filter", "Buchungssystem für Angebote"],
    tech: ["Next.js", "TypeScript"],
    background: "/images/certuss-showcase.png",
    thumbnail: "/images/certuss-showcase-small.png",
  },
];

export default function ProjectsShowcase() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
            <p className={styles.sectionDesc}>{sectionDesc}</p>
          </div>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.card} ${styles.cardAnimation}`}
              style={{ backgroundImage: `url(${project.background})` }}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.topRow}>
                  <span className={styles.index}>
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={styles.thumbnail}
                    loading="lazy"
                  />
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>

                <ul className={styles.features}>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <button className={styles.button}>
                  View Project <span className={styles.arrow}>↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
