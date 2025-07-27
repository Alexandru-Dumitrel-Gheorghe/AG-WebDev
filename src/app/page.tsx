import StructuredDataHome from "@/components/SEO/StructuredDataHome";

import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About/About";
import Leistungen from "@/components/Leistungen/Leistungen";
import Proces from "@/components/Proces/Process";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider/ScrollAnimationProvider";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import TechStack from "@/components/Technologies/Technologies";
import FAQ from "@/components/FAQ/FAQ";
import WarumAgWebdev from "./webdesign/components/WarumAgWebdev/WarumAgWebdev";
import Testimonials from "@/components/Testimonials/Testimonials";
import PricingCTA from "./webdesign/components/PricingCTA/PricingCTA";
import CTASection from "@/components/CTASection/CTASection";
import BlogCTA from "@/components/BlogCTA/BlogCTA";

// DEFINIȚIA DIRECTĂ! Fără import din metadata.ts!
export const metadata = {
  title: "Webdesign & Webentwicklung Freelancer | Alexandru Gheorghe",
  description:
    "Freelancer für modernes Webdesign und Webentwicklung mit Next.js und React. Individuelle Websites, SEO & Support direkt vom Entwickler. Jetzt beraten lassen!",
  keywords: [
    "Webdesign Freelancer",
    "Webentwicklung",
    "Freelancer",
    "Website erstellen lassen",
    "SEO",
    "Next.js",
    "React",
    "Freiberufler",
    "Deutschland",
    "Wartung",
    "Support",
  ],
  alternates: {
    canonical: "https://www.ag-webdev.de",
  },
  openGraph: {
    title: "Alexandru Gheorghe – Webdesign & Entwicklung Freelancer",
    description:
      "Modernes Webdesign, starke Entwicklung, direkt vom Freelancer. Persönlich, individuell, zuverlässig.",
    url: "https://www.ag-webdev.de",
    siteName: "AG WebDev",
    images: [
      {
        url: "https://www.ag-webdev.de/images/ffb-hero.png",
        width: 1200,
        height: 630,
        alt: "Webdesign Freelancer Hero",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandru Gheorghe – Webdesign Freelancer",
    description:
      "Modernes Webdesign, starke Entwicklung, direkt vom Freelancer.",
    images: ["https://www.ag-webdev.de/images/ffb-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredDataHome />
      <main>
        <ScrollAnimationProvider>
          <Hero />
          <AboutMe />
          <Leistungen />
          <ProjectShowcase />
          <BlogCTA />
          <WarumAgWebdev />
          <TechStack />
          <Proces />
          <PricingCTA />
          <FAQ />
          <CTASection />
          <Testimonials />
        </ScrollAnimationProvider>
      </main>
    </>
  );
}
