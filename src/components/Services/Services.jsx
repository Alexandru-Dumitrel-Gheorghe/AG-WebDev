"use client";
import styles from "./Services.module.css";
import {
  FiArrowRight,
  FiLayers,
  FiFeather,
  FiMonitor,
  FiCode,
  FiBarChart2,
} from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Wir gestalten moderne, responsive Websites, die nicht nur gut aussehen, sondern Ergebnisse liefern.",
      icon: <FiLayers />,
      accent: "#FF6A2A",
      gradient: "linear-gradient(135deg, #FF6A2A 0%, #FF9E2A 100%)",
    },
    {
      title: "Brand Design",
      description:
        "Ob Markenlaunch, Rebranding oder Markenentwicklung – wir begleiten Ihr Wachstum.",
      icon: <FiFeather />,
      accent: "#FF9247",
      gradient: "linear-gradient(135deg, #FF9247 0%, #FFC72A 100%)",
    },
    {
      title: "Web Design",
      description:
        "Unser UI/UX-Prozess vereint Strategie, Storytelling und Nutzerpsychologie für ein nahtloses Erlebnis.",
      icon: <FiMonitor />,
      accent: "#FFA26B",
      gradient: "linear-gradient(135deg, #FF6A2A 0%, #FF9E2A 100%)",
    },
    {
      title: "Webentwicklung",
      description:
        "Von Frontend bis Backend – wir entwickeln performante, sichere und skalierbare Weblösungen.",
      icon: <FiCode />,
      accent: "#FFA26B",
      gradient: "linear-gradient(135deg, #FF6A2A 0%, #FF9E2A 100%)",
    },
    {
      title: "SEO",
      description:
        "Effektive Suchmaschinenoptimierung für mehr Reichweite, Sichtbarkeit und nachhaltigen Erfolg.",
      icon: <FiBarChart2 />,
      accent: "#FFA26B",
      gradient: "linear-gradient(135deg, #FF6A2A 0%, #FF9E2A 100%)",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const hoverEffect = {
    hover: {
      y: -15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section className={styles.servicesSection} ref={ref}>
      <div className={styles.backgroundElements}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={styles.header}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <span className={styles.titleBlack}>DIGITALE</span>{" "}
          <span className={styles.titleGradient}>LEISTUNGEN</span>
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          Entdecke meine wichtigsten Leistungen – modern, effizient und
          individuell.
        </motion.p>
      </div>

      <motion.div
        className={styles.servicesGrid}
        initial="hidden"
        animate={controls}
        variants={container}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.serviceCard}
            style={{
              "--card-accent": service.accent,
              "--card-gradient": service.gradient,
            }}
            variants={item}
            whileHover="hover"
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={hoverEffect}>
              <div className={styles.cardContent}>
                <div className={styles.iconBox}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
              </div>
              <div className={styles.cardHoverElements}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardHoverBg}></div>
              </div>
              <div className={styles.cardParticles}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={styles.particle}></div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={styles.viewAll}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        <a href="#" className={styles.viewAllLink}>
          <span className={styles.linkText}>Alle anzeigen</span>
          <div className={styles.arrowWrapper}>
            <FiArrowRight className={styles.arrowIcon} />
          </div>
          <span className={styles.linkHover}></span>
        </a>
      </motion.div>
    </section>
  );
}
