"use client";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutMe from "@/components/About/About";
import Leistungen from "@/components/Leistungen/Leistungen";
import Proces from "@/components/Proces/Process";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import TechStack from "@/components/Technologies/Technologies";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import WarumAgWebdev from "../webdesign/components/WarumAgWebdev/WarumAgWebdev";
import CTASection from "@/components/CTASection/CTASection";
import BlogCTA from "@/components/BlogCTA/BlogCTA";
import PricingCTA from "../webdesign/components/PricingCTA/PricingCTA";

export default function FFBClient() {
  return (
    <>
      <HeroSection />
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
    </>
  );
}
