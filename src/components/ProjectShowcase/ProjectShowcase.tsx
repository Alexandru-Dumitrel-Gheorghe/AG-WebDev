"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    thumbnail: "/images/fraga-tablet.png",
  },
  {
    id: 2,
    title: "Helio Brand Identity",
    subtitle: "Career guidance app with smooth onboarding",
    background: "/images/certuss-showcase.png",
    thumbnail: "/images/certus-tablet.png",
  },
  {
    id: 3,
    title: "Made in Webflow",
    subtitle: "Portfolio website with custom animations",
    background: "/images/oberholzer-showcase.png",
    thumbnail: "/images/tablet-mockup-oberholzer.png",
  },
];

export default function ProjectsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Parallax Background */}
      <motion.div
        className={styles.parallaxBg}
        style={{
          y: yBg,
          background: `radial-gradient(circle at 30% 50%, rgba(252,107,40,0.1) 0%, transparent 40%)`,
        }}
      />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          style={{ y: yText, opacity: opacityText }}
        >
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
            <p className={styles.sectionDesc}>{sectionDesc}</p>
          </div>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  scrollYProgress,
}: {
  project: Project;
  index: number;
  scrollYProgress: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardScrollY } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for each card
  const y = useTransform(cardScrollY, [0, 1], [index % 2 === 0 ? -50 : 50, 0]);
  const opacity = useTransform(cardScrollY, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(cardScrollY, [0, 1], [0.9, 1]);

  // Background parallax (different direction for variety)
  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? "0%" : "10%", index % 2 === 0 ? "20%" : "0%"]
  );

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      style={{
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
        className={styles.cardBackground}
        style={{
          backgroundImage: `url(${project.background})`,
          y: yBg,
        }}
      />

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

        <motion.button
          className={styles.button}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + index * 0.1 }}
          aria-label={`View ${project.title} project`}
        >
          View Project <span className={styles.arrow}>↗</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
