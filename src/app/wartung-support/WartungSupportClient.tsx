"use client";
import Hero from "./components/Hero/Hero";
import Leistungen from "./components/WartungLeistungen/Leistungen";
import WarumAgWebdev from "../webdesign/components/WarumAgWebdev/WarumAgWebdev";
import WartungProzess from "./components/WartungProzess/WartungProzess";
import CTASection from "@/components/CTASection/CTASection";
import PricingCTA from "../webdesign/components/PricingCTA/PricingCTA";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function WartungSupportClient() {
  return (
    <>
      <Hero />
      <Leistungen />
      <WarumAgWebdev />
      <WartungProzess />
      <PricingCTA />
      <FAQ />
      <CTASection />
      <Testimonials />
    </>
  );
}
