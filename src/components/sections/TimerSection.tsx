"use client";
import { useEffect, useState, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = useCallback((): TimeLeft | null => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft) {
    return (
      <section className="w-full min-h-[60vh] flex items-center justify-center py-12">
        <div className="max-w-4xl w-full mx-4">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] blur-xl opacity-40 animate-pulse"></div>
              <div className="relative backdrop-blur-lg bg-black/40 rounded-2xl border-2 border-[#d30de5] p-6 shadow-[0_0_30px_rgba(211,13,229,0.5)]">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="text-sm font-bold text-[#d30de5] uppercase tracking-wider">Current Phase</span>
                </div>
                <h2 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
                  Ideation & Proposal Submission
                </h2>
              </div>
            </div>
          </div>
          
          {/* Workshop Session Card */}
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl border my-16 lg:my-20 border-white/10 shadow-[0_0_50px_rgba(162,128,236,0.15)] p-6 lg:p-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-gradient-to-r from-[#a280ec] to-[#d30de5] rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Workshop Session 1</span>
            </div>
            
            <h3 className="text-lg lg:text-xl font-orbitron font-bold text-white mb-2">
 Towards Autonomous AI Systems
             </h3>
            
            <div className="flex flex-col  items-start  gap-2 mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#a280ec]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div className="text-sm text-white/80">Ms. Prashani Jayasingha</div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#d30de5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-white/80">1 hr 45 minutes</div>
              </div>
            </div>
            
            {/* YouTube Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/ZGfnjtm4r00?start=2"
                title="Workshop Session 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-4 min-h-[40vh] flex items-center justify-center py-20">
      {" "}
      <div className="text-center p-8 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 ">
        <h2 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-8">
          Registration Closing In
        </h2>
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center">
              <div className="lg:w-24 w-14 lg:h-24 h-14 flex items-center justify-center bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 rounded-xl backdrop-blur-md border border-white/10 hover:border-[#b146e4]/50 transition-all duration-300 shadow-lg hover:shadow-[#a280ec]/20">
                <span className="font-mono text-4xl font-bold text-white">
                  {value.toString().padStart(2, "0")}
                </span>
              </div>{" "}
              <span className="mt-2 text-white/80 font-medium capitalize">
                <span className="hidden sm:inline">{key}</span>
                <span className="sm:hidden">{key.charAt(0).toUpperCase()}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
