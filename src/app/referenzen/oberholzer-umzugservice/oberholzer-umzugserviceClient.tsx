"use client";

import Hero from "./components/Hero/Hero";
import OberholzerErfolg from "./components/OberholzerErfolg/OberholzerErfolg";
import OberholzerProcess from "./components/OberholzerProcess/OberholzerProcess";
import OberholzerTechStack from "./components/OberholzerTechStack/OberholzerTechStack ";
import OberholzerGallery from "./components/OberholzerGallery/OberholzerGallery ";
import OberholzerTestimonial from "./components/OberholzerTestimonial/OberholzerTestimonial";

// (Poți aranja ordinea componentelor cum vrei tu)

export default function OberholzerUmzugserviceClient() {
  return (
    <>
      <Hero />
      <OberholzerErfolg />
      <OberholzerProcess />
      <OberholzerTechStack />
      <OberholzerGallery />
      <OberholzerTestimonial />
    </>
  );
}
