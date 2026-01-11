import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Javaadde',
    default: 'Javaadde | MERN Stack Developer Portfolio',
  },
  description: "Explore the portfolio of Mohammed Javad (Javaadde), a MERN stack developer specializing in React, Node.js, and 3D design. View my projects and GitHub contributions.",
  keywords: ["Javaadde", "Mohammed Javad", "MERN Stack Developer", "React Developer", "Node.js Developer", "3D Design", "Portfolio"],
  authors: [{ name: "Mohammed Javad", url: "https://javade.xyz" }],
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon.ico" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://javade.xyz",
  },
  openGraph: {
    title: "Javaadde | Mohammed Javad - MERN Stack Developer Portfolio",
    description: "Explore the portfolio of Mohammed Javad (Javaadde), a MERN stack developer specializing in React, Node.js, and 3D design.",
    url: "https://javade.xyz",
    siteName: "Javaadde Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Javaadde Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javaadde | Mohammed Javad - MERN Stack Developer Portfolio",
    description: "Explore the portfolio of Mohammed Javad (Javaadde), a MERN stack developer specializing in React, Node.js, and 3D design.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammed Javad",
    "alternateName": "Javaadde",
    "url": "https://javade.xyz",
    "image": "https://javade.xyz/logo.png",
    "sameAs": [
      "https://github.com/javaadde",
      "https://www.linkedin.com/in/javaadde",
      "https://www.behance.net/javaadde",
      "https://sketchfab.com/javaadde",
      "https://www.instagram.com/javaadde_"
    ],
    "jobTitle": "MERN Stack Developer",
    "description": "Mohammed Javad (Javaadde) is a MERN stack developer specializing in React, Node.js, and 3D design."
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Silkscreen:wght@400;700&family=Stalinist+One&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}

        <footer className="py-20 px-6 md:px-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center md:items-end mb-20 md:gap-30 gap-10">

            {/* Sections Links */}
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="font-jetbrains text-gray-500 mb-2 rotate-180 [writing-mode:vertical-lr]">sections</h3>
              </div>
              <ul className="font-jetbrains text-xl flex flex-col gap-2">
                <li><a href="/about" className="hover:text-[#404CD6] cursor-pointer">About</a></li>
                <li><a href="/projects" className="hover:text-[#404CD6] cursor-pointer">Work</a></li>
                <li><a href="/contact" className="hover:text-[#404CD6] cursor-pointer">Contact</a></li>
              </ul>
            </div>

            {/* Socials Links */}
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="font-jetbrains text-gray-500 mb-2 rotate-180 [writing-mode:vertical-lr]">socials</h3>
              </div>
              <ul className="font-jetbrains text-xl flex flex-col gap-2">
                <li><a href="https://github.com/javaadde" target="_blank" rel="noopener noreferrer" className="hover:text-[#404CD6] cursor-pointer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/mohammed-javad-v-007137255/" target="_blank" rel="noopener noreferrer" className="hover:text-[#404CD6] cursor-pointer">LinkedIn</a></li>
                <li><a href="https://www.behance.net/javaadde" target="_blank" rel="noopener noreferrer" className="hover:text-[#404CD6] cursor-pointer">Behance</a></li>
                <li><a href="https://sketchfab.com/javaadde" target="_blank" rel="noopener noreferrer" className="hover:text-[#404CD6] cursor-pointer">Sketchfab</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center md:text-left border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center">
            <div className="md:border-r md:border-b-0 border-b border-gray-800 h-full md:p-12 p-6 w-3/4 text-center ">
              <h1 className="text-4xl md:text-[8rem] font-silkscreen md:mb-0">JAVAD</h1>
            </div>
            <div className="flex items-center justify-center text-center md:w-1/4 w-full pt-6 md:pt-0">
              <p className="font-jetbrains text-sm text-gray-500">© 2025 Made by myself</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}


