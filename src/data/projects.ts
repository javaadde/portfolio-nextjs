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
        image: "/3d/1.webp",
        description: "A modern e-commerce platform for fashion retail with seamless shopping experience, secure payments, and inventory management.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
        githubUrl: "https://github.com/yourusername/jd-fashion-store",
        demoUrl: "https://jd-fashion-store.vercel.app",
        features: [
            "Secure payment integration with Stripe",
            "Real-time inventory management",
            "User authentication and profiles",
            "Shopping cart and wishlist",
            "Responsive design for all devices"
        ]
    },
    {
        id: 2,
        name: "Portfolio V1",
        slug: "portfolio-v1",
        category: "Personal",
        rating: "4.9",
        image: "/3d/2.webp",
        description: "My first portfolio website showcasing my projects and skills with a clean, minimalist design.",
        technologies: ["React", "CSS3", "JavaScript", "Framer Motion"],
        githubUrl: "https://github.com/yourusername/portfolio-v1",
        demoUrl: "https://portfolio-v1.vercel.app",
        features: [
            "Smooth animations and transitions",
            "Project showcase gallery",
            "Contact form integration",
            "Dark mode support",
            "Fully responsive layout"
        ]
    },
    {
        id: 3,
        name: "Task Manager App",
        slug: "task-manager-app",
        category: "Productivity",
        rating: "4.8",
        image: "/3d/3.webp",
        description: "A comprehensive task management application with drag-and-drop functionality, team collaboration, and deadline tracking.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
        githubUrl: "https://github.com/yourusername/task-manager",
        demoUrl: "https://task-manager-demo.vercel.app",
        features: [
            "Drag-and-drop task organization",
            "Real-time collaboration",
            "Priority and deadline management",
            "Team workspaces",
            "Progress tracking and analytics"
        ]
    },
    {
        id: 4,
        name: "Weather Dashboard",
        slug: "weather-dashboard",
        category: "Utility",
        rating: "4.7",
        image: "/3d/4.webp",
        description: "A beautiful weather dashboard providing real-time weather data, forecasts, and interactive maps.",
        technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        demoUrl: "https://weather-dashboard.vercel.app",
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
        name: "Social Media Clone",
        slug: "social-media-clone",
        category: "Social",
        rating: "4.9",
        image: "/3d/5.webp",
        description: "A full-featured social media platform with posts, comments, likes, real-time chat, and user profiles.",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3"],
        githubUrl: "https://github.com/yourusername/social-media-clone",
        demoUrl: "https://social-clone.vercel.app",
        features: [
            "User authentication and profiles",
            "Post creation with media upload",
            "Real-time chat messaging",
            "Like, comment, and share functionality",
            "Follow/unfollow system"
        ]
    }
];
