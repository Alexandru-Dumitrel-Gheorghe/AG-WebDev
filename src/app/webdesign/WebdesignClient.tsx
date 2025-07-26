"use client";
import Hero from "./components/Hero/Hero";
import WebDesignServicesSection from "./components/WebDesignServicesSection/WebDesignServicesSection";
import WarumAgWebdev from "./components/WarumAgWebdev/WarumAgWebdev";
import WebdesignProzess from "./components/WebdesignProzess/WebdesignProzess";
import PricingCTA from "./components/PricingCTA/PricingCTA";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";

export default function WebdesignClient() {
  return (
    <>
      <Hero />
      <WebDesignServicesSection />
      <WarumAgWebdev />
      <WebdesignProzess />
      <PricingCTA />
      <FAQ />
      <CTASection />
      <Testimonials />
    </>
  );
}
