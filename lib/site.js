/**
 * Single source of content for the whole site.
 * Edit here; every page reads from this file.
 *
 * TODO for Azmat:
 *  - Verify the `year` on each project (I inferred these from your CV dates).
 *  - Add real links in `live` / `repo`. Leave them as null and the site will
 *    show an honest "Private repository" / "Link on request" label instead of
 *    pointing at github.com.
 *  - Drop screenshots in /public/work/<slug>.png and set `image` to that path.
 *    Until then a generated wireframe placeholder is used.
 *  - Fill in `social.github` / `social.linkedin`; empty values are not rendered.
 */

export const profile = {
  name: "Azmat Ullah Khan",
  shortName: "Azmat",
  role: "Frontend developer and interface designer",
  location: "Khwazakhela, Swat, Pakistan",
  timezone: "PKT, UTC+5",
  email: "azmatgraphic@gmail.com",
  phone: "+92 344 5679900",
  phoneHref: "+923445679900",
  available: true,
  availableLabel: "Open to frontend roles and freelance projects",
  portrait: "/heroImage.jpg",
  // The site works without these. Add a URL and the link appears.
  social: {
    github: "",
    linkedin: "",
  },
};

export const facts = [
  { label: "Designing since", value: "2017" },
  { label: "Building for the web since", value: "2020" },
  { label: "Based in", value: "Swat, Pakistan" },
  { label: "Working hours", value: "PKT, overlaps EU and US East" },
];

export const intro = {
  headline: ["Design and code,", "done by the same", "pair of hands."],
  lede:
    "I’m Azmat Ullah Khan, a frontend developer and interface designer in Swat, Pakistan. I build production React and Next.js applications and design the systems behind them, so what ships looks like what was drawn.",
};

export const kinds = {
  app: "Web application",
  dashboard: "Dashboard",
  system: "Design system",
  brand: "Brand identity",
  product: "Product design",
};

