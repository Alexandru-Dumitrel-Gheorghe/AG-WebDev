"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiPostgresql,
  SiFirebase,
  SiGraphql,
  SiRedux,
  SiJest,
  SiStorybook,
} from "react-icons/si";
import styles from "./Technologies.module.css";

type Tech = {
  name: keyof typeof techDetails;
  icon: React.ReactElement;
  color: string;
  proficiency: number;
};

type Tab = "frontend" | "backend";

const techDetails = {
  React: "Building interactive UIs with reusable components",
  "Next.js": "Server-side rendering and static site generation",
  TypeScript: "Type-safe JavaScript development",
  JavaScript: "Core web programming language",
  HTML5: "Structure and content of modern websites",
  CSS3: "Styling, layouts and animations",
  Tailwind: "Utility-first CSS framework",
  Bootstrap: "Responsive component library",
  Redux: "State management for complex apps",
  Figma: "UI/UX design and prototyping",
  Jest: "Testing framework for JavaScript",
  Storybook: "UI component development environment",
  "Node.js": "JavaScript runtime for backend services",
  Express: "Minimalist web framework for Node.js",
  MongoDB: "NoSQL database for flexible data",
  PostgreSQL: "Powerful relational database",
  Firebase: "Backend-as-a-service platform",
  GraphQL: "Query language for APIs",
  Docker: "Containerization platform",
  Git: "Version control system",
};

const technologies: Record<Tab, Tech[]> = {
  frontend: [
    { name: "React", icon: <FaReact />, color: "#61DAFB", proficiency: 95 },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "#000000",
      proficiency: 90,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
      proficiency: 85,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
      proficiency: 90,
    },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", proficiency: 98 },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", proficiency: 90 },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "#38BDF8",
      proficiency: 85,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "#7952B3",
      proficiency: 80,
    },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC", proficiency: 75 },
    { name: "Figma", icon: <FaFigma />, color: "#A259FF", proficiency: 85 },
    { name: "Jest", icon: <SiJest />, color: "#C21325", proficiency: 70 },
    {
      name: "Storybook",
      icon: <SiStorybook />,
      color: "#FF4785",
      proficiency: 65,
    },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063", proficiency: 90 },
    { name: "Express", icon: <SiExpress />, color: "#000000", proficiency: 85 },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", proficiency: 80 },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#336791",
      proficiency: 75,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#FFCA28",
      proficiency: 70,
    },
    { name: "GraphQL", icon: <SiGraphql />, color: "#E535AB", proficiency: 65 },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED", proficiency: 60 },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", proficiency: 90 },
  ],
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<Tab>("frontend");
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Side - Title Card */}
        <motion.div
          className={styles.titleCard}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            <span className={styles.titleMain}>Unser</span>
            <span className={styles.titleAccent}>Tech Stack</span>
          </h2>
          <p className={styles.subtitle}>
            Moderne Technologien für außergewöhnliche Ergebnisse
          </p>

          {/* Tabs */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "frontend" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveTab("frontend");
                setSelectedTech(null);
              }}
            >
              Frontend
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "backend" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveTab("backend");
                setSelectedTech(null);
              }}
            >
              Backend
            </button>
          </div>

          {/* Tech Details */}
          <AnimatePresence mode="wait">
            {selectedTech ? (
              <motion.div
                key={selectedTech.name}
                className={styles.techDetail}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={styles.techName}>{selectedTech.name}</h3>
                <p className={styles.techDescription}>
                  {techDetails[selectedTech.name]}
                </p>
                <div className={styles.proficiency}>
                  <div className={styles.proficiencyLabel}>Expertise:</div>
                  <div className={styles.proficiencyBar}>
                    <motion.div
                      className={styles.proficiencyFill}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedTech.proficiency}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      style={{ backgroundColor: selectedTech.color }}
                    />
                  </div>
                  <div className={styles.proficiencyValue}>
                    {selectedTech.proficiency}%
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className={styles.placeholder}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>Wählen Sie eine Technologie aus</p>
                <p>um Details anzuzeigen</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Side - Tech Grid */}
        <motion.div
          className={styles.techGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {technologies[activeTab].map((tech) => (
            <motion.button
              key={tech.name}
              className={`${styles.techItem} ${
                selectedTech?.name === tech.name ? styles.active : ""
              }`}
              onClick={() => setSelectedTech(tech)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ "--tech-color": tech.color } as React.CSSProperties}
            >
              <div className={styles.techIcon}>{tech.icon}</div>
              <span className={styles.techLabel}>{tech.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
