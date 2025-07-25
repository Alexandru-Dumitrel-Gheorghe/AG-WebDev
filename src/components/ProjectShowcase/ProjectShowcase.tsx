"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
    title: "Fashion Shop",
    description: "E-commerce de lux cu colecții handmade și integrare Stripe",
    image: "/images/certus-case.png",
    technologies: ["Next.js", "Stripe", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Yoga Platform",
    description: "Platformă de învățare online cu lecții video interactive",
    image: "/images/certus-case.png",
    technologies: ["React", "Sanity", "Cloudinary"],
    liveUrl: "#",
  },
  {
    title: "Portfolio Creative",
    description: "Website portofoliu cu animații custom și design minimalist",
    image: "/images/certus-case.png",
    technologies: ["GSAP", "Webflow", "Figma"],
    liveUrl: "#",
    codeUrl: "#",
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
      { threshold: 0.15 }
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleText}>Projekte</span>
            <span className={styles.titleLine} />
          </h2>
          <p className={styles.subtitle}>
            Soluții digitale custom create pentru a transforma ideile în
            realitate
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
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.imageOverlay} />
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

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.buttons}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryButton}
                    >
                      View Live
                      <span className={styles.buttonArrow}>→</span>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryButton}
                    >
                      View Code
                    </a>
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
