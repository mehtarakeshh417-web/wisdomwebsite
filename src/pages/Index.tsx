import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import USPSection from "@/components/USPSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ProgramsSection from "@/components/ProgramsSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
        <USPSection />
        <MissionVisionSection />
        <ProgramsSection />
        <InfrastructureSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
