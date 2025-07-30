"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./ProjectDetail.module.css";

// MOCK PROJECTS WITH SLUG
const projects = [
  {
    title: "Certus Solutions",
    slug: "certus-solutions",
    category: "Webentwicklung",
    excerpt:
      "B2B-Website für Fensterhandel – moderne Technik, Performance und SEO-Fokus.",
    client: "Certus Solutions",
    year: "2024",
    technologies: ["Next.js", "React", "TypeScript", "Shopify", "CSS Modules"],
    heroImage: "/referenzen/laptop-certus.png",
    overview: [
      "Die Certus Solutions Website wurde für B2B-Kunden in Deutschland konzipiert, um Fenster, Türen und Bauelemente direkt aus Rumänien zu vermarkten. Fokus lag auf Schnelligkeit, intuitiver UX und responsivem Design.",
      "Das Projekt umfasst Multilanguage, individuelle Angebotsformulare, ein eigenes CMS und wurde komplett mit Next.js und React umgesetzt.",
    ],
    gallery: [
      {
        url: "/referenzen/referenzen-phone-certus.png",
        caption: "Produktkategorie – klare Übersicht und Anfragefunktion",
      },
      {
        url: "/referenzen/referenzen-phone-certus.png",
        caption: "Kontaktformular mit Upload-Option für Pläne",
      },
    ],
    features: [
      "Individuelles B2B-Design",
      "Next.js SSR für Top-SEO",
      "Eigenes Anfrageformular mit Datei-Upload",
      "100/100 Lighthouse-Score",
      "Schnelle Ladezeiten durch Image-Optimierung",
    ],
    testimonial: {
      text: "Mit AG WebDev haben wir in kurzer Zeit eine moderne, professionelle Website erhalten. Unsere Anfragen sind sofort gestiegen!",
      name: "Marius Popescu",
      role: "Geschäftsführer, Certus Solutions",
      avatar: "/images/certus.png",
    },
  },
  {
    title: "Fraga Demo Shop",
    slug: "fraga-demo-shop",
    category: "E-Commerce",
    excerpt:
      "Demo Online-Shop mit Shopify-Backend, Next.js-Frontend, Top-Performance und SEO.",
    client: "Demo Projekt",
    year: "2024",
    technologies: ["Next.js", "React", "Shopify", "CSS Modules"],
    heroImage: "/referenzen/fraga-refernezen.png",
    overview: [
      "Ein modernes, responsives E-Commerce-Template für kleine und mittlere Unternehmen. Die Plattform zeigt, wie schnell und flexibel ein Shop auf Basis von Shopify API, Next.js und React umgesetzt werden kann.",
      "Highlights: Schneller Checkout, mobiloptimierte UI, SEO-optimierte Produktseiten und voll modulare Komponentenstruktur.",
    ],
    gallery: [
      {
        url: "/referenzen/fraga-referenzen-tablet.png",
        caption: "Startseite mit Produktgalerie",
      },
      {
        url: "/referenzen/referenzen-phone-fraga.png",
        caption: "Produktdetail mit Shop-Integration",
      },
    ],
    features: [
      "Shopify API angebunden",
      "SEO-freundliche Produktseiten",
      "Superschneller Checkout-Flow",
      "Voll responsives Design",
      "Komplett modular aufgebaut",
    ],
  },
  {
    title: "Oberholzer Umzugservice",
    slug: "oberholzer-umzugservice",
    category: "Webdesign / Logistik",
    excerpt:
      "Modernes Webdesign für einen der bekanntesten Umzugsdienstleister in der Schweiz. Fokus: Conversion, SEO & schnelle Ladezeiten.",
    client: "Oberholzer Umzugservice AG",
    year: "2024",
    technologies: ["Next.js", "React", "CSS Modules", "Framer Motion"],
    heroImage: "/referenzen/laptop-oberholzer.png",
    overview: [
      "Für Oberholzer wurde eine Conversion-starke Website gebaut, die Kundenanfragen beschleunigt und das Unternehmen digital positioniert. Das Design spiegelt Präzision und Zuverlässigkeit wider, kombiniert mit maximaler Übersichtlichkeit für mobile & Desktop.",
      "Die Seite überzeugt durch ein performantes UI, verständliche Angebote, direkten Call-to-Action und 100/100 Lighthouse-Score. Modernste Animationen sorgen für ein hochwertiges Erlebnis.",
    ],
    gallery: [
      {
        url: "/referenzen/oberrholzer-tablet.png",
        caption: "Hero-Sektion mit animiertem Hintergrund",
      },
      {
        url: "/referenzen/referenzen-phone-certus.png",
        caption: "Detaillierte Angebotsübersicht & Anfrageformular",
      },
    ],
    features: [
      "Conversion-optimiertes Webdesign",
      "Extrem schnelle Ladezeiten",
      "100/100 SEO & Lighthouse",
      "Direkte Angebotsanfrage online",
      "Premium UI & Animationen mit Framer Motion",
    ],
    testimonial: {
      text: "Meine Erwartungen wurden weit übertroffen. Schnelle Umsetzung, leichte Einrichtung und top Support! Vielen Dank Alex! Grüsse aus der Schweiz",
      name: "Lirim Zenki",
      role: "Inhaber, Oberholzer Umzugservice",
      avatar: "/images/logo5.png",
    },
  },
];

// PROJECT DETAIL COMPONENT
const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <section className={styles.projectDetail}>
      <div className={styles.container}>
        {/* Project Header */}
        <motion.div
          className={styles.projectHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.excerpt}>{project.excerpt}</p>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Kunde</span>
              <span className={styles.metaValue}>{project.client}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Jahr</span>
              <span className={styles.metaValue}>{project.year}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Technologien</span>
              <div className={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className={styles.techPill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className={styles.heroImageContainer}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className={styles.heroImage}
          />
          <div className={styles.imageOverlay}></div>
        </motion.div>

        {/* Project Content */}
        <div className={styles.projectContent}>
          {/* Overview Section */}
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Projektüberblick</h2>
            <div className={styles.sectionContent}>
              {project.overview.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          {project.gallery && (
            <motion.div
              className={styles.gallery}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  className={styles.galleryItem}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img
                    src={image.url}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className={styles.galleryImage}
                  />
                  {image.caption && (
                    <p className={styles.imageCaption}>{image.caption}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Features Section */}
          {project.features && (
            <motion.div
              className={styles.section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featuresList}>
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className={styles.featureItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className={styles.featureIcon}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className={styles.featureText}>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <motion.div
              className={styles.testimonialSection}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  "{project.testimonial.text}"
                </p>
                <div className={styles.testimonialAuthor}>
                  <img
                    src={project.testimonial.avatar}
                    alt={project.testimonial.name}
                    className={styles.authorAvatar}
                  />
                  <div>
                    <p className={styles.authorName}>
                      {project.testimonial.name}
                    </p>
                    <p className={styles.authorRole}>
                      {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Project Navigation */}
        <div className={styles.projectNavigation}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              className={styles.ctaButton}
              href={`/projekte/${project.slug}`}
            >
              Projekt ansehen
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// CLIENT PAGE - DISPLAYS ALL PROJECTS
export default function ProjekteClient() {
  return (
    <>
      {projects.map((project, idx) => (
        <ProjectDetail key={project.slug} project={project} />
      ))}
    </>
  );
}
