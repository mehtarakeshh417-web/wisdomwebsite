import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import slide1 from "@/assets/hero-slide-1.jpg.asset.json";

const slides = [
  slide1.url,
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1768800433/IMG-20260109-WA0005_mwt2vd.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771224711/IMG_3005.JPG_j3wvse.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771224712/IMG_5570.JPG_mnhblo.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771224710/IMG_5086.JPG_kw3ns4.jpg",
];

const HeroSection = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Wisdom Convent School"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-secondary" : "w-2 bg-cream/50"}`}
          />
        ))}
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-500" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-8 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-full border border-cream/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-cream text-sm font-medium">
              Admissions Open for 2026-27
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-tight mb-6 animate-fade-in-up">
            Shaping Tomorrow's{" "}
            <span className="text-gradient">Leaders</span> Today
          </h1>

          {/* Subheading */}
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            At Wisdom Convent School, we nurture curiosity, inspire excellence, and
            empower students to achieve their fullest potential in a world of
            endless possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-cream/20 animate-fade-in-up animation-delay-400">
            {[
              { value: "7+", label: "Years of Excellence" },
              { value: "1000+", label: "Students Enrolled" },
              { value: "100%", label: "Results" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-secondary mb-1">
                  {stat.value}
                </div>
                <div className="text-cream/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
