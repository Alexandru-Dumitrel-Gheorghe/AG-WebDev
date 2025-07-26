"use client";
import Hero from "./components/Hero/Hero";
import Leistungen from "./components/Leistungen/Leistungen";
import WarumAgWebdev from "../webdesign/components/WarumAgWebdev/WarumAgWebdev";
import GoogleIndexierungsprozess from "./components/Google-Indexierungsprozess/Google-Indexierungsprozess";
import PricingCTA from "../webdesign/components/PricingCTA/PricingCTA";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";

export default function GoogleIndexierungClient() {
  return (
    <>
      <Hero />
      <Leistungen />
      <GoogleIndexierungsprozess />
      <WarumAgWebdev />
      <PricingCTA />
      <FAQ />
      <CTASection />
      <Testimonials />
    </>
  );
}
