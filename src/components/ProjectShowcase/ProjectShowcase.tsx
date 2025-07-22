"use client";
import { useState, useEffect } from "react";
import styles from "./ProjectShowcase.module.css";

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Handle resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      number: "01",
      title: "Beacon Flownest",
      description:
        "Elevating Digital Banking for Gen-Z Users Through Micro-Interactions",
      buttonText: "View Project",
      year: "7",
      image: "/images/tablet-mockup-oberholzer.png",
      mobileImage: "/images/hero-fraga.png", // Optional mobile-specific image
      accentColor: "#4A6CF7",
    },
    {
      number: "02",
      title: "Luxury Platform",
      description: "Immersive 3D experiences for high-end fashion",
      buttonText: "View Project",
      year: "6",
      image: "/images/case-mockup-oberholzer.png",
      mobileImage: "/images/case-mockup-oberholzer-mobile.png",
      accentColor: "#8B5FBF",
    },
    {
      number: "03",
      title: "Fintech Dashboard",
      description: "Wealth management with intuitive data visualization",
      buttonText: "View Project",
      year: "5",
      image: "/images/case-mockup-oberholzer.png",
      mobileImage: "/images/case-mockup-oberholzer-mobile.png",
      accentColor: "#2A7F8C",
    },
  ];

  const getImageSource = () => {
    const project = projects[activeIndex];
    // Use mobile image if available and screen is small
    if (windowWidth <= 768 && project.mobileImage) {
      return project.mobileImage;
    }
    return project.image;
  };

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
              style={{
                backgroundImage: `url(${getImageSource()})`,
                backgroundSize: windowWidth <= 768 ? "contain" : "cover",
              }}
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
