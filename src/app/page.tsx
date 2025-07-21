import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About/About";
import TechMarquee from "@/components/TechMarquee/TechMarquee";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <AboutMe />
    </main>
  );
}
