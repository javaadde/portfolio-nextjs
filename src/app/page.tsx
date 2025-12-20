'use client';

import { useState, useEffect, useRef } from "react";
import TypingAnimation from "@/components/TypingText";
import Link from "next/link";
import SlidingSkills from "@/components/SlidingSkills";
import CursorImageTrail from "@/components/MouseMoveAnimation";

export default function Home() {


  const [openNav, setOpenNav] = useState(false);
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Rotate 360 degrees for every 1000px scrolled
      const newRotation = (scrollY / 1000) * 360;
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>

      <section ref={sectionRef} className="h-screen w-full relative overflow-hidden">

        <div className={`fixed text-[#FBF4E6] top-0 left-0 h-screen w-full bg-[#404CD6] shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${openNav ? 'translate-x-0' : 'translate-x-full'
          }`}>


          <span onClick={() => { setOpenNav(false) }} className="text-2xl block text-center py-4 font-grotesk">Close</span>
          <h1 className="mt-10 text-center text-6xl font-silkscreen">Javad</h1>
          <ul className="font-grotesk mt-20 gap-5 flex items-center flex-col justify-center">
            <li><Link href="/" className="text-2xl font-semibold cursor-pointer">Home</Link></li>
            <li><Link href="/about" className="text-2xl font-semibold cursor-pointer">About</Link></li>
            <li><Link href="/projects" className="text-2xl font-semibold cursor-pointer">Projects</Link></li>
            <li><Link href="/contact" className="text-2xl font-semibold cursor-pointer">Contact</Link></li>
          </ul>

          <div className="w-full pb-5 absolute bottom-0 flex justify-center">

            <Link href="/contact">
              <div className="h-18 w-18 cursor-pointer font-jetbrains text-xs md:text-md rounded-full bg-[#FBF4E6] text-center"> <p className="p-4 text-[#404CD6]">LETS,<br />TALK</p> </div>
            </Link>
          </div >
        </div>

        <nav className="text-center p-4">
          <ul className="hidden md:flex items-center px-15 justify-between font-grotesk font-normal">
            <li><Link href="/" className="text-lg font-semibold cursor-pointer">Home</Link></li>
            <li><Link href="/about" className="text-lg font-semibold cursor-pointer">About</Link></li>
            <li><Link href="/projects" className="text-lg font-semibold cursor-pointer">Projects</Link></li>
            <li><Link href="/contact" className="text-lg font-semibold cursor-pointer">Contact</Link></li>
            <li><a href="https://github.com/javaadde" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold cursor-pointer">GitHub</a></li>
          </ul>

          <span onClick={() => { setOpenNav(true) }} className="text-2xl md:hidden font-semibold font-grotesk">Menu</span>
        </nav>



        <main className="flex flex-col items-center justify-center mt-20 px-4">
          <h1 className="md:text-9xl text-5xl font-silkscreen relative z-30 text-center">
            Javaadde
            <span className="sr-only"> - MERN Stack Developer Portfolio</span>
          </h1>

          <TypingAnimation />
        </main>


        <div className="w-60 p-4 ml-4 inline absolute text-base md:text-md bottom-0 left-0 ">
          <p className="font-jetbrains">CRIATIVE AND DEVELOPMENT TO TECH AND CULTURAL CHANGEMAKING</p>
        </div>

        <Link href="/contact">
          <div
            className="md:w-20 md:h-20 h-15 w-15 cursor-pointer text-[#FBF4E6] font-jetbrains fixed bottom-5 right-5 rounded-full bg-[#404cd6] text-center transition-transform duration-100 z-40"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <p className="p-2.5 text-sm md:p-5 md:text-md">LETS,<br />TALK</p>
          </div>
        </Link>

        {sectionRef.current && <CursorImageTrail containerRef={sectionRef} />}

      </section>



      <section className="h-screen w-full flex flex-col justify-center">




        <main className="md:p-12 p-8 md:pl-15 md:pt-15 flex md:items-center max-md:flex-col md:justify-normal justify-center">
          <h1 className="md:text-9xl font-grotesk text-5xl">
            Building <br /> with <br /> Purpose
          </h1>
          <p className="md:text-xl text-lg md:w-1/2  md:-translate-x-50 mt-10 font-jetbrains">Whether designing UI, prototyping flows, or engineering full-stack apps, I help transform ideas into real products</p>
        </main>

        <div className="md:px-12 px-8 mt-8 ">
          <Link href="/about" className="font-jetbrains px-22 py-3 rounded-full text-[#FBF4E6] bg-[#404CD6] ">
            About&nbsp;Me&nbsp;&#10132;
          </Link>
        </div>

      </section>



      <section className="h-screen w-full bg-[#FBF4E6]">
        <SlidingSkills />

        <div className="w-full h-3/4 flex items-center justify-center flex-col gap-12">
          <h1 className="font-grotesk md:text-8xl text-4xl text-black w-3/4 text-center">Lets, Check
            Some Projects</h1>
          <Link href="/projects"
            className="relative inline-block py-2 px-12 cursor-pointer font-jetbrains text-[#404CD6] border-2 border-[#404CD6] rounded-full overflow-hidden z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#404CD6] before:-translate-x-full before:transition-all before:duration-400 before:-z-10 hover:before:translate-x-0 hover:text-[#FBF4E6] duration-300"
          >
            <button >
              MY PROJECTS &#10132;
            </button>
          </Link>
        </div>

      </section>






    </div>
  );
}
