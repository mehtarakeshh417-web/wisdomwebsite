import { ArrowRight, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 border border-primary-foreground rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 border border-primary-foreground rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
                Begin Your Journey to{" "}
                <span className="text-secondary">Excellence</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 animate-fade-in-up animation-delay-100">
                Take the first step towards a transformative educational
                experience. Schedule a campus tour or apply now for the upcoming
                academic year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
                <Button variant="hero" size="xl" className="group">
                  Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="group"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule Visit
                </Button>
              </div>
            </div>

            {/* Right Content - Contact Cards */}
            <div className="space-y-4 animate-fade-in-up animation-delay-300">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      Admissions Office
                    </h3>
                    <p className="text-primary-foreground/70 text-sm mb-2">
                      Speak with our admissions team
                    </p>
                    <a
                      href="tel:+1234567890"
                      className="text-secondary font-semibold hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      Open House Events
                    </h3>
                    <p className="text-primary-foreground/70 text-sm mb-2">
                      Join our upcoming campus tours
                    </p>
                    <span className="text-secondary font-semibold">
                      Every Saturday, 10 AM
                    </span>
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

export default CTASection;
