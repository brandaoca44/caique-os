import { Header } from "@/components/layout/header";
import { AILabSection } from "@/components/sections/ai-lab-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IdentitySection } from "@/components/sections/identity-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { BackgroundGrid } from "@/components/system/background-grid";
import { BootScreen } from "@/components/system/boot-screen";
import { StatusBar } from "@/components/system/status-bar";

export default function Home() {
  return (
    <>
      <BootScreen />
      <BackgroundGrid />
      <StatusBar />
      <Header />

      <main>
        <HeroSection />
        <IdentitySection />
        <CapabilitiesSection />
        <ProjectsSection />
        <AILabSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}