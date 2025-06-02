"use client";

const PhasesSection = () => {
  return (
    <section
      id="phases"
      className="w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-12">
          Competition Phases
        </h2>{" "}
        <div className="grid md:grid-cols-3 gap-6 md:items-stretch">
          <div className="group p-8 rounded-xl backdrop-blur-md border transition-all duration-300 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 border-white/10 hover:border-[#b146e4]/50 shadow-lg hover:shadow-[#a280ec]/20 flex flex-col">
            <div className="text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
              Phase 1
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white mt-2 mb-4 min-h-[4rem] flex items-center">
              Proposal Entry Phase
            </h3>
            <p className="text-white/80 mb-6 text-xl">
              Participants will be provided with a set of domains and are
              expected to identify a real-world problem within their chosen
              area. They must then propose an innovative solution and submit a
              detailed proposal for evaluation.
            </p>
          </div>{" "}
          <div className="group p-8 rounded-xl backdrop-blur-md border transition-all duration-300 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 border-white/10 hover:border-[#b146e4]/50 shadow-lg hover:shadow-[#a280ec]/20 flex flex-col">
            <div className="text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
              Phase 2
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white mt-2 mb-4 min-h-[4rem] flex items-center">
              Product Creation Phase
            </h3>
            <p className="text-white/80 mb-6 text-xl">
              Selected teams from Proposal Entry Phase will move on to the
              Product Creation Phase, where they are expected to build a working
              prototype / minimum viable product of their proposed application
              and submit it for review.{" "}
            </p>
          </div>{" "}
          <div className="group p-8 rounded-xl backdrop-blur-md border transition-all duration-300 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 border-white/10 hover:border-[#b146e4]/50 shadow-lg hover:shadow-[#a280ec]/20 flex flex-col">
            <div className="text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
              Phase 3
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white mt-2 mb-4 min-h-[4rem] flex items-center">
              Pitching Phase
            </h3>
            <p className="text-white/80 mb-6 text-xl">
              Selected Finalist teams will present their completed minimal
              viable product and pitch their solution to a panel of judges
              during the final stage of the competition.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
