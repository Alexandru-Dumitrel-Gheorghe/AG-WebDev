import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import styles from "./ReferencesHero.module.css";

const technologies = [
  { name: "React", icon: <SiReact size={24} color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} color="#000" /> },
  { name: "Figma", icon: <SiFigma size={24} color="#a259ff" /> },
  { name: "Node.js", icon: <SiNodedotjs size={24} color="#68a063" /> },
  { name: "TypeScript", icon: <SiTypescript size={24} color="#3178c6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#38bdf8" /> },
];

const ProjectsHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Textbereich */}
          <div className={styles.textContent}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.subtitle}>Referenzen & Projekte</span>
              <h1 className={styles.title}>
                <span className={styles.titleLine}>Digitale Lösungen</span>
                <span className={styles.titleLine}>mit Weitblick</span>
              </h1>
            </motion.div>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Entdecken Sie ausgewählte Web-Projekte, die mit modernen
              Technologien und viel Erfahrung realisiert wurden. Jede Lösung ist
              individuell auf die Bedürfnisse der Kunden zugeschnitten – von
              Webentwicklung bis UI/UX Design.
            </motion.p>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button className={styles.primaryButton}>
                <span>Alle Projekte ansehen</span>
                <div className={styles.buttonHover}></div>
              </button>
              <button className={styles.secondaryButton}>
                <span>Unser Ansatz</span>
              </button>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            className={styles.techStack}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className={styles.techLabel}>Technologien im Einsatz</div>
            <div className={styles.techBadges}>
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  className={styles.techBadge}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className={styles.techIconContainer}>{tech.icon}</div>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
