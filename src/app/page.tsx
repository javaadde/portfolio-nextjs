'use client';

import { useState } from "react";
import TypingAnimation from "@/components/TypingText";
import Link from "next/link";
import SlidingSkills from "@/components/SlidingSkills"; 

export default function Home() {


  const [openNav,setOpenNav]  = useState(false);

  return (
    <div>

     <section className="h-screen w-full relative">


      <div className={`fixed text-[#FBF4E6] top-0 left-0 h-screen w-full bg-[#404CD6] shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
           openNav ? 'translate-x-0' : 'translate-x-full'
          }`}>


          <span onClick={()=>{setOpenNav(false)}} className="text-2xl block text-center py-4 font-grotesk">Close</span>
             <h1 className="mt-10 text-center text-6xl font-silkscreen">JAVAD</h1>
       <ul className="font-grotesk mt-20 gap-5 flex items-center flex-col justify-center">
          <li className="text-2xl font-semibold cursor-pointer">Home</li>
          <li className="text-2xl font-semibold cursor-pointer">About</li>
          <li className="text-2xl font-semibold cursor-pointer">Projects</li>
          <li className="text-2xl font-semibold cursor-pointer">Contact</li>
       </ul>

        <div className="w-full pb-5 absolute bottom-0 flex justify-center">

          <div className="h-18 w-18 cursor-pointer font-jetbrains  rounded-full bg-[#FBF4E6] text-center"> <p className="p-4 text-[#404CD6]">LETS,<br/>TALK</p> </div>
        </div >
      </div>

      <nav className="text-center p-4">
        <ul className="hidden md:flex items-center px-15 justify-between font-grotesk font-normal">
          <li className="text-lg font-semibold cursor-pointer">Home</li>
          <li className="text-lg font-semibold cursor-pointer">About</li>
          <li className="text-lg font-semibold cursor-pointer">Projects</li>
          <li className="text-lg font-semibold cursor-pointer">Contact</li>
        </ul>

         <span onClick={()=>{setOpenNav(true)}} className="text-2xl md:hidden font-semibold font-grotesk">Menue</span>
      </nav>



      <main className="flex flex-col items-center justify-center mt-20">
        <h1 className="md:text-9xl text-6xl font-silkscreen">JAVAD</h1>

        <TypingAnimation />
      </main>

      <div className="w-55 p-2 ml-4 inline absolute bottom-0 left-0 ">
        <p className="font-jetbrains">CRIATIVE AND DEVELOPMENT TO TECH AND CULTURAL CHANGEMAKING</p>
      </div>

          <div className="md:w-20 md:h-20 h-18 w-18 cursor-pointer font-jetbrains absolute bottom-5 right-5 rounded-full bg-[#404cd6] text-center"> <p className="p-4">LETS,<br/>TALK</p> </div>


     </section>



     <section className="h-screen w-full flex md:flex-row flex-col md:items-center justify-center">

      <main className="md:p-12 p-8 md:pl-15 md:pt-15  flex md:flex-row  flex-col md:items-center justify-center">
        <h1 className="md:text-9xl font-grotesk text-5xl">
          Building <br /> with <br /> Purpose
        </h1>
        <p className="md:text-xl text-lg md:w-1/2  md:-translate-x-50 mt-10 font-jetbrains">Whether designing UI, prototyping flows, or engineering full-stack apps, I help transform ideas into real products</p>
      </main>
 
       <div className="md:px-12 px-8 mt-8 ">
          <Link href="#" className="font-jetbrains px-22 py-3 rounded-full bg-[#404CD6] ">
             About&nbsp;Me&nbsp;&rarr; 
          </Link>
       </div>
   
     </section>


     <section >
      <SlidingSkills />
     </section>


    </div>
  );
}
