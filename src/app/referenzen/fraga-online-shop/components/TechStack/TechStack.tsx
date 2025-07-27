"use client";
import { motion } from "framer-motion";
import styles from "./FragaTechStack.module.css";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import {
  SiShopify,
  SiFigma,
  SiVercel,
  SiFramer,
  SiGoogle,
} from "react-icons/si";

const stack = [
  {
    icon: <SiShopify />,
    label: "Shopify",
    desc: "Backend E-Commerce",
    orbColor: "var(--orb1-gradient)",
  },
  {
    icon: <TbBrandNextjs />,
    label: "Next.js",
    desc: "Frontend & SSR",
    orbColor: "var(--orb2-gradient)",
  },
  {
    icon: <FaReact />,
    label: "React",
    desc: "Modern UI",
    orbColor: "var(--orb3-gradient)",
  },
  {
    icon: <TbBrandTypescript />,
    label: "TypeScript",
    desc: "Type Safety",
    orbColor: "var(--orb1-gradient)",
  },
  {
    icon: <SiFigma />,
    label: "Figma",
    desc: "UI/UX Design",
    orbColor: "var(--orb2-gradient)",
  },
  {
    icon: <SiFramer />,
    label: "Framer Motion",
    desc: "Animation",
    orbColor: "var(--orb3-gradient)",
  },
  {
    icon: <SiVercel />,
    label: "Vercel",
    desc: "Deployment",
    orbColor: "var(--orb1-gradient)",
  },
  {
    icon: <SiGoogle />,
    label: "SEO",
    desc: "Google Ranking",
    orbColor: "var(--orb2-gradient)",
  },
];

export default function FragaTechStack() {
  return (
    <section className={styles.section} id="tech-stack">
      <div className={styles.parallaxOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={styles.container}>
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
              Für den Fraga Online-Shop haben wir moderne
              E-Commerce-Technologien, ein durchdachtes UX/UI-Design und eine
              nahtlose Integration zwischen Shopify und Next.js eingesetzt –
              alles für maximale Performance, Conversion und SEO.
            </motion.p>
          </div>
        </div>

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
