import { useEffect, useState } from "react";

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Netflix-style intro animation */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center animate-netflix-zoom">
          <div className="text-center space-y-6">
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

      {/* Main hero section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 animate-fade-in-scale">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-tech bg-clip-text text-transparent">
              SRUJANAM
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
              Where Innovation Births Technology
            </p>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
              Join us for an extraordinary tech congress bringing together the brightest minds in innovation, 
              robotics, AI, and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a 
                href="#register" 
                className="px-8 py-4 bg-gradient-tech rounded-lg font-semibold text-foreground hover:scale-105 transition-transform shadow-glow"
              >
                Register Now
              </a>
              <a 
                href="#tracks" 
                className="px-8 py-4 bg-card border border-primary rounded-lg font-semibold text-foreground hover:bg-primary/10 transition-colors"
              >
                Explore Tracks
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
