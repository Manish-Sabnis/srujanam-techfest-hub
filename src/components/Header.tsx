import ieeeBangaloreLogo from "@/assets/ieee-bangalore-logo.png";
import nkssLogo from "@/assets/nkss-logo.png";
import universityLogo from "@/assets/university-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <img src={ieeeBangaloreLogo} alt="IEEE Bangalore Section" className="h-12 w-12 object-contain" />
            <img src={nkssLogo} alt="NKSS Logo" className="h-12 w-12 object-contain" />
            <img src={universityLogo} alt="Sharanbasva University" className="h-12 w-12 object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <a href="#tracks" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Tracks
            </a>
            <a href="#register" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Register
            </a>
            <a href="#location" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Location
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
