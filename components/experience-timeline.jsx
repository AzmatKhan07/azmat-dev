"use client";

import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Building2,
  Calendar,
  CheckCircle2,
  Globe,
  MapPin,
} from "lucide-react";

export function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      company: "Payprime (Azam Hitech Services Private Limited)",
      role: "React.js Developer",
      period: "2022 – 2023",
      location: "Pakistan",
      type: "Software Company",
      points: [
        "Architected and deployed responsive React.js frontend interfaces for enterprise workflows.",
        "Collaborated with backend teams to integrate complex REST APIs with reliable state management.",
        "Spearheaded user experience enhancements, drastically improving page load times and mobile usability.",
      ],
    },
    {
      company: "Wazar Tech Studio & Solutions",
      role: "Front-end Developer",
      period: "2022 – 2023",
      location: "Pakistan",
      type: "Agency Studio",
      points: [
        "Implemented pixel-perfect user interfaces from Figma and Adobe XD specifications.",
        "Built modular UI component systems that sped up delivery across multiple concurrent client projects.",
        "Conducted cross-browser optimization ensuring 100% responsiveness on mobile and desktop.",
      ],
    },
    {
      company: "Fiverr & International Clients",
      role: "Freelance Frontend Developer",
      period: "2020 – 2023",
      location: "Remote (USA, UK, UAE)",
      type: "Freelance",
      points: [
        "Delivered tailor-made frontend web solutions for a diverse global roster of startups and businesses.",
        "Transformed creative concepts into interactive web experiences with smooth animations and clean code.",
        "Achieved 100% client satisfaction rate with on-time delivery and transparent communication.",
      ],
    },
    {
      company: "Self-Employed / Freelance Platforms",
      role: "Freelance Graphic Designer & UI Specialist",
      period: "2017 – Present",
      location: "Remote Worldwide",
      type: "Remote Creative",
      points: [
        "Successfully completed over 500+ design projects for brands, news outlets, influencers, and agencies.",
        "Designed daily social media campaigns, brand identity systems, vector logos, and marketing collateral.",
        "Bridged visual aesthetics with functional frontend development principles.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "University of Swat, Khyber Pakhtunkhwa",
      period: "2019 – 2023",
      details:
        "Comprehensive study of software engineering principles, algorithms, data structures, database management systems, and modern web application development.",
    },
    {
      degree: "Diploma of Associate Engineering (DAE) – Electrical",
      institution: "College of Advocating Technology",
      period: "2016 – 2019",
      details:
        "Technical engineering foundation focusing on circuit logic, electronic systems, and hardware problem-solving.",
    },
    {
      degree: "Diploma in Information Technology (DIT)",
      institution: "Khyber Computer and Vocational College",
      period: "2016 – 2017",
      details:
        "Core IT principles, networking fundamentals, computer applications, and early web programming.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Experience & <span className="gradient-text">education</span>.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            The timeline of my professional journey in software development and design.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full glass-panel border-border/80">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === "experience"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        {activeTab === "experience" ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group glass-panel p-6 sm:p-8 rounded-3xl border border-border/80 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {exp.period}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-xs text-muted-foreground flex items-center gap-1 sm:self-start mt-1 sm:mt-0 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-border/50">
                  {exp.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="group glass-panel p-6 sm:p-8 rounded-3xl border border-border/80 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1.5 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
