'use client';
// About page component

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function About() {
    const [openNav, setOpenNav] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newRotation = (scrollY / 1000) * 360;
            setRotation(newRotation);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
                    if (index !== -1 && !visibleCards.includes(index)) {
                        setVisibleCards(prev => [...prev, index]);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const cards = [
        {
            title: 'Build app',
            bgColor: 'bg-[#7A9D7E]',
            topColor: 'bg-[#5A7D5E]'
        },
        {
            title: 'which is scalable',
            bgColor: 'bg-[#FF6B5A]',
            topColor: 'bg-[#7A9D7E]'
        },
        {
            title: 'which is reliable',
            bgColor: 'bg-[#E8B44C]',
            topColor: 'bg-[#7A9D7E]'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Mobile Navigation Overlay */}
            <div className={`fixed text-[#FBF4E6] top-0 left-0 h-screen w-full bg-[#404CD6] shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${openNav ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <span onClick={() => setOpenNav(false)} className="text-2xl block text-center py-4 font-grotesk cursor-pointer">Close</span>
                <h1 className="mt-10 text-center text-6xl font-silkscreen">JAVAD</h1>
                <ul className="font-grotesk mt-20 gap-5 flex items-center flex-col justify-center">
                    <li className="text-2xl font-semibold cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-2xl font-semibold cursor-pointer">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="text-2xl font-semibold cursor-pointer">Projects</li>
                    <li className="text-2xl font-semibold cursor-pointer">Contact</li>
                </ul>

                <div className="w-full pb-5 absolute bottom-0 flex justify-center">
                    <div className="h-18 w-18 cursor-pointer font-jetbrains rounded-full bg-[#FBF4E6] text-center">
                        <p className="p-4 text-[#404CD6]">LETS,<br />TALK</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="text-center p-4">
                <ul className="hidden md:flex items-center px-15 justify-between font-grotesk font-normal">
                    <li className="text-lg font-semibold cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-lg font-semibold cursor-pointer">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="text-lg font-semibold cursor-pointer">Projects</li>
                    <li className="text-lg font-semibold cursor-pointer">Contact</li>
                </ul>

                <span onClick={() => setOpenNav(true)} className="text-2xl md:hidden font-semibold font-grotesk cursor-pointer">Menue</span>
            </nav>

            {/* Rotating "Let's Talk" Button */}
            <div
                className="md:w-20 md:h-20 h-15 w-15 cursor-pointer text-[#FBF4E6] font-jetbrains fixed bottom-5 right-5 rounded-full bg-[#404cd6] text-center transition-transform duration-100 z-40"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                <p className="p-2.5 text-sm md:p-5 md:text-md">LETS,<br />TALK</p>
            </div>

            {/* Hero Section */}
            <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 py-20">
                <h1 className="text-5xl md:text-8xl font-bold font-grotesk mb-8">About Me</h1>
                <p className="text-lg md:text-xl font-jetbrains max-w-2xl leading-relaxed">
                    We are a design-led, digital-first agency. A small core team, intertwined with a network of elite collaborators. We are innovative businesses, open-minded partners who embrace the opportunities that change offers.
                </p>
            </section>

            {/* What I Do Section */}
            <section className="min-h-screen w-full bg-[#FBF4E6] py-20 px-6 md:px-12">
                <h2 className="text-4xl md:text-6xl font-bold font-grotesk text-black mb-20">what i do</h2>

                <div className="relative max-w-4xl mx-auto" style={{ height: '900px' }}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardRefs.current[index] = el; }}
                            className={`absolute left-1/2 -translate-x-1/2 w-full md:w-[500px] transition-all duration-700 ease-out ${visibleCards.includes(index)
                                ? 'opacity-100'
                                : 'opacity-0 -translate-y-20'
                                }`}
                            style={{
                                top: `${index * 280}px`,
                                transitionDelay: `${index * 150}ms`,
                                zIndex: index
                            }}
                        >
                            <div className="relative">
                                {/* Top colored bar */}
                                <div className={`${card.topColor} h-8 md:h-10 rounded-t-3xl`}></div>

                                {/* Main card */}
                                <div className={`${card.bgColor} rounded-b-3xl p-12 md:p-16 flex items-center justify-center min-h-[200px] md:min-h-[250px]`}>
                                    <h3 className="text-3xl md:text-4xl font-bold font-grotesk text-black text-center">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 md:px-12 bg-black text-[#FBF4E6]">
                <div className="flex flex-col md:flex-row justify-center md:items-end mb-20 md:gap-30 gap-10">
                    {/* Sections Links */}
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-jetbrains text-gray-500 mb-2 rotate-180 [writing-mode:vertical-lr]">sections</h3>
                        </div>
                        <ul className="font-jetbrains text-xl flex flex-col gap-2">
                            <li className="hover:text-[#404CD6] cursor-pointer">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="hover:text-[#404CD6] cursor-pointer">Work</li>
                            <li className="hover:text-[#404CD6] cursor-pointer">Journal</li>
                            <li className="hover:text-[#404CD6] cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Socials Links */}
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-jetbrains text-gray-500 mb-2 rotate-180 [writing-mode:vertical-lr]">socials</h3>
                        </div>
                        <ul className="font-jetbrains text-xl flex flex-col gap-2">
                            <li className="hover:text-[#404CD6] cursor-pointer">LinkedIn</li>
                            <li className="hover:text-[#404CD6] cursor-pointer">Dribbble</li>
                            <li className="hover:text-[#404CD6] cursor-pointer">Behance</li>
                            <li className="hover:text-[#404CD6] cursor-pointer">Instagram</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center md:text-left border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:border-r md:border-b-0 border-b border-gray-800 h-full md:p-12 p-6 w-3/4 text-center">
                        <h1 className="text-4xl md:text-[8rem] font-silkscreen md:mb-0">JAVAD</h1>
                    </div>
                    <div className="flex items-center justify-center text-center md:w-1/4 w-full pt-6 md:pt-0">
                        <p className="font-jetbrains text-sm text-gray-500">© 2025 Made by my self</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
