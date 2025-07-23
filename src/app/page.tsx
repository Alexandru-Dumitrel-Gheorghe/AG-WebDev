import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About/About";
import Leistungen from "@/components/Leistungen/Leistungen";
import Proces from "@/components/Proces/Process";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider/ScrollAnimationProvider";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import FAQ from "@/components/FAQ/FAQ";

export default function HomePage() {
  return (
    <main>
      <ScrollAnimationProvider>
        <Hero />
        <AboutMe />
        <Leistungen />
        <ProjectShowcase />
        <Proces />
        <FAQ />
      </ScrollAnimationProvider>
    </main>
  );
}
