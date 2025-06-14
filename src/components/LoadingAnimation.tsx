"use client";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
}

const loadingMessages = [
  "Initializing HackElite systems...",
  "Loading innovative minds...",
  "Preparing the coding battlefield...",
  "Syncing with elite hackers...",
  "Ready to hack the future!",
];

export default function LoadingAnimation({
  onComplete,
  duration = 3000,
}: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(newProgress);

      // Update message based on progress
      const messageIndex = Math.floor(
        (newProgress / 100) * (loadingMessages.length - 1)
      );
      setCurrentMessage(messageIndex);

      if (newProgress >= 100) {
        clearInterval(timer);
        setIsComplete(true);
        setTimeout(() => {
          onComplete?.();
        }, 800);
      }
    }, 16); // 60fps

    return () => clearInterval(timer);
  }, [onComplete, duration]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ${
        isComplete
          ? "opacity-0 pointer-events-none scale-110"
          : "opacity-100 scale-100 "
      }`}
    >
      {" "}
      {/* Aurora Background for Loading */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#0f0f1e] to-[#141428]">
        {/* Animated Background Orbs - Responsive sizes */}
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-[#a280ec] to-[#b146e4] animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full opacity-25 blur-3xl bg-gradient-to-r from-[#d30de5] to-[#18d6ed] animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full opacity-15 blur-3xl bg-gradient-to-r from-[#18d6ed] to-[#a280ec] animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
      </div>
      {/* Main Loading Container */}
      <div className="relative z-10 flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 px-4">
        {/* Logo with Glitch Effect */}
        <div className="text-center">
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl font-orbitron mt-2 sm:mt-4 animate-bounce px-2">
            {loadingMessages[currentMessage]}
          </p>
        </div>
        {/* Advanced Loader Ring */}
        <div className="relative">
          {/* Outer Ring with Gradient - Responsive sizes */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40">
            {/* Background Ring */}
            <div className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 border-white/10"></div>
            {/* Animated Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              {" "}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray={`${progress * 2.83} 283`}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out sm:stroke-[3.5] md:stroke-4"
              />
              <defs>
                {" "}
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a280ec" />
                  <stop offset="50%" stopColor="#d30de5" />
                  <stop offset="100%" stopColor="#18d6ed" />
                </linearGradient>
              </defs>
            </svg>
            {/* Inner Glow */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-r from-[#a280ec]/20 via-[#d30de5]/20 to-[#18d6ed]/20 blur-md animate-pulse"></div>{" "}
            {/* Center Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-orbitron font-bold text-white">
                  {Math.round(progress)}%
                </div>
                {/* <div className="w-4 h-4 bg-gradient-to-r from-[#a280ec] to-[#18d6ed] rounded-full animate-ping mx-auto mt-2"></div> */}
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Progress Bar */}
        <div className="w-64 sm:w-72 md:w-80 max-w-sm px-4">
          {/* Progress Bar Background */}
          <div className="w-full h-2 sm:h-2.5 md:h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
            {/* Progress Fill */}
            <div
              className="h-full bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] transition-all duration-300 ease-out relative overflow-hidden rounded-full"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </div>
          </div>
        </div>{" "}
        {/* Loading Dots */}
        <div className="flex space-x-1.5 sm:space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-[#a280ec] to-[#18d6ed] animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        {/* Skip Button */}
        <div className="mt-8">
          <button
            onClick={() => {
              setIsComplete(true);
              setTimeout(() => {
                onComplete?.();
              }, 100);
            }}
            className="group relative px-6 py-3 bg-transparent border border-white/20 text-white/80 font-orbitron text-sm rounded-full hover:border-[#a280ec]/50 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              Enter Now
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a280ec]/20 via-[#d30de5]/20 to-[#18d6ed]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </button>
        </div>
      </div>
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
