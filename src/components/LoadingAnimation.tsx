"use client";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
}

export default function LoadingAnimation({
  onComplete,
  duration = 3000,
}: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    "Initializing quantum processors...",
    "Loading neural networks...",
    "Syncing with the matrix...",
    "Preparing hackathon arena...",
    "Almost ready to hack the future!",
  ];

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
      {/* Aurora Background for Loading */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#0f0f1e] to-[#141428]">
        {/* Animated Background Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-[#a280ec] to-[#b146e4] animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl bg-gradient-to-r from-[#d30de5] to-[#18d6ed] animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-15 blur-3xl bg-gradient-to-r from-[#18d6ed] to-[#a280ec] animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
      </div>

     
      {/* Main Loading Container */}
      <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
        {/* Logo with Glitch Effect */}
        <div className="text-center">
          <p className="text-white/70 text-lg md:text-xl font-orbitron mt-4 animate-bounce">
            {loadingMessages[currentMessage]}
          </p>
        </div>

        {/* Advanced Loader Ring */}
        <div className="relative">
          {/* Outer Ring with Gradient */}
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Background Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>

            {/* Animated Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={`${progress * 2.83} 283`}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a280ec" />
                  <stop offset="50%" stopColor="#d30de5" />
                  <stop offset="100%" stopColor="#234567" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Glow */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-r from-[#a280ec]/20 via-[#d30de5]/20 to-[#18d6ed]/20 blur-md animate-pulse"></div>

            {/* Center Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-orbitron font-bold text-white">
                  {Math.round(progress)}%
                </div>
                {/* <div className="w-4 h-4 bg-gradient-to-r from-[#a280ec] to-[#18d6ed] rounded-full animate-ping mx-auto mt-2"></div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm">
          {/* Progress Bar Background */}
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
            {/* Progress Fill */}
            <div
              className="h-full bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] transition-all duration-300 ease-out relative overflow-hidden rounded-full"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-[#a280ec] to-[#18d6ed] animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
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
