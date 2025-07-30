"use client";
import styles from "./CTASection.module.css";
import Image from "next/image";
import { useState } from "react";
import BuchenModal from "../Buchenmodal/Buchenmodal";

const CTA_PLAN = {
  name: "Webentwicklung (Individuell)",
  price: "", // sau adaugi un preț dacă vrei, altfel lasă gol
};

export default function WebentwicklungCTA() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <section className={styles.cta}>
      <div className={styles.left}>
        <div className={styles.phoneWrapper}>
          <Image
            src="/images/fraga-mockup.png"
            alt="Webentwicklung am Handy"
            width={220}
            height={410}
            className={styles.phoneImg}
            priority
          />
          <span className={styles.badge}>
            100%
            <br />
            INDIVIDUELL
          </span>
        </div>
        {/* Laptop mockup peste telefon */}
        <div className={styles.laptopImgWrapper}>
          <Image
            src="/images/Fraga-projekt.png"
            alt="Web-Projekt am Laptop"
            width={270}
            height={157}
            className={styles.laptopImg}
            priority
          />
        </div>
      </div>

      {/* Separator vertical */}
      <div className={styles.separator} aria-hidden="true" />

      <div className={styles.right}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.mainTitle}>Moderne</h2>
          <h2 className={styles.subTitle}>Webentwicklung für Ihren Erfolg</h2>
        </div>
        <p className={styles.desc}>
          Skalierbare Lösungen, perfekte Performance und höchste Sicherheit –
          <br />
          maßgeschneidert für Ihr Business.
          <br />
          Starten Sie Ihr nächstes Projekt mit uns!
        </p>
        <button
          className={styles.ctaBtn}
          type="button"
          onClick={handleOpenModal}
        >
          Jetzt Projekt starten
        </button>
      </div>

      {/* MODAL */}
      <BuchenModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        plan={CTA_PLAN}
      />
    </section>
  );
}
