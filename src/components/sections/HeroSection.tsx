"use client";
import { useRef } from "react";
import { useHover } from "@/context/HoverContext";

export default function HeroSection() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { setIsHovering } = useHover();

  return (
    <div className="relative">
      {/* Main content */}
      <div className="relative z-10 flex flex-col  items-center justify-center lg:min-h-screen py-24 gap-8">
        <div className="flex flex-col items-center pace-y-6">
          <h1 className="lg:text-8xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-center">
            Hackelite 2.0
          </h1>
          <p className="text-white text-xl text-center max-w-2xl mx-auto opacity-90">
            Unleash your potential at the ultimate competitive coding arena
          </p>
        </div>

        <div className="flex flex-row gap-6 items-center">
          {/* Register Button with star animation */}
          <button
            ref={buttonRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="px-10 py-3 bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] 
                     text-white font-bold text-xl rounded-full 
                     hover:scale-105 transition-all duration-300 
                     shadow-lg 
                     border border-opacity-20 border-white backdrop-blur-sm"
            onClick={() => (window.location.href = "/register")}
          >
            Register Now
          </button>

          {/* Delegate Booklet Button - different style */}
          <button
            className="px-10 py-3 bg-transparent border-2 border-white
                     text-white font-bold text-xl rounded-full 
                     hover:bg-white hover:text-black transition-all duration-300
                     shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            onClick={() => (window.location.href = "/delegate-booklet")}
          >
            Delegate Booklet
          </button>
        </div>
      </div>
    </div>
  );
}
