import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About/About";
import Leistungen from "@/components/Leistungen/Leistungen";
import Proces from "@/components/Proces/Process";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider/ScrollAnimationProvider";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import TechStack from "@/components/Technologies/Technologies";
import FAQ from "@/components/FAQ/FAQ";
import WarumAgWebdev from "./webdesign/components/WarumAgWebdev/WarumAgWebdev";
import Testimonials from "@/components/Testimonials/Testimonials";
import WowFooter from "@/components/Footer/Footer";
import PricingCTA from "./webdesign/components/PricingCTA/PricingCTA";
import CTASection from "@/components/CTASection/CTASection";

export default function HomePage() {
  return (
    <main>
      <ScrollAnimationProvider>
        <Hero />
        <AboutMe />
        <Leistungen />
        <ProjectShowcase />
        <WarumAgWebdev />
        <TechStack />
        <Proces />
        <PricingCTA />
        <FAQ />
        <CTASection />
        <Testimonials />
        <WowFooter />
      </ScrollAnimationProvider>
    </main>
  );
}
