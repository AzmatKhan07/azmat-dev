"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Layers, Palette, Terminal, Wand2 } from "lucide-react";

export function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend Stack" },
    { id: "design", label: "UI/UX & Design" },
    { id: "tools", label: "Creative Media" },
  ];

  const skills = [
    // Frontend
    {
      name: "React.js",
      category: "frontend",
      type: "Frontend Library",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      category: "frontend",
      type: "Full-Stack Framework",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      invertDark: true,
    },
    {
      name: "JavaScript",
      category: "frontend",
      type: "ES6+ / Modern JS",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      type: "Modern Utility Styling",
      level: "Mastery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "HTML5",
      category: "frontend",
      type: "Semantic Markup",
      level: "Mastery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      category: "frontend",
      type: "Modern Layouts / Animations",
      level: "Mastery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Bootstrap 5",
      category: "frontend",
      type: "Responsive UI",
      level: "Proficient",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },

    // UI/UX & Design
    {
      name: "Figma",
      category: "design",
      type: "Design Systems & Wireframing",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Adobe XD",
      category: "design",
      type: "Interactive Prototyping",
      level: "Proficient",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
    },

    // Creative Media & Assets
    {
      name: "Adobe Photoshop",
      category: "tools",
      type: "Image Editing & Composition",
      level: "Mastery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
    },
    {
      name: "Adobe Illustrator",
      category: "tools",
      type: "Vector Assets & Branding",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg",
    },
    {
      name: "After Effects",
      category: "tools",
      type: "Motion Graphics & Animation",
      level: "Proficient",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
    },
    {
      name: "Canva Pro",
      category: "tools",
      type: "Social Media & Graphics",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Wand2 className="w-3.5 h-3.5" />
            <span>Tech Stack & Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Tools I use to create <span className="gradient-text">exceptional products</span>.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            From modern JavaScript libraries to design systems and motion graphics.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "glass-panel text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative glass-panel p-5 rounded-2xl border border-border/80 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 flex items-center gap-4"
            >
              {/* Skill Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-background/80 border border-border/60 p-2 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={36}
                  height={36}
                  className={`w-full h-full object-contain ${
                    skill.invertDark ? "dark:invert" : ""
                  }`}
                />
              </div>

              {/* Skill Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-bold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-secondary/80 text-muted-foreground">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  {skill.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
