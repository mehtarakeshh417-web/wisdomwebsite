import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Harpreet Kaur",
    role: "Parent",
    content:
      "Wisdom Convent School has transformed our daughter's approach to learning. The teachers truly care about each student's success and well-being.",
    rating: 5,
  },
  {
    name: "Gurpreet Singh",
    role: "Alumni, Class of 2023",
    content:
      "The foundation I received here prepared me exceptionally well for university. The critical thinking skills and work ethic I developed have been invaluable.",
    rating: 5,
  },
  {
    name: "Mandeep Kaur Sidhu",
    role: "Parent & Community Leader",
    content:
      "The holistic approach to education sets Wisdom Convent apart. My son has grown not just academically, but as a compassionate and responsible individual.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6 animate-fade-in">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            What Our <span className="text-secondary">Community</span> Says
          </h2>
          <p className="text-primary-foreground/70 text-lg animate-fade-in-up animation-delay-100">
            Hear from parents, students, and alumni about their Wisdom
            Convent School experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group p-8 bg-card/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-card/10 transition-all duration-300 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-secondary/50 mb-6" />

              {/* Content */}
              <p className="text-primary-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-secondary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-primary-foreground/60 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
