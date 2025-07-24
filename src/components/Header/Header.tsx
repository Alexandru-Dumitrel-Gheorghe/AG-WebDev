"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Über uns", href: "#about" },
  { label: "Projekte", href: "#projects" },
  { label: "Leistungen", href: "#services" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function HeaderAGWebDev() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle dark mode
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
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setDarkMode(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
      <div className={styles.logoBox}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/">
            {darkMode ? (
              <Image
                src="/logo-2.png" // Your dark mode logo path
                width={38}
                height={38}
                alt="AG WebDev Logo"
                className={styles.logoImg}
              />
            ) : (
              <Image
                src="/logo.png" // Your light mode logo path
                width={38}
                height={38}
                alt="AG WebDev Logo"
                className={styles.logoImg}
              />
            )}
          </Link>
        </motion.div>
      </div>

      {/* Rest of your header code remains the same */}
      <div className={styles.menuBox}>
        {/* Theme Toggle Button */}
        <motion.button
          className={styles.themeToggle}
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                fill="currentColor"
              />
              <path
                d="M12 2V4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 20V22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4.92993 4.92999L6.33993 6.33999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M17.6599 17.66L19.0699 19.07"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M2 12H4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M20 12H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6.33993 17.66L4.92993 19.07"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M19.0699 4.92999L17.6599 6.33999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3C12.5523 3 13 3.44772 13 4V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V4C11 3.44772 11.4477 3 12 3Z"
                fill="currentColor"
              />
              <path
                d="M18.3635 5.63604C18.754 6.02657 18.754 6.65973 18.3635 7.05026L17.6568 7.75697C17.2663 8.14749 16.6331 8.14749 16.2426 7.75697C15.8521 7.36644 15.8521 6.73328 16.2426 6.34275L16.9493 5.63604C17.3398 5.24552 17.973 5.24552 18.3635 5.63604Z"
                fill="currentColor"
              />
              <path
                d="M21 12C21 12.5523 20.5523 13 20 13H19C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11H20C20.5523 11 21 11.4477 21 12Z"
                fill="currentColor"
              />
              <path
                d="M18.3635 18.364C18.754 17.9734 18.754 17.3403 18.3635 16.9497L17.6568 16.243C17.2663 15.8525 16.6331 15.8525 16.2426 16.243C15.8521 16.6335 15.8521 17.2667 16.2426 17.6572L16.9493 18.364C17.3398 18.7545 17.973 18.7545 18.3635 18.364Z"
                fill="currentColor"
              />
              <path
                d="M12 18C12.5523 18 13 18.4477 13 19V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V19C11 18.4477 11.4477 18 12 18Z"
                fill="currentColor"
              />
              <path
                d="M7.75693 17.6569C8.14745 17.2663 8.14745 16.6332 7.75693 16.2426C7.3664 15.8521 6.73324 15.8521 6.34271 16.2426L5.636 16.9493C5.24548 17.3399 5.24548 17.973 5.636 18.3636C6.02653 18.7541 6.65969 18.7541 7.05022 18.3636L7.75693 17.6569Z"
                fill="currentColor"
              />
              <path
                d="M6 12C6 12.5523 5.55228 13 5 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H5C5.55228 11 6 11.4477 6 12Z"
                fill="currentColor"
              />
              <path
                d="M7.75693 7.75736C8.14745 7.36683 8.14745 6.73367 7.75693 6.34315L7.05022 5.63644C6.65969 5.24591 6.02653 5.24591 5.636 5.63644C5.24548 6.02696 5.24548 6.66012 5.636 7.05065L6.34271 7.75736C6.73324 8.14788 7.3664 8.14788 7.75693 7.75736Z"
                fill="currentColor"
              />
              <path
                d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
                fill="currentColor"
              />
            </svg>
          )}
        </motion.button>

        <motion.button
          className={styles.menuBtn}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü öffnen"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {!open ? (
            <svg
              width={28}
              height={28}
              viewBox="0 0 24 24"
              className={styles.menuIcon}
            >
              <rect y="4" width="24" height="3" rx="1.5" fill="currentColor" />
              <rect
                y="10.5"
                width="24"
                height="3"
                rx="1.5"
                fill="currentColor"
              />
              <rect y="17" width="24" height="3" rx="1.5" fill="currentColor" />
            </svg>
          ) : (
            <svg
              width={28}
              height={28}
              viewBox="0 0 24 24"
              className={styles.menuIcon}
            >
              <motion.line
                x1="5"
                y1="5"
                x2="19"
                y2="19"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.line
                x1="19"
                y1="5"
                x2="5"
                y2="19"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </svg>
          )}
        </motion.button>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/kontakt" className={styles.contactBtn}>
            Kontakt
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.dropdownMenu}
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {menuLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5, scale: 1.05 }}
              >
                <Link
                  href={link.href}
                  className={styles.dropdownLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
