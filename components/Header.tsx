"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Šlep služba Bucko" width={78} height={78} className="rounded-md" />
          <div>
            <div className="hidden md:block font-bold text-lg leading-tight">Šlep Bucko</div>
            <div className="hidden md:block text-amber-400 text-xs font-medium tracking-wide">Beograd · 24/7</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#usluge" className="hover:text-amber-400 transition-colors">Usluge</Link>
          <Link href="#o-nama" className="hover:text-amber-400 transition-colors">O nama</Link>
          <Link href="#lokacije" className="hover:text-amber-400 transition-colors">Lokacije</Link>
          <Link href="#kontakt" className="hover:text-amber-400 transition-colors">Kontakt</Link>
        </nav>

        <a
          href={`tel:${PHONE}`}
          className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-4 py-2 rounded-lg transition-colors text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          {PHONE_DISPLAY}
        </a>

        <a
          href={`tel:${PHONE}`}
          className="md:hidden flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-black font-bold px-3 py-2 rounded-lg transition-colors text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          {PHONE_DISPLAY}
        </a>

        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meni"
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="#usluge" className="py-2 border-b border-gray-700 hover:text-amber-400" onClick={() => setMenuOpen(false)}>Usluge</Link>
          <Link href="#o-nama" className="py-2 border-b border-gray-700 hover:text-amber-400" onClick={() => setMenuOpen(false)}>O nama</Link>
          <Link href="#lokacije" className="py-2 border-b border-gray-700 hover:text-amber-400" onClick={() => setMenuOpen(false)}>Lokacije</Link>
          <Link href="#kontakt" className="py-2 border-b border-gray-700 hover:text-amber-400" onClick={() => setMenuOpen(false)}>Kontakt</Link>
          <a href={`tel:${PHONE}`} className="mt-1 bg-amber-500 text-black font-bold py-2 px-4 rounded-lg text-center">
            Pozovi: {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}
