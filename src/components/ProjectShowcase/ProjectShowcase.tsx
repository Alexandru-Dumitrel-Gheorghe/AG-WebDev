"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectShowcase.module.css";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
};

const projects: Project[] = [
  {
    title: "Oberholzer Umzugservice",
    description:
      "Neues Corporate Design, ultra-schnelle Ladezeiten und Google #1 für das Haupt-Keyword. Mobile-first UI/UX mit maximaler Conversion.",
    image: "/images/oberholzer-projekt1.png",
    technologies: ["Next.js", "Framer Motion", "SEO"],
    liveUrl: "https://oberholzerch.netlify.app/",
    codeUrl: "/referenzen/oberholzer-umzugservice",
  },
  {
    title: "Certus Solutions",
    description:
      "Webauftritt für Vertrieb von Fenstern, Türen, Aluminiumzäunen & Rollläden. Komplett in Next.js mit TypeScript, inklusive SEO, Referenz-Galerie & Kontaktmodul.",
    image: "/images/certus-projekt.png",
    technologies: ["React", "Next.js", "CSS Modules"],
    liveUrl: "https://www.certussolutions.de/",
    codeUrl: "/referenzen/certus-solutions",
  },
  {
    title: "Fraga Online Shop",
    description:
      "Modernes Shop-Erlebnis mit Shopify-Backend und Next.js-Frontend. Individuelles Design, Conversion-Optimierung & superschnelle Pages.",
    image: "/images/fraga-projekt1.png",
    technologies: ["Next.js", "Shopify", "Figma"],
    liveUrl: "https://e-commerce-one-tau-76.vercel.app/",
    codeUrl: "/referenzen/fraga-online-shop",
  },
];

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} id="projects">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleText}>Referenzen</span>
            <span className={styles.titleUnderline} />
          </h2>

          <p className={styles.subtitle}>
            Individuelle digitale Lösungen, die Ihre Ideen in die Realität
            umsetzen.
          </p>
        </header>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article
              key={index}
              className={styles.projectCard}
              ref={(el: HTMLDivElement | null) => {
                projectRefs.current[index] = el;
              }}
            >
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.projectImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
                <div className={styles.imageOverlay} />
                <div className={styles.imageGradient} />
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.textContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                </div>

                <div className={styles.buttons}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryButton}
                      aria-label={`View ${project.title} live demo`}
                    >
                      Live
                      <span className={styles.buttonArrow}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.33325 12.6667L12.6666 3.33337"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.33325 3.33337H12.6666V10.6667"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  )}
                  {project.codeUrl && project.codeUrl !== "#" && (
                    <Link
                      href={project.codeUrl}
                      className={styles.secondaryButton}
                      aria-label={`View ${project.title} case study`}
                    >
                      Case Studies
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
