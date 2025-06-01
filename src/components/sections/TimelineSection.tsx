"use client";
import { useRef } from "react";

const timeline = [
  {
    id: 1,
    date: "June 1, 2025",
    title: "HackElite Registrations Open",
    description:
      "The gateway to innovation opens! University teams across Sri Lanka are invited to join HackElite 2.0 and begin their transformative journey from concept to reality.",
    icon: "🚀",
  },
  {
    id: 2,
    date: "June 15, 2025",
    title: "Ideation Phase Launch",
    description:
      "Time to unleash your creativity! Teams dive deep into brainstorming, refining groundbreaking ideas, and exploring innovative solutions to tackle real-world challenges.",
    icon: "💡",
  },
  {
    id: 3,
    date: "July 1, 2025",
    title: "Prototype Development Begins",
    description:
      "From ideas to implementation! Teams start building functional prototypes, turning their visions into tangible solutions that showcase their potential to revolutionize industries.",
    icon: "🔧",
  },
  {
    id: 4,
    date: "July 20, 2025",
    title: "Technical Pitch Presentations",
    description:
      "The moment of truth arrives! Teams present their prototypes to expert judges, receive valuable feedback, and compete for advancement to the final stage.",
    icon: "🎯",
  },
  {
    id: 5,
    date: "August 10, 2025",
    title: "HackElite Grand Finale",
    description:
      "The ultimate showdown! Top teams pitch their startup solutions to prestigious judges, competing for recognition, prizes, and support to scale their innovations.",
    icon: "🏆",
  },
];

const TimelineSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="timeline" className="w-full py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="lg:text-5xl text-3xl md:text-4xl font-orbitron font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-8 md:mb-16">
          Competition Timeline
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute md:left-[50%] left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#a280ec] via-[#d30de5] to-[#18d6ed]" />

          <div className="relative" ref={timelineRef}>
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-start gap-3 md:gap-8 mb-8 md:mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                <div className="md:w-[calc(50%-2rem)] w-full group md:block flex items-start gap-3">
                  {/* Icon for mobile - shown on left */}
                  <div className="md:hidden w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-base relative z-10">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <div className="p-3 md:p-6 rounded-xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 transition-all duration-300 hover:border-[#b146e4]/50 hover:shadow-lg hover:shadow-[#a280ec]/20">
                    {/* <div className="text-sm md:text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
                      {item.date}
                    </div> */}
                    <h3 className="text-base md:text-xl font-bold text-white mt-1.5 md:mt-2 mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-base text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon for desktop - shown in center */}
                <div className="hidden md:flex w-16 h-16 rounded-full items-center justify-center bg-gradient-to-br from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-2xl relative z-10">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Empty space for the other side - desktop only */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
