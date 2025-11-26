"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Palette,
  Layout,
  PenTool,
  Monitor,
  Award,
  BookOpen,
  Globe,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-black tracking-tighter flex items-center gap-1"
          >
            AZMAT<span className="text-primary">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-6 md:hidden flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium py-2 border-b border-border/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-5 py-3 bg-primary text-primary-foreground rounded-xl text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section Redesigned */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_70%)] z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 animate-in slide-in-from-bottom-10 duration-1000 fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  Available for Freelance Work
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
                  AZMAT
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                    ULLAH
                  </span>
                </h1>
                <p className="text-2xl md:text-4xl font-light text-muted-foreground tracking-widest uppercase">
                  Khan
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  <span className="font-bold text-foreground">
                    Frontend Developer & UI/UX Designer
                  </span>{" "}
                  specializing in crafting visually appealing and flawless user
                  experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-all flex items-center gap-2"
                >
                  View Projects{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-background border border-border rounded-full font-bold hover:bg-secondary transition-all flex items-center gap-2"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Visual Content */}
            <div className="flex-1 relative w-full max-w-lg lg:max-w-xl aspect-[4/5] lg:aspect-square animate-in slide-in-from-right duration-1000 fade-in delay-200">
              {/* Main Image Container */}
              <div className="absolute inset-4 rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-muted/50 flex items-center justify-center text-muted-foreground">
                  <Image
                    src="/heroImage.jpg"
                    fill
                    alt="Azmat Ullah Khan"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -right-4 lg:-right-12 bg-card/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce delay-1000">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                      Focus
                    </p>
                    <p className="text-sm font-bold">Frontend Dev</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -left-4 lg:-left-12 bg-card/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce delay-700">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-500">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                      Skill
                    </p>
                    <p className="text-sm font-bold">UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-secondary/30 relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase">
                About Me
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                Dedicated Frontend Developer
              </h3>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hello! I'm Azmat Ullah Khan, a dedicated{" "}
              <span className="text-foreground font-semibold">
                Frontend Developer
              </span>{" "}
              based in Pakistan. With a strong eye for detail and a passion for
              perfection, I specialize in crafting visually appealing and
              flawless user experiences. Proficient in various frontend
              technologies, I stay ahead of industry trends. As a committed
              freelancer, I eagerly collaborate with diverse clients, turning
              visions into extraordinary frontend designs.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">
              My Expertise
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
              Essential Tools I Use
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the powerful tools and technologies I use to create
              exceptional, high-performing websites & applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "HTML5",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                desc: "Markup Language",
              },
              {
                name: "CSS3",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                desc: "Style Sheet",
              },
              {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                desc: "Programming",
              },
              {
                name: "React.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                desc: "Library",
              },
              {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                desc: "Framework",
                invert: true,
              },
              {
                name: "Tailwind CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                desc: "CSS Framework",
              },
              {
                name: "Bootstrap 5",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                desc: "CSS Framework",
              },
              {
                name: "Figma",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                desc: "Design Tool",
              },
              {
                name: "Adobe XD",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
                desc: "UI/UX Tool",
              },
              {
                name: "Photoshop",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
                desc: "Image Editing",
              },
              {
                name: "Illustrator",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg",
                desc: "Vector Graphics",
              },
              {
                name: "After Effects",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
                desc: "Motion Graphics",
              },
              {
                name: "Canva",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
                desc: "Graphic Design",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
              >
                <div
                  className={`relative w-12 h-12 flex-shrink-0 p-2 rounded-xl bg-background/50 ${
                    skill.invert ? "dark:invert" : ""
                  }`}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                  <p className="text-xs text-muted-foreground">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-20 text-center">
            <h3 className="text-lg font-semibold mb-8 text-muted-foreground">
              Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Pashto", "Urdu", "English"].map((lang) => (
                <span
                  key={lang}
                  className="px-8 py-3 rounded-full bg-secondary/50 text-secondary-foreground font-medium border border-border hover:bg-secondary transition-colors cursor-default"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Experience */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Monitor className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold">Experience</h2>
              </div>

              <div className="relative pl-8 border-l-2 border-border/50 space-y-16">
                {/* Payprime */}
                <div className="relative group">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform"></div>
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                      2022 – 2023
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold">React.js Developer</h3>
                      <p className="text-lg text-muted-foreground">
                        Payprime (Azam Hitech Services Private Limited)
                      </p>
                    </div>

                    <ul className="space-y-3 text-muted-foreground pt-2">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>
                          Contributed as a Frontend Developer, ensuring seamless
                          integration and functionality
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>
                          Played a key role in enhancing user interfaces and
                          delivering top-notch frontend solutions
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Wazar Tech */}
                <div className="relative group">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform"></div>
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                      2022 – 2023
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold">
                        Front-end Developer
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        Wazar Tech Studio & Solutions
                      </p>
                    </div>

                    <ul className="space-y-3 text-muted-foreground pt-2">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>
                          Played a pivotal role as a Frontend Developer in a
                          software house environment
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>
                          Implemented cutting-edge frontend solutions, enhancing
                          overall project functionality and user experience
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Fiverr Frontend */}
                <div className="relative group">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform"></div>
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                      2020 – 2023
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold">
                        Front-end Developer
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        Fiverr.com
                      </p>
                    </div>

                    <ul className="space-y-3 text-muted-foreground pt-2">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>
                          Contributed as a Freelance Frontend Developer,
                          collaborating with diverse clients
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>
                          Transformed creative concepts into impactful frontend
                          designs, meeting and surpassing client expectations
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Freelance Graphic Designer */}
                <div className="relative group">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform"></div>
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                      2017 – Present
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold">
                        Freelance Graphic Designer
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        Self-employed – Fiverr & Other Platforms
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Remote (USA, UAE, UK,
                      Pakistan)
                    </p>

                    <ul className="space-y-3 text-muted-foreground pt-2">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>
                          Delivered 500+ design projects for news outlets,
                          brands, influencers, and startups
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>
                          Designed daily social media content for marketing
                          agencies and news media
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent-foreground">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold">Education</h2>
              </div>

              <div className="relative pl-8 border-l-2 border-border/50 space-y-12">
                {[
                  {
                    year: "2019 – 2023",
                    degree: "BS – Computer Science",
                    school: "University of Swat, KPK",
                  },
                  {
                    year: "2016 – 2019",
                    degree: "DAE – Electrical",
                    school: "College of Advocating Technology",
                  },
                  {
                    year: "2016 – 2017",
                    degree: "DIT – Information Technology",
                    school: "Khyber Computer and Vocational Collage",
                  },
                ].map((edu, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform"></div>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-xs font-bold tracking-wider uppercase">
                        {edu.year}
                      </span>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-primary text-primary-foreground rounded-[3rem] p-8 md:p-20 overflow-hidden relative shadow-2xl">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="relative z-10 text-center space-y-16">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                  Let's Work Together
                </h2>
                <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto font-light">
                  Ready to start your next project? Feel free to reach out for
                  collaborations or just a friendly hello.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <a
                  href="tel:+923445679900"
                  className="flex flex-col items-center gap-4 group p-6 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-lg">+92 3445679900</span>
                </a>

                <a
                  href="mailto:azmatgraphic@gmail.com"
                  className="flex flex-col items-center gap-4 group p-6 rounded-2xl hover:bg-white/5 transition-colors"
                >
                  <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-lg">
                    azmatgraphic@gmail.com
                  </span>
                </a>

                <div className="flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="p-4 bg-white/10 rounded-full">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-lg">
                    Khwazakhela Swat, KPK
                  </span>
                </div>
              </div>

              <div className="pt-10 border-t border-white/20 flex justify-center gap-8">
                {[Linkedin, Github, Globe].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-4 hover:bg-white/10 rounded-full transition-colors hover:scale-110"
                  >
                    <Icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-muted-foreground text-sm border-t border-border/50">
        <p>
          © {new Date().getFullYear()} Azmat Ullah Khan. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
