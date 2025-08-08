"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.wave}></div>
      <div className={styles.container}>
        {/* Logo & Info */}
        <div className={styles.logoColumn}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoImgLink} aria-label="Home">
              <Image
                src="/logo-2.png"
                alt="AG WebDev Logo"
                width={150}
                height={50}
                className={styles.logoImg}
                priority
              />
            </Link>
            <p className={styles.desc}>
              Professionelle Webentwicklung, SEO & digitale Lösungen aus
              Deutschland.
            </p>
          </div>
          <div className={styles.socials}>
            <a
              className={styles.socialLink}
              href="https://github.com/Alexandru-Dumitrel-Gheorghe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
              <span className={styles.socialTooltip}>GitHub</span>
            </a>
            <a
              className={styles.socialLink}
              href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span className={styles.socialTooltip}>LinkedIn</span>
            </a>
            <a
              className={styles.socialLink}
              href="mailto:contact@ag-webdev.de"
              aria-label="E-Mail"
            >
              <FaEnvelope />
              <span className={styles.socialTooltip}>E-Mail</span>
            </a>
          </div>
        </div>

        {/* Leistungen */}
        <div className={styles.navColumn}>
          <h3 className={styles.navTitle}>Leistungen</h3>
          <ul className={styles.navList}>
            {[
              { href: "/webdesign", text: "Webdesign" },
              { href: "/Webentwicklung", text: "Webentwicklung" },
              { href: "/seo", text: "SEO & Marketing" },
              { href: "/google-indexierung", text: "Google Indexierung" },
              { href: "/wartung-support", text: "Wartung & Support" },
              { href: "/beratung", text: "Beratung" },
            ].map((item, index) => (
              <li key={index} className={styles.navListItem}>
                <Link className={styles.navLink} href={item.href}>
                  {item.text}
                  <FiArrowUpRight className={styles.linkArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navColumn}>
          <h3 className={styles.navTitle}>Navigation</h3>
          <ul className={styles.navList}>
            {[
              { href: "/", text: "Startseite" },
              { href: "/blog", text: "Blog" },
              { href: "/about", text: "Über mich" },
              { href: "/kontakt", text: "Kontakt" },
            ].map((item, index) => (
              <li key={index} className={styles.navListItem}>
                <Link className={styles.navLink} href={item.href}>
                  {item.text}
                  <FiArrowUpRight className={styles.linkArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contactColumn}>
          <h3 className={styles.navTitle}>Kontakt</h3>
          <address className={styles.contact}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>
                82256{" "}
                <Link href="/fuerstenfeldbruck" className={styles.contactLink}>
                  Fürstenfeldbruck
                </Link>
                , Deutschland
              </span>
            </div>

            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <a href="tel:+4915772158264" className={styles.contactLink}>
                +49 157 7215 8264
              </a>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <a
                href="mailto:contact@ag-webdev.de"
                className={styles.contactLink}
              >
                contact@ag-webdev.de
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copy}>
        <div className={styles.copyContainer}>
          <span>
            © {new Date().getFullYear()} AG WebDev. Alle Rechte vorbehalten.
          </span>
          <div className={styles.legalLinks}>
            {[
              { href: "/datenschutz", text: "Datenschutz" },
              { href: "/impressum", text: "Impressum" },
              { href: "/agb", text: "AGB" },
            ].map((item, index) => (
              <Link key={index} href={item.href} className={styles.legalLink}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
