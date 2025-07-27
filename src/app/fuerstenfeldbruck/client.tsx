"use client";
import HeroSection from "./components/HeroSection/HeroSection";
import Leistungen from "@/components/Leistungen/Leistungen";
import About from "@/components/About/About";

export default function FFBClient() {
  return (
    <>
      <HeroSection />
      <About />
      <Leistungen />
    </>
  );
}
