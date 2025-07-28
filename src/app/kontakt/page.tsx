import type { Metadata } from "next";
import StructuredDataKontakt from "./StructuredDataKontakt";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | AG WebDev",
  description:
    "Kontaktieren Sie mich für professionelle Webentwicklung, SEO & Webdesign in ganz Deutschland. Ich beantworte Ihre Anfrage innerhalb von 24h!",
  keywords: [
    "Kontakt",
    "Webdesigner Kontakt",
    "Webentwicklung Kontakt",
    "Webdesign Anfrage",
    "Freelancer Webdesign",
    "AG WebDev",
    "Deutschland",
    "E-Mail Webdesigner",
  ],
  openGraph: {
    title: "Kontakt | AG WebDev",
    description:
      "Schnelle & persönliche Kontaktaufnahme zu AG WebDev. Webdesign, SEO, Beratung – jetzt kostenlos anfragen!",
    url: "https://www.ag-webdev.de/kontakt",
    type: "website",
    images: [
      {
        url: "https://www.ag-webdev.de/logo-2.png",
        width: 1200,
        height: 630,
        alt: "Kontakt AG WebDev",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ag-webdev.de/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <>
      <StructuredDataKontakt />
      <ContactForm />
    </>
  );
}
