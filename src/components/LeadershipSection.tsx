import { useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import principalPhoto from "@/assets/principal-deepika.jpg.asset.json";

const leaders = [
  {
    name: "Ms. Deepika Chopra",
    title: "Principal",
    qualification: "M.A. & B.Ed. (English)",
    image: `https://wisdomaaliwebsite.lovable.app${principalPhoto.url}`,
    intro: "Principal's Message",
    message: `At Wisdom Convent School, we stand at the confluence of tradition and innovation, where the pursuit of excellence is not merely a goal but a continuous journey. As an institution committed to shaping the leaders of tomorrow, we strive to provide an environment that transcends conventional learning, nurturing the intellectual, emotional, and ethical growth of every student. Our vision is to foster a culture where curiosity meets discipline, creativity is nurtured, and every individual is encouraged to explore their limitless potential.

In our quest for academic brilliance, we offer a comprehensive curriculum that integrates modern pedagogical practices with a strong foundation in core values. Our curriculum is designed not only to meet the highest educational standards but also to adapt to the evolving needs of the global landscape. We believe that education should be a transformative experience—one that equips students with the knowledge, skills, and resilience necessary to navigate the complexities of the world. Our faculty, a dedicated group of passionate educators, are the cornerstone of this transformation, imparting not just academic knowledge but life lessons that leave an indelible mark on our students.

Beyond the classroom, we offer a diverse range of extracurricular activities that provide students with ample opportunities to develop their talents and interests. From sports to arts, from leadership programs to cultural initiatives, we encourage our students to explore various avenues of self-expression and personal growth. These experiences are designed to cultivate qualities such as teamwork, perseverance, and empathy—traits that are essential for success in both personal and professional spheres.

At Wisdom Convent School, we are not just preparing students for examinations; we are preparing them for life. Our emphasis on character education ensures that every child leaves our institution not only as an academic achiever but also as a compassionate, responsible, and ethical individual. We believe that true success lies in the ability to balance intellect with integrity, ambition with humility, and knowledge with wisdom.

Our state-of-the-art facilities, coupled with a nurturing and inclusive environment, provide the perfect setting for holistic development. We are committed to creating a space where students feel valued, supported, and empowered to excel. As we continue to evolve, we remain steadfast in our mission to inspire, educate, and empower each child to reach their fullest potential.

Join us at Wisdom Convent School, where every student's journey is a unique and transformative experience, and together, we will shape a brighter, more enlightened future.`,
    closing: "Warm regards,"
  },
  {
    name: "Mr. Paramjeet Singh Warar",
    title: "Managing Director",
    qualification: "",
    image: "https://res.cloudinary.com/dnqht9dkd/image/upload/v1768800562/WhatsApp_Image_2025-11-11_at_1.33.35_PM_1_ountr0.jpg",
    intro: "Our Managing Director's Message",
    message: `At Wisdom Convent School, our mission is to cultivate an ecosystem where knowledge, virtue, and innovation coexist harmoniously. We aspire to nurture young minds into intellectually vibrant, emotionally balanced, and socially responsible individuals who can illuminate the world with their wisdom and compassion.

Our goal transcends the boundaries of academic excellence. We seek to instill in our students the courage to question, the curiosity to explore, and the integrity to act with conscience. Every learner at Wisdom is encouraged to embrace challenges, celebrate creativity, and uphold values that form the essence of true education.

We firmly believe that education is not merely the acquisition of information but the awakening of human potential. Through dynamic teaching methodologies, value-based learning, and a progressive outlook, we aim to prepare our students for the complexities of the modern world while keeping them rooted in the timeless ethos of respect, humility, and empathy.

Our mission is to shape a generation of visionaries who will not only excel in their chosen fields but also contribute meaningfully to the betterment of society. With steadfast commitment and collective effort, Wisdom Convent School continues to march forward — transforming aspirations into accomplishments and learners into leaders.`,
    closing: ""
  },
  {
    name: "Mr. Kavinder Nath Dahuja",
    title: "Chairman",
    qualification: "",
    image: "https://res.cloudinary.com/dnqht9dkd/image/upload/v1768800932/WhatsApp_Image_2026-01-19_at_11.04.16_AM_qayhyh.jpg",
    intro: "Guiding words from our Chairman",
    message: `It fills my heart with immense pride and satisfaction to see Wisdom Convent School flourish as a centre of academic excellence and holistic development. Over the years, the school has grown not only in strength and infrastructure but also in spirit, ideals, and achievements.

At Wisdom, education is not confined to textbooks — it is an enlightening journey that moulds the personality, values, and vision of every child. We believe that true education empowers students to think independently, act responsibly, and contribute meaningfully to society. It inspires curiosity, instills discipline, and nurtures compassion — the very pillars on which great lives are built.

Our dedicated educators deserve special appreciation for their relentless efforts in shaping young minds with knowledge, creativity, and moral strength. I also extend my gratitude to the parents for their unwavering trust and cooperation, and to our students whose enthusiasm and achievements bring glory to the school.

As we continue to move forward with commitment and conviction, I envision Wisdom Convent School standing tall as a beacon of progressive learning — where tradition meets innovation and every learner's potential is realized to its fullest.

May Wisdom Convent School continue to illuminate countless young minds and contribute to the creation of a better, brighter tomorrow.`,
    closing: ""
  }
];

const LeaderCard = ({ leader, index }: { leader: typeof leaders[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;
  
  const shortMessage = leader.message.split('\n\n')[0];
  
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
      {/* Image */}
      <div className="lg:w-1/3 w-full">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl blur-xl" />
          <div className="relative overflow-hidden rounded-2xl border-4 border-secondary/30 shadow-2xl">
            <img 
              src={leader.image} 
              alt={leader.name}
              className="w-full aspect-[3/4] object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
              <h3 className="font-display text-xl font-bold text-cream">{leader.name}</h3>
              <p className="text-secondary font-medium">{leader.title}</p>
              {leader.qualification && (
                <p className="text-cream/75 text-xs mt-1 font-medium tracking-wide">{leader.qualification}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="lg:w-2/3 w-full">
        <div className="relative">
          <Quote className="absolute -top-4 -left-4 h-12 w-12 text-secondary/20" />
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              {leader.intro}
            </h3>
            {leader.qualification && (
              <p className="text-sm font-semibold text-secondary tracking-wide">{leader.qualification}</p>
            )}
            <div className="w-16 h-1 bg-secondary rounded-full mb-6" />
            
            <div className="text-muted-foreground leading-relaxed space-y-4">
              {expanded ? (
                leader.message.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))
              ) : (
                <p>{shortMessage}</p>
              )}
            </div>
            
            <Button 
              variant="ghost" 
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-secondary hover:text-secondary/80"
            >
              {expanded ? (
                <>Read Less <ChevronUp className="ml-2 h-4 w-4" /></>
              ) : (
                <>Read More <ChevronDown className="ml-2 h-4 w-4" /></>
              )}
            </Button>
            
            {expanded && leader.closing && (
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-muted-foreground italic">{leader.closing}</p>
                <p className="font-display font-bold text-foreground mt-2">{leader.name}</p>
                <p className="text-secondary text-sm">{leader.title}, Wisdom Convent School</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            Our Leadership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Guided by <span className="text-gradient">Visionary Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated leaders who shape our institution's vision and inspire excellence in education.
          </p>
        </div>
        
        {/* Leaders */}
        <div className="space-y-24">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
