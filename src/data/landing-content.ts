export const site = {
  title: "Seba",
  subtitle:
    "Essays on technology, Platonism, electronic music and the architecture of software.",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Blog", href: "#blog" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: "plotinus",
    title: "Plotinus.eu",
    description:
      "Statistical analysis and graph visualization for the texts of Plotinus. An interactive scholarly tool exploring the network of philosophical concepts across the Enneads.",
    category: "Digital Humanities",
    tags: ["Visualization", "Philosophy", "Data Analysis"],
    imageUrl:
      "https://images.unsplash.com/photo-1467688695332-6b486449d78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "https://plotinus.eu",
    caseStudyLink: "#",
  },
  {
    id: "werkfinder",
    title: "Werkfinder",
    description:
      "AI-assisted job discovery and application management platform with centralized tracking and intelligent opportunity matching.",
    category: "Product",
    tags: ["AI", "Career Tools", "Automation"],
    imageUrl:
      "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#",
    caseStudyLink: "#",
  },
] as const;

export const posts = [
  {
    id: "forms-platonism",
    title: "Forms and Functions: A Platonist Approach to Software Architecture",
    excerpt:
      "How Plato's theory of Forms can frame abstraction and software design decisions in modern systems.",
    category: "Philosophy",
    date: "March 2, 2026",
    readTime: "8 min",
    imageUrl:
      "https://images.unsplash.com/photo-1765809185515-da05f5fb02ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/blog/forms-platonism/",
  },
  {
    id: "reactive-systems",
    title: "The Architecture of Reactive Systems",
    excerpt:
      "Building resilient systems that remain responsive under failure through deliberate structure.",
    category: "Technology",
    date: "February 24, 2026",
    readTime: "12 min",
    imageUrl:
      "https://images.unsplash.com/photo-1772050137322-f9dec2997d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/blog/reactive-systems/",
  },
  {
    id: "symmetry-structure",
    title: "Symmetry, Structure, and the Beauty of Well-Designed Systems",
    excerpt:
      "Why elegance in engineering matters beyond functionality and how structural symmetry improves clarity.",
    category: "Essays",
    date: "February 15, 2026",
    readTime: "6 min",
    imageUrl:
      "https://images.unsplash.com/photo-1750456551232-46de16bbe54c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    href: "/blog/symmetry-structure/",
  },
] as const;

export const footerLinks = {
  Navigate: navLinks.filter((link) => link.href !== "#contact"),
  Connect: [
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Email", href: "mailto:hello@example.com" },
  ],
} as const;
