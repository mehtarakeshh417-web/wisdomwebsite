import { ArrowUpRight } from "lucide-react";
import libraryImg from "@/assets/library.jpg";
import scienceImg from "@/assets/science-lab.jpg";
import sportsImg from "@/assets/sports.jpg";
import artsImg from "@/assets/arts.jpg";

const programs = [
  {
    title: "Academic Excellence",
    description:
      "Rigorous STEM and humanities programs with AP and honors courses designed for college readiness.",
    image: libraryImg,
    accent: "from-navy to-navy-light",
  },
  {
    title: "Science & Innovation",
    description:
      "State-of-the-art laboratories and research opportunities in biology, chemistry, and physics.",
    image: scienceImg,
    accent: "from-secondary to-gold-light",
  },
  {
    title: "Athletics & Fitness",
    description:
      "Comprehensive sports programs fostering teamwork, discipline, and physical excellence.",
    image: sportsImg,
    accent: "from-navy-light to-navy",
  },
  {
    title: "Arts & Creativity",
    description:
      "Visual arts, music, drama, and creative writing programs that nurture artistic expression.",
    image: artsImg,
    accent: "from-gold-light to-secondary",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-muted relative">
      <div className="container px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6 animate-fade-in">
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Discover Your <span className="text-gradient">Passion</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up animation-delay-100">
            From academics to athletics, arts to innovation – we offer
            comprehensive programs that nurture every aspect of student growth.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${program.accent} opacity-70 transition-opacity duration-300 group-hover:opacity-80`}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-cream mb-3">
                    {program.title}
                  </h3>
                  <p className="text-cream/80 leading-relaxed mb-4 max-w-md">
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn More</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-10 h-10 border-2 border-cream/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5 text-cream" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
