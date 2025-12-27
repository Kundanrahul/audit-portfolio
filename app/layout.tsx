import type { Metadata } from "next"
import { Share_Tech_Mono } from "next/font/google"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { SiLinkedin } from "react-icons/si"
import "./globals.css"
import Navbar from "./components/Navbar"



const hackerFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hacker",
})

export const metadata: Metadata = {
  title: "rox_k | DeFi SR & Dev",
  description:
    "Transparent, reproducible smart contract audits with actionable findings and proofs of concept.",
  icons: { icon: "/rox.png" },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${hackerFont.variable} antialiased bg-slate-900 text-slate-100 min-h-screen flex flex-col`}
      >
        {/* Navbar (client component) */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1">{children}</main>

{/* Footer */}
<footer className="bg-slate-900 border-t border-slate-800 mb-4 lg:mb-6">
  <div className="mx-auto max-w-6xl px-4 py-3 sm:py-4 lg:py-6 flex items-center justify-between">
    {/* Left-aligned copyright */}
    <p className="text-[10px] sm:text-xs lg:text-sm font-semibold font-heading text-slate-400 tracking-wide text-left">
      © {new Date().getFullYear()}
    </p>

    {/* Centered LinkedIn link */}
    <div className="flex-1 flex justify-center">
      <a
        href="https://www.linkedin.com/in/rahul-kundan-63b4b3248/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-capri font-heading text-[10px] sm:text-xs lg:text-sm transition-colors hover:text-slate-100 hover:underline"
      >
     <SiLinkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        Hire Me for Full Stack DeFi roles
      </a>
    </div>

    {/* Right-aligned Developer Website link */}
    <div className="flex justify-end">
      <a
        href="https://pf-rk.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-capri font-heading text-[10px] sm:text-xs lg:text-sm transition-colors hover:text-slate-100 hover:underline"
      >
        <GlobeAltIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        Dev Website
      </a>
    </div>
  </div>
</footer>
      </body>
    </html>
  )
}







