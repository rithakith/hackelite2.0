"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full flex items-center justify-center"
    >
      {" "}
      {/* Background Image with Static Lighting */}
      <div className="absolute inset-0 z-0">
        {/* Static background lighting effects */}
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, #a280ec 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl"
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
      {/* Content Container with Glassmorphism */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl lg:p-8 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:gap-12 gap-4 items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src="/groupphoto.jpg"
                alt="HackElite 1.0 Participants"
                className="lg:rounded-2xl rounded-t-2xl shadow-2xl w-full hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6 p-4 lg:p-0">
              <h2
                className="lg:text-5xl text-3xl text-center font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] lg:text-left"
                style={{
                  textShadow:
                    "0 0 20px rgba(162, 128, 236, 0.3), 0 0 40px rgba(211, 13, 229, 0.2)",
                }}
              >
                About HackElite
              </h2>
              <p className="text-white/90 lg:text-lg text-md leading-relaxed lg:text-left text-center">
                HackElite is the flagship competitive innovation challenge
                organized by the IEEE WIE Student Branch Affinity Group of
                University of Moratuwa. Building on the success of HackElite
                1.0, this year&apos;s competition aims to push the boundaries of
                technological innovation even further.
              </p>
              <p className="text-white/90 lg:text-lg text-md leading-relaxed lg:text-left text-center">
                Our mission is to provide a platform for aspiring developers and
                innovators to showcase their skills, collaborate with
                like-minded individuals, and create solutions that make a real
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
