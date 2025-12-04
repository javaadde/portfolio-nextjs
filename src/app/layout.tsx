import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "javadde",
  description: "portfolio website javad vadakkangara",
   manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Silkscreen:wght@400;700&family=Stalinist+One&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        {children}



        <footer className="py-20 px-6 md:px-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center md:items-end mb-20 md:gap-30 gap-10">

            {/* Sections Links */}
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="font-jetbrains text-gray-500 mb-2 rotate-180 [writing-mode:vertical-lr]">sections</h3>
              </div>
              <ul className="font-jetbrains text-xl flex flex-col gap-2">
                <li className="hover:text-[#404CD6] cursor-pointer">About</li>
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
            <div className="md:border-r md:border-b-0 border-b border-gray-800 h-full md:p-12 p-6 w-3/4 text-center ">
              <h1 className="text-4xl md:text-[8rem] font-silkscreen md:mb-0">JAVAD</h1>
            </div>
            <div className="flex items-center justify-center text-center md:w-1/4 w-full pt-6 md:pt-0">
              <p className="font-jetbrains text-sm text-gray-500">© 2025 Maid by my self</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
