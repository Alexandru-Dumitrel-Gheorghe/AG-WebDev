import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About/About";
import Leistungen from "@/components/Leistungen/Leistungen";
import Proces from "@/components/Proces/Process";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider/ScrollAnimationProvider";

export default function HomePage() {
  return (
    <main>
      <ScrollAnimationProvider>
        <Hero />
        <AboutMe />
        <Leistungen />
        <Proces />
      </ScrollAnimationProvider>
    </main>
  );
}
