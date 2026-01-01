import { Award, Users, BookOpen, Globe } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Rigorous curriculum designed to challenge and inspire intellectual growth.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Dedicated educators with advanced degrees and decades of experience.",
  },
  {
    icon: BookOpen,
    title: "Holistic Learning",
    description:
      "Balanced approach integrating academics, arts, athletics, and character.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Preparing students to thrive in an interconnected, diverse world.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container relative z-10 px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6 animate-fade-in">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              A Legacy of{" "}
              <span className="text-gradient">Excellence</span> Since 1974
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
              For over five decades, Prestige Academy has been at the forefront
              of educational innovation. Our commitment to nurturing well-rounded
              individuals has produced leaders in every field – from science and
              technology to arts and humanities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              We believe that education goes beyond textbooks. Our vibrant campus
              community fosters creativity, critical thinking, and compassion,
              preparing students not just for college, but for life.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-8 p-6 bg-primary rounded-2xl animate-fade-in-up animation-delay-300">
              {[
                { value: "150+", label: "Faculty Members" },
                { value: "35", label: "Countries Represented" },
                { value: "100%", label: "Student Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center flex-1 min-w-[100px]">
                  <div className="font-display text-2xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 bg-card rounded-2xl border border-border hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
