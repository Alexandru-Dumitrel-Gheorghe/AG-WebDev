"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setSubmitSuccess(null);
    setSubmitError(null);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        {
          from_name: data.name,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_PUBLIC_KEY
      );
      setSubmitSuccess(
        "Vielen Dank für Ihre Nachricht! Ich melde mich innerhalb von 24 Stunden bei Ihnen."
      );
      reset();
    } catch (error) {
      setSubmitError(
        "Entschuldigung, beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt per E-Mail."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section with Banner Image */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/contact-banner.png"
            alt="Contact Banner"
            fill
            priority
            className={styles.bannerImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Kontaktieren Sie mich
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lassen Sie uns über Ihr nächstes Projekt sprechen oder Fragen
            klären.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactContent}>
        <div className={styles.container}>
          {/* Contact Information */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Kontaktinformationen</h2>
            <p>
              Sie können mich direkt über diese Kanäle erreichen oder das
              Kontaktformular nutzen.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaPhone />
                </div>
                <div className={styles.infoText}>
                  <h3>Telefon</h3>
                  <a href="tel:+49 157 7215 8264">+49 157 7215 8264</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.infoText}>
                  <h3>E-Mail</h3>
                  <a href="mailto:contact@ag-webdev.de">contact@ag-webdev.de</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.infoText}>
                  <h3>Standort</h3>
                  <p>82256 Fürstenfeldbruck</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <FaClock />
                </div>
                <div className={styles.infoText}>
                  <h3>Verfügbarkeit</h3>
                  <p>Mo-Fr: 9:00-18:00 Uhr</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Alexandru-Dumitrel-Gheorghe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.upwork.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
              >
                <SiUpwork />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className={styles.contactForm}
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Senden Sie eine Nachricht</h2>
            <p>Ich antworte normalerweise innerhalb von 24 Stunden.</p>

            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {submitSuccess}
                </motion.div>
              )}
              {submitError && (
                <motion.div
                  className={styles.errorMessage}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {submitError}
                </motion.div>
              )}
            </AnimatePresence>

            <div className={styles.formGroup}>
              <label htmlFor="name">
                Name <span className={styles.required}>*</span>
              </label>
              <input
                id="name"
                {...register("name", { required: "Name ist erforderlich" })}
                placeholder="Ihr Name"
                className={errors.name ? styles.error : ""}
              />
              {errors.name && (
                <span className={styles.errorText}>{errors.name.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">
                E-Mail <span className={styles.required}>*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "E-Mail ist erforderlich",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ungültige E-Mail-Adresse",
                  },
                })}
                placeholder="Ihre E-Mail-Adresse"
                className={errors.email ? styles.error : ""}
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email.message}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">
                Betreff <span className={styles.required}>*</span>
              </label>
              <input
                id="subject"
                {...register("subject", {
                  required: "Betreff ist erforderlich",
                })}
                placeholder="Betreff Ihrer Nachricht"
                className={errors.subject ? styles.error : ""}
              />
              {errors.subject && (
                <span className={styles.errorText}>
                  {errors.subject.message}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">
                Nachricht <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: "Nachricht ist erforderlich",
                  minLength: {
                    value: 20,
                    message: "Mindestens 20 Zeichen erforderlich",
                  },
                })}
                rows={5}
                placeholder="Ihre Nachricht..."
                className={errors.message ? styles.error : ""}
              />
              {errors.message && (
                <span className={styles.errorText}>
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isLoading ? (
                <span className={styles.spinner}></span>
              ) : (
                "Nachricht senden"
              )}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
