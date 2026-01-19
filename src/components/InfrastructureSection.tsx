import { 
  FlaskConical, 
  Calculator, 
  Globe, 
  Monitor, 
  BookOpen, 
  Music, 
  Drama,
  Target,
  Dumbbell,
  TreePine,
  Droplets,
  Shield,
  Zap
} from "lucide-react";

const academicFacilities = [
  { icon: FlaskConical, title: "Science Laboratories", description: "Dedicated Physics, Chemistry, and Biology Labs with modern instruments and safety systems for hands-on exploration." },
  { icon: Calculator, title: "Mathematics Laboratory", description: "Dynamic Math Lab with 3D models, conceptual kits, interactive activities, and logical reasoning tools." },
  { icon: Globe, title: "Geography Laboratory", description: "Relief models, globes, topographical maps, and climate study tools for enhanced spatial awareness." },
  { icon: Monitor, title: "Computer & Digital Learning Lab", description: "Updated hardware with internet connectivity for coding, ICT skills, and multimedia learning." },
  { icon: BookOpen, title: "Library & Reading Corner", description: "A sanctuary of knowledge with storybooks, reference materials, periodicals, and digital resources." }
];

const creativeFacilities = [
  { icon: Music, title: "Music Room", description: "Classical and contemporary instruments for vocal training, instrumental practice, and rhythm learning." },
  { icon: Drama, title: "Dance Room", description: "Spacious mirrored studio for classical, folk, and contemporary choreography practice." }
];

const sportsFacilities = [
  { icon: Target, title: "Shooting Range", description: "Professional air-rifle shooting range that strengthens focus, concentration, and discipline." },
  { icon: Dumbbell, title: "Indoor Arena", description: "Multi-purpose arena for badminton, table tennis, skating, and fitness exercises." },
  { icon: TreePine, title: "Outdoor Play Area", description: "Open spaces for athletics, yoga, recreational games, and group physical activities." }
];

const safetyFeatures = [
  { icon: Droplets, title: "RO Drinking Water", description: "Clean and safe drinking water system" },
  { icon: Shield, title: "Hygienic Facilities", description: "Separate washrooms for boys, girls, and CWSN" },
  { icon: Zap, title: "24/7 Power Backup", description: "Uninterrupted power supply" },
  { icon: TreePine, title: "Green Spaces", description: "Natural learning areas with shaded trees" }
];

const InfrastructureSection = () => {
  return (
    <section id="infrastructure" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            Our Facilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            World-Class <span className="text-gradient">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A World-Class Campus Crafted to Inspire Excellence. Every facility has been designed to nurture curiosity, strengthen skills, and support holistic development.
          </p>
        </div>
        
        {/* Academic Infrastructure */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-secondary" />
            </div>
            Academic Infrastructure
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicFacilities.map((facility, index) => (
              <div 
                key={facility.title}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <facility.icon className="h-6 w-6 text-secondary" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-2">{facility.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Creative & Sports */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Creative Arts */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Music className="h-5 w-5 text-secondary" />
              </div>
              Creative & Performing Arts
            </h3>
            <div className="space-y-4">
              {creativeFacilities.map((facility, index) => (
                <div 
                  key={facility.title}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-secondary/50 transition-all duration-300 flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <facility.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">{facility.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sports */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Dumbbell className="h-5 w-5 text-secondary" />
              </div>
              Sports & Physical Development
            </h3>
            <div className="space-y-4">
              {sportsFacilities.map((facility, index) => (
                <div 
                  key={facility.title}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-secondary/50 transition-all duration-300 flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <facility.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-1">{facility.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Safety & Well-being */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Safety, Sanitation & Well-being
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-card rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <feature.icon className="h-7 w-7 text-secondary" />
                </div>
                <h4 className="font-display font-bold text-foreground mb-1">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Promise */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-2xl p-8 border border-border/50 max-w-3xl">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              A Campus That Reflects Our Promise
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every corner of Wisdom Convent School is built with the vision to provide a transformative, modern, and value-driven learning environment. Our infrastructure stands as a symbol of our commitment to excellence, innovation, inclusivity, and holistic development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
