"use client";

import HeroAbout from "./components/Hero/HeroAbout";
import AboutIntro from "./components/AboutIntro/AboutIntro";
import ProfessionalTimeline from "./components/ProfessionalTimeline/ProfessionalTimeline";
import Technologies from "@/components/Technologies/Technologies";
import WarumAgWebdev from "../webdesign/components/WarumAgWebdev/WarumAgWebdev";
import PersonalSection from "./components/PersonalSection/PersonalSection";
import Testimonials from "@/components/Testimonials/Testimonials";
export default function AboutClient() {
  return (
    <>
      <HeroAbout />
      <AboutIntro />
      <ProfessionalTimeline />
      <WarumAgWebdev />
      <Technologies />
      <PersonalSection />
      <Testimonials />
    </>
  );
}
