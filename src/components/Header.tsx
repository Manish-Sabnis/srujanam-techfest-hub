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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <img src={ieeeBangaloreLogo} alt="IEEE Bangalore Section" className="h-12 w-12 object-contain" />
            <img src={nkssLogo} alt="NKSS Logo" className="h-12 w-12 object-contain" />
            <img src={universityLogo} alt="Sharanbasva University" className="h-12 w-12 object-contain" />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-accent/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="mt-4 pt-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
