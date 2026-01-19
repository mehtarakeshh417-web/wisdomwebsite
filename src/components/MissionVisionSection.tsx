import { Target, Eye, Star, Heart, Lightbulb, Users, Globe, BookOpen } from "lucide-react";

const missionPoints = [
  { icon: BookOpen, title: "Academic Brilliance with Conceptual Mastery", description: "We endeavor to cultivate a learning environment where students develop clarity of concepts, critical thinking skills, and a strong academic foundation." },
  { icon: Heart, title: "Holistic Growth & Value-Based Education", description: "Through a rich blend of scholastic and co-scholastic activities, we ensure that students grow in mind, body, and spirit." },
  { icon: Lightbulb, title: "Experiential & Innovative Learning", description: "By integrating digital tools, hands-on activities, real-world exposure, and inquiry-based learning, we inspire students to explore and innovate." },
  { icon: Users, title: "Inclusive, Safe & Student-Centric Environment", description: "We strive to build a campus culture that is safe, inclusive, emotionally nurturing, and supportive of children with diverse abilities." },
  { icon: Globe, title: "Preparing Responsible Global Citizens", description: "We aim to shape responsible citizens who uphold ethical conduct and contribute positively to society." },
  { icon: Star, title: "Lifelong Learners with Leadership Qualities", description: "We foster resilience, leadership, creativity, and problem-solving skills so our students emerge as confident leaders." }
];

const visionPoints = [
  "Discovers their inner potential through rich learning experiences and meaningful opportunities.",
  "Receives an education grounded in holistic development, moral strength, and intellectual refinement.",
  "Learns to embrace challenges with resilience, curiosity, and confidence.",
  "Develops a deep sense of social responsibility, empathy, and respect for themselves, others, and the environment."
];

const MissionVisionSection = () => {
  return (
    <section id="mission-vision" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 lg:px-8 relative z-10">
        {/* Mission Section */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left - Title */}
            <div className="lg:w-1/3 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
                  Our Mission
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Inspiring Minds, <span className="text-gradient">Illuminating Futures</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Wisdom Convent School, our mission is to create an educational ecosystem where excellence, empathy, and enlightenment converge. Rooted in strong moral values and driven by modern educational visions, we aim to shape young learners into intellectually vibrant, emotionally balanced, and socially responsible individuals.
              </p>
            </div>
            
            {/* Right - Points */}
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
              {missionPoints.map((point, index) => (
                <div 
                  key={point.title}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <point.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Vision Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Left - Content */}
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center">
                      <Eye className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
                      Our Vision
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
                    Shaping Futures with Wisdom, Courage, and Compassion
                  </h2>
                  <p className="text-cream/80 leading-relaxed mb-8">
                    We aspire to be an institution that not only imparts knowledge but awakens wisdom, nurtures creativity, and instills the values needed to thrive in an ever-changing world.
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-cream text-lg">Our vision is to create a school where every learner:</h3>
                    {visionPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-secondary/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Star className="h-3 w-3 text-secondary" />
                        </div>
                        <p className="text-cream/80 text-sm leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right - Quote */}
                <div className="lg:w-1/2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="font-display text-xl font-bold text-cream mb-4">The Essence of Our Vision</h3>
                    <p className="text-cream/90 leading-relaxed mb-6">
                      We strive to become a beacon of transformative education—a school where knowledge kindles wisdom, learning inspires leadership, and character becomes the cornerstone of success.
                    </p>
                    <p className="text-cream/80 leading-relaxed mb-6">
                      Through dedicated educators, enriching experiences, and a nurturing environment, we aim to sculpt students who rise with purpose, shine with excellence, and serve with grace.
                    </p>
                    <div className="pt-6 border-t border-white/20">
                      <p className="text-secondary font-display font-bold text-lg">Creating Responsible Global Citizens</p>
                      <p className="text-cream/70 text-sm mt-2">Lead with integrity • Think critically • Collaborate with confidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
