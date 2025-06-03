"use client";
import { useState, useEffect, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section id="faq" ref={sectionRef} className="relative w-full py-20 px-4">
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute top-1/4 left-1/6 w-80 h-80 rounded-full transition-all duration-2000 ease-out ${
            isVisible
              ? "opacity-25 scale-100 blur-3xl"
              : "opacity-0 scale-50 blur-2xl"
          }`}
          style={{
            background: "radial-gradient(circle, #a280ec 0%, transparent 70%)",
            transform: `translate(-50%, -50%) ${
              isVisible ? "scale(1)" : "scale(0.5)"
            }`,
            animationDelay: "0.5s",
          }}
        />
        <div
          className={`absolute top-2/3 right-1/6 w-72 h-72 rounded-full transition-all duration-2000 ease-out ${
            isVisible
              ? "opacity-30 scale-100 blur-3xl"
              : "opacity-0 scale-50 blur-2xl"
          }`}
          style={{
            background: "radial-gradient(circle, #d30de5 0%, transparent 70%)",
            transform: `translate(50%, -50%) ${
              isVisible ? "scale(1)" : "scale(0.5)"
            }`,
            animationDelay: "0.8s",
          }}
        />
        <div
          className={`absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full transition-all duration-2000 ease-out ${
            isVisible
              ? "opacity-20 scale-100 blur-3xl"
              : "opacity-0 scale-50 blur-2xl"
          }`}
          style={{
            background: "radial-gradient(circle, #18d6ed 0%, transparent 70%)",
            transform: `translate(-50%, 50%) ${
              isVisible ? "scale(1)" : "scale(0.5)"
            }`,
            animationDelay: "1.1s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {" "}
        <h2
          className={`lg:text-5xl text-3xl font-orbitron font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-12 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{
            textShadow: isVisible
              ? "0 0 20px rgba(162, 128, 236, 0.3), 0 0 40px rgba(211, 13, 229, 0.2)"
              : "none",
            animationDelay: "0.3s",
          }}
        >
          Frequently Asked Questions
        </h2>{" "}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`group rounded-xl backdrop-blur-md border border-white/10 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 overflow-hidden transition-all duration-1000 ease-out hover:border-[#b146e4]/50 hover:scale-[1.02] ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
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
