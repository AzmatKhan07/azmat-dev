"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  ArrowUpRight,
  Monitor,
  CheckCircle2,
  FolderGit2,
} from "lucide-react";

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: "returnhub",
      title: "ReturnHub – Parcel Return & Courier Tracking",
      category: "frontend",
      categoryLabel: "Web Application",
      description:
        "An enterprise multi-role platform for parcel logistics, tracking, and returns. Built with role-based access for customers, field couriers, and administrators.",
      tags: ["React", "Node.js", "Tailwind CSS", "Role-Based Auth"],
      features: [
        "Public instant package tracking with status timeline",
        "Courier delivery route dashboard & drop-off locations",
        "Multi-role user authentication (Admin, Driver, Customer)",
        "Partner onboarding portal with automated workflows",
      ],
      highlight: "Flagship Multi-Page System",
      gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
      accentColor: "text-blue-500",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      id: "buildsight",
      title: "Build-Sight – Live Construction Camera Feeds",
      category: "frontend",
      categoryLabel: "Web Application",
      description:
        "A specialized industrial monitoring frontend connecting remote construction sites to project managers via live video feeds and time-lapse generators.",
      tags: ["React", "Redux Toolkit", "Material UI", "Video Streaming"],
      features: [
        "Live camera feed integration with PTZ controls",
        "Side-by-side photographic date compare engine",
        "Automated project time-lapse render generator",
        "Hierarchical project and site camera management",
      ],
      highlight: "Real-time Streaming Platform",
      gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
      accentColor: "text-amber-500",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=900&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      id: "ai-cricket",
      title: "AI Cricket Player Analytics Dashboard",
      category: "frontend",
      categoryLabel: "Analytics & AI",
      description:
        "High-performance analytical dashboard visualizing cricket athlete performance metrics, bowling pace distribution, and predictive matchup statistics.",
      tags: ["React", "Recharts", "AI Analytics", "Tailwind CSS"],
      features: [
        "Interactive batting strike-rate and bowling pace charts",
        "Head-to-head player historical comparison tool",
        "Predictive statistical modeling for match scenarios",
        "Exportable performance PDF reports",
      ],
      highlight: "Data Visualization & AI",
      gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
      accentColor: "text-emerald-500",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      id: "pos-billing",
      title: "Point-of-Sale (POS) & Inventory System",
      category: "frontend",
      categoryLabel: "Web Application",
      description:
        "Full-featured retail POS frontend designed for speed at checkout counters, dynamic barcode scanning, invoice generation, and real-time inventory adjustments.",
      tags: ["React", "Context API", "Styled Components", "Invoice PDF"],
      features: [
        "Instant search and item scanning with cart management",
        "Multi-tier discount engine & automated receipt generator",
        "Daily shift cash reports and turnover analytics",
        "Stock threshold alerts and product categories",
      ],
      highlight: "Retail Management Engine",
      gradient: "from-purple-600/20 via-pink-600/10 to-transparent",
      accentColor: "text-purple-500",
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=900&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      id: "admin-system",
      title: "Modular SaaS Admin Design System",
      category: "uiux",
      categoryLabel: "UI/UX & Frontend",
      description:
        "Production-ready, highly reusable admin dashboard template with accessible shadcn/ui components, advanced data tables, and dynamic theme switching.",
      tags: ["Next.js", "shadcn/ui", "Tailwind CSS v4", "TypeScript"],
      features: [
        "Collapsible dynamic navigation with command palette (Cmd+K)",
        "Sortable & filterable paginated data tables",
        "Pre-built dark/light theme switching with custom tokens",
        "Modular KPI summary cards with micro-trend sparklines",
      ],
      highlight: "Reusable UI Kit",
      gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
      accentColor: "text-cyan-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      id: "phone-compare",
      title: "Device Specs & Comparison Platform",
      category: "frontend",
      categoryLabel: "Utility App",
      description:
        "Responsive consumer utility application fetching live mobile specifications from public device APIs for side-by-side technical comparisons.",
      tags: ["Next.js", "Public APIs", "Tailwind CSS", "SSR"],
      features: [
        "Live specification comparison between multiple phone models",
        "Fuzzy search with auto-suggest query engine",
        "Hardware benchmark visual scores (Battery, CPU, Camera)",
        "Mobile-first responsive architecture",
      ],
      highlight: "API Integration",
      gradient: "from-rose-600/20 via-orange-600/10 to-transparent",
      accentColor: "text-rose-500",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
      demoUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      id: "ecommerce-ux",
      title: "Fashion E-Commerce Mobile Design",
      category: "uiux",
      categoryLabel: "UI/UX Design",
      description:
        "End-to-end mobile design system and user experience flow for a luxury apparel store, focusing on streamlined 2-step checkout and high conversion.",
      tags: ["Figma", "Design System", "Interactive Prototype"],
      features: [
        "Interactive component library with 50+ auto-layout frames",
        "Frictionless bottom-sheet checkout and payment selection",
        "Curated visual aesthetics with dark and warm palettes",
      ],
      highlight: "Mobile App UX",
      gradient: "from-violet-600/20 via-fuchsia-600/10 to-transparent",
      accentColor: "text-violet-500",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: "brand-identity",
      title: "Corporate Brand Identity & Guidelines",
      category: "graphics",
      categoryLabel: "Brand & Graphic Assets",
      description:
        "Comprehensive brand identity design for modern tech startups, including vector logos, typography hierarchy, social kits, and 3D asset mockups.",
      tags: ["Adobe Illustrator", "Photoshop", "Brand Book"],
      features: [
        "Vector logo system with horizontal and vertical lockups",
        "High-res social media marketing banners for LinkedIn & X",
        "Complete color token guide and typography rules",
      ],
      highlight: "Delivered 500+ Assets",
      gradient: "from-emerald-600/20 via-indigo-600/10 to-transparent",
      accentColor: "text-emerald-500",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=900&q=80",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Featured projects & <span className="gradient-text">craft</span>.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A collection of production web applications, user interface systems, and design projects built with modern tooling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full glass-panel self-start md:self-auto">
            {[
              { id: "all", label: "All Projects" },
              { id: "frontend", label: "Web Apps" },
              { id: "uiux", label: "UI/UX Systems" },
              { id: "graphics", label: "Brand Assets" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-3xl overflow-hidden border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
            >
              <div>
                {/* Mockup Browser Window Header */}
                <div className="px-5 py-3 border-b border-border/60 bg-secondary/40 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    azmat.dev/{project.id}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-background/80 text-foreground">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Project Visual Image */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-90`}
                  />

                  {/* Spotlight Badge */}
                  {project.highlight && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-background/90 text-foreground backdrop-blur-md shadow-md border border-white/10">
                        ⭐ {project.highlight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-secondary/80 text-secondary-foreground text-[11px] font-mono font-medium border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-7 py-4 border-t border-border/60 bg-secondary/20 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                >
                  <span>Inquire About Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl glass-panel hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    title="View Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold shadow-sm hover:shadow-primary/30 transition-all"
                  >
                    <span>Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
