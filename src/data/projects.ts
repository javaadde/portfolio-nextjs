export interface Project {
  id: number;
  name: string;
  slug: string;
  category: string;
  rating: string;
  image: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Hayon",
    slug: "hayon",
    category: "SaaS",
    rating: "9.5",
    image: "/projects/hayon.png",
    description:
      "A modern social media management platform with AI-powered content creation, multi-platform scheduling, and real-time analytics.",
    technologies: [
      "Next.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Socket.io",
      "Gemini AI",
      "Stripe",
    ],
    githubUrl: "https://github.com/devxtra-community/hayon",
    demoUrl: "https://hayon.site",
    features: [
      "Automated multi-platform post scheduling",
      "AI-driven caption and content generation",
      "Real-time analytics and engagement tracking",
      "Secure Stripe subscription integration",
      "Monorepo architecture with background workers",
    ],
  },
  {
    id: 2,
    name: "Trendzy",
    slug: "trendzy",
    category: "E-commerce",
    rating: "9.8",
    image: "/projects/trendzy.png",
    description:
      "A high-end editorial e-commerce platform for men's fashion, featuring premium typography and a seamless shopping experience built with React 19.",
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "React Router 7",
      "Axios",
      "Lucide",
    ],
    githubUrl: "https://github.com/javaadde/trendzy.frontend",
    demoUrl: "https://trendzy-javad.vercel.app/",
    features: [
      "Modern editorial UI with Tailwind CSS 4",
      "Seamless navigation with React Router 7",
      "Performance-optimized with Vite",
      "Advanced product filtering and discovery",
      "Mobile-first responsive architecture",
    ],
  },
  //   {
  //     id: 3,
  //     name: "Viewly",
  //     slug: "viewly",
  //     category: "Testing",
  //     rating: "7.7",
  //     image: "/projects/viewly.png",
  //     description:
  //       "A beautiful weather dashboard providing real-time weather data, forecasts, and interactive maps.",
  //     technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  //     githubUrl: "https://github.com/javaadde/viewly",
  //     demoUrl: "https://viewly-two.vercel.app",
  //     features: [
  //       "Real-time weather updates",
  //       "7-day forecast",
  //       "Interactive weather maps",
  //       "Location-based detection",
  //       "Weather alerts and notifications",
  //     ],
  //   },
  {
    id: 4,
    name: "explo",
    slug: "explo",
    category: "Extension",
    rating: "9.2",
    image: "/projects/explo.png",
    description:
      "A premium Chrome Extension that replaces the new tab page with a minimal, high-performance dashboard featuring productivity tools and custom analytics.",
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Chrome API",
      "Recharts",
      "Lucide",
    ],
    githubUrl: "https://github.com/javaadde/explo",
    features: [
      "Custom New Tab page override",
      "Real-time usage analytics and charts",
      "Integrated Monkeytype typing statistics",
      "Minimalist flip-clock and productivity widgets",
      "Storage-synced personal bookmarks and settings",
    ],
  },
  {
    id: 5,
    name: "Panto-design clone",
    slug: "panto-design-clone",
    category: "Design",
    rating: "8.9",
    image: "/projects/design-clone.png",
    description:
      "A Fully-Responsive Landing page desing of panto which is cloned for purpose of studying",
    technologies: ["html", "javaScript", "tailwindcss"],
    githubUrl: "https://github.com/javaadde/FigmaDesign",
    demoUrl: "https://javaadde.github.io/FigmaDesign/two/design.html",
    features: [
      "User authentication and profiles",
      "Post creation with media upload",
      "Real-time chat messaging",
      "Like, comment, and share functionality",
      "Follow/unfollow system",
    ],
  },
  {
    id: 6,
    name: "UIfry design clone",
    slug: "uifry-design-clone",
    category: "Design",
    rating: "8.9",
    image: "/projects/design-clone2.png",
    description:
      "A Fully-Responsive Landing page desing of panto which is cloned for purpose of studying",
    technologies: ["html", "javaScript", "tailwindcss"],
    githubUrl: "https://github.com/javaadde/FigmaDesign",
    demoUrl: "https://javaadde.github.io/FigmaDesign/one/design.html",
    features: [
      "User authentication and profiles",
      "Post creation with media upload",
      "Real-time chat messaging",
      "Like, comment, and share functionality",
      "Follow/unfollow system",
    ],
  },
];
