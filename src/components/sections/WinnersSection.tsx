"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const winners = [
  {
    place: "1st",
    team: "TechTitans",
    university: "National University of Business Management",
    project: "EcoTrack - Smart Waste Management",
    image: "/winners/firstplace.png",
    prize: "Rs. 500,000",
    gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
    bgGradient: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5",
    borderColor: "border-yellow-400/50",
    hoverBorder: "hover:border-yellow-400/80",
    shadowColor: "hover:shadow-yellow-400/30",
  },
  {
    place: "2nd",
    team: "SyntaxError404",
    university: "University of Moratuwa",
    project: "HealthBridge - Telemedicine Platform",
    image: "/winners/secondplace.png",
    prize: "Rs. 300,000",
    gradient: "from-gray-300 via-gray-400 to-gray-500",
    bgGradient: "from-gray-300/20 via-gray-400/10 to-gray-500/5",
    borderColor: "border-gray-400/50",
    hoverBorder: "hover:border-gray-400/80",
    shadowColor: "hover:shadow-gray-400/30",
  },
  {
    place: "3rd",
    team: "CodeBlaze",
    university: "University of Moratuwa",
    project: "AgriSmart - IoT Farming Solutions",
    image: "/winners/thirdplace.png",
    prize: "Rs. 200,000",
    gradient: "from-amber-600 via-amber-700 to-amber-800",
    bgGradient: "from-amber-600/20 via-amber-700/10 to-amber-800/5",
    borderColor: "border-amber-600/50",
    hoverBorder: "hover:border-amber-600/80",
    shadowColor: "hover:shadow-amber-600/30",
  },
];

const podiumHeights = ["h-32", "h-24", "h-20"];
const crownEmojis = ["🥇", "🥈", "🥉"];

export default function WinnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % winners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + winners.length) % winners.length
    );
  };

  // Auto-slide for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="winners" className="w-full py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-4">
          HackElite 1.0 Champions
        </h2>
        <p className="text-white/80 text-center mb-16 max-w-2xl mx-auto">
          Celebrating the brilliant minds who transformed innovative ideas into
          reality at HackElite 1.0. These teams set the standard for excellence
          and innovation.
        </p>{" "}
        {/* Winners Grid - Desktop / Carousel - Mobile */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8 mb-16">
            {winners.map((winner, index) => (
              <div
                key={winner.place}
                className={`relative group ${
                  index === 0
                    ? "lg:order-2"
                    : index === 1
                    ? "lg:order-1"
                    : "lg:order-3"
                }`}
              >
                {/* Card Container */}
                <div
                  className={`relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-500 bg-gradient-to-br ${winner.bgGradient} ${winner.borderColor} ${winner.hoverBorder} hover:shadow-2xl ${winner.shadowColor} hover:scale-105`}
                >
                  {/* Crown/Medal */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`text-4xl bg-gradient-to-r ${winner.gradient} p-3 rounded-full bg-black/80 backdrop-blur-sm border ${winner.borderColor}`}
                    >
                      {crownEmojis[index]}
                    </div>
                  </div>
                  {/* Place Badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${winner.gradient} text-black`}
                    >
                      {winner.place} Place
                    </div>
                  </div>{" "}
                  {/* Team Image */}
                  <div className="mt-8 mb-6">
                    <div className="w-full h-48 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
                      <Image
                        src={winner.image}
                        alt={`${winner.team} - ${winner.place} place winners`}
                        fill
                        className="object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  {/* Team Info */}
                  <div className="text-center space-y-3">
                    <h3
                      className={`text-xl font-orbitron font-bold bg-gradient-to-r ${winner.gradient} text-transparent bg-clip-text`}
                    >
                      {winner.team}
                    </h3>
                    <p className="text-white/90 font-medium">
                      {winner.university}
                    </p>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative mb-16">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {winners.map((winner, index) => (
                  <div key={winner.place} className="w-full flex-shrink-0 px-4">
                    {/* Mobile Card */}
                    <div
                      className={`relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-500 bg-gradient-to-br ${winner.bgGradient} ${winner.borderColor} shadow-2xl ${winner.shadowColor}`}
                    >
                      {/* Crown/Medal */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div
                          className={`text-4xl bg-gradient-to-r ${winner.gradient} lg:p-3 p-1 mt-1 rounded-full bg-black/80 backdrop-blur-sm border ${winner.borderColor}`}
                        >
                          {crownEmojis[index]}
                        </div>
                      </div>
                      {/* Place Badge */}
                      <div className="absolute lg:top-4  right-4">
                        <div
                          className={`px-3 py-1 mt-4 rounded-full text-sm font-bold bg-gradient-to-r ${winner.gradient} text-black`}
                        >
                          {winner.place} Place
                        </div>
                      </div>
                      {/* Team Image */}
                      <div className="lg:mt-8 mt-14 mb-6">
                        <div className="w-full h-48 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
                          <Image
                            src={winner.image}
                            alt={`${winner.team} - ${winner.place} place winners`}
                            fill
                            className="object-cover rounded-xl"
                            sizes="100vw"
                          />
                        </div>
                      </div>
                      {/* Team Info */}
                      <div className="text-center space-y-3">
                        <h3
                          className={`text-xl font-orbitron font-bold bg-gradient-to-r ${winner.gradient} text-transparent bg-clip-text`}
                        >
                          {winner.team}
                        </h3>
                        <p className="text-white/90 font-medium">
                          {winner.university}
                        </p>
                      </div>
                      {/* Decorative Elements */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mt-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-gradient-to-r from-[#a280ec]/20 via-[#b146e4]/20 to-[#18d6ed]/20 border border-white/10 backdrop-blur-md hover:border-[#b146e4]/50 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {winners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-[#a280ec] via-[#b146e4] to-[#18d6ed] scale-110"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-gradient-to-r from-[#a280ec]/20 via-[#b146e4]/20 to-[#18d6ed]/20 border border-white/10 backdrop-blur-md hover:border-[#b146e4]/50 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Swipe Indicator */}
          
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-36">
          <div className="inline-block p-12 backdrop-blur-md bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 rounded-2xl border border-white/10">
            <p className="text-white/90 mb-4 lg:text-3xl text-2xl  font-orbitron">
              Ready to join the next generation of champions?
            </p>
            <button className="px-8 mt-8 lg:py-6 py-4 lg:text-2xl text-xl  bg-gradient-to-r from-[#a280ec] via-[#b146e4] to-[#18d6ed] text-white font-orbitron font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#a280ec]/30">
              Register for HackElite 2.0
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
