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

  // Enhanced parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  const stages = [
    {
      title: "ANALYSE & BERATUNG",
      description:
        "Wir analysieren Ihre Ziele, Zielgruppe und den aktuellen Status Ihrer Website. Auf Basis einer persönlichen Beratung entwickeln wir eine maßgeschneiderte Webstrategie.",
      icon: "🔍",
      color: "#FF6B35",
      gradient: "linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)",
    },
    {
      title: "KONZEPTION & PLANUNG",
      description:
        "Gemeinsam erarbeiten wir ein detailliertes Konzept und planen die technische Umsetzung – von der Seitenstruktur bis zur passenden Technologie.",
      icon: "📋",
      color: "#FF8E53",
      gradient: "linear-gradient(135deg, #FF8E53 0%, #FFA172 100%)",
    },
    {
      title: "INDIVIDUELLE ENTWICKLUNG",
      description:
        "Wir entwickeln Ihr Webprojekt mit modernen Technologien, optimiert für Performance, Sicherheit und Skalierbarkeit.",
      icon: "💻",
      color: "#FFA172",
      gradient: "linear-gradient(135deg, #FFA172 0%, #FFB58A 100%)",
    },
    {
      title: "TESTING & OPTIMIERUNG",
      description:
        "Vor dem Launch prüfen wir alle Funktionen, beseitigen Fehler und optimieren Ladezeiten sowie Usability auf allen Geräten.",
      icon: "🧪",
      color: "#FFB58A",
      gradient: "linear-gradient(135deg, #FFB58A 0%, #FFC8A3 100%)",
    },
    {
      title: "GO LIVE & SUPPORT",
      description:
        "Nach dem Launch begleiten wir Sie weiter: Wartung, Updates und persönlicher Support sichern nachhaltigen Erfolg.",
      icon: "🚀",
      color: "#FFC8A3",
      gradient: "linear-gradient(135deg, #FFC8A3 0%, #FFDABD 100%)",
    },
  ];

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
      {/* Enhanced Parallax Background */}
      <motion.div
        className={styles.parallaxBg}
        style={{
          y: yBg,
          background: `
            radial-gradient(circle at 20% 30%, rgba(255,107,53,0.15) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(255,142,83,0.1) 0%, transparent 40%)
          `,
        }}
      />

      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(15)].map((_, i) => {
          // Deterministic pseudo-random based on index
          const left = ((i * 37) % 100) + (i % 3) * 7;
          const top = ((i * 53) % 100) + (i % 2) * 5;
          const duration = 3 + ((i * 17) % 5);
          return (
            <motion.div
              key={i}
              className={styles.particle}
              style={{
                backgroundColor: stages[i % stages.length].color,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.sectionHeader}
          style={{ y: yText, opacity: opacityText }}
        >
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <span className={styles.underline}>Design Thinking Prozess</span>
          </motion.h2>
          <motion.p
            className={styles.sectionDesc}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
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

  const yStages = stages.map((_, i) =>
    useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -30 : 30, 0])
  );

  return (
    <div ref={containerRef} className={styles.desktopProcessWrapper}>
      {/* Animated timeline */}
      <div className={styles.timeline}>
        <motion.div
          className={styles.timelineProgress}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.timelineActive}
          style={{
            scaleX: useTransform(
              scrollYProgress,
              [0, 1],
              [0, stages.length / (stages.length - 1)]
            ),
            transformOrigin: "left center",
          }}
        />
      </div>

      <div className={styles.stages}>
        {stages.map((stage, index) => (
          <motion.div
            key={index}
            className={`${styles.stageContainer} ${
              activeStep === index ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveStep(index)}
            onClick={() => setActiveStep(index)}
            style={{ y: yStages[index] }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className={styles.stageMarker}>
              <motion.div
                className={styles.stageNumber}
                animate={{
                  background: stage.gradient,
                  color: "#fff",
                  scale: activeStep === index ? 1.2 : 1,
                  boxShadow:
                    activeStep === index
                      ? `0 10px 25px ${stage.color}80`
                      : "0 4px 12px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.4, type: "spring" }}
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
              transition={{ duration: 0.3 }}
            >
              {stage.title}
            </motion.span>
            <motion.div
              className={styles.stageIcon}
              animate={{
                opacity: activeStep === index ? 1 : 0,
                y: activeStep === index ? 0 : 20,
                scale: activeStep === index ? 1.2 : 1,
                color: stage.color,
              }}
              transition={{ duration: 0.4, type: "spring" }}
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className={styles.stepContent}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={styles.stepDescription}
              >
                {stages[activeStep].description}
              </motion.p>
            </div>
            <motion.div
              className={styles.stepGlow}
              style={{
                background: stages[activeStep].gradient,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.4 }}
            />
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          whileHover={{ y: -5 }}
        >
          <div
            className={styles.mobileStepHeader}
            style={{
              background: stage.gradient,
            }}
          >
            <div
              className={styles.mobileStepNumber}
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                borderColor: "rgba(255,255,255,0.3)",
                color: "#fff",
              }}
            >
              0{index + 1}
            </div>
            <div className={styles.mobileStepIcon} style={{ color: "#fff" }}>
              {stage.icon}
            </div>
            <h3 className={styles.mobileStepTitle}>{stage.title}</h3>
          </div>
          <div className={styles.mobileStepContent}>
            <p>{stage.description}</p>
          </div>
          <div
            className={styles.mobileStepGlow}
            style={{ background: stage.gradient }}
          />
        </motion.div>
      ))}
    </div>
  );
}
