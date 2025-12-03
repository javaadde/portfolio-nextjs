'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
    const [openNav, setOpenNav] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (imageRef.current) {
                const imageWidth = 400; // Width of the image container
                const imageHeight = 280; // Height of the image container
                const offset = 20;

                // Get viewport dimensions
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;

                // Calculate position - default to bottom-right
                let x = e.clientX + offset;
                let y = e.clientY + offset;

                // If image would overflow right edge, position to the left
                if (x + imageWidth > viewportWidth) {
                    x = e.clientX - imageWidth - offset;
                }

                // If image would overflow bottom edge, position above cursor
                if (y + imageHeight > viewportHeight) {
                    y = e.clientY - imageHeight - offset;
                }

                // Direct transform for responsiveness
                imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen w-full relative">



            <div className={`fixed text-[#FBF4E6] top-0 left-0 h-screen w-full bg-[#404CD6] shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${openNav ? 'translate-x-0' : 'translate-x-full'
                }`}>


                <span onClick={() => { setOpenNav(false) }} className="text-2xl block text-center py-4 font-grotesk">Close</span>
                <h1 className="mt-10 text-center text-6xl font-silkscreen">JAVAD</h1>
                <ul className="font-grotesk mt-20 gap-5 flex items-center flex-col justify-center">
                    <li><Link href="/" className="text-2xl font-semibold cursor-pointer">Home</Link></li>
                    <li><Link href="/about" className="text-2xl font-semibold cursor-pointer">About</Link></li>
                    <li><Link href="/projects" className="text-2xl font-semibold cursor-pointer">Projects</Link></li>
                    <li><Link href="/contact" className="text-2xl font-semibold cursor-pointer">Contact</Link></li>
                </ul>

                <div className="w-full pb-5 absolute bottom-0 flex justify-center">

                    <div className="h-18 w-18 cursor-pointer font-jetbrains  rounded-full bg-[#FBF4E6] text-center"> <p className="p-4 text-[#404CD6]">LETS,<br />TALK</p> </div>
                </div >
            </div>

            <nav className="text-center p-4">
                <ul className="hidden md:flex items-center px-15 justify-between font-grotesk font-normal">
                    <li><Link href="/" className="text-lg font-semibold cursor-pointer">Home</Link></li>
                    <li><Link href="/about" className="text-lg font-semibold cursor-pointer">About</Link></li>
                    <li><Link href="/projects" className="text-lg font-semibold cursor-pointer">Projects</Link></li>
                    <li><Link href="/contact" className="text-lg font-semibold cursor-pointer">Contact</Link></li>
                </ul>

                <span onClick={() => { setOpenNav(true) }} className="text-2xl md:hidden font-semibold font-grotesk">Menue</span>
            </nav>

            <main className="flex flex-col items-center w-full pt-10 pb-20">

                {/* Header Section */}
                <div className="w-full flex flex-col mb-10">


                    <div className="h-[70vh] flex flex-col justify-between">

                        <h1 className="text-5xl md:text-8xl mb-8 md:pl-10 pl-5 font-grotesk">My projects</h1>

                        {/* Marquee below header - Project Images */}
                        <div className="w-full h-32  overflow-hidden relative flex items-center">
                            {/* Gradient overlays */}
                            <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to right, transparent)' }}></div>
                            <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to left, transparent)' }}></div>

                            {/* Sliding container */}
                            <div className="flex animate-slide">
                                {/* First set */}
                                <div className="flex items-center gap-8 px-4">
                                    {projects.map((project, idx) => (
                                        <div
                                            key={`project-first-${idx}`}
                                            className="flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden shadow-lg border-2 border-white dark:border-gray-600 relative"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Second set (duplicate for seamless loop) */}
                                <div className="flex items-center gap-8 px-4">
                                    {projects.map((project, idx) => (
                                        <div
                                            key={`project-second-${idx}`}
                                            className="flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden shadow-lg border-2 border-white dark:border-gray-600 relative"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Projects List */}
                <div className="w-full max-w-7xl px-4 md:px-10 mt-10 relative">

                    {/* Hover Image Reveal (Cursor Follower) - Desktop Only */}
                    <div
                        ref={imageRef}
                        className="fixed top-0 left-0 pointer-events-none z-20 hidden md:block transition-opacity duration-300"
                        style={{ opacity: hoveredProject ? 1 : 0 }}
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`absolute top-0 left-0 w-[350px] h-[240px] transition-all duration-500 ease-out ${hoveredProject === project.id ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                            >
                                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-600 relative">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col w-full">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.slug}`}
                                className="group flex items-center justify-between border-b border-black/20 dark:border-white/20 py-6 md:py-10 cursor-pointer hover:bg-white/30 transition-colors duration-300 px-2 md:px-4 relative z-10"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="flex items-center gap-3 md:gap-6 flex-1">
                                    <h2 className="text-base md:text-5xl font-grotesk group-hover:translate-x-4 transition-transform duration-300">{project.name}</h2>
                                </div>

                                <div className="flex items-center gap-2 md:gap-10">
                                    <div className="flex flex-col items-end">
                                        <span className="font-jetbrains text-xs md:text-lg text-gray-600 dark:text-gray-400">{project.category}</span>
                                        <span className="font-jetbrains text-[10px] md:text-sm text-gray-400 dark:text-gray-500">Rate: {project.rating}</span>
                                    </div>
                                    <div className="w-8 h-8 md:w-14 md:h-14 rounded-full border border-black/30 dark:border-white/40 flex items-center justify-center group-hover:bg-black group-hover:text-[#FBF4E6] dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                                        <span className="text-sm md:text-2xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">🡲</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

            </main>

        </div>
    );
}
