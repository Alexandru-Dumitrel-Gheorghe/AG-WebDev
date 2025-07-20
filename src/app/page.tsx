import Hero from "@/components/Hero/Hero";
import Leistungen from "@/components/Leistungen/Leistungen";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import WarumWir from "@/components/WarumWir/WarumWir";
import Technologies from "@/components/Technologies/Technologies";
import About from "@/components/About/About";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Leistungen />
      <About />
      <CaseStudies />
      <WarumWir />
      <Technologies />
    </main>
  );
}
