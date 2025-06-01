"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300
      lg:bg-transparent lg:backdrop-blur-none
      backdrop-blur-lg bg-black/60 border-b border-white/10 lg:border-none"
    >
      <div className="relative w-full lg:max-w-8xl mx-auto px-4 lg:py-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center lg:h-12 h-8">
            <img
              src="/hackelite_logo.png"
              alt="HackElite Logo"
              className="lg:w-48 w-28 h-auto"
            />
          </div>
          {/* Center Navigation Links with glassmorphism */}{" "}
          <div className="hidden md:block px-8 py-4 rounded-full backdrop-blur-md bg-black/60 border border-white/10">
            <div className="flex items-center gap-6">
              {" "}
              <Link
                href="/"
                className="text-white/80 hover:text-transparent hover:font-bold hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a280ec] hover:via-[#d30de5] hover:to-[#18d6ed] transition-all duration-300 ease-in-out"
              >
                Home
              </Link>{" "}
              <Link
                href="/#about"
                className="text-white/80 hover:text-transparent hover:font-bold hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a280ec] hover:via-[#d30de5] hover:to-[#18d6ed] transition-all duration-300 ease-in-out"
              >
                About
              </Link>{" "}
              <Link
                href="/#phases"
                className="text-white/80 hover:text-transparent hover:font-bold hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a280ec] hover:via-[#d30de5] hover:to-[#18d6ed] transition-all duration-300 ease-in-out"
              >
                Phases
              </Link>{" "}
              <Link
                href="/#timeline"
                className="text-white/80 hover:text-transparent hover:font-bold hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a280ec] hover:via-[#d30de5] hover:to-[#18d6ed] transition-all duration-300 ease-in-out"
              >
                Timeline
              </Link>{" "}
              <Link
                href="/#gallery"
                className="text-white/80 hover:text-transparent hover:font-bold hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a280ec] hover:via-[#d30de5] hover:to-[#18d6ed] transition-all duration-300 ease-in-out"
              >
                Gallery
              </Link>{" "}
              <Link
                href="/#faq"
                className="text-white/80 hover:text-transparent hover:font-bold hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a280ec] hover:via-[#d30de5] hover:to-[#18d6ed] transition-all duration-300 ease-in-out"
              >
                FAQ
              </Link>{" "}
              <Link
                href="/#team"
                className="text-white/80 hover:text-transparent hover:font-bold hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#a280ec] hover:via-[#d30de5] hover:to-[#18d6ed] transition-all duration-300 ease-in-out"
              >
                Team
              </Link>
            </div>
          </div>{" "}
          {/* Register Button aligned to right */}
          <Link
            href="/#register"
            className="lg:px-6 px-4 text-center lg:text-lg text-sm py-2 rounded-lg bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-white font-medium hover:shadow-lg hover:shadow-[#a280ec]/20 hover:scale-105 hover:font-bold transition-all duration-300 ease-in-out transform"
          >
            Register Now
          </Link>
          {/* Mobile Menu Button */}
          <button className="hidden text-white p-2">
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
