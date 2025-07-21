"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Închide meniul la click în afara lui
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="5.5" cy="7.5" r="2.5" fill="#111" />
          <circle cx="12" cy="16" r="2.5" fill="#111" />
          <circle cx="18.5" cy="7.5" r="2.5" fill="#111" />
          <circle cx="12" cy="4" r="1.5" fill="#111" />
        </svg>
        <span className={styles.brand}>AG WebDev</span>
      </div>

      <nav className={styles.right}>
        {/* Butonul principal de contact */}
        <button className={styles.contactBtn}>Let&apos;s Contact</button>

        {/* Butonul de menu */}
        <button
          ref={buttonRef}
          className={`${styles.menuBtn} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={styles.menuIcon}></span>
        </button>

        {/* Meniul compact */}
        {isMenuOpen && (
          <div ref={menuRef} className={styles.dropdownMenu}>
            <button
              className={styles.closeBtn}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1 1L15 15M15 1L1 15"
                  stroke="#ff5d2a"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div className={styles.menuContent}>
              <a href="#about" className={styles.menuItem}>
                <span>About</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 6H11M11 6L6 1M11 6L6 11"
                    stroke="#ff5d2a"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a href="#projects" className={styles.menuItem}>
                <span>Projects</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 6H11M11 6L6 1M11 6L6 11"
                    stroke="#ff5d2a"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a href="#services" className={styles.menuItem}>
                <span>Services</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 6H11M11 6L6 1M11 6L6 11"
                    stroke="#ff5d2a"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a href="#testimonials" className={styles.menuItem}>
                <span>Testimonials</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 6H11M11 6L6 1M11 6L6 11"
                    stroke="#ff5d2a"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
