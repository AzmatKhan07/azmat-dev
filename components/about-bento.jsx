"use client";

import {
  Code2,
  Globe2,
  Sparkles,
  Palette,
  Terminal,
  Languages,
  CheckCircle2,
  ArrowUpRight,
  Laptop,
} from "lucide-react";

export function AboutBento() {
  const languages = [
    { name: "Pashto", level: "Native" },
    { name: "Urdu", level: "Fluent / Bilingual" },
    { name: "English", level: "Professional Working" },
  ];

  const highlights = [
    "Pixel-perfect responsive implementations",
    "Clean, scalable Next.js & React architecture",
    "Tailwind CSS & design token systems",
    "Cross-browser testing & Web Vitals focus",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Designing with purpose, <br className="hidden sm:inline" />
            <span className="gradient-text">engineering with precision</span>.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Get to know the developer and designer behind the screen.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Card 1: Main Story (Span 2 cols on lg) */}
          <div className="md:col-span-2 lg:col-span-2 glass-panel p-8 rounded-3xl border border-border/80 flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/15 flex items-center justify-center text-primary">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Frontend Developer & UI/UX Specialist
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                I'm <strong className="text-foreground font-semibold">Azmat Ullah Khan</strong>, a dedicated web developer based in Swat, Pakistan. Over the past 4+ years, I have built web applications ranging from complex parcel tracking platforms and POS systems to modern SaaS dashboards and high-converting marketing experiences.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                My background spans both modern frontend coding and graphic design, allowing me to translate Figma mockups into flawless, production-grade applications with obsessive attention to UI fidelity.
              </p>
            </div>

            <div className="pt-6 border-t border-border/60 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Core Philosophy / Architecture */}
          <div className="glass-panel p-8 rounded-3xl border border-border/80 flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-accent/15 flex items-center justify-center text-accent">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                Code Philosophy
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I believe great software lives at the intersection of aesthetic beauty and technical performance. I write modular, clean React code with reusable components and snappy state management.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-background/50 border border-border/50 text-xs font-mono text-muted-foreground space-y-1">
              <div className="text-emerald-500 font-semibold">$ npx build --quality</div>
              <div>✔ Semantic HTML5 & a11y</div>
              <div>✔ Zero-bloat CSS</div>
              <div>✔ Responsive on all screens</div>
            </div>
          </div>

          {/* Card 3: Global Remote Collaboration */}
          <div className="glass-panel p-8 rounded-3xl border border-border/80 flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">
                Worldwide Reach
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Comfortable working asynchronously and collaborating with cross-functional teams and clients across multiple timezones.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["USA", "United Kingdom", "UAE", "Pakistan"].map((loc) => (
                <span
                  key={loc}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/70 border border-border/60 text-secondary-foreground"
                >
                  📍 {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Languages & Communication */}
          <div className="md:col-span-2 lg:col-span-4 glass-panel p-6 sm:p-8 rounded-3xl border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Languages className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold">Languages & Communication</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Fluent collaboration across multicultural engineering and design teams.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="px-4 py-2 rounded-2xl bg-background/60 border border-border/60 flex items-center gap-2 shadow-sm"
                >
                  <span className="font-semibold text-xs sm:text-sm text-foreground">{lang.name}</span>
                  <span className="text-[10px] text-muted-foreground font-mono px-2 py-0.5 rounded-full bg-secondary/80">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
