"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is HackElite 2.0?",
    answer:
      "HackElite 2.0 is a prestigious innovation competition that brings together talented minds to solve real-world problems using technology. It serves as a platform for participants to showcase their skills, learn from experts, and transform ideas into impactful solutions.",
  },
  {
    id: 2,
    question: "How many members can be in a team?",
    answer:
      "A team can consist of a minimum of 3 participants and a maximum of 4 participants with minimum 2 girls required per team.",
  },
  {
    id: 3,
    question: "Who can participate in HackElite 2.0?",
    answer:
      "All current undergraduates from any state or private university are eligible to participate.",
  },
  {
    id: 4,
    question: "Can a team consist of participants from different universities?",
    answer:
      "No, all team members must be from the same university, as HackElite 2.0 is an inter-university competition. However, team members don't need to be from the same faculty.",
  },
  {
    id: 5,
    question: "Is this competition open only to IEEE members?",
    answer:
      "No, the competition is open to all eligible participants, not just IEEE members.",
  },
  {
    id: 6,
    question: "What is the evaluation process?",
    answer:
      "The evaluation process consists of several phases: 1. Proposal Phase: Participants will first create a proposal. 2. Prototype Submission: Successful participants will work on their proposed plan and create a minimum viable product. 3. Final Day: Participants who pass the submission round will be eligible to participate on the final day. 4. Final Evaluation: The final marks will be calculated based on your team's overall performance.",
  },
  {
    id: 7,
    question:
      "I have never participated in this kind of competition before. Can I join?",
    answer:
      "Absolutely! We will organize several workshops to enhance your knowledge and skills.",
  },
  {
    id: 8,
    question: "Is this competition held physically?",
    answer:
      "The first phase (Ideathon) and the second phase (prototype submission) will be conducted online. The final day has been organized as a physical event.",
  },
  {
    id: 9,
    question: "Do you issue certificates for all participants?",
    answer:
      "Yes, we issue certificates to all participants, recognizing their valuable participation and achievements based on the phase they reach in the competition. of their participation and contribution to the event.",
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
        </h2>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
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
