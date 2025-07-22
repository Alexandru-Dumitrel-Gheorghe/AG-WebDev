"use client";
import { useState } from "react";
import styles from "./ProjectShowcase.module.css";

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      number: "01",
      title: "Beacon Flownest",
      description:
        "Elevating Digital Banking for Gen-Z Users Through Micro-Interactions",
      buttonText: "View Project",
      year: "7",
      image: "/images/case-mockup-oberholzer.png",
      accentColor: "#4A6CF7",
    },
    {
      number: "02",
      title: "Luxury Platform",
      description: "Immersive 3D experiences for high-end fashion",
      buttonText: "View Project",
      year: "6",
      image: "/images/case-mockup-oberholzer.png",
      accentColor: "#8B5FBF",
    },
    {
      number: "03",
      title: "Fintech Dashboard",
      description: "Wealth management with intuitive data visualization",
      buttonText: "View Project",
      year: "5",
      image: "/images/case-mockup-oberholzer.png",
      accentColor: "#2A7F8C",
    },
  ];

  return (
    <section className={styles.projectShowcase}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.sectionTitle}>Our Featured Projects</h2>
          <p className={styles.sectionDesc}>
            Discover the work that sets us apart
          </p>
        </div>
      </div>

      <div className={styles.showcaseContainer}>
        {/* Project Display */}
        <div
          className={styles.projectDisplay}
          style={{ backgroundColor: projects[activeIndex].accentColor }}
        >
          <div className={styles.projectImageWrapper}>
            <div
              className={styles.projectImage}
              style={{ backgroundImage: `url(${projects[activeIndex].image})` }}
            />
          </div>

          <div className={styles.projectCard}>
            <span className={styles.projectNumber}>
              {projects[activeIndex].number}
            </span>
            <h3 className={styles.projectTitle}>
              {projects[activeIndex].title}
            </h3>
            <p className={styles.projectDescription}>
              {projects[activeIndex].description}
            </p>
            <div className={styles.projectFooter}>
              <button className={styles.projectButton}>
                {projects[activeIndex].buttonText}
              </button>
              <span className={styles.projectYear}>
                {projects[activeIndex].year}
              </span>
            </div>
          </div>
        </div>

        {/* Project Selector */}
        <div className={styles.projectSelector}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.selectorItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.selectorNumber}>{project.number}</span>
              <div className={styles.selectorContent}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
