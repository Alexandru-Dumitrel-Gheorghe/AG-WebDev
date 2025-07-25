"use client";
import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import styles from "./ProfessionalTimeline.module.css";

const journeyData = [
  {
    year: "2023 - Present",
    title: "Lead Product Designer",
    company: "Nexus Innovations",
    description:
      "Spearheading design vision for AI-powered SaaS platform. Established design ops practice reducing delivery time by 30%.",
    tags: ["Design Systems", "AI Interfaces", "Team Leadership"],
    icon: "🚀",
    highlights: [
      "Launched v4.0 with 98% user satisfaction",
      "Built 15-person cross-functional team",
      "Featured in TechCrunch Design Annual",
    ],
  },
  {
    year: "2020 - 2023",
    title: "Senior UI/UX Designer",
    company: "PixelForge Studio",
    description:
      "Designed award-winning mobile experiences for Fortune 500 clients. Pioneered accessibility initiatives reaching WCAG 2.1 AA standards.",
    tags: ["Mobile Design", "Accessibility", "Design Thinking"],
    icon: "🎨",
    highlights: [
      "3x Best Design Award winner",
      "Increased engagement by 65%",
      "Mentored 8 junior designers",
    ],
  },
  {
    year: "2017 - 2020",
    title: "UX Designer",
    company: "DigitalFlow",
    description:
      "Transformed legacy enterprise software into modern, user-friendly experiences. Conducted 50+ user research sessions annually.",
    tags: ["Enterprise UX", "User Research", "Prototyping"],
    icon: "🔍",
    highlights: [
      "Reduced support tickets by 40%",
      "Established research practice",
      "Featured in UX Collective",
    ],
  },
  {
    year: "2015 - 2017",
    title: "Design Intern",
    company: "CreativeMinds",
    description:
      "Supported product design across web and mobile platforms. Won innovation hackathon for AR navigation concept.",
    tags: ["Visual Design", "Interaction", "Rapid Prototyping"],
    icon: "🌱",
    highlights: [
      "Intern of the Year 2016",
      "2 patents filed (co-inventor)",
      "Launched 3 production features",
    ],
  },
];

export default function ProfessionalJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <section className={styles.journeySection} ref={ref}>
      <motion.div
        className={styles.journeyContainer}
        style={{
          y,
          opacity,
          scale,
        }}
      >
        <div className={styles.sectionHeader}>
          <div className={styles.headerContent}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              Professional Odyssey
            </motion.h2>
            <motion.p
              className={styles.sectionDesc}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A decade of crafting exceptional digital experiences
            </motion.p>
          </div>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}>
            <motion.div
              className={styles.progressIndicator}
              animate={{
                height:
                  activeIndex === 0
                    ? "25%"
                    : activeIndex === 1
                    ? "50%"
                    : activeIndex === 2
                    ? "75%"
                    : "100%",
              }}
              transition={{ type: "spring", damping: 15 }}
            />
          </div>

          <div className={styles.timelineItems}>
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.timelineItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className={styles.itemMarker}
                  animate={{
                    borderColor:
                      activeIndex === index
                        ? "var(--accent-color)"
                        : hoveredIndex === index
                        ? "var(--text-secondary)"
                        : "var(--text-secondary)",
                    scale:
                      activeIndex === index
                        ? 1.1
                        : hoveredIndex === index
                        ? 1.05
                        : 1,
                  }}
                >
                  <div className={styles.itemIcon}>{item.icon}</div>
                  <div className={styles.itemYear}>{item.year}</div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      className={styles.itemContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className={styles.itemHeader}>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <h4 className={styles.itemCompany}>@ {item.company}</h4>
                      </div>
                      <p className={styles.itemDescription}>
                        {item.description}
                      </p>

                      <div className={styles.itemHighlights}>
                        <h5 className={styles.highlightsTitle}>
                          Key Achievements:
                        </h5>
                        <ul className={styles.highlightsList}>
                          {item.highlights.map((highlight, i) => (
                            <motion.li
                              key={i}
                              className={styles.highlightItem}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                            >
                              <span className={styles.highlightBullet}>•</span>{" "}
                              {highlight}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.itemTags}>
                        {item.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            className={styles.tag}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.controls}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4 }}
        >
          <button
            className={styles.controlButton}
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
          >
            Previous
          </button>
          <div className={styles.dots}>
            {journeyData.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
          <button
            className={styles.controlButton}
            onClick={() =>
              setActiveIndex((prev) =>
                Math.min(journeyData.length - 1, prev + 1)
              )
            }
            disabled={activeIndex === journeyData.length - 1}
          >
            Next
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className={styles.decorativeOrb1}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className={styles.decorativeOrb2}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </section>
  );
}
