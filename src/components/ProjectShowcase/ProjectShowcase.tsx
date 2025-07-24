"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ProjectShowcase.module.css";
import useIsMobile from "@/components/Hooks/useIsMobile";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  background: string;
  thumbnail: string;
};

const sectionTitle = "Referenzen";
const sectionDesc =
  "Entdecken Sie, wie wir digitale Erlebnisse für verschiedene Branchen transformiert haben. Jedes Projekt ist eine Geschichte von Zusammenarbeit, Innovation und messbaren Ergebnissen.";

const projects: Project[] = [
  {
    id: 1,
    title: "FRAGA Fashion Shop",
    subtitle: "Modernes E-Commerce für nachhaltige Mode.",
    description: "",
    tech: ["Next.js", "TypeScript", "React"],
    background: "/images/fraga-showcase.png",
    thumbnail: "/images/fraga-tablet.png",
  },
  {
    id: 2,
    title: "Oberholzer GmbH",
    subtitle: "Responsives Webprojekt für Schweizer Umzüge.",
    description: "",
    tech: ["Next.js", "React"],
    background: "/images/oberholzer-showcase.png",
    thumbnail: "/images/tablet-mockup-oberholzer.png",
  },
  {
    id: 3,
    title: "Certus Solutions",
    subtitle: "Unternehmenswebsite für Fenster & Zäune.",
    description: "",
    tech: ["Next.js", "TypeScript"],
    background: "/images/certuss-showcase.png",
    thumbnail: "/images/certus-tablet.png",
  },
];

export default function ProjectsShowcase() {
  const isMobile = useIsMobile(768);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleCards = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Parallax Background */}
      {!isMobile && (
        <motion.div
          className={styles.parallaxBg}
          style={{
            y: yBg,
            backgroundImage: `linear-gradient(135deg, rgba(255,245,231,0.8) 0%, rgba(255,186,139,0.6) 30%, rgba(252,107,40,0.4) 100%)`,
          }}
        />
      )}

      <div className={styles.container}>
        <motion.div className={styles.header} style={{ y: yText }}>
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
            <p className={styles.sectionDesc}>{sectionDesc}</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          style={{ scale: scaleCards }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isMobile,
}: {
  project: Project;
  index: number;
  isMobile: boolean | null;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -50 : 50, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const cardStyle: React.CSSProperties = isMobile
    ? {
        backgroundImage:
          "linear-gradient(135deg, #fff5e7 0%, #ffba8b 30%, #fc6b28 100%)",
      }
    : {
        backgroundImage: `url(${project.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      style={{
        ...cardStyle,
        y,
        opacity,
        scale,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: index * 0.1,
      }}
    >
      <motion.div
        className={styles.cardContent}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.1 }}
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
            initial={{ scale: 0.9, rotate: -5 }}
            whileInView={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
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
          transition={{ delay: 0.6 + index * 0.1 }}
        >
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7 + index * 0.1 + i * 0.1,
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
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + index * 0.1 }}
          aria-label="Projekt ansehen"
        >
          Projekt ansehen <span className={styles.arrow}>↗</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
