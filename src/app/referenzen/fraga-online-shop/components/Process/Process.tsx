"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import styles from "./FragaProcess.module.css";

export default function FragaProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const steps = [
    {
      title: "Strategie & Konzeption",
      description:
        "Analyse der E-Commerce-Ziele von Fraga, Auswahl der optimalen Tools (Shopify + Next.js), Festlegung des Workflows und Designs.",
      icon: "🧩",
    },
    {
      title: "Shopify-Setup & API-Anbindung",
      description:
        "Shopify-Backend für Produktverwaltung und Bestellungen eingerichtet. API-Integration für reibungslose Datenflüsse zum Frontend.",
      icon: "🔌",
    },
    {
      title: "UI/UX Design",
      description:
        "In Figma ein modernes, conversion-orientiertes UI gestaltet. Fokus: Nutzerführung, Markenidentität, Mobiloptimierung.",
      icon: "🎨",
    },
    {
      title: "Frontend-Entwicklung",
      description:
        "Umsetzung mit Next.js, TypeScript und React – blitzschnelle Produktseiten, animierte Filter, individueller Warenkorb.",
      icon: "💻",
    },
    {
      title: "Testing & Go-Live",
      description:
        "SEO-Optimierung, Lighthouse-Checks, Payment-Integration. Nach erfolgreichem Testing wurde der Shop live geschaltet.",
      icon: "🚀",
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
    <section className={styles.section} id="fraga-process" ref={containerRef}>
      <div className={styles.container}>
        <motion.div className={styles.header} style={{ y: yText }}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Fraga <span>Shop Launch Prozess</span>
          </motion.h2>
          <div className={styles.titleUnderline} />
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vom Konzept bis zum live geschalteten Shop: Jeder Schritt wurde
            gemeinsam mit Fraga abgestimmt und auf E-Commerce-Erfolg optimiert.
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
