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

export default function Footer() {
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
                width={135}
                height={42}
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
            </a>
            <a
              className={styles.socialLink}
              href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className={styles.socialLink}
              href="mailto:contact@ag-webdev.de"
              aria-label="E-Mail"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Leistungen */}
        <div className={styles.navColumn}>
          <h3 className={styles.navTitle}>Leistungen</h3>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/webdesign">
                Webdesign
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/Webentwicklung">
                Webentwicklung
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/seo">
                SEO & Marketing
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/google-indexierung">
                Google Indexierung
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/wartung-support">
                Wartung & Support
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/beratung">
                Beratung
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navColumn}>
          <h3 className={styles.navTitle}>Navigation</h3>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/">
                Zur Startseite von AG WebDev
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/blog">
                Blog
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/about">
                Über mich
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.navLink} href="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contactColumn}>
          <h3 className={styles.navTitle}>Kontakt</h3>
          <address className={styles.contact}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>82256 Fürstenfeldbruck, Deutschland</span>
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
            <Link href="/datenschutz" className={styles.legalLink}>
              Datenschutz
            </Link>
            <Link href="/impressum" className={styles.legalLink}>
              Impressum
            </Link>
            <Link href="/agb" className={styles.legalLink}>
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
