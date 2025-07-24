"use client";
import Image from "next/image";

const partners = [
  {
    tier: "Gold Partner",
    name: "Zone24x7",
    logo: "/partners/zone24x7.png", // You'll need to add this logo
    website: "https://zone24x7.com",
    description: "Leading AI and technology solutions provider",
    gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
    bgGradient: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5",
    borderColor: "border-yellow-400/50",
    hoverBorder: "hover:border-yellow-400/80",
    shadowColor: "hover:shadow-yellow-400/30",
  },
  {
    tier: "Gift Partner",
    name: "Accelr",
    logo: "/partners/accelr.png", // You'll need to add this logo
    website: "https://accelr.lk/",
    description: "Trusted technology partner in all your needs",
    gradient: "from-purple-400 via-purple-500 to-purple-600",
    bgGradient: "from-purple-400/20 via-purple-500/10 to-purple-600/5",
    borderColor: "border-purple-400/50",
    hoverBorder: "hover:border-purple-400/80",
    shadowColor: "hover:shadow-purple-400/30",
  },
  {
    tier: "Digital Media Partner",
    name: "HackSL",
    logo: "/partners/hacksl.png", // You'll need to add this logo
    website: "https://www.linkedin.com/company/hacksl/?originalSubdomain=lk",
    description: "Sri Lanka's premier hackathon community",
    gradient: "from-blue-400 via-blue-500 to-blue-600",
    bgGradient: "from-blue-400/20 via-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-400/50",
    hoverBorder: "hover:border-blue-400/80",
    shadowColor: "hover:shadow-blue-400/30",
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="relative w-full py-12 md:py-20 px-4">
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #a280ec 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, #d30de5 0%, transparent 70%)",
            transform: "translate(50%, -50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-orbitron font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-4"
            style={{
              textShadow:
                "0 0 20px rgba(162, 128, 236, 0.3), 0 0 40px rgba(211, 13, 229, 0.2)",
            }}
          >
            Our Partners
          </h2>
          <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto">
            Powered by industry leaders who believe in fostering innovation and
            supporting the next generation of tech talent.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="group relative">
              {/* Partner Card */}
              <div
                className={`relative p-8 rounded-2xl backdrop-blur-md border transition-all duration-500 bg-gradient-to-br ${partner.bgGradient} ${partner.borderColor} ${partner.hoverBorder} hover:shadow-2xl ${partner.shadowColor} hover:scale-105 cursor-pointer`}
                onClick={() => window.open(partner.website, "_blank")}
              >
                {" "}
                {/* Tier Badge */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 ">
                  <div
                    className={`px-4 py-2 mb-4 rounded-full text-sm font-bold text-center bg-gradient-to-r ${partner.gradient} text-black`}
                  >
                    {partner.tier}
                  </div>
                </div>
                {/* Partner Logo */}
                <div className="mt-6 mb-6 pt-4">
                  <div className="w-full h-32 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-4 overflow-hidden relative">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain p-4 filter  group-hover:invert-0 transition-all duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Partner Info */}
                <div className="text-center space-y-3">
                  <h3
                    className={`text-2xl font-orbitron font-bold bg-gradient-to-r ${partner.gradient} text-transparent bg-clip-text`}
                  >
                    {partner.name}
                  </h3>
                  <p className="text-white/80 text-sm">{partner.description}</p>

                  {/* Visit Website Button */}
                  <div className="pt-4">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${partner.gradient} text-black font-medium text-sm hover:scale-105 transition-transform duration-300`}
                    >
                      Visit Website
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 backdrop-blur-md bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 rounded-2xl border border-white/10">
            <h3 className="text-white text-xl lg:text-2xl font-orbitron font-bold mb-4">
              Interested in partnering with HackElite?
            </h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Join us in empowering the next generation of innovators and tech
              leaders.
            </p>{" "}
            <button
              onClick={() => {
                const teamSection = document.getElementById("team");
                if (teamSection) {
                  teamSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative px-6 py-3 bg-gradient-to-r from-[#a280ec] via-[#b146e4] to-[#18d6ed] text-white font-orbitron font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#a280ec]/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              {/* Animated background shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
