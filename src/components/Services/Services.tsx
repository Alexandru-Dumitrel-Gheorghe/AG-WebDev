"use client";
import styles from "./Services.module.css";
import {
  FiArrowRight,
  FiLayers,
  FiFeather,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";

export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "We design modern, responsive websites that do more than look great, they drive results.",
      icon: <FiLayers />,
      accent: "#FF6A2A",
    },
    {
      title: "Brand Design",
      description:
        "Whether you're launching a brand, refreshing your presence, or scaling your business.",
      icon: <FiFeather />,
      accent: "#FF9247",
    },
    {
      title: "Web Design",
      description:
        "Our UI/UX process blends strategy, storytelling, and user psychology to create seamless experiences.",
      icon: <FiMonitor />,
      accent: "#FFA26B",
    },
    {
      title: "App Design",
      description:
        "From wireframes and prototypes to pixel-perfect interfaces, we ensure every click & swipe.",
      icon: <FiSmartphone />,
      accent: "#FF6A2A",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.orangeAccent}>Creative</span> Solutions
        </h2>
        <p className={styles.sectionSubtitle}>Modern Brands —</p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.serviceCard}
            style={{ "--card-accent": service.accent } as React.CSSProperties}
          >
            <div className={styles.iconBox}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <a href="#" className={styles.viewAllLink}>
          View All <FiArrowRight className={styles.arrowIcon} />
        </a>
      </div>
    </section>
  );
}