export const projects = [
  {
    slug: "returnhub",
    title: "ReturnHub",
    subtitle: "Parcel return and courier tracking platform",
    year: "2023",
    kind: "app",
    context: "Client work",
    featured: true,
    stack: ["React", "Node.js", "Tailwind CSS", "Role-based auth"],
    summary:
      "A multi-role logistics platform for parcel tracking and returns, with separate surfaces for customers, field couriers and administrators.",
    problem:
      "Returns were handled over phone and spreadsheet. Customers had no way to see where a parcel was, and couriers had no single view of the day’s drop-offs.",
    approach:
      "I mapped the three audiences to three distinct surfaces sharing one component library, then built a public tracking view that needs no account so customers stop calling support.",
    features: [
      "Public parcel tracking with a status timeline, no sign-in required",
      "Courier dashboard for delivery routes and drop-off locations",
      "Role-based authentication across admin, driver and customer",
      "Partner onboarding portal with automated hand-off workflows",
    ],
    myRole: "Frontend architecture, all interface work, API integration",
    image: null,
    live: null,
    repo: null,
    repoNote: "Private repository",
  },
  {
    slug: "build-sight",
    title: "Build-Sight",
    subtitle: "Live construction camera feeds",
    year: "2023",
    kind: "app",
    context: "Client work",
    featured: true,
    stack: ["React", "Redux Toolkit", "Material UI", "Video streaming"],
    summary:
      "An industrial monitoring frontend that connects remote construction sites to project managers through live video and generated time-lapses.",
    problem:
      "Project managers were driving to sites to confirm progress. Existing camera software gave them a raw feed and nothing else.",
    approach:
      "I built the viewer around comparison rather than live watching: pick two dates, see them side by side. The live feed became a secondary affordance.",
    features: [
      "Live camera feeds with pan, tilt and zoom controls",
      "Side-by-side date comparison for progress verification",
      "Automated project time-lapse rendering",
      "Hierarchical project and site camera management",
    ],
    myRole: "Frontend development, state architecture, interface design",
    image: null,
    live: null,
    repo: null,
    repoNote: "Private repository",
  },
  {
    slug: "cricket-analytics",
    title: "Cricket player analytics",
    subtitle: "Performance dashboard for athlete comparison",
    year: "2024",
    kind: "dashboard",
    context: "Client work",
    featured: true,
    stack: ["React", "Recharts", "Tailwind CSS"],
    summary:
      "An analytical dashboard visualising athlete performance, bowling pace distribution and head-to-head matchup statistics.",
    problem:
      "Analysts were reading player form out of dense statistical tables, which made trends across a season hard to see.",
    approach:
      "Every metric got a chart type chosen for the question it answers, and the comparison view was built to hold two players at once rather than one at a time.",
    features: [
      "Interactive batting strike rate and bowling pace charts",
      "Head-to-head historical comparison between two players",
      "Statistical modelling for match scenarios",
      "Exportable performance reports",
    ],
    myRole: "Data visualisation, dashboard interface, export pipeline",
    image: null,
    live: null,
    repo: null,
    repoNote: "Private repository",
  },
  {
    slug: "pos-inventory",
    title: "Point of sale and inventory",
    subtitle: "Retail checkout and stock management",
    year: "2022",
    kind: "app",
    context: "Client work",
    featured: true,
    stack: ["React", "Context API", "Styled Components"],
    summary:
      "A retail point-of-sale frontend built for speed at the counter, with barcode scanning, invoice generation and live stock adjustment.",
    problem:
      "The counter software in use took too many clicks per sale, and stock counts drifted from reality within a week of every audit.",
    approach:
      "I designed the checkout around a single focused input that accepts either a scan or a search, and made every stock change a side effect of a sale rather than a separate task.",
    features: [
      "Instant item search and barcode scanning with cart management",
      "Multi-tier discount engine and receipt generation",
      "Daily shift cash reports and turnover summaries",
      "Stock threshold alerts by product category",
    ],
    myRole: "Frontend development, checkout interaction design",
    image: null,
    live: null,
    repo: null,
    repoNote: "Private repository",
  },
  {
    slug: "admin-design-system",
    title: "SaaS admin design system",
    subtitle: "Reusable dashboard component library",
    year: "2025",
    kind: "system",
    context: "Personal project",
    featured: false,
    stack: ["Next.js", "shadcn/ui", "Tailwind CSS v4"],
    summary:
      "A production-ready admin template of accessible components, data tables and theme tokens that I reuse as the starting point for dashboard work.",
    problem:
      "Every dashboard project was rebuilding the same twenty components, and each rebuild drifted a little further from the last one.",
    approach:
      "I pulled the recurring pieces into one token-driven library, with the states that usually get skipped (empty, loading, error) built in from the start.",
    features: [
      "Collapsible navigation with a command palette",
      "Sortable, filterable, paginated data tables",
      "Light and dark themes driven by design tokens",
      "Summary cards with trend sparklines",
    ],
    myRole: "Design and build, end to end",
    image: null,
    live: null,
    repo: null,
    repoNote: "Available on request",
  },
  {
    slug: "device-compare",
    title: "Device specs comparison",
    subtitle: "Consumer utility for phone shopping",
    year: "2024",
    kind: "app",
    context: "Personal project",
    featured: false,
    stack: ["Next.js", "Public APIs", "Tailwind CSS", "SSR"],
    summary:
      "A responsive utility that pulls live mobile specifications from public device APIs for side-by-side technical comparison.",
    problem:
      "Spec sheets are published in units nobody shops in. Comparing two phones means holding numbers in your head across two browser tabs.",
    approach:
      "I built the comparison as the landing surface rather than a feature, with benchmark scores translated into a visual scale so the numbers mean something at a glance.",
    features: [
      "Live specification comparison across multiple models",
      "Fuzzy search with auto-suggest",
      "Visual benchmark scores for battery, processor and camera",
      "Server-rendered for fast first load on mobile connections",
    ],
    myRole: "Design and build, end to end",
    image: null,
    live: null,
    repo: null,
    repoNote: "Available on request",
  },
  {
    slug: "fashion-commerce-ux",
    title: "Fashion commerce app",
    subtitle: "Mobile design system and checkout flow",
    year: "2024",
    kind: "product",
    context: "Design commission",
    featured: false,
    stack: ["Figma", "Design system", "Prototype"],
    summary:
      "An end-to-end mobile design system and user flow for a luxury apparel store, built around a two-step checkout.",
    problem:
      "The client’s existing checkout ran to five screens, and most of the drop-off happened before payment selection.",
    approach:
      "I collapsed checkout into a bottom sheet that keeps the cart visible throughout, and delivered it as an auto-layout component library the client’s developers could build against directly.",
    features: [
      "Component library of over fifty auto-layout frames",
      "Two-step bottom-sheet checkout and payment selection",
      "Dark and warm palette variants with shared tokens",
    ],
    myRole: "Interface design, prototyping, developer hand-off",
    image: null,
    live: null,
    repo: null,
    repoNote: "Figma file on request",
  },
  {
    slug: "brand-identity",
    title: "Corporate brand identity",
    subtitle: "Logo systems and brand guidelines",
    year: "2022",
    kind: "brand",
    context: "Design commission",
    featured: false,
    stack: ["Illustrator", "Photoshop", "Brand guidelines"],
    summary:
      "Brand identity work for technology startups: vector logo systems, type hierarchy, social kits and written guidelines.",
    problem:
      "Early-stage teams had a logo and nothing else, so every new asset was an improvisation and none of them matched.",
    approach:
      "I delivered the logo as a system of lockups for the places it actually appears, paired with a short guideline document a non-designer can follow.",
    features: [
      "Logo system with horizontal and vertical lockups",
      "Social and marketing banner templates",
      "Colour token guide and typographic rules",
    ],
    myRole: "Brand design, guideline authoring",
    image: null,
    live: null,
    repo: null,
    repoNote: "Selected work on request",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export const capabilities = [
  {
    title: "Frontend engineering",
    body:
      "I build the interface layer of web products: component architecture, state, data fetching and the performance work that keeps it quick on a mid-range phone.",
    items: [
      "React and Next.js App Router",
      "Tailwind CSS and design tokens",
      "REST integration and state management",
      "Semantic markup and keyboard accessibility",
    ],
  },
  {
    title: "Interface design",
    body:
      "Before the code, the decisions. I work in Figma on layout, type and the states that get forgotten, so the build starts from something resolved.",
    items: [
      "Design systems and component libraries",
      "Responsive layout and type scales",
      "Empty, loading and error states",
      "Interactive prototypes",
    ],
  },
  {
    title: "Design to code",
    body:
      "The part most teams lose time on. Because I do both sides, there is no hand-off gap between the file and the build, and no fidelity lost in translation.",
    items: [
      "Figma files built for developers",
      "Token systems shared across design and code",
      "Pixel-accurate implementation",
      "Cross-browser and device verification",
    ],
  },
];

export const experience = [
  {
    role: "React developer",
    company: "Payprime, Azam Hitech Services",
    period: "2022–2023",
    location: "Pakistan",
    points: [
      "Built responsive React interfaces for enterprise workflow tooling.",
      "Integrated REST APIs with backend teams and owned client-side state.",
      "Led interface improvements that cut page load times and fixed mobile usability.",
    ],
  },
  {
    role: "Frontend developer",
    company: "Wazar Tech Studio & Solutions",
    period: "2022–2023",
    location: "Pakistan",
    points: [
      "Implemented interfaces from Figma and Adobe XD specifications.",
      "Built modular component systems reused across concurrent client projects.",
      "Handled cross-browser and responsive verification before release.",
    ],
  },
  {
    role: "Freelance frontend developer",
    company: "Direct clients and Fiverr",
    period: "2020–2023",
    location: "Remote, clients in the US, UK and UAE",
    points: [
      "Delivered frontend builds for startups and small businesses.",
      "Turned design concepts into interactive, maintainable interfaces.",
      "Managed scope and communication directly with clients.",
    ],
  },
  {
    role: "Freelance graphic designer",
    company: "Self-employed",
    period: "2017–present",
    location: "Remote",
    points: [
      "Delivered hundreds of commissions for brands, publishers and agencies.",
      "Produced brand identity systems, vector logos and marketing collateral.",
      "Carried visual craft from print work into frontend practice.",
    ],
  },
];

export const education = [
  {
    qualification: "BSc Computer Science",
    institution: "University of Swat, Khyber Pakhtunkhwa",
    period: "2019–2023",
    detail:
      "Software engineering, algorithms, data structures, databases and web application development.",
  },
  {
    qualification: "Diploma of Associate Engineering, Electrical",
    institution: "College of Advocating Technology",
    period: "2016–2019",
    detail: "Circuit logic, electronic systems and hardware problem solving.",
  },
  {
    qualification: "Diploma in Information Technology",
    institution: "Khyber Computer and Vocational College",
    period: "2016–2017",
    detail: "IT fundamentals, networking and introductory web programming.",
  },
];

export const stack = [
  {
    group: "Build",
    items: [
      { name: "React", note: "Primary" },
      { name: "Next.js", note: "Primary" },
      { name: "JavaScript, ES2023", note: "Primary" },
      { name: "Tailwind CSS", note: "Primary" },
      { name: "HTML and CSS", note: "Primary" },
      { name: "Redux Toolkit", note: "Working" },
      { name: "Bootstrap", note: "Working" },
    ],
  },
  {
    group: "Design",
    items: [
      { name: "Figma", note: "Primary" },
      { name: "Design tokens", note: "Primary" },
      { name: "Adobe XD", note: "Working" },
      { name: "Prototyping", note: "Working" },
    ],
  },
  {
    group: "Visual",
    items: [
      { name: "Photoshop", note: "Primary" },
      { name: "Illustrator", note: "Primary" },
      { name: "After Effects", note: "Working" },
      { name: "Canva", note: "Working" },
    ],
  },
];

export const languages = [
  { name: "Pashto", level: "Native" },
  { name: "Urdu", level: "Fluent" },
  { name: "English", level: "Professional working" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
