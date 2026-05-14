export const profile = {
  name: "Bùi Minh Hưng",
  role: "Senior Frontend Engineer",
  location: "Ho Chi Minh City, Vietnam",
  tagline:
    "Crafting high-quality user experiences and maintainable frontend infrastructures.",
  summary:
    "Senior Frontend Engineer with long experience building web applications, DApps, and complex UI systems. Specialized in React / Next.js ecosystems, modular architecture, and performance optimization. Passionate about crafting high-quality user experiences and maintainable frontend infrastructures.",
  yearsExperience: new Date().getFullYear() - 2012,
} as const;

export const contact = {
  email: "bui.m.hung@gmail.com",
  phone: "+84 909 726 724",
  phoneHref: "+84909726724",
  linkedin: "https://www.linkedin.com/in/bmhung",
  linkedinLabel: "linkedin.com/in/bmhung",
  resumeUrl: "/Resume_BuiMinhHung.pdf",
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Coderpush · Lemonade.social",
    role: "Lead Frontend Engineer",
    period: "Apr 2022 – May 2024",
    description:
      "Lead frontend engineer for a Web3 social DApp supporting NFT minting, auctioning, ticketing (fiat + token), and cross-chain identity integrations.",
    highlights: [
      "Redesigned NFT minting and auction flows, improving UX consistency and reducing transaction errors.",
      "Integrated Stripe (fiat) and token-based payments (peer-to-peer).",
      "Implemented cross-chain NFT passport minting using Axelar.",
      "Integrated decentralized naming services (ENS, Lens, SpaceID, Unstoppable).",
      "Modularized and integrated Cinny, a Matrix-based chat client.",
      "Integrated Ory for identity management.",
      "Designed and implemented a dynamic theming system enabling white-label customization for brand partners.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "GraphQL",
      "Web3",
      "Stripe",
      "Matrix",
    ],
  },
  {
    company: "Tinypulse",
    role: "Senior Frontend Engineer",
    period: "Aug 2016 – Apr 2022",
    description:
      "Sole frontend engineer assigned to an enterprise client with 30,000+ employees.",
    highlights: [
      "Delivered a large-scale survey platform handling 100+ question forms.",
      "Re-architected the data visualization layer to support large datasets.",
      "Migrated a multi-service frontend architecture into a monorepo for performance and maintainability.",
      "Led migration from a legacy stack to the React ecosystem.",
    ],
    stack: ["React", "TypeScript", "D3.js", "Monorepo", "Webpack"],
  },
  {
    company: "Fram",
    role: "Frontend Engineer",
    period: "Aug 2015 – Aug 2016",
    description:
      "Joined the Consortio Fashion Group team to reskin Halens.se and Cellbes.se — market leaders in Swedish fashion e-commerce.",
    highlights: [
      "Built advanced menus and filters.",
      "Implemented a responsive layout across the catalog.",
      "Shipped rich components with KnockoutJS, improving UX and page-load speed with minimal trade-offs from the traditional ASP implementation.",
    ],
    stack: ["KnockoutJS", "JavaScript", "ASP", "Responsive"],
  },
  {
    company: "Devinition",
    role: "Frontend Engineer",
    period: "Jun 2013 – Jun 2015",
    description: "Developed PortalTalk, a role-management system.",
    highlights: [
      "Set up a single-page web application with BackboneJS.",
      "Migrated a legacy codebase away from jQuery.",
      "Built isolated components integrated with SharePoint.",
      "Applied Microsoft Metro design principles to UI/UX.",
    ],
    stack: ["BackboneJS", "JavaScript", "SharePoint", "Metro UI"],
  },
  {
    company: "Axon Active",
    role: "Frontend Engineer · Scrum Master",
    period: "Feb 2012 – Mar 2013",
    description:
      "Kickstarted MyDataInNet (later Infomio), an online personal information registry tied to government records.",
    highlights: [
      "Implemented an early digital-to-print signature workflow integrated with government registry systems.",
      "Practiced and promoted Agile methodologies as a Scrum Master.",
      "Trained and coached the team.",
      "Certified Scrum Master.",
    ],
    stack: ["JavaScript", "Agile", "Scrum"],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Svelte",
      "TailwindCSS",
      "Vanilla Extract",
      "React Spring",
    ],
  },
  {
    title: "Architecture & Tooling",
    items: [
      "Webpack",
      "Rollup",
      "Monorepos",
      "Tree-shaking",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "PWA",
      "Service Workers",
    ],
  },
  {
    title: "Data & Backend Integration",
    items: ["GraphQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Visualization & Advanced UI",
    items: ["D3.js", "Three.js", "Complex UI animations"],
  },
];

export type Education = { title: string; org: string; year: string };

export const education: Education[] = [
  {
    title: "Web development with Rails",
    org: "Coderschool",
    year: "2016",
  },
  {
    title: "Scrum Master Training (Certified)",
    org: "Axon Active",
    year: "2012",
  },
  {
    title: "AAS Degree",
    org: "Saigontech – Saigon Institute of Technology",
    year: "2008 – 2011",
  },
];

export const strengths = [
  {
    title: "React / Next.js",
    body: "Modern app router patterns, server components, streaming, and SSR / SSG trade-offs.",
  },
  {
    title: "Modular Architecture",
    body: "Monorepos, tree-shaking, design-system thinking, and white-label theming.",
  },
  {
    title: "Performance",
    body: "Bundle budgets, code-splitting, image and font strategy, and Core Web Vitals.",
  },
] as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
