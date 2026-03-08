export interface BlogPostBlock {
  type: "paragraph" | "heading" | "quote" | "image" | "list";
  content?: string;
  items?: string[];
  level?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    bio: string;
  };
  imageUrl: string;
  content: BlogPostBlock[];
}

export const blogPosts: Record<string, BlogPost> = {
  "forms-platonism": {
    slug: "forms-platonism",
    title: "Forms and Functions: A Platonist Approach to Software Architecture",
    subtitle: "What ancient philosophy can teach us about modern engineering",
    excerpt:
      "Exploring how Plato's theory of Forms provides a surprising framework for understanding abstraction in software design.",
    category: "Philosophy",
    date: "March 2, 2026",
    readTime: "8 min",
    author: {
      name: "JM",
      bio: "Software engineer and philosopher exploring the intersections of code, thought, and form.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1562164914-f71b2835e86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      {
        type: "paragraph",
        content:
          "In the Phaedo, Plato introduces his theory of Forms: beyond the material world lies a realm of perfect, eternal archetypes. A particular chair is merely an imperfect reflection of the Form of Chair, the ideal essence of what it means to be a chair. This might seem like abstract metaphysics, but it is a useful lens for software architecture.",
      },
      {
        type: "heading",
        level: 2,
        content: "The Problem of Abstraction",
      },
      {
        type: "paragraph",
        content:
          "Every software engineer grapples with abstraction. We write interfaces, define protocols, and create base classes that capture the essence of a concept while hiding implementation details.",
      },
      {
        type: "paragraph",
        content:
          "Consider a Message interface in a messaging system. We might define methods like send(), receive(), and getTimestamp(). Concrete implementations like EmailMessage, SMSMessage, and PushNotification satisfy this interface, but the interface itself is not any one of them.",
      },
      {
        type: "quote",
        content:
          "The interface captures the Form of Message: the essential characteristics that make something a message, independent of any specific implementation.",
      },
      {
        type: "heading",
        level: 2,
        content: "Forms as Interfaces",
      },
      {
        type: "paragraph",
        content:
          "In Platonic terms, our Message interface is analogous to the Form of Message. Concrete implementations are particular instances that participate in that Form.",
      },
      {
        type: "list",
        items: [
          "The interface/Form exists independently of implementation",
          "Multiple implementations can participate in one interface/Form",
          "The interface/Form is more stable than specific implementations",
          "Understanding the interface/Form applies across implementations",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "When designing abstractions, ask not just what works, but what the Form is. The particular is temporary, the abstract endures.",
      },
    ],
  },
  "reactive-systems": {
    slug: "reactive-systems",
    title: "The Architecture of Reactive Systems",
    subtitle: "Building resilient systems that gracefully handle failure",
    excerpt:
      "A deep dive into building resilient, responsive systems that gracefully handle failure.",
    category: "Technology",
    date: "February 24, 2026",
    readTime: "12 min",
    author: {
      name: "JM",
      bio: "Software engineer and philosopher exploring the intersections of code, thought, and form.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1772050137322-f9dec2997d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      {
        type: "paragraph",
        content:
          "Distributed systems are inherently complex, and failure is not a matter of if, but when. The reactive systems paradigm offers a compelling approach to building software that remains responsive even in the face of failure.",
      },
      {
        type: "paragraph",
        content:
          "This essay explores the core principles behind reactive architecture and practical patterns for implementation.",
      },
    ],
  },
  "symmetry-structure": {
    slug: "symmetry-structure",
    title: "Symmetry, Structure, and the Beauty of Well-Designed Systems",
    subtitle: "On the aesthetic dimension of software engineering",
    excerpt:
      "Why elegant code matters beyond mere functionality, and what ancient geometry can teach us about modern design principles.",
    category: "Essays",
    date: "February 15, 2026",
    readTime: "6 min",
    author: {
      name: "JM",
      bio: "Software engineer and philosopher exploring the intersections of code, thought, and form.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1750456551232-46de16bbe54c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      {
        type: "paragraph",
        content:
          "There is a particular satisfaction in reading well-designed code: a sense of rightness and inevitability, as if the solution could not have been otherwise.",
      },
      {
        type: "paragraph",
        content:
          "This exploration examines how principles of symmetry and structure manifest in software design and why they matter.",
      },
    ],
  },
};

export const allBlogPosts = Object.values(blogPosts);
