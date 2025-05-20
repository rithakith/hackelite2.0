"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Empty div for left spacing to match logo */}
          <div className="w-48"></div>

          {/* Center Navigation Links with glassmorphism */}
          <div className="hidden md:block px-8 py-4 mt-4 rounded-full backdrop-blur-md bg-black/20 border border-white/10">
            <div className="flex items-center gap-6">
              <Link
                href="/#about"
                className="text-white/80 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/#timeline"
                className="text-white/80 hover:text-white transition-colors"
              >
                Timeline
              </Link>
              <Link
                href="/#phases"
                className="text-white/80 hover:text-white transition-colors"
              >
                Phases
              </Link>
              <Link
                href="/#stats"
                className="text-white/80 hover:text-white transition-colors"
              >
                Stats
              </Link>
              <Link
                href="/#team"
                className="text-white/80 hover:text-white transition-colors"
              >
                Team
              </Link>
              <Link
                href="/#gallery"
                className="text-white/80 hover:text-white transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/#faq"
                className="text-white/80 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Register Button aligned to right */}
          <Link
            href="/#register"
            className="px-6 py-2 mt-4 rounded-lg bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-white font-medium hover:shadow-lg hover:shadow-[#a280ec]/20 transition-all duration-300"
          >
            Register Now
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
