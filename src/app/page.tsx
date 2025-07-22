import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About/About";
import WarumIch from "@/components/WarumWir/WarumWir";
import Leistungen from "@/components/Leistungen/Leistungen";
import Proces from "@/components/Proces/Process";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Leistungen />
      <Proces />
    </main>
  );
}
