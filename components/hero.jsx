"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Sparkles,
  Download,
  Check,
  Layers,
  Code2,
  Figma,
  Star,
  ExternalLink,
} from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("azmatgraphic@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Completed Projects", value: "500+" },
    { label: "Core Technologies", value: "15+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/15 via-accent/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border-border/80 shadow-sm text-xs font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-muted-foreground">
                Available for Freelance & Full-time Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]">
                Crafting digital experiences with{" "}
                <span className="gradient-text">code & design</span>.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Hi, I'm <strong className="text-foreground font-semibold">Azmat Ullah Khan</strong> — a Frontend Developer & UI/UX Designer based in Pakistan. I engineer fast, resilient web apps with React & Next.js while creating intuitive interfaces that users love.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-panel hover:bg-secondary/70 font-medium text-sm transition-all duration-200"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-muted-foreground hover:text-foreground font-medium text-sm transition-colors"
              >
                <span>Let's Talk</span>
                <span className="text-xs font-mono">→</span>
              </a>
            </div>

            {/* Mini Trust Factor */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-primary" />
                <span>Next.js & React 19</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Figma className="w-4 h-4 text-accent" />
                <span>Modern UI/UX Design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>500+ Delivered</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual / Profile Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5]">
              {/* Outer decorative ring & glow */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-accent/20 to-purple-500/20 blur-xl opacity-75 -z-10" />

              {/* Main Card Frame */}
              <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden glass-panel border border-white/20 dark:border-white/10 shadow-2xl p-2.5">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-muted">
                  <Image
                    src="/heroImage.jpg"
                    alt="Azmat Ullah Khan - Frontend Developer & UI/UX Designer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                  />

                  {/* Gradient bottom overlay on image */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col justify-end p-5">
                    <span className="text-xs font-mono tracking-wider uppercase text-accent font-semibold">
                      Azmat Ullah Khan
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      Frontend Engineer & Designer
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right (Tech Focus) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 glass-panel px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 border border-border/80 animate-in fade-in duration-700">
                <div className="w-7 h-7 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                    Stack
                  </div>
                  <div className="text-xs font-bold text-foreground">
                    React & Next.js
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left (Experience / Stats) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 glass-panel px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 border border-border/80 animate-in fade-in duration-700 delay-150">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                  <Star className="w-4 h-4 fill-emerald-500" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">
                    500+ Projects
                  </div>
                  <div className="text-[10px] text-muted-foreground font-medium">
                    Worldwide Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 pt-10 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                <span className="gradient-text">{stat.value}</span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
