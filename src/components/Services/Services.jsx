"use client";
import styles from "./Services.module.css";
import {
  FiArrowRight,
  FiLayers,
  FiFeather,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Wir gestalten moderne, responsive Websites, die nicht nur gut aussehen, sondern Ergebnisse liefern.",
      icon: <FiLayers />,
      accent: "#FF6A2A",
    },
    {
      title: "Brand Design",
      description:
        "Ob Markenlaunch, Rebranding oder Markenentwicklung – wir begleiten Ihr Wachstum.",
      icon: <FiFeather />,
      accent: "#FF9247",
    },
    {
      title: "Web Design",
      description:
        "Unser UI/UX-Prozess vereint Strategie, Storytelling und Nutzerpsychologie für ein nahtloses Erlebnis.",
      icon: <FiMonitor />,
      accent: "#FFA26B",
    },
    {
      title: "App Design",
      description:
        "Von Wireframes bis zu pixelgenauen Interfaces – wir sorgen für das perfekte Nutzererlebnis auf jedem Gerät.",
      icon: <FiSmartphone />,
      accent: "#FF6A2A",
    },
  ];

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.header}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className={styles.titleBlack}>DIGITALE</span>{" "}
          <span className={styles.titleOrange}>LEISTUNGEN</span>
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Entdecke meine wichtigsten Leistungen – modern, effizient und
          individuell.
        </motion.p>
      </div>

      <motion.div
        className={styles.servicesGrid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.serviceCard}
            style={{ "--card-accent": service.accent }}
            variants={item}
            whileHover={{ y: -8 }}
          >
            <div className={styles.iconBox}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <div className={styles.cardHoverEffect}></div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={styles.viewAll}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <a href="#" className={styles.viewAllLink}>
          Alle anzeigen <FiArrowRight className={styles.arrowIcon} />
        </a>
      </motion.div>
    </section>
  );
}
