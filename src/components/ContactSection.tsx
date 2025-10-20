import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.query) {
      toast.error("Please fill in all fields");
      return;
    }

    // Here you would typically send the data to a backend
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    setFormData({ name: "", email: "", query: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 lg:p-12 bg-gradient-card backdrop-blur-sm border-border animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-input border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-input border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="query" className="text-sm font-medium text-foreground flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Your Query
              </label>
              <Textarea
                id="query"
                placeholder="Tell us how we can help you..."
                value={formData.query}
                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                className="bg-input border-border focus:border-primary min-h-[150px]"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-gradient-tech text-foreground font-semibold py-6 hover:opacity-90 transition-opacity"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
