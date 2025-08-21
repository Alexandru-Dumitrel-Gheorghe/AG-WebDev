"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ChevronRight } from "lucide-react";
import { useMenuScroll } from "@/components/Hooks/useMenuScroll";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Über Mich", href: "/about" },
  { label: "Referenzen", href: "#projects", scrollToId: "projects" },
  { label: "Leistungen", href: "#services", scrollToId: "services" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Domain Check", href: "/domain-check" },
];

export default function HeaderAGWebDev() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { handleMenuClick } = useMenuScroll(setOpen);

  // Dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setDarkMode(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logoLink}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Image
              src={darkMode ? "/logo-2.png" : "/logo.png"}
              width={48}
              height={48}
              alt="AG WebDev Logo"
              className={styles.logoImg}
            />
          </motion.div>
          <span className={styles.logoText}>AG WebDev</span>
        </Link>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {menuLinks.map((link) => (
              <li key={link.label}>
                {link.scrollToId ? (
                  <a
                    href={`/#${link.scrollToId}`}
                    className={styles.navLink}
                    onClick={(e) => handleMenuClick(e, link)}
                  >
                    {link.label}
                    <div className={styles.navLinkUnderline} />
                  </a>
                ) : (
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                    <div className={styles.navLinkUnderline} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <motion.button
            className={styles.themeToggle}
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Light Mode" : "Dark Mode"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? (
              <Sun size={20} className={styles.themeIcon} />
            ) : (
              <Moon size={20} className={styles.themeIcon} />
            )}
          </motion.button>

          <Link href="/kontakt" className={styles.contactBtn}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt
            </motion.span>
          </Link>

          <motion.button
            className={styles.menuButton}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? (
              <X size={28} className={styles.menuIcon} />
            ) : (
              <Menu size={28} className={styles.menuIcon} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className={styles.mobileMenuContent}>
              <ul className={styles.mobileNavList}>
                {menuLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    {link.scrollToId ? (
                      <a
                        href={`/#${link.scrollToId}`}
                        className={styles.mobileNavLink}
                        onClick={(e) => handleMenuClick(e, link)}
                      >
                        <span>{link.label}</span>
                        <ChevronRight
                          size={20}
                          className={styles.chevronIcon}
                        />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={styles.mobileNavLink}
                        onClick={() => setOpen(false)}
                      >
                        <span>{link.label}</span>
                        <ChevronRight
                          size={20}
                          className={styles.chevronIcon}
                        />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className={styles.mobileMenuFooter}>
                <button
                  className={styles.mobileThemeToggle}
                  onClick={toggleDarkMode}
                >
                  {darkMode ? (
                    <>
                      <Sun size={20} />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon size={20} />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
