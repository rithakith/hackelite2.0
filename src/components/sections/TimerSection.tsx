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
      <section className="w-full  min-h-[40vh] flex items-center justify-center">
        <div className="text-center p-8 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(162,128,236,0.15)]">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-4">
            Registration Closed
          </h2>
          <p className="text-white/80">The registration period has ended.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-4 min-h-[40vh] flex items-center justify-center py-20">
      {" "}
      <div className="text-center p-8 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 ">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-8">
          Registration Closing In
        </h2>
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="flex flex-col items-center">
              <div className="lg:w-24 w-16 lg:h-24 h-16 flex items-center justify-center bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 rounded-xl backdrop-blur-md border border-white/10 hover:border-[#b146e4]/50 transition-all duration-300 shadow-lg hover:shadow-[#a280ec]/20">
                <span className="font-mono text-4xl font-bold text-white">
                  {value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 text-white/80 font-medium capitalize">
                {key}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
