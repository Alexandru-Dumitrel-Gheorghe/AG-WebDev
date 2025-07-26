// src/components/Footer/Footer.tsx
import styles from "./Footer.module.css";
import Link from "next/link";
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
        {/* Left: Logo & Info */}
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>AG</span>
            <span className={styles.logoSub}>WebDev</span>
          </Link>
          <p className={styles.desc}>
            Individuelle Webentwicklung, SEO & digitales Wachstum aus
            Deutschland.
          </p>
          <div className={styles.socials}>
            <a
              className={styles.socialLink}
              href="https://github.com/agwebdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className={styles.socialLink}
              href="https://www.linkedin.com/in/agwebdev"
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

        {/* Center: Navigation */}
        <div className={styles.center}>
          <nav className={styles.nav}>
            <span className={styles.navTitle}>Seiten</span>
            <ul className={styles.navList}>
              <li>
                <Link className={styles.navLink} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} href="/webdesign">
                  Webdesign
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} href="/Webentwicklung">
                  Webentwicklung
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} href="/seo">
                  SEO
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} href="/kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right: Contact */}
        <div className={styles.right}>
          <span className={styles.navTitle}>Kontakt</span>
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

      {/* Bottom Line */}
      <div className={styles.copy}>
        <div className={styles.copyContainer}>
          © {new Date().getFullYear()} AG WebDev. Alle Rechte vorbehalten.
          <div className={styles.legalLinks}>
            <Link href="/datenschutz" className={styles.legalLink}>
              Datenschutz
            </Link>
            <Link href="/impressum" className={styles.legalLink}>
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
