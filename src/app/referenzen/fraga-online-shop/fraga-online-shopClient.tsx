"use client";
import Hero from "./components/Hero/Hero";
import Erfolgsmessung from "./components/Erfolgsmessung/Erfolgsmessung";
import Process from "./components/Process/Process";
import TechStack from "../certus-solutions/components/TechStack/TechStack";
import Gallery from "./components/Gallery/Gallery";
import Testimonial from "./components/Testimonial/Testimonial";

export default function FragaOnlineShopClient() {
  return (
    <>
      <Hero />
      <Erfolgsmessung />
      <Process />
      <TechStack />
      <Gallery />
      <Testimonial />
    </>
  );
}
