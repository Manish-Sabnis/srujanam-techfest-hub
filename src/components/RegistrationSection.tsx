import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section id="register" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
            Registration Portal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your spot at SRUJANAM - Choose the registration form that applies to you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in group">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/30 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">IEEE Members</h3>
                <p className="text-muted-foreground mb-6">
                  Special registration for IEEE members with exclusive benefits
                </p>
              </div>
              <a 
                href="https://forms.gle/USkvG4NjdVshtFGD6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors group-hover:shadow-glow"
              >
                Register as IEEE Member
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: "0.1s" }}>
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-secondary/30 transition-colors">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Non-IEEE Members</h3>
                <p className="text-muted-foreground mb-6">
                  Open registration for all students passionate about technology
                </p>
              </div>
              <a 
                href="https://forms.gle/XMUmBuGb97ofkoVx7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors group-hover:shadow-glow"
              >
                Register as Non-IEEE Member
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Registration closes soon. Limited seats available!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
