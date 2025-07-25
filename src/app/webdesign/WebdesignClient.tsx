"use client";
import Hero from "./components/Hero/Hero";
import WebDesignServicesSection from "./components/WebDesignServicesSection/WebDesignServicesSection";
import WarumAgWebdev from "./components/WarumAgWebdev/WarumAgWebdev";
import WebdesignProzess from "./components/WebdesignProzess/WebdesignProzess";
import FAQ from "@/components/FAQ/FAQ";

export default function WebdesignClient() {
  return (
    <>
      <Hero />
      <WebDesignServicesSection />
      <WarumAgWebdev />
      <WebdesignProzess />
      <FAQ />
    </>
  );
}
