"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ExternalLink, Github, Layers, Palette, Layout } from "lucide-react";

const frontendProjects = [
  {
    title: "ReturnHub – Parcel Return & Tracking Platform",
    description:
      "A comprehensive platform for parcel returns and tracking with role-based UI for customers, drivers, and admins.",
    tags: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Public Return Tracking Page",
      "Courier Tracking Dashboard",
      "Drop-Off Location Management",
      "Partner With Us page + form",
      "Role-based UI (Customer, Driver, Admin)",
    ],
    highlight: "Biggest multi-page project",
    image: "https://picsum.photos/seed/returnhub/800/600",
  },
  {
    title: "Build-Sight – Construction Monitoring Frontend",
    description:
      "A specialized frontend for monitoring construction projects with real-time camera feeds and time-lapse generation.",
    tags: ["React", "Redux", "Material UI", "Live Streaming"],
    features: [
      "User & Role Management",
      "Project & Camera Management",
      "Compare Image Page",
      "Time-lapse Generation Page",
      "Profile Management",
    ],
    highlight: "Strongest portfolio project",
    image: "https://picsum.photos/seed/buildsight/800/600",
  },
  {
    title: "Phone Comparison Website",
    description:
      "A utility website allowing users to compare specifications of old and new phones using public APIs.",
    tags: ["Next.js", "Public APIs", "Tailwind CSS"],
    features: [
      "Real-time API Data Fetching",
      "Side-by-side Specification Comparison",
      "Search & Filter Functionality",
      "Responsive Design",
    ],
    image: "https://picsum.photos/seed/phones/800/600",
  },
  {
    title: "POS Inventory & Billing UI",
    description:
      "A Point of Sale frontend interface for managing products, categories, and generating bills.",
    tags: ["React", "Context API", "Styled Components"],
    features: [
      "Product & Category Management",
      "Billing & Invoice Creation",
      "Discount Management",
      "Daily Sales Reports",
    ],
    image: "https://picsum.photos/seed/pos/800/600",
  },
  {
    title: "AI Cricket Player Performance Dashboard",
    description:
      "An analytical dashboard visualizing cricket player performance trends and predictive statistics.",
    tags: ["React", "Recharts", "AI Integration", "Data Visualization"],
    features: [
      "Runs & Bowling Pace Trends",
      "Player Comparisons",
      "Predictive Stats Visualization",
      "Interactive Charts",
    ],
    image: "https://picsum.photos/seed/cricket/800/600",
  },
  {
    title: "Admin Dashboard Template",
    description:
      "A fully reusable, modular admin UI system designed for scalability and ease of integration.",
    tags: ["Next.js", "shadcn/ui", "Tailwind CSS", "Dark Mode"],
    features: [
      "Reusable Sidebar & Navbar",
      "Analytics Cards & CRUD Tables",
      "Advanced Search & Filter",
      "Built-in Dark/Light Mode",
    ],
    highlight: "Reusable UI System",
    image: "https://picsum.photos/seed/admin/800/600",
  },
];

const designProjects = [
  {
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo, color palette, and typography guidelines.",
    tags: ["Adobe Illustrator", "Photoshop", "Branding"],
    image: "https://picsum.photos/seed/brand/800/600",
  },
  {
    title: "Social Media Campaign Assets",
    description:
      "A set of engaging social media graphics and banners for a marketing campaign.",
    tags: ["Canva", "Photoshop", "Social Media"],
    image: "https://picsum.photos/seed/social/800/600",
  },
  {
    title: "Product Packaging Design",
    description:
      "Modern and sustainable packaging design concepts for a consumer product.",
    tags: ["Adobe Illustrator", "3D Mockups"],
    image: "https://picsum.photos/seed/packaging/800/600",
  },
];

const uiUxProjects = [
  {
    title: "E-commerce Mobile App UI",
    description:
      "User-centered mobile app interface design for a fashion e-commerce platform.",
    tags: ["Figma", "Prototyping", "Mobile Design"],
    image: "https://picsum.photos/seed/ecommerce/800/600",
  },
  {
    title: "SaaS Dashboard UX Research",
    description:
      "UX research and wireframing for a complex SaaS analytics dashboard.",
    tags: ["Figma", "User Research", "Wireframing"],
    image: "https://picsum.photos/seed/saas/800/600",
  },
  {
    title: "Travel Booking Website Redesign",
    description:
      "Modern redesign of a travel booking website focusing on improved user flow and accessibility.",
    tags: ["Adobe XD", "Web Design", "Accessibility"],
    image: "https://picsum.photos/seed/travel/800/600",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise in Frontend Development,
            Graphic Design, and UI/UX.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="graphic">Graphic</TabsTrigger>
              <TabsTrigger value="uiux">UI/UX</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend" className="space-y-8">
            <div className="grid md:grid-cols-4 gap-6">
              {frontendProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="graphic" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {designProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="uiux" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {uiUxProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg group overflow-hidden flex flex-col">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {project.highlight && (
          <div className="absolute top-2 right-2 z-10">
            <Badge
              variant="secondary"
              className="text-xs font-normal bg-background/80 backdrop-blur-sm"
            >
              {project.highlight}
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        {project.features && (
          <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
            {project.features.length > 3 && (
              <li>+ {project.features.length - 3} more features</li>
            )}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="bg-background/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
