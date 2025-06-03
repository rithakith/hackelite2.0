import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CountdownTimer from "@/components/sections/TimerSection";
import PhasesSection from "@/components/sections/PhasesSection";
import StatsSection from "@/components/sections/StatsSection";
import GallerySection from "@/components/sections/GallerySection";
import TimelineSection from "@/components/sections/TimelineSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import WinnersSection from "@/components/sections/WinnersSection";

export default function Home() {
  const registrationDeadline = "2025-07-01T23:59:59"; // Set your registration deadline here

  return (
    <div className="relative">
      <HeroSection />
            <CountdownTimer targetDate={registrationDeadline} />

      <AboutSection />
      <PhasesSection />
      {/* <StatsSection /> */}
      <TimelineSection />
      <WinnersSection />
            <GallerySection />

      <FAQSection />
            <TeamSection />

      <Footer />
    </div>
  );
}
