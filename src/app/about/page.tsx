'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
    const [openNav, setOpenNav] = useState(false);
    const [rotation, setRotation] = useState(0);

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

    const cards = [
        {
            title: 'Build app',
            bgColor: 'bg-[#7A9D7E]',
            topColor: 'bg-[#5A7D5E]'
        },
        {
            title: 'and i scale it',
            bgColor: 'bg-[#FF6B5A]',
            topColor: 'bg-[#7A9D7E]'
        },
        {
            title: 'then deploye it',
            bgColor: 'bg-[#E8B44C]',
            topColor: 'bg-[#7A9D7E]'
        }
    ];

    return (
        <div className="min-h-screen">
            <div className={`fixed text-[#FBF4E6] top-0 left-0 h-screen w-full bg-[#404CD6] shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${openNav ? 'translate-x-0' : 'translate-x-full'}`}>
                <span onClick={() => setOpenNav(false)} className="text-2xl block text-center py-4 font-grotesk cursor-pointer">Close</span>
                <h1 className="mt-10 text-center text-6xl font-silkscreen">JAVAD</h1>
                <ul className="font-grotesk mt-20 gap-5 flex items-center flex-col justify-center">
                    <li className="text-2xl font-semibold cursor-pointer"><Link href="/">Home</Link></li>
                    <li className="text-2xl font-semibold cursor-pointer"><Link href="/about">About</Link></li>
                    <li className="text-2xl font-semibold cursor-pointer">Projects</li>
                    <li className="text-2xl font-semibold cursor-pointer">Contact</li>
                </ul>
                <div className="w-full pb-5 absolute bottom-0 flex justify-center">
                    <div className="h-18 w-18 cursor-pointer font-jetbrains rounded-full bg-[#FBF4E6] text-center">
                        <p className="p-4 text-[#404CD6]">LETS,<br />TALK</p>
                    </div>
                </div>
            </div>

            <nav className="text-center p-4">
                <ul className="hidden md:flex items-center px-15 justify-between font-grotesk font-normal">
                    <li className="text-lg font-semibold cursor-pointer"><Link href="/">Home</Link></li>
                    <li className="text-lg font-semibold cursor-pointer"><Link href="/about">About</Link></li>
                    <li className="text-lg font-semibold cursor-pointer">Projects</li>
                    <li className="text-lg font-semibold cursor-pointer">Contact</li>
                </ul>
                <span onClick={() => setOpenNav(true)} className="text-2xl md:hidden font-semibold font-grotesk cursor-pointer">Menue</span>
            </nav>

            <div className="md:w-20 md:h-20 h-15 w-15 cursor-pointer text-[#FBF4E6] font-jetbrains fixed bottom-5 right-5 rounded-full bg-[#404cd6] text-center transition-transform duration-100 z-40" style={{ transform: `rotate(${rotation}deg)` }}>
                <p className="p-2.5 text-sm md:p-5 md:text-md">LETS,<br />TALK</p>
            </div>

            <section className="min-h-screen w-full flex flex-col justify-center px-6 md:px-12 py-20">
                <h1 className="text-5xl md:text-8xl font-bold font-grotesk mb-8">About Me</h1>
                <p className="text-lg md:text-xl font-jetbrains max-w-2xl leading-relaxed">
                    We are a design-led, digital-first agency. A small core team, intertwined with a network of elite collaborators. We are innovative businesses, open-minded partners who embrace the opportunities that change offers.
                </p>
            </section>

            <section className="w-full bg-[#FBF4E6] py-20 px-6 md:px-12">
                <h2 className="text-4xl md:text-6xl font-bold font-grotesk text-black mb-8 text-center">what i do</h2>
                <div className="relative">
                    {cards.map((card, index) => (
                        <div key={index} className="h-screen flex items-center justify-center sticky top-0" style={{ zIndex: 10 + index }}>
                            <div className="w-full md:w-3/4" style={{ transform: `translateY(${index * 20}px)` }}>
                                <div className="relative">
                                    {/* <div className={`${card.topColor} h-8 md:h-10 rounded-t-3xl`}></div> */}
                                    <div className={`${card.bgColor} rounded-2xl p-12 md:p-16 flex items-center justify-center min-h-[200px] md:min-h-[250px]`}>
                                        <h3 className="text-3xl md:text-4xl font-bold font-grotesk text-black text-center">{card.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
