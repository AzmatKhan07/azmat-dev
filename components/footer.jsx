"use client";

import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/60 bg-background/80 backdrop-blur-md py-12 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-black text-[10px]">
              AK
            </span>
            <span className="font-bold text-sm text-foreground">
              Azmat Ullah Khan
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Frontend Developer & UI/UX Designer • Pakistan
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-medium">
          <a href="#hero" className="hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        {/* Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Azmat Dev. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-panel hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:-translate-y-0.5"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
