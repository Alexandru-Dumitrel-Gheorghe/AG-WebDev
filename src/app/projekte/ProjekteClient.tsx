"use client";
import ReferencesHero from "./components/Hero/ReferencesHero";
import FAQ from "@/components/FAQ/FAQ";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";

export default function ProjekteClient() {
  return (
    <>
      <ReferencesHero />
      <ProjectDetail />
      <FAQ />
      <CTASection />
      <Testimonials />
    </>
  );
}
