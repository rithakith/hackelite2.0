"use client";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    id: 1,
    title: "Delegates",
    value: "400+",
    description: "Passionate participants",
  },
  {
    id: 2,
    title: "Universities",
    value: "26",
    description: "Leading Universities",
  },
  {
    id: 3,
    title: "Teams",
    value: "100+",
    description: "Innovative teams",
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[50vh] flex items-center justify-center py-20 lg:px-4 px-4"
    >
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-1/3 left-1/4 w-64 h-64 rounded-full transition-all duration-2000 ease-out ${
            isVisible
              ? "opacity-20 scale-100 blur-3xl"
              : "opacity-0 scale-50 blur-2xl"
          }`}
          style={{
            background: "radial-gradient(circle, #a280ec 0%, transparent 70%)",
            transform: `translate(-50%, -50%) ${
              isVisible ? "scale(1)" : "scale(0.5)"
            }`,
            animationDelay: "0.3s",
          }}
        />
        <div
          className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full transition-all duration-2000 ease-out ${
            isVisible
              ? "opacity-25 scale-100 blur-3xl"
              : "opacity-0 scale-50 blur-2xl"
          }`}
          style={{
            background: "radial-gradient(circle, #18d6ed 0%, transparent 70%)",
            transform: `translate(50%, 50%) ${
              isVisible ? "scale(1)" : "scale(0.5)"
            }`,
            animationDelay: "0.6s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl w-full ">
        {" "}
        <div className="space-y-8">
          <div
            className={`flex items-center justify-between lg:gap-4 gap backdrop-blur-md rounded-xl border border-white/10 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 p-4 lg:p-8 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex-1 relative text-center px-2 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="space-y-2">
                  <span className="block text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
                    {stat.value}
                  </span>
                  <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-white">
                    {stat.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-white/80">
                    {stat.description}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 sm:h-20 w-[1px] bg-gradient-to-b from-[#a280ec] via-[#d30de5] to-[#18d6ed]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
