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
  { label: "Kontakt", href: "#contact" },
];

export default function HeaderAGWebDev() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Add scroll effect
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
          <Image
            src="/logo.png"
            width={38}
            height={38}
            alt="AG WebDev Logo"
            className={styles.logoImg}
          />
        </motion.div>
        <motion.span
          className={styles.logoText}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          AG WebDev
        </motion.span>
      </div>

      <div className={styles.menuBox}>
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
              <rect y="4" width="24" height="3" rx="1.5" fill="#fff" />
              <rect y="10.5" width="24" height="3" rx="1.5" fill="#fff" />
              <rect y="17" width="24" height="3" rx="1.5" fill="#fff" />
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
                stroke="#fff"
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
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </svg>
          )}
        </motion.button>
        <motion.button
          className={styles.contactBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Kontakt
        </motion.button>
      </div>

      {/* Dropdown */}
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
              <motion.a
                href={link.href}
                key={link.href}
                className={styles.dropdownLink}
                onClick={() => setOpen(false)}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
