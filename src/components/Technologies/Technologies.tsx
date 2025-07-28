"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
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
  React: "Building interactive UIs with reusable components.",
  "Next.js": "Server-side rendering and static site generation.",
  TypeScript: "Type-safe JavaScript development.",
  JavaScript: "Core web programming language.",
  HTML5: "Structure and content of modern websites.",
  CSS3: "Styling, layouts and animations.",
  Tailwind: "Utility-first CSS framework.",
  Bootstrap: "Responsive component library.",
  Redux: "State management for complex apps.",
  Figma: "UI/UX design and prototyping.",
  Jest: "Testing framework for JavaScript.",
  Storybook: "UI component development environment.",
  "Node.js": "JavaScript runtime for backend services.",
  Express: "Minimalist web framework for Node.js.",
  MongoDB: "NoSQL database for flexible data.",
  Git: "Version control system.",
};

const technologies: Record<Tab, Tech[]> = {
  frontend: [
    { name: "React", icon: <FaReact />, color: "#61DAFB", proficiency: 95 },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#111", proficiency: 90 },
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
    { name: "Express", icon: <SiExpress />, color: "#111", proficiency: 85 },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", proficiency: 80 },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", proficiency: 90 },
  ],
};

const tabLabels = {
  frontend: "Frontend",
  backend: "Backend & Tools",
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState<Tab>("frontend");
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  // Tabs IDs
  const tabIds: Record<Tab, string> = {
    frontend: "tab-frontend",
    backend: "tab-backend",
  };

  // Panel IDs
  const panelIds: Record<Tab, string> = {
    frontend: "tabpanel-frontend",
    backend: "tabpanel-backend",
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        {/* Left Side - Title Card */}
        <motion.div
          className={styles.titleCard}
          initial={{ opacity: 0, x: -100, rotateY: 45 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  transition: {
                    type: "spring",
                    stiffness: 60,
                    damping: 12,
                    delay: 0.2,
                  },
                }
              : {}
          }
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>
            <span className={styles.titleMain}>Tech Stack</span>
            <div className={styles.underline} />
          </h2>
          <p className={styles.subtitle}>
            Moderne Technologien für außergewöhnliche Ergebnisse.
          </p>
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Technologien Tabs"
          >
            {(["frontend", "backend"] as Tab[]).map((tab) => (
              <button
                key={tab}
                id={tabIds[tab]}
                role="tab"
                type="button"
                aria-selected={activeTab === tab}
                aria-controls={panelIds[tab]}
                tabIndex={activeTab === tab ? 0 : -1}
                className={`${styles.tab} ${
                  activeTab === tab ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedTech(null);
                }}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>
          {/* Details Panel */}
          <AnimatePresence mode="wait">
            {selectedTech ? (
              <motion.div
                key={selectedTech.name}
                className={styles.techDetail}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                role="region"
                aria-live="polite"
              >
                <div
                  className={styles.techDetailIcon}
                  style={{ color: selectedTech.color }}
                >
                  {selectedTech.icon}
                </div>
                <div>
                  <h3 className={styles.techName}>{selectedTech.name}</h3>
                  <p className={styles.techDescription}>
                    {techDetails[selectedTech.name]}
                  </p>
                  <div className={styles.proficiency}>
                    <div className={styles.proficiencyBar}>
                      <motion.div
                        className={styles.proficiencyFill}
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedTech.proficiency}%` }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        style={{ backgroundColor: selectedTech.color }}
                      />
                    </div>
                    <span className={styles.proficiencyValue}>
                      {selectedTech.proficiency}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className={styles.placeholder}
                key="placeholder"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                role="region"
                aria-live="polite"
              >
                <span>
                  Wähle eine Technologie
                  <br />
                  für Details
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Side - Tech Grid */}
        <motion.div
          className={styles.techGrid}
          id={panelIds[activeTab]}
          role="tabpanel"
          aria-labelledby={tabIds[activeTab]}
          initial={{ opacity: 0, x: 100, rotateY: -45 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  transition: {
                    type: "spring",
                    stiffness: 60,
                    damping: 12,
                    delay: 0.4,
                  },
                }
              : {}
          }
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
        >
          {technologies[activeTab].map((tech) => (
            <motion.button
              key={tech.name}
              className={`${styles.techItem} ${
                selectedTech?.name === tech.name ? styles.active : ""
              }`}
              onClick={() => setSelectedTech(tech)}
              whileHover={{ y: -4, scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              style={{ "--tech-color": tech.color } as React.CSSProperties}
              aria-label={tech.name}
              type="button"
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

export default Technologies;
