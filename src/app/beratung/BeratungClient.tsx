"use client";
import Hero from "./components/Hero/Hero";
import Leistungen from "./components/BeratungLeistungen/Leistungen";
import BeratungProzess from "./components/BeratungProzess/BeratungProzess";
import WarumAgWebdev from "../webdesign/components/WarumAgWebdev/WarumAgWebdev";
import PricingCTA from "../webdesign/components/PricingCTA/PricingCTA";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";

export default function BeratungClient() {
  return (
    <>
      <Hero />
      <Leistungen />
      <BeratungProzess />
      <WarumAgWebdev />
      <PricingCTA />
      <FAQ />
      <CTASection />
      <Testimonials />
    </>
  );
}
