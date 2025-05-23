"use client";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Vishwani Bhagya",
    title: "Chairperson of IEEE WIE Affinity Group University of Moratuwa",
    image: "/team/vishwani.png", // You'll need to add team member images
    linkedin: "https://www.linkedin.com/in/vishwani-bhagya/",
    email: "alex.parker@hackelite.com",
    contact: "+94 77 644 2877",
  },
  {
    id: 2,
    name: "Rithara Kithmanthie",
    title: "Vice-Chairperson of IEEE WIE Affinity Group University of Moratuwa",
    image: "/team/rithara.png", // You'll need to add team member images
    linkedin: "https://www.linkedin.com/in/ritharak/",
    email: "ritharakithmanthie@ieee.org",
    contact: "+94 71 102 0853",
  },
  {
    id: 3,
    name: "Nilupulee Amarathunga",
    title: "Secretary of IEEE WIE Affinity Group University of Moratuwa",
    image: "/team/nilupulee.png", // You'll need to add team member images
    linkedin: "https://www.linkedin.com/in/nilupulee-amarathunga-637710222/",
    email: "michael.r@hackelite.com",
    contact: "+94 76 281 1062",
  },
  {
    id: 4,
    name: "Madhuwantha Dissanayaka",
    title: "Hackelite 2.0 Project Co-chairperson",
    image: "/team/madhuwantha.png", // You'll need to add team member images
    linkedin: "https://www.linkedin.com/in/madhuwantha-dissanayaka-69a5732a5/",
    email: "madhudissa07@gmail.com",
    contact: "+94 76 467 8547",
  },
  {
    id: 5,
    name: "Chathuni Karunarathne ",
    title: "Hackelite 2.0 Project Co-chairperson",
    image: "/team/chathuni.png", // You'll need to add team member images
    linkedin: "https://www.linkedin.com/in/chathuni-karunarathne-162345275/",
    email: "chathunik27@gmail.com",
    contact: "+94 76 213 2822",
  },
  {
    id: 6,
    name: "Gimhani Jayamanna",
    title: "Hackelite 2.0 Project Co-chairperson",
    image: "/team/member.png", // You'll need to add team member images
    linkedin: "https://www.linkedin.com/in/gimhani-jayamanna-41695a276/",
    email: "pabasarajayamanna@gmail.com",
    contact: "+94 77 785 9638",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative p-6 rounded-xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 transition-all duration-300 hover:border-[#b146e4]/50 hover:shadow-lg hover:shadow-[#a280ec]/20"
            >
              {/* Profile Picture */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-white/80 mb-4">{member.title}</p>

                {/* Contact Details */}
                <div className="space-y-2 text-white/60">
                  <p className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-[#b146e4] transition-colors"
                    >
                      {member.email}
                    </a>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{member.contact}</span>
                  </p>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#b146e4] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn Profile</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
