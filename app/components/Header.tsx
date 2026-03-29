"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#2E7D32] text-white sticky top-0 z-50 shadow-md w-full">
      <div className="w-full px-2">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center">
            <span className="font-semibold text-base" style={{ color: "#FFE0B2", fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
              Dream Destination Travel
            </span>
          </Link>

          <nav className="hidden md:flex items-center">
            <Link href="/book_now" className="hover:text-[#ED6A02] transition px-3 py-2 text-base">
              Book Now
            </Link>
            <Link href="#our_services" className="hover:text-[#ED6A02] transition px-3 py-2 text-base">
              Our Services
            </Link>
            <Link href="/golf" className="hover:text-[#ED6A02] transition px-3 py-2 text-base">
              Golf Services
            </Link>
            <Link href="/contactus" className="hover:text-[#ED6A02] transition px-3 py-2 text-base">
              Contact Us
            </Link>
            <Link href="/about" className="hover:text-[#ED6A02] transition px-3 py-2 text-base">
              About
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded hover:bg-[#1A1A1A]/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu md:hidden bg-[#2E7D32] p-2 shadow-lg border-t border-white/10">
          <Link href="/book_now" className="block px-4 py-3 text-white hover:bg-[#ED6A02] transition">
            Book Now
          </Link>
          <Link href="#our_services" className="block px-4 py-3 text-white hover:bg-[#ED6A02] transition">
            Our Services
          </Link>
          <Link href="/golf" className="block px-4 py-3 text-white hover:bg-[#ED6A02] transition">
            Golf Services
          </Link>
          <Link href="/contactus" className="block px-4 py-3 text-white hover:bg-[#ED6A02] transition">
            Contact Us
          </Link>
          <Link href="/about" className="block px-4 py-3 text-white hover:bg-[#ED6A02] transition">
            About
          </Link>
        </div>
      )}
    </header>
  );
}