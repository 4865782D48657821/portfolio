export const site = {
  title: "SF",
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

export const footerLinks = {
  Navigate: navLinks.filter((link) => link.href !== "#contact"),
  Connect: [
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Email", href: "mailto:hello@example.com" },
  ],
} as const;
