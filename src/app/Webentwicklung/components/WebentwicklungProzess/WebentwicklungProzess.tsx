"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import styles from "./WebentwicklungProzess.module.css"; // păstrează acest CSS

export default function WebentwicklungProzess() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const steps = [
    {
      title: "Anforderungsanalyse",
      description:
        "Wir analysieren Ihre geschäftlichen Ziele, Prozesse und technischen Anforderungen für die optimale Web-Lösung.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 17L9 11L13 15L21 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16H16V20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Technisches Konzept",
      description:
        "Wir erstellen ein technisches Architektur- und Datenbankkonzept – skalierbar, sicher und zukunftsfähig.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
          <path d="M9 21V9" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Programmierung & Entwicklung",
      description:
        "Wir setzen Ihre Anwendung agil und effizient um – mit modernen Technologien (z.B. React, Next.js, Node.js).",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Testing & Qualitätssicherung",
      description:
        "Intensive Tests (Unit, Integration, Usability), Code-Reviews & Optimierung für maximale Stabilität und Performance.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 9H9.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 9H15.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Deployment & Wartung",
      description:
        "Live-Schaltung, Überwachung & regelmäßige Updates – damit Ihre Lösung sicher, performant & zukunftsfähig bleibt.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 15L12 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 9L12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const progressWidth = `${(activeStep / (steps.length - 1)) * 100}%`;

  return (
    <section
      className={styles.section}
      id="entwicklungs-prozess"
      ref={containerRef}
    >
      <div className={styles.container}>
        <motion.div className={styles.header} style={{ y: yText }}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Unser <span>Entwicklungsprozess</span>
          </motion.h2>
          <div className={styles.titleUnderline} />
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ein strukturierter Ablauf für professionelle Weblösungen –
            effizient, skalierbar und perfekt auf Ihre Anforderungen abgestimmt.
          </motion.p>
        </motion.div>

        <div className={styles.processContainer}>
          {!isMobile ? (
            <DesktopProcess
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              progressWidth={progressWidth}
            />
          ) : (
            <MobileProcess steps={steps} />
          )}
        </div>
      </div>
    </section>
  );
}

// Desktop process navigation
function DesktopProcess({
  steps,
  activeStep,
  setActiveStep,
  progressWidth,
}: {
  steps: any[];
  activeStep: number;
  setActiveStep: (index: number) => void;
  progressWidth: string;
}) {
  return (
    <>
      <div className={styles.stepsNavigation}>
        <div className={styles.progressBar} style={{ width: progressWidth }} />
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`${styles.stepNavItem} ${
              activeStep === index ? styles.active : ""
            }`}
            onClick={() => setActiveStep(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.stepNavIndicator}>
              <div className={styles.stepNavNumber}>0{index + 1}</div>
              <div className={styles.stepNavIcon}>{step.icon}</div>
            </div>
            <div className={styles.stepNavTitle}>{step.title}</div>
          </motion.div>
        ))}
      </div>

      <div className={styles.stepsContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            className={styles.stepContent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p>{steps[activeStep].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

// Mobile process steps
function MobileProcess({ steps }: { steps: any[] }) {
  return (
    <div className={styles.mobileSteps}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className={styles.mobileStep}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <div className={styles.mobileStepHeader}>
            <div className={styles.mobileStepNumber}>0{index + 1}</div>
            <div className={styles.mobileStepIcon}>{step.icon}</div>
            <h3 className={styles.mobileStepTitle}>{step.title}</h3>
          </div>
          <div className={styles.mobileStepContent}>
            <p>{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
