"use client";

import WebentwicklungHero from "./components/Hero/WebentwicklungHero";
import WebDevelopmentServicesSection from "./components/WebDevelopmentServicesSection/WebDevelopmentServicesSection";
import WarumAgWebdev from "../webdesign/components/WarumAgWebdev/WarumAgWebdev";
import WebentwicklungProzess from "./components/WebentwicklungProzess/WebentwicklungProzess";
import PricingCTA from "../webdesign/components/PricingCTA/PricingCTA";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
import Technologies from "@/components/Technologies/Technologies";

export default function WebentwicklungClient() {
  return (
    <>
      <WebentwicklungHero />
      <WebDevelopmentServicesSection />
      <WebentwicklungProzess />
      <CTASection />
      <Technologies />
      <WarumAgWebdev />
      <PricingCTA />
      <FAQ />
      <Testimonials />
    </>
  );
}
