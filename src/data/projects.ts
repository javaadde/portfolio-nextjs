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
        name: "JD Fashion Store",
        slug: "jd-fashion-store",
        category: "E-commerce",
        rating: "5.0",
        image: "/projects/e-commerce.png",
        description: "A modern e-commerce platform for fashion retail with seamless shopping experience, secure payments, and inventory management.",
        technologies: ["React.js", "JavaScript", "Tailwind CSS", "MongoDB"],
        githubUrl: "https://github.com/javaadde",
        demoUrl: "/#",
        features: [
            "Secure payment integration with Stripe",
            "Real-time inventory management",
            "User authentication and profiles",
            "Shopping cart and wishlist",
            "Responsive design for all devices"
        ]
    },
    {
        id: 5,
        name: "UIfry design clone",
        slug: "uifry-design-clone",
        category: "Design",
        rating: "8.9",
        image: "/projects/design-clone2.png",
        description: "A Fully-Responsive Landing page desing of panto which is cloned for purpose of studying",
        technologies: ["html", "javaScript", "tailwindcss",],
        githubUrl: "https://github.com/javaadde/FigmaDesign",
        demoUrl: "https://javaadde.github.io/FigmaDesign/one/design.html",
        features: [
            "User authentication and profiles",
            "Post creation with media upload",
            "Real-time chat messaging",
            "Like, comment, and share functionality",
            "Follow/unfollow system"
        ]
    },
    // {
    //     id: 3,
    //     name: "Task Manager App",
    //     slug: "task-manager-app",
    //     category: "Productivity",
    //     rating: "4.8",
    //     image: "/3d/3.webp",
    //     description: "A comprehensive task management application with drag-and-drop functionality, team collaboration, and deadline tracking.",
    //     technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
    //     githubUrl: "https://github.com/yourusername/task-manager",
    //     demoUrl: "https://task-manager-demo.vercel.app",
    //     features: [
    //         "Drag-and-drop task organization",
    //         "Real-time collaboration",
    //         "Priority and deadline management",
    //         "Team workspaces",
    //         "Progress tracking and analytics"
    //     ]
    // },
    {
        id: 4,
        name: "Viewly",
        slug: "viewly",
        category: "Testing",
        rating: "7.7",
        image: "/projects/viewly.png",
        description: "A beautiful weather dashboard providing real-time weather data, forecasts, and interactive maps.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/javaadde/viewly",
        demoUrl: "https://viewly-two.vercel.app",
        features: [
            "Real-time weather updates",
            "7-day forecast",
            "Interactive weather maps",
            "Location-based detection",
            "Weather alerts and notifications"
        ]
    },
    {
        id: 5,
        name: "Panto-design clone",
        slug: "panto-design-clone",
        category: "Design",
        rating: "8.9",
        image: "/projects/design-clone.png",
        description: "A Fully-Responsive Landing page desing of panto which is cloned for purpose of studying",
        technologies: ["html", "javaScript", "tailwindcss",],
        githubUrl: "https://github.com/javaadde/FigmaDesign",
        demoUrl: "https://javaadde.github.io/FigmaDesign/two/design.html",
        features: [
            "User authentication and profiles",
            "Post creation with media upload",
            "Real-time chat messaging",
            "Like, comment, and share functionality",
            "Follow/unfollow system"
        ]
    }
];
