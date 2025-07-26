"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BlogList.module.css";
import Image from "next/image";

const posts = [
  {
    slug: "wie-funktioniert-google-indexierung",
    title: "Wie funktioniert die Google Indexierung?",
    excerpt:
      "So gelangt Ihre Website in den Google-Index und wird gefunden – Grundlagen, Tipps und aktuelle Trends.",
    date: "20. Juli 2025",
    cover: "/images/google-blog.png",
    readTime: "4 Min. Lesezeit",
  },
  {
    slug: "webdesign-trends-2025",
    title: "Webdesign Trends 2025",
    excerpt:
      "Welche Farben, Layouts & Animationen werden relevant? Inspiration & konkrete Beispiele.",
    date: "30. Juni 2025",
    cover: "/images/design-blog.png",
    readTime: "6 Min. Lesezeit",
  },
  {
    slug: "seo-fuer-anfanger",
    title: "SEO für Anfänger: Die wichtigsten Basics",
    excerpt:
      "Wie funktioniert Suchmaschinenoptimierung? Einsteiger-Guide für die ersten Schritte mit SEO.",
    date: "05. Mai 2025",
    cover: "/images/blog-seo.png",
    readTime: "5 Min. Lesezeit",
  },
  {
    slug: "wordpress-oder-headless-cms",
    title: "WordPress vs. Headless CMS: Was passt zu deinem Projekt?",
    excerpt:
      "Vergleich: Vorteile & Nachteile von WordPress und modernen Headless CMS Lösungen.",
    date: "16. April 2025",
    cover: "/images/headless-blog.png",
    readTime: "7 Min. Lesezeit",
  },
];

export default function BlogList() {
  return (
    <section className={styles.listSection}>
      <div className={styles.grid}>
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          >
            <Link href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={400}
                  height={250}
                  className={styles.cover}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.linkContainer}>
                  <span className={styles.link}>
                    Mehr lesen
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 3H13V11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13 3L3 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
