import { 
  Users, 
  Monitor, 
  Globe, 
  Award, 
  MapPin, 
  Shield, 
  BookOpen 
} from "lucide-react";

const usps = [
  {
    icon: Users,
    title: "Exemplary Student–Teacher Engagement",
    description: "With a remarkably balanced classroom strength, we ensure personalized attention, meaningful teacher–student interactions, and an environment where every learner's potential is nurtured with care and precision."
  },
  {
    icon: Monitor,
    title: "Progressive Infrastructure & Modern Learning Tools",
    description: "The school is equipped with thoughtfully curated facilities — a well-maintained library, digital learning aids including smart boards, internet-enabled classrooms, computer systems, hygienic washrooms, clean drinking water stations, and generator backup."
  },
  {
    icon: Globe,
    title: "English-Medium Pedagogy for Holistic Development",
    description: "Following an English-medium instructional framework, the school fosters linguistic fluency, academic confidence, and global readiness, preparing students to excel in diverse educational and professional fields."
  },
  {
    icon: Award,
    title: "Recognized Institution with a Commitment to Quality",
    description: "As a recognized private educational institution, Wisdom Convent School upholds discipline, structured learning, and ethical educational practices, positioning itself as a dependable choice for families seeking quality schooling."
  },
  {
    icon: MapPin,
    title: "A Beacon of Learning in the Rural Landscape",
    description: "Strategically located to serve families in and around Fazilka, the school offers accessible, affordable, and value-based education, making high-quality schooling available without the limitations often found in rural settings."
  },
  {
    icon: Shield,
    title: "Safe, Inclusive, and Child-Friendly Environment",
    description: "With dedicated provisions for children with special needs, thoughtfully maintained hygiene standards, and a disciplined campus culture, the school ensures comfort, inclusivity, and emotional well-being for every learner."
  },
  {
    icon: BookOpen,
    title: "Focus on Foundational Excellence",
    description: "Particularly strong in early and upper-primary education, the school lays robust academic foundations, ensuring that every child gains conceptual clarity, moral grounding, and confidence for future academic pathways."
  }
];

const USPSection = () => {
  return (
    <section id="usp" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            What Makes Us <span className="text-gradient">Distinctive</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A Distinctive Institution Where Excellence Meets Integrity
          </p>
        </div>
        
        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div 
              key={usp.title}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                <usp.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                {usp.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
