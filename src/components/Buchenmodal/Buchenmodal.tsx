"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import styles from "./Buchenmodal.module.css";
import Link from "next/link";
import {
  FaCheckCircle,
  FaTimes,
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

type PlanType = {
  name: string;
  price?: string;
  [key: string]: any;
};

type BuchenModalProps = {
  isOpen: boolean;
  onClose: () => void;
  plan: PlanType | null;
};

type FormDataType = {
  pages: string;
  name: string;
  phone: string;
  email: string;
  company: string;
  description: string;
  budget: string;
  deliveryTime: string;
  contactMethod: string;
  terms: boolean;
};

const initialFormState: FormDataType = {
  pages: "",
  name: "",
  phone: "",
  email: "",
  company: "",
  description: "",
  budget: "",
  deliveryTime: "",
  contactMethod: "email",
  terms: false,
};

const BuchenModal: React.FC<BuchenModalProps> = ({ isOpen, onClose, plan }) => {
  const [formData, setFormData] = useState<FormDataType>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [submissionMessage, setSubmissionMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFormData(initialFormState);
      setSubmissionStatus(null);
      setSubmissionMessage("");
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.terms) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );

      setSubmissionStatus("success");
      setSubmissionMessage(
        "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden."
      );
      setFormData(initialFormState);

      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      setSubmissionStatus("error");
      setSubmissionMessage(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.headerContent}>
                <h2>
                  Anfrage für <span>{plan?.name}</span>
                </h2>
                {plan?.price && (
                  <div className={styles.priceBadge}>{plan.price}</div>
                )}
              </div>
              <button className={styles.closeButton} onClick={onClose}>
                <FaTimes />
              </button>
            </div>

            {submissionStatus === "success" ? (
              <div className={styles.successState}>
                <div className={styles.successIconContainer}>
                  <FaCheckCircle className={styles.successIcon} />
                </div>
                <h3>Anfrage erfolgreich!</h3>
                <p>{submissionMessage}</p>
                <button className={styles.closeSuccessButton} onClick={onClose}>
                  Schließen
                </button>
              </div>
            ) : (
              <div className={styles.formContainer}>
                {submissionStatus === "error" && (
                  <div className={styles.errorMessage}>
                    <p>{submissionMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.bookingForm}>
                  <input
                    type="hidden"
                    name="planName"
                    value={plan?.name || ""}
                  />

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Max Mustermann"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">E-Mail*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="max@mustermann.de"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Telefon*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+49 123 456789"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="company">Firma</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Mustermann GmbH"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="pages">Gewünschte Seitenanzahl</label>
                      <input
                        type="number"
                        id="pages"
                        name="pages"
                        value={formData.pages}
                        onChange={handleChange}
                        placeholder="5"
                        min="1"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="budget">Budgetrahmen</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Bitte auswählen</option>
                        <option value="500-1000€">500-1.000€</option>
                        <option value="1000-2000€">1.000-2.000€</option>
                        <option value="2000-5000€">2.000-5.000€</option>
                        <option value="5000+€">5.000€+</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="deliveryTime">
                        Gewünschter Liefertermin
                      </label>
                      <input
                        type="date"
                        id="deliveryTime"
                        name="deliveryTime"
                        value={formData.deliveryTime}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Bevorzugte Kontaktmethode</label>
                      <div className={styles.contactMethodOptions}>
                        <label className={styles.contactMethod}>
                          <input
                            type="radio"
                            name="contactMethod"
                            value="email"
                            checked={formData.contactMethod === "email"}
                            onChange={handleChange}
                          />
                          <FaEnvelope />
                          <span>E-Mail</span>
                        </label>
                        <label className={styles.contactMethod}>
                          <input
                            type="radio"
                            name="contactMethod"
                            value="phone"
                            checked={formData.contactMethod === "phone"}
                            onChange={handleChange}
                          />
                          <FaPhone />
                          <span>Telefon</span>
                        </label>
                      </div>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label htmlFor="description">Projektbeschreibung*</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Beschreiben Sie Ihr Projekt..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.termsGroup}>
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="terms" className={styles.termsLabel}>
                      Ich akzeptiere die{" "}
                      <Link href="/datenschutz" className={styles.legalLink}>
                        Datenschutzbestimmungen
                      </Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        <FaPaperPlane />
                        Anfrage senden
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BuchenModal;
