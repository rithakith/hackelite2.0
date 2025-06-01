"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is HackElite 2.0?",
    answer:
      "HackElite 2.0 is a prestigious hackathon that brings together innovative minds to solve real-world problems through technology. It's a platform for participants to showcase their skills, learn from experts, and transform ideas into impactful solutions.",
  },
  {
    id: 2,
    question: "Who can participate?",
    answer:
      "The competition is open to university students, recent graduates, and young professionals. Teams can consist of 2-4 members, and we encourage diverse skill sets including programming, design, and business development.",
  },
  {
    id: 3,
    question: "What are the submission requirements?",
    answer:
      "Teams must submit a working prototype of their solution, along with comprehensive documentation including the problem statement, proposed solution, technical architecture, and future development roadmap. All code must be original and created during the competition period.",
  },
  {
    id: 4,
    question: "Is there any registration fee?",
    answer:
      "No, participation in HackElite 2.0 is completely free. We believe in making innovation accessible to all talented individuals. However, registration is limited and will be on a first-come, first-served basis.",
  },
  {
    id: 5,
    question: "What kind of support will be provided?",
    answer:
      "Participants will have access to mentors, technical workshops, API resources, and cloud credits. We also provide networking opportunities with industry experts and potential investors throughout the competition.",
  },
  {
    id: 6,
    question: "What are the evaluation criteria?",
    answer:
      "Projects will be judged based on innovation (30%), technical complexity (25%), practical implementation (25%), and presentation quality (20%). Special consideration will be given to solutions that address UN Sustainable Development Goals.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="lg:text-5xl text-3xl font-orbitron font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="group rounded-xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 overflow-hidden transition-all duration-300 hover:border-[#b146e4]/50"
            >
              <button
                className="w-full p-6 flex items-center justify-between text-left"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <span className="relative flex-shrink-0 ml-4 w-6 h-6">
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
                      openId === faq.id ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <span className="w-6 h-0.5 bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] rounded-full" />
                    <span className="absolute w-0.5 h-6 bg-gradient-to-b from-[#a280ec] via-[#d30de5] to-[#18d6ed] rounded-full" />
                  </span>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-white/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
