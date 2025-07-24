// app/kontakt/page.tsx
"use client";
import dynamic from "next/dynamic";
import Head from "next/head";

// Lazy load component (ca să evităm erori SSR legate de EmailJS)
const ContactPage = dynamic(() => import("./ContactForm"), { ssr: false });

export default function KontaktPage() {
  return (
    <>
      <Head>
        <title>Kontakt | AG WebDev</title>
        <meta
          name="description"
          content="Kontaktieren Sie mich für professionelle Webentwicklung in Deutschland."
        />
      </Head>
      <ContactPage />
    </>
  );
}
