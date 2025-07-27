"use client";
import { motion } from "framer-motion";
import styles from "./TechStack.module.css";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import {
  SiFigma,
  SiVercel,
  SiFramer,
  SiContentful,
  SiGoogle,
} from "react-icons/si";

const stack = [
  {
    icon: <TbBrandNextjs />,
    label: "Next.js",
    desc: "Performance & SSR",
    orbColor: "var(--orb1-gradient)",
  },
  {
    icon: <FaReact />,
    label: "React",
    desc: "Modern UI",
    orbColor: "var(--orb2-gradient)",
  },
  {
    icon: <TbBrandTypescript />,
    label: "TypeScript",
    desc: "Type Safety",
    orbColor: "var(--orb3-gradient)",
  },
  {
    icon: <SiFigma />,
    label: "Figma",
    desc: "UI/UX Design",
    orbColor: "var(--orb1-gradient)",
  },
  {
    icon: <SiFramer />,
    label: "Framer Motion",
    desc: "Animation",
    orbColor: "var(--orb2-gradient)",
  },
  {
    icon: <SiVercel />,
    label: "Vercel",
    desc: "Deployment",
    orbColor: "var(--orb3-gradient)",
  },
  {
    icon: <SiContentful />,
    label: "Headless CMS",
    desc: "Content",
    orbColor: "var(--orb1-gradient)",
  },
  {
    icon: <SiGoogle />,
    label: "SEO",
    desc: "Google Ranking",
    orbColor: "var(--orb2-gradient)",
  },
];

export default function TechStack() {
  return (
    <section className={styles.section} id="tech-stack">
      {/* Floating Orbs Background */}
      <div className={styles.parallaxOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={styles.container}>
        {/* Header with Title and Subtitle */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.66 }}
              viewport={{ once: true }}
            >
              <span>Tech Stack</span> & Tools
            </motion.h2>
            <motion.p
              className={styles.sectionDesc}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              viewport={{ once: true }}
            >
              Für die Umsetzung des Certus Solutions Portals haben wir auf
              moderne Technologien, <b>UX/UI-Design</b> in Figma, und ein
              Headless CMS gesetzt – alles abgestimmt für Performance,
              Skalierbarkeit und Top Google-Rankings.
            </motion.p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className={styles.cardsGrid}>
          {stack.map((item, i) => (
            <motion.div
              key={item.label}
              className={styles.card}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 8px 36px rgba(252, 107, 40, 0.2)",
                borderColor: "var(--card-hover-border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.09, duration: 0.47, type: "spring" }}
              viewport={{ once: true }}
            >
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: item.orbColor }}
              >
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.label}>{item.label}</div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
              <div className={styles.hoverIndicator}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
