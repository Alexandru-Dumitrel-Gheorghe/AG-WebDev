import HeroSectionAugsburg from "./components/HeroSectionAugsburg/HeroSectionAugsburg";
import BlogCTA from "@/components/BlogCTA/BlogCTA"; // Poți lăsa același dacă nu e specific orașului
import StructuredDataAugsburg from "./components/seo/StructuredDataAugsburg";
import StructuredServicesAugsburg from "./components/seo/StructuredServicesAugsburg";
import StructuredLocalBusinessAugsburg from "./components/seo/StructuredLocalBusinessAugsburg";
import AboutAugsburg from "./components/AboutAugsburg/AboutAugsburg";
import LeistungenAugsburg from "./components/LeistungenAugsburg/LeistungenAugsburg";
import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import WarumAgWebdev from "../webdesign/components/WarumAgWebdev/WarumAgWebdev";
import TechStack from "@/components/Technologies/Technologies";
import Proces from "@/components/Proces/Process";
import PricingCTA from "../webdesign/components/PricingCTA/PricingCTA";
import FAQ from "@/components/FAQ/FAQ";
import CTASection from "@/components/CTASection/CTASection";
import Testimonials from "@/components/Testimonials/Testimonials";

export const metadata = {
  title: "Webdesign & Webentwicklung in Augsburg | AG WebDev",
  description:
    "Ihr Partner für moderne Websites, Webdesign und SEO in Augsburg. Individuelle Lösungen mit Next.js & React – speziell für Unternehmen, Freelancer & Selbständige in Augsburg.",
  keywords: [
    "Webdesign Augsburg",
    "Webentwicklung Augsburg",
    "SEO Augsburg",
    "Freelancer Augsburg",
    "Website Augsburg",
    "Augsburg Webdesigner",
    "React Augsburg",
    "Next.js Augsburg",
    "Digitale Lösungen Augsburg",
    "Unternehmen Augsburg",
  ],
  alternates: {
    canonical: "https://www.ag-webdev.de/augsburg",
  },
  openGraph: {
    title: "Webdesign & Webentwicklung in Augsburg | AG WebDev",
    description:
      "Ihr Partner für moderne Websites, Webdesign und SEO in Augsburg. Individuelle Lösungen mit Next.js & React.",
    url: "https://www.ag-webdev.de/augsburg",
    siteName: "AG WebDev",
    images: [
      {
        url: "https://www.ag-webdev.de/images/augsburg-hero.png",
        width: 1200,
        height: 630,
        alt: "Webdesign Augsburg Hero",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign & Webentwicklung Augsburg | AG WebDev",
    description:
      "Ihr Partner für moderne Websites, Webdesign und SEO in Augsburg.",
    images: ["https://www.ag-webdev.de/images/augsburg-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function AugsburgPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <StructuredDataAugsburg />
      <StructuredServicesAugsburg />
      <StructuredLocalBusinessAugsburg />

      <main id="main-content">
        <HeroSectionAugsburg />
        <AboutAugsburg />
        <LeistungenAugsburg />
        <BenefitsSection />
        <ProjectShowcase />
        <WarumAgWebdev />
        <BlogCTA />
        <TechStack />
        <Proces />
        <PricingCTA />
        <FAQ />
        <CTASection />
        <Testimonials />
      </main>
    </>
  );
}
