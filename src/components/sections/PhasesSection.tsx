"use client";

const PhasesSection = () => {
  return (
    <section id="phases" className="w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-12">
          Competition Phases
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group p-8 rounded-xl backdrop-blur-md border transition-all duration-300 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 border-white/10 hover:border-[#b146e4]/50 shadow-lg hover:shadow-[#a280ec]/20">
            <div className="text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
              Phase 1
            </div>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">
              Proposal
            </h3>
            <p className="text-white/80 mb-6">
              Submit your innovative project proposal and initial concept
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <li>Submit your innovative project idea</li>
              <li>Define your target audience and problem statement</li>
              <li>Outline your proposed solution and technology stack</li>
              <li>Get feedback from mentors and refine your concept</li>
            </ul>
          </div>

          <div className="group p-8 rounded-xl backdrop-blur-md border transition-all duration-300 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 border-white/10 hover:border-[#b146e4]/50 shadow-lg hover:shadow-[#a280ec]/20">
            <div className="text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
              Phase 2
            </div>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">
              Minimum Viable Product
            </h3>
            <p className="text-white/80 mb-6">
              Develop and demonstrate your working prototype
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <li>Build a working prototype of your solution</li>
              <li>Implement core features and functionality</li>
              <li>Test and validate with potential users</li>
              <li>Document your development process and learnings</li>
            </ul>
          </div>

          <div className="group p-8 rounded-xl backdrop-blur-md border transition-all duration-300 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 border-white/10 hover:border-[#b146e4]/50 shadow-lg hover:shadow-[#a280ec]/20">
            <div className="text-lg font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
              Phase 3
            </div>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">
              Pitching
            </h3>
            <p className="text-white/80 mb-6">
              Present your final project to judges and stakeholders
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <li>Prepare your presentation and demo</li>
              <li>Highlight your project&apos;s impact and innovation</li>
              <li>Showcase your technical implementation</li>
              <li>Present your future development roadmap</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhasesSection;
