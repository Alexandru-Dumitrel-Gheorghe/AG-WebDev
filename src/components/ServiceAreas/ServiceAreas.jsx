"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceAreas.module.css";

const MotionLink = motion(Link);

export default function ServiceAreas() {
  const cities = [
    {
      name: "Augsburg",
      image: "/images/augsburg-hero.png",
      description:
        "Professionelle Webentwicklung und Digitalmarketing-Lösungen für Unternehmen in Augsburg und Umgebung.",
      link: "/augsburg",
    },
    {
      name: "Fürstenfeldbruck",
      image: "/images/ffb-hero.png",
      description:
        "Maßgeschneiderte Webdesigns und Online-Strategien für lokale Unternehmen in Fürstenfeldbruck.",
      link: "/fuerstenfeldbruck",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
    hover: { y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" },
  };

  return (
    <section className={styles.section} id="service-areas">
      {/* Parallax background */}
      <motion.div
        className={styles.parallaxBg}
        initial={{ y: 0 }}
        whileInView={{ y: -40 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className={styles.particles} aria-hidden>
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className={styles.particle}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
            style={{
              "--i-left": `${(i * 11) % 100}%`,
              "--i-top": `${(i * 17) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            <span className={styles.underline}>Unsere Servicegebiete</span>
          </h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Lokale Expertise für Unternehmen in Augsburg und Fürstenfeldbruck
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={styles.cardsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cities.map((city, idx) => (
            <motion.article
              key={city.name}
              className={styles.card}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={city.image}
                  alt={city.name}
                  width={600}
                  height={400}
                  className={styles.image}
                  priority={idx === 0}
                />
                <div className={styles.cityBadge}>
                  <span>{city.name}</span>
                </div>
              </div>

              <div className={styles.content}>
                <p className={styles.description}>{city.description}</p>

                <MotionLink
                  href={city.link}
                  className={styles.button}
                  whileHover={{
                    backgroundColor: "var(--accent-color)",
                    color: "white",
                    boxShadow: "0 10px 20px rgba(252, 107, 40, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${city.name} – mehr erfahren`}
                >
                  Mehr erfahren
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </MotionLink>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
