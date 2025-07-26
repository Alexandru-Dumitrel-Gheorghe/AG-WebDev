"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import styles from "./Proces.module.css";

export default function DesignThinkingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const stages = [
    {
      title: "ANALYSE & BERATUNG",
      description:
        "Wir analysieren Ihre Ziele, Zielgruppe und den aktuellen Status Ihrer Website. Auf Basis einer persönlichen Beratung entwickeln wir eine maßgeschneiderte Webstrategie.",
      icon: "🔎",
      color: "#fc6b28",
    },
    {
      title: "KONZEPTION & PLANUNG",
      description:
        "Gemeinsam erarbeiten wir ein detailliertes Konzept und planen die technische Umsetzung – von der Seitenstruktur bis zur passenden Technologie.",
      icon: "🗂️",
      color: "#ff8c42",
    },
    {
      title: "INDIVIDUELLE ENTWICKLUNG",
      description:
        "Wir entwickeln Ihr Webprojekt mit modernen Technologien, optimiert für Performance, Sicherheit und Skalierbarkeit.",
      icon: "💻",
      color: "#ff9a52",
    },
    {
      title: "TESTING & OPTIMIERUNG",
      description:
        "Vor dem Launch prüfen wir alle Funktionen, beseitigen Fehler und optimieren Ladezeiten sowie Usability auf allen Geräten.",
      icon: "🧪",
      color: "#ffa96b",
    },
    {
      title: "GO LIVE & SUPPORT",
      description:
        "Nach dem Launch begleiten wir Sie weiter: Wartung, Updates und persönlicher Support sichern nachhaltigen Erfolg.",
      icon: "🚀",
      color: "#ffb884",
    },
  ];

  // Check if mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container} id="design-process" ref={containerRef}>
      {/* Parallax Background */}
      <motion.div
        className={styles.parallaxBg}
        style={{
          y: yBg,
          background: `radial-gradient(circle at 30% 50%, rgba(252,107,40,0.1) 0%, transparent 40%)`,
        }}
      />

      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.sectionHeader}
          style={{ y: yText, opacity: opacityText }}
        >
          <motion.h1
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className={styles.underline}>Design Thinking Prozess</span>
          </motion.h1>
          <motion.p
            className={styles.sectionDesc}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ein bewährtes Vorgehen für kreative, nutzerzentrierte Lösungen. Von
            der Empathie bis zum Testen – jeder Schritt bringt Ihr Projekt näher
            zum Erfolg.
          </motion.p>
        </motion.div>

        <div className={styles.processContainer}>
          {!isMobile ? (
            <DesktopProcess
              stages={stages}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          ) : (
            <MobileProcess stages={stages} />
          )}
        </div>
      </div>
    </div>
  );
}

function DesktopProcess({
  stages,
  activeStep,
  setActiveStep,
}: {
  stages: any[];
  activeStep: number;
  setActiveStep: (index: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for each stage
  const yStages = stages.map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -20 : 20, 0])
  );

  return (
    <div ref={containerRef}>
      <div className={styles.stages}>
        {stages.map((stage, index) => (
          <motion.div
            key={index}
            className={`${styles.stageContainer} ${
              activeStep === index ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveStep(index)}
            style={{ y: yStages[index] }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.stageMarker}>
              <motion.div
                className={styles.stageNumber}
                animate={{
                  backgroundColor: activeStep === index ? stage.color : "#fff",
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
    </div>
  );
}

function MobileProcess({ stages }: { stages: any[] }) {
  return (
    <div className={styles.mobileProcess}>
      {stages.map((stage, index) => (
        <motion.div
          key={index}
          className={styles.mobileStep}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
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
  );
}
