import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About/About";
import Services from "@/components/Services/Services";
import WarumIch from "@/components/WarumWir/WarumWir";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <WarumIch />
      {/* You can add more components here as needed */}
    </main>
  );
}
