"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Proces.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function DesignThinkingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stages = [
    {
      title: "EMPATHIE",
      description:
        "Durch gezielte Recherche und Beobachtung wird ein tiefes Verständnis für die Nutzer, deren Bedürfnisse und Herausforderungen entwickelt.",
      icon: "👂",
      color: "#fc6b28",
    },
    {
      title: "IDEENFINDUNG",
      description:
        "Innovative Lösungen werden durch strukturiertes Brainstorming und kreative Techniken entwickelt.",
      icon: "💡",
      color: "#ff8c42",
    },
    {
      title: "DEFINITION",
      description:
        "Die Recherche-Ergebnisse werden analysiert und gebündelt, um das zentrale Problem klar zu definieren.",
      icon: "🎯",
      color: "#ff9a52",
    },
    {
      title: "PROTOTYPING",
      description:
        "Greifbare Prototypen werden erstellt, um Ideen testbar zu machen und schnelle Iterationen zu ermöglichen.",
      icon: "🛠️",
      color: "#ffa96b",
    },
    {
      title: "TESTEN",
      description:
        "Die Lösungen werden mit echten Nutzern getestet und anhand des erhaltenen Feedbacks gezielt optimiert.",
      icon: "✅",
      color: "#ffb884",
    },
  ];

  return (
    <div className={styles.container} id="design-process" ref={containerRef}>
      <div className={styles.sectionHeader}>
        <motion.h1
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ root: containerRef, once: true }}
        >
          <span className={styles.underline}>Design Thinking Prozess</span>
        </motion.h1>
        <motion.p
          className={styles.sectionDesc}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ root: containerRef, once: true }}
        >
          Ein bewährtes Vorgehen für kreative, nutzerzentrierte Lösungen. Von
          der Empathie bis zum Testen – jeder Schritt bringt Ihr Projekt näher
          zum Erfolg.
        </motion.p>
      </div>

      <div className={styles.processContainer}>
        {!isMobile ? (
          <>
            <div className={styles.stages}>
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  className={`${styles.stageContainer} ${
                    activeStep === index ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ root: containerRef, once: true }}
                >
                  <div className={styles.stageMarker}>
                    <motion.div
                      className={styles.stageNumber}
                      animate={{
                        backgroundColor:
                          activeStep === index ? stage.color : "#fff",
                        color: activeStep === index ? "#fff" : stage.color,
                        scale: activeStep === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      0{index + 1}
                    </motion.div>
                    <div className={styles.stageLine}></div>
                  </div>
                  <motion.span
                    className={styles.stage}
                    animate={{
                      color: activeStep === index ? stage.color : "#666",
                      fontWeight: activeStep === index ? "700" : "600",
                    }}
                  >
                    {stage.title}
                  </motion.span>
                  <motion.div
                    className={styles.stageIcon}
                    animate={{
                      opacity: activeStep === index ? 1 : 0,
                      y: activeStep === index ? 0 : 10,
                      color: stage.color,
                    }}
                  >
                    {stage.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className={styles.processSteps}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  className={styles.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={styles.stepContent}>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {stages[activeStep].description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className={styles.mobileProcess}>
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                className={styles.mobileStep}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ root: containerRef, once: true }}
              >
                <div
                  className={styles.mobileStepHeader}
                  style={{
                    background: `linear-gradient(90deg, ${stage.color}20 0%, ${stage.color}10 100%)`,
                  }}
                >
                  <div
                    className={styles.mobileStepNumber}
                    style={{ borderColor: stage.color, color: stage.color }}
                  >
                    0{index + 1}
                  </div>
                  <div
                    className={styles.mobileStepIcon}
                    style={{ color: stage.color }}
                  >
                    {stage.icon}
                  </div>
                  <h3 className={styles.mobileStepTitle}>{stage.title}</h3>
                </div>
                <div className={styles.mobileStepContent}>
                  <p>{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
