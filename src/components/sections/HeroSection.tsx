"use client";
import { useRef, useState, useEffect } from "react";
import { useHover } from "@/context/HoverContext";

export default function HeroSection() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { setIsHovering } = useHover();

  // Glitch text variations
  const originalText = "Glitch the Norm. Build the future";
  const glitchVariations = [
    "Gl1tch th3 N0rm. Bu1ld th3 futur3",
    "Glitch the Norm. Build the future",
    "G1itch the Norm. Bui1d the future",
    "Glitch th3 Norm. Build th3 futur3",
    "Gl1tch the N0rm. Bu1ld the future",
    "Glitch the Norm. Bu1ld th3 future",
    "G1itch th3 N0rm. Build the futur3",
  ];

  const [currentText, setCurrentText] = useState(originalText);
  const [isGlitching, setIsGlitching] = useState(false);
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);

      // Rapid glitch effect
      let glitchCount = 0;
      const rapidGlitch = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * glitchVariations.length);
        setCurrentText(glitchVariations[randomIndex]);
        glitchCount++;

        if (glitchCount >= 5) {
          clearInterval(rapidGlitch);
          setCurrentText(originalText);
          setIsGlitching(false);
        }
      }, 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [glitchVariations, originalText]);

  return (
    <div className="relative">
      {/* Main content */}
      <div className="relative z-10 flex flex-col  items-center justify-center lg:min-h-screen py-24 gap-8">
        <div className="flex flex-col items-center lg:space-y-6 space-y-2 ">
          {" "}
          <h1 className="lg:text-8xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-center font-orbitron">
            HackElite 2.0
          </h1>{" "}
          <p
            className={`lg:text-3xl text-md text-center max-w-2xl mx-auto font-bold transition-all font-orbitron duration-200  ${
              isGlitching ? "animate-pulse" : ""
            }`}
            style={{
              color: isGlitching ? "white" : "#CEA2FD",
              backgroundImage: isGlitching
                ? "none"
                : "linear-gradient(90deg, #a280ec, #d30de5, #18d6ed)",
              WebkitBackgroundClip: isGlitching ? "unset" : "text",
              backgroundClip: isGlitching ? "unset" : "text",
              textDecorationColor: isGlitching ? "#d30de5" : "transparent",
              textUnderlineOffset: "8px",
              textDecorationThickness: "3px",
              textShadow: isGlitching
                ? "0 0 10px #a280ec, 0 0 20px #d30de5"
                : "none",
              filter: isGlitching ? "brightness(1.1)" : "none",
            }}
          >
            {currentText}
          </p>
        </div>

        <div className="flex flex-row gap-2 lg:gap-6 items-center mt-8">
          {/* Register Button with star animation */}{" "}
          <button
            ref={buttonRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="lg:px-10 px-4   py-3 bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] 
                     text-white font-bold text-sm lg:text-xl lg:rounded-full rounded-full
                     hover:scale-105 transition-all duration-300 
                     shadow-lg 
                     border border-opacity-20 border-white backdrop-blur-sm"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdlRoOXepWgbFLA5k_86MOmenl8ga4GoHJI1yqO2HKeGLhpXw/viewform?usp=dialog",
                "_blank"
              )
            }
          >
            Register Now
          </button>{" "}
          {/* Delegate Booklet Button - different style */}
          <button
            className="lg:px-10 px-4 py-3 bg-transparent border-2 border-white
                     text-white font-bold text-sm lg:text-xl rounded-full 
                     hover:bg-white hover:text-black transition-all duration-300
                     shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1HoS_Jic8rGx-siv0-W30yAfNM4yO65Qx/view",
                "_blank"
              )
            }
          >
            Delegate Booklet
          </button>
        </div>
      </div>
    </div>
  );
}
