import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import campusImage from "@/assets/campus.jpeg";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
            Event Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at the prestigious Sharanbasva University campus
          </p>
        </div>

        <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 max-w-5xl mx-auto animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <img 
                src={campusImage} 
                alt="Sharanbasva University Campus"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-card backdrop-blur-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Sharanbasva University
                  </h3>
                  <p className="text-muted-foreground">
                    Kalburgi, Karnataka
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-foreground/90">
                  The event will be held at the state-of-the-art facilities of Sharanbasva University, 
                  featuring modern auditoriums, well-equipped laboratories, and collaborative spaces 
                  perfect for workshops and networking.
                </p>
                <p className="text-muted-foreground">
                  The campus is easily accessible and provides a conducive environment for learning 
                  and innovation. Detailed directions and parking information will be shared with 
                  registered participants.
                </p>
              </div>

              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors w-fit"
              >
                <MapPin className="w-4 h-4" />
                View on Maps
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LocationSection;
