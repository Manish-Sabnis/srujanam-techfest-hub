import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import TracksSection from "@/components/TracksSection";
import RegistrationSection from "@/components/RegistrationSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {showIntro && (
        <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
          <div className="text-center space-y-6 animate-fade-in-scale">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-tech bg-clip-text text-transparent">
              IEEE NORTH KARNATAKA SUBSECTION
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground">PRESENTS</p>
            <h2 className="text-5xl md:text-7xl font-bold text-primary animate-glow-pulse">
              SRUJANAM
            </h2>
          </div>
        </div>
      )}
      {!showIntro && (
        <>
          <Header />
          <HeroSection />
          <WhyJoinSection />
          <TracksSection />
          <RegistrationSection />
          <LocationSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
