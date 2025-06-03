"use client";
import { useState, useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation";

interface LoadingWrapperProps {
  children: React.ReactNode;
  minLoadingTime?: number;
}

export default function LoadingWrapper({
  children,
  minLoadingTime = 2500,
}: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  // Only show loading if we haven't finished the minimum loading time
  const showLoading = isLoading;
  return (
    <>
      {/* Show main content only when loading is complete */}
      <div
        className={`transition-opacity duration-500 ${
          showLoading ? "opacity-90" : "opacity-100 "
        }`}
      >
        {children}
      </div>

      {/* Full-screen loading overlay */}
      {showLoading && (
        <LoadingAnimation
          onComplete={handleLoadingComplete}
          duration={minLoadingTime}
        />
      )}
    </>
  );
}
