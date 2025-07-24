"use client";

const PhasesSection = () => {
  return (
    <section
      id="phases"
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4"
    >
      {" "}
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/6 w-80 h-80 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #a280ec 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/6 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, #d30de5 0%, transparent 70%)",
            transform: "translate(50%, -50%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #18d6ed 0%, transparent 70%)",
            transform: "translate(-50%, 50%)",
          }}
        />
      </div>{" "}
      <div className="relative z-10 max-w-6xl w-full">
        <h2
          className="text-4xl lg:text-5xl font-orbitron font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-12"
          style={{
            textShadow:
              "0 0 20px rgba(162, 128, 236, 0.3), 0 0 40px rgba(211, 13, 229, 0.2)",
          }}
        >
          Competition Phases
        </h2>{" "}
        <div className="grid md:grid-cols-3 gap-6 md:items-stretch">
          <div className="group p-8 rounded-xl backdrop-blur-md border bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 border-white/10 hover:border-[#b146e4]/50 shadow-lg hover:shadow-[#a280ec]/20 flex flex-col">
            <div className="text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
              Phase 1
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white mt-2 mb-4 min-h-[4rem] flex items-center">
              Ideation & Proposal Submission
            </h3>
            <p className="text-white/80 mb-6 text-xl">
              Participants will be provided with a set of domains and are
              expected to identify a real-world problem within their chosen
              area. They must then propose an innovative solution and submit a
              detailed proposal for evaluation.
            </p>
          </div>
          <div className="group p-8 rounded-xl backdrop-blur-md border bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 border-white/10 hover:border-[#b146e4]/50 shadow-lg hover:shadow-[#a280ec]/20 flex flex-col">
            <div className="text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
              Phase 2
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white mt-2 mb-4 min-h-[4rem] flex items-center">
Development & Prototype Submission
            </h3>
            <p className="text-white/80 mb-6 text-xl">
              Selected teams from Proposal Entry Phase will move on to the
              Product Creation Phase, where they are expected to build a working
              prototype / minimum viable product of their proposed application
              and submit it for review.
            </p>
          </div>
          <div className="group p-8 rounded-xl backdrop-blur-md border bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 border-white/10 hover:border-[#b146e4]/50 shadow-lg hover:shadow-[#a280ec]/20 flex flex-col">
            <div className="text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
              Phase 3
            </div>
            <h3 className="text-2xl font-bold font-orbitron text-white mt-2 mb-4 min-h-[4rem] flex items-center">
              Final Presentation & Pitching Phase
            </h3>
            <p className="text-white/80 mb-6 text-xl">
              Selected Finalist teams will present their completed minimal
              viable product and pitch their solution to a panel of judges
              during the final stage of the competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
