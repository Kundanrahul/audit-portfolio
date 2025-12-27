"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  HomeIcon,
  DocumentTextIcon,
  TrophyIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import roxAvatar from "../assets/rox.jpeg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Header bar only */}
      <header className="fixed md:sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Left nav: brand */}
    <Link
      href="/"
      className="flex items-center gap-2 
             px-2 py-1 text-sm 
             sm:px-3 sm:py-2 sm:text-base 
             lg:px-4 lg:py-2 lg:text-lg
             font-semibold tracking-wide text-slate-200 
             border border-slate-600 rounded-md bg-slate-800 
             hover:bg-slate-700 hover:text-capri hover:scale-105 transition-transform"
      >
     <Image
       src={roxAvatar}
       alt="rox_k avatar"
       width={30}   // smaller avatar for mobile
       height={30}
       className="rounded-full sm:w-7 sm:h-7 lg:w-8 lg:h-8"
      />
      rox_k
    </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-4">
            <Link href="/" className="flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase text-slate-200 hover:text-capri hover:scale-105 transition-transform">
              <HomeIcon className="w-5 h-5" /> Home
            </Link>
            <Link href="/findings" className="flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase text-slate-200 hover:text-capri hover:scale-105 transition-transform">
              <DocumentTextIcon className="w-5 h-5" /> Findings
            </Link>
            <Link href="/contests" className="flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase text-slate-200 hover:text-capri hover:scale-105 transition-transform">
              <TrophyIcon className="w-5 h-5" /> Contests
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-200 hover:text-capri transition"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-0"></div>

      {/* Mobile dropdown ->horizontal bar */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-slate-900 border-b border-slate-800 flex justify-around z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center p-4 text-slate-200 hover:text-capri transition"
        >
          <HomeIcon className="w-7 h-7" />
        </Link>
        <Link
          href="/findings"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center p-4 text-slate-200 hover:text-capri transition"
        >
          <DocumentTextIcon className="w-7 h-7" />
        </Link>
        <Link
          href="/contests"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-center p-4 text-slate-200 hover:text-capri transition"
        >
          <TrophyIcon className="w-7 h-7" />
        </Link>
      </div>
    </div>
  )
}









