import agendaPDF from "../assets/agenda.pdf";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-scale">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-tech bg-clip-text text-transparent">
            SRUJANAM
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            Where Innovation Births Technology
            <br>Presented by IEEE North Karnataka Subsection (NKSS) Student Activities Committee</br>            
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
  );
};

export default HeroSection;
