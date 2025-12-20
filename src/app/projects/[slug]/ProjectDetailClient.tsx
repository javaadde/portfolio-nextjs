'use client';

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailClient() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-grotesk mb-4">Project Not Found</h1>
                    <Link href="/projects" className="text-blue-500 hover:underline">
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full">
            {/* Header */}
            <nav className="text-center p-4 border-b border-black/10 dark:border-white/10">
                <ul className="hidden md:flex items-center px-15 justify-between font-grotesk font-normal">
                    <li><Link href="/" className="text-lg font-semibold cursor-pointer">Home</Link></li>
                    <li><Link href="/about" className="text-lg font-semibold cursor-pointer">About</Link></li>
                    <li><Link href="/projects" className="text-lg font-semibold cursor-pointer">Projects</Link></li>
                    <li><Link href="/contact" className="text-lg font-semibold cursor-pointer">Contact</Link></li>
                    <li><a href="https://github.com/javaadde" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold cursor-pointer">GitHub</a></li>
                </ul>
                <Link href="/projects" className="md:hidden text-2xl font-semibold font-grotesk">← Back</Link>
            </nav>

            <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-20">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-jetbrains"
                >
                    <span className="rotate-180">&#10132;</span>
                    Back to Projects
                </button>

                {/* Project Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h1 className="text-4xl md:text-7xl font-grotesk">{project.name}</h1>
                        <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-jetbrains">
                            {project.category}
                        </span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-jetbrains max-w-3xl">
                        {project.description}
                    </p>
                </div>

                {/* Project Image */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 border-4 border-white dark:border-gray-800">
                    <Image
                        src={project.image}
                        alt={`Javaadde MERN Stack Project - ${project.name}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mb-16">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-jetbrains hover:scale-105 transition-transform"
                        >
                            View Live Demo &#10132;
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border-2 border-black dark:border-white rounded-full font-jetbrains hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                        >
                            View on GitHub &#10132;
                        </a>
                    )}
                </div>

                {/* Technologies */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-grotesk mb-6">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-6 py-2 bg-gray-100 dark:bg-gray-800 rounded-full font-jetbrains text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-grotesk mb-6">Key Features</h2>
                    <ul className="space-y-4">
                        {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="text-2xl">✓</span>
                                <span className="font-jetbrains text-lg">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Rating */}
                <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <span className="text-5xl font-grotesk">{project.rating}</span>
                        <div>
                            <p className="font-jetbrains text-gray-600 dark:text-gray-400">Project Rating</p>
                            <p className="font-jetbrains text-sm text-gray-500">Based on user feedback</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
