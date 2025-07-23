"use client";
import React, { useEffect, useRef } from "react";
import styles from "./ProjectShowcase.module.css";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  background: string;
  thumbnail: string;
};

const sectionTitle = "Completed Projects";
const sectionDesc =
  "Discover how we transformed digital experiences for various industries. Every project is a story of collaboration, innovation and measurable results.";

const projects: Project[] = [
  {
    id: 1,
    title: "Fraga",
    subtitle: "Clean, minimal corporate website redesign",
    background: "/images/fraga-showcase.png",
    thumbnail: "/images/fraga-mockup.png",
  },
  {
    id: 2,
    title: "Helio Brand Identity",
    subtitle: "Career guidance app with smooth onboarding",
    background: "/images/oberholzer-showcase.png",
    thumbnail: "/images/hero-fraga.png",
  },
  {
    id: 3,
    title: "Made in Webflow",
    subtitle: "Portfolio website with custom animations",
    background: "/images/certus-case-ag.png",
    thumbnail: "/images/hero-fraga.png",
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
