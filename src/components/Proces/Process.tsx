// components/DesignThinkingProcess.tsx
"use client";
import { useState, useEffect } from "react";
import styles from "./Proces.module.css";

export default function DesignThinkingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
    },
    {
      title: "IDEENFINDUNG",
      description:
        "Innovative Lösungen werden durch strukturiertes Brainstorming und kreative Techniken entwickelt.",
      icon: "💡",
    },
    {
      title: "DEFINITION",
      description:
        "Die Recherche-Ergebnisse werden analysiert und gebündelt, um das zentrale Problem klar zu definieren.",
      icon: "🎯",
    },
    {
      title: "PROTOTYPING",
      description:
        "Greifbare Prototypen werden erstellt, um Ideen testbar zu machen und schnelle Iterationen zu ermöglichen.",
      icon: "🛠️",
    },
    {
      title: "TESTEN",
      description:
        "Die Lösungen werden mit echten Nutzern getestet und anhand des erhaltenen Feedbacks gezielt optimiert.",
      icon: "✅",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <span className={styles.subTitle}>METHODOLOGIE</span>
          <h1 className={styles.mainTitle}>Design Thinking Prozess</h1>
          <div className={styles.divider}></div>
        </div>
      </div>

      <div className={styles.processContainer}>
        {!isMobile ? (
          <>
            <div className={styles.stages}>
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className={`${styles.stageContainer} ${
                    activeStep === index ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={styles.stageMarker}>
                    <div className={styles.stageNumber}>0{index + 1}</div>
                    <div className={styles.stageLine}></div>
                  </div>
                  <span className={styles.stage}>{stage.title}</span>
                  <div className={styles.stageIcon}>{stage.icon}</div>
                </div>
              ))}
            </div>

            <div className={styles.processSteps}>
              <div className={styles.step}>
                <div className={styles.stepContent}>
                  <p>{stages[activeStep].description}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.mobileProcess}>
            {stages.map((stage, index) => (
              <div key={index} className={styles.mobileStep}>
                <div className={styles.mobileStepHeader}>
                  <div className={styles.mobileStepNumber}>0{index + 1}</div>
                  <div className={styles.mobileStepIcon}>{stage.icon}</div>
                  <h3 className={styles.mobileStepTitle}>{stage.title}</h3>
                </div>
                <div className={styles.mobileStepContent}>
                  <p>{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
