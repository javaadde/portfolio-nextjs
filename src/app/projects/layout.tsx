import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore the web development projects built by Mohammed Javad (Javaadde), featuring MERN stack applications, 3D designs, and creative UI/UX implementations.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
