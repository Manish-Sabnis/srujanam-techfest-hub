import { useState } from "react";
import { Menu, X } from "lucide-react";
import ieeeBangaloreLogo from "@/assets/ieee-bangalore-logo.png";
import nkssLogo from "@/assets/nkss-logo.png";
import universityLogo from "@/assets/university-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#tracks", label: "Tracks" },
    { href: "#register", label: "Register" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src={ieeeBangaloreLogo} alt="IEEE Bangalore Section" className="h-12 w-12 object-contain" />
            <img src={nkssLogo} alt="NKSS Logo" className="h-12 w-12 object-contain" />
            <img src={universityLogo} alt="Sharanbasva University" className="h-12 w-12 object-contain" />
          </div>
        </div>
        
        <div className="w-full border-t border-border">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full py-3 flex items-center justify-center gap-2 hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="text-sm font-medium">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <nav className="fixed top-[120px] left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-3 px-4 hover:bg-accent/10 rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
