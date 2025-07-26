"use client";

import Hero from "./components/Hero/Hero";
import SeoServicesSection from "./components/SeoServicesSection/SeoServicesSection";
import SeoProzess from "./components/SeoProzess/SeoProzess";
import WarumAgWebdev from "../webdesign/components/WarumAgWebdev/WarumAgWebdev";
import PricingCTA from "../webdesign/components/PricingCTA/PricingCTA";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
export default function SeoClient() {
  return (
    <>
      <Hero />
      <SeoServicesSection />
      <WarumAgWebdev />
      <SeoProzess />
      <PricingCTA />
      <FAQ />
      <CTASection />
      <Testimonials />
    </>
  );
}
