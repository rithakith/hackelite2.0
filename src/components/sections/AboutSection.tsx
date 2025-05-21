"use client";

export default function AboutSection() {
  return (
    <section className="relative  w-full flex items-center justify-center ">
      {/* Background Image with Glassmorphism */}
      <div
        className="absolute inset-0 z-0"
       
      />

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
              <h2 className="lg:text-5xl text-3xl text-center  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] lg:text-left ">
                About Hackelite
              </h2>
              <p className="text-white/90 lg:text-lg text-md leading-relaxed lg:text-left text-center">
                HackElite is the flagship competitive coding and innovation
                challenge organized by the IEEE Student Branch affinity group the University
                of Moratuwa. Building on the success of HackElite 1.0, this
                year&apos;s competition aims to push the boundaries of
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
