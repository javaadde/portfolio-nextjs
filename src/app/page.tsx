import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full relative">
      <nav className="text-center p-2">
        <ul className="hidden md:flex items-center px-15 py-2 justify-between font-grotesk font-normal">
          <li className="text-lg font-semibold cursor-pointer">Home</li>
          <li className="text-lg font-semibold cursor-pointer">About</li>
          <li className="text-lg font-semibold cursor-pointer">Projects</li>
          <li className="text-lg font-semibold cursor-pointer">Contact</li>
        </ul>

         <span className="text-xl md:hidden font-semibold font-grotesk" >Menue</span>

      </nav>

      <main className="flex flex-col items-center justify-center mt-20">
        <h1 className="md:text-9xl text-6xl font-silkscreen">JAVAD</h1>

        <p className="font-jetbrains mt-20  w-35 text-center">
          CRAFTING DIGITAL EXPERIENCES THAT MATTERS
        </p>
      </main>

      <div className="w-55 p-2 inline absolute bottom-0 left-0 ">
        <p className="font-jetbrains">CRIATIVE AND DEVELOPMENT TO TECH AND CULTURAL CHANGEMAKING</p>
      </div>

          <div className="md:w-20 md:h-20 h-18 w-18 cursor-pointer font-jetbrains absolute bottom-5 right-5 rounded-full bg-blue-500 text-center"> <p className="p-4">LETS,<br/>TALK</p> </div>

    </div>
  );
}
