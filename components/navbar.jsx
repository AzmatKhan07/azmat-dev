"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 py-4 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Pill */}
        <a
          href="#hero"
          className={`pointer-events-auto flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel transition-all duration-300 hover:scale-105 ${
            isScrolled
              ? "bg-card/90 shadow-md shadow-primary/5"
              : "bg-card/60 backdrop-blur-md"
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-black text-xs shadow-inner">
            AK
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-sm leading-tight tracking-tight flex items-center gap-1.5">
              Azmat Khan
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for work" />
            </span>
            <span className="text-[10px] text-muted-foreground font-mono leading-none">
              Frontend Dev
            </span>
          </div>
        </a>

        {/* Floating Navigation Island (Desktop) */}
        <nav
          className={`pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-black/30 ${
            isScrolled ? "bg-card/90 border-border/80" : "bg-card/70 backdrop-blur-xl"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-primary-foreground bg-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="pointer-events-auto flex items-center gap-2">
          <div className="glass-panel p-1 rounded-full flex items-center justify-center bg-card/80">
            <ThemeToggle />
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden glass-panel p-2 rounded-full text-foreground bg-card/80 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 p-6 glass-panel bg-card/95 rounded-3xl shadow-2xl border border-border/80 animate-in fade-in slide-in-from-top-4 duration-200 space-y-4">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium rounded-2xl hover:bg-secondary/70 transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs text-muted-foreground font-mono">↗</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-border/50">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
