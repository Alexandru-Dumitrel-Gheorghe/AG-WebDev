import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About/About";
import Leistungen from "@/components/Leistungen/Leistungen";
import Proces from "@/components/Proces/Process";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider/ScrollAnimationProvider";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import TechStack from "@/components/Technologies/Technologies";
import FAQ from "@/components/FAQ/FAQ";
import WarumIch from "@/components/WarumIch/WarumIch";
import WowFooter from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <main>
      <ScrollAnimationProvider>
        <Hero />
        <AboutMe />
        <Leistungen />
        <ProjectShowcase />
        <TechStack />
        <Proces />
        <WarumIch />
        <FAQ />
        <WowFooter />
      </ScrollAnimationProvider>
    </main>
  );
}
