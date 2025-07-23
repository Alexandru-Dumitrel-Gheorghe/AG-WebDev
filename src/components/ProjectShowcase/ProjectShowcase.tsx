"use client";
import React from "react";
import { motion } from "framer-motion";
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

export default function ProjectsShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className={styles.headerContent} variants={itemVariants}>
            <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
            <p className={styles.sectionDesc}>{sectionDesc}</p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.card}
              style={{ backgroundImage: `url(${project.background})` }}
              variants={cardVariants}
              custom={index}
            >
              <motion.div
                className={styles.cardContent}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <div className={styles.topRow}>
                  <span className={styles.index}>
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <motion.img
                    src={project.thumbnail}
                    alt={project.title}
                    className={styles.thumbnail}
                    loading="lazy"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  />
                </div>
                <motion.h3
                  className={styles.projectTitle}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className={styles.projectSubtitle}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {project.subtitle}
                </motion.p>

                <motion.div
                  className={styles.techStack}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.8 + index * 0.1 + i * 0.1,
                        type: "spring",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.button
                  className={styles.button}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  View Project <span className={styles.arrow}>↗</span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
