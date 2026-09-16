import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutBento } from "@/components/about-bento";
import { SkillsGrid } from "@/components/skills-grid";
import { Projects } from "@/components/projects";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-foreground">
      {/* Floating Header Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Bento About & Highlights */}
        <AboutBento />

        {/* Categorized Tech Stack */}
        <SkillsGrid />

        {/* Selected Projects Showcase */}
        <Projects />

        {/* Career Experience & Education */}
        <ExperienceTimeline />

        {/* Interactive Contact Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
