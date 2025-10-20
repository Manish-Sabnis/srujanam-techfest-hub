import { Card } from "@/components/ui/card";
import patentTrack from "@/assets/patent-track.jpg";
import rosTrack from "@/assets/ros-track.jpg";
import aiResearchTrack from "@/assets/ai-research-track.jpg";
import agenticAiTrack from "@/assets/agentic-ai-track.jpg";

const tracks = [
  {
    title: "Project to Patent Journey",
    description: "Discover the complete pathway from innovative idea to patent filing. Learn about intellectual property protection, patent documentation, and the legal framework. Industry experts will guide you through real-world case studies and provide insights into successfully navigating the patent application process. Perfect for students and researchers looking to protect their innovations.",
    image: patentTrack,
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Workshop on ROS",
    description: "Dive into the world of robotics with Robot Operating System (ROS). This hands-on workshop covers ROS fundamentals, sensor integration, and autonomous navigation. Build and program your own robotic model, learn about real-time systems, and understand how industry-standard robotics frameworks work. Bring your laptop and get ready for an immersive experience in robotics development.",
    image: rosTrack,
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Research & Analytics: Using AI Tools",
    description: "Master the art of academic research using cutting-edge AI tools. Learn how artificial intelligence is revolutionizing research methodologies, data analysis, and literature review processes. Explore tools like ChatGPT for research, AI-powered citation managers, and machine learning frameworks for data analytics. This track is essential for aspiring researchers and graduate students.",
    image: aiResearchTrack,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Hands-on Workshop on Agentic AI",
    description: "Experience the future of AI with agentic systems, led by an expert speaker from Samsung. Delve into autonomous AI agents, multi-agent systems, and how they're transforming industries. Learn about agent architectures, decision-making algorithms, and practical implementation strategies. This exclusive workshop offers insights from one of the world's leading technology companies.",
    image: agenticAiTrack,
    gradient: "from-blue-500/20 to-cyan-500/20"
  }
];

const TracksSection = () => {
  return (
    <section id="tracks" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
            Important Tracks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated tracks designed to enhance your technical expertise
          </p>
        </div>

        <div className="space-y-12">
          {tracks.map((track, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-border hover:border-primary transition-all duration-300 animate-fade-in group ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} z-10`}></div>
                  <img 
                    src={track.image} 
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-card backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
