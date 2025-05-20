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

export default function Home() {
  const registrationDeadline = "2025-06-01T23:59:59"; // Set your registration deadline here

  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <CountdownTimer targetDate={registrationDeadline} />
      <PhasesSection />
      <StatsSection />
      <TimelineSection />
            <GallerySection />

      <FAQSection />
            <TeamSection />

      <Footer />
    </div>
  );
}
