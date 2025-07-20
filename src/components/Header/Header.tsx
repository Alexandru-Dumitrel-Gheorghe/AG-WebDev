"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Header animation on mount
    gsap.from(headerRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Link animations
    gsap.from(`.${styles.navLinks} li`, {
      y: -10,
      opacity: 0,
      stagger: 0.1,
      delay: 0.3,
      ease: "power2.out",
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <nav ref={navRef} className={styles.nav}>
        <div className={styles.logoWrap}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo-2.png"
              width={48}
              height={48}
              alt="AG WebDev Logo"
              className={styles.logo}
            />
            <span className={styles.logoText}>AG WebDev</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuIcon}></span>
        </button>

        {/* Navigation links */}
        <div
          className={`${styles.navContainer} ${isMenuOpen ? styles.open : ""}`}
        >
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <span className={styles.linkText}>Home</span>
                <span className={styles.linkHover}></span>
              </Link>
            </li>
            <li>
              <Link href="/leistungen" onClick={() => setIsMenuOpen(false)}>
                <span className={styles.linkText}>Leistungen</span>
                <span className={styles.linkHover}></span>
              </Link>
            </li>
            <li>
              <Link href="/referenzen" onClick={() => setIsMenuOpen(false)}>
                <span className={styles.linkText}>Referenzen</span>
                <span className={styles.linkHover}></span>
              </Link>
            </li>
            <li>
              <Link href="/ueber-mich" onClick={() => setIsMenuOpen(false)}>
                <span className={styles.linkText}>Über mich</span>
                <span className={styles.linkHover}></span>
              </Link>
            </li>
            <li>
              <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>
                <span className={styles.linkText}>Kontakt</span>
                <span className={styles.linkHover}></span>
              </Link>
            </li>
          </ul>
          <div className={styles.ctaWrap}>
            <Link
              href="/beratung"
              className={styles.ctaBtn}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={styles.ctaText}>Kostenlose Beratung</span>
              <span className={styles.ctaHover}></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
