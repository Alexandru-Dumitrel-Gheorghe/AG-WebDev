"use client";

import Hero from "./components/Hero/Hero";
import Erfolgsmessung from "./components/Erfolgsmessung/Erfolgsmessung";
import CertusProzess from "./components/CertusProzess/CertusProzess";
import TechStack from "./components/TechStack/TechStack";
import CaseStudyGallery from "./components/CaseStudyGallery/CaseStudyGallery";
import Testimonial from "./components/Testimonials/Testimonial";

// (și alte componente...)

export default function CertusSolutionsClient() {
  return (
    <>
      <Hero />
      <Erfolgsmessung />
      <CertusProzess />
      <TechStack />
      <CaseStudyGallery />
      <Testimonial />
    </>
  );
}
