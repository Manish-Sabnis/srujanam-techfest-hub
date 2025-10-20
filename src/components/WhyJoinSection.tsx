import { Lightbulb, Users, Award, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Lightbulb,
    title: "Cutting-Edge Knowledge",
    description: "Learn from industry experts and gain insights into the latest technological advancements in AI, robotics, and research methodologies."
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Connect with like-minded students, researchers, and professionals from across the region and build lasting professional relationships."
  },
  {
    icon: Award,
    title: "Hands-On Experience",
    description: "Participate in practical workshops and hands-on sessions that will enhance your technical skills and boost your resume."
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Gain valuable knowledge about patents, research publication, and industry best practices that will accelerate your career in technology."
  }
];

const WhyJoinSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
            Why Join SRUJANAM?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience a transformative learning journey that will shape your future in technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
