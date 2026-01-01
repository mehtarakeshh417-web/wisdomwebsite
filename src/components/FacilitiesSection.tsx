import { Check } from "lucide-react";

const facilities = [
  "Modern Science Laboratories",
  "Olympic-Size Swimming Pool",
  "Performing Arts Theater",
  "Digital Media Studios",
  "Indoor Sports Complex",
  "Research Library",
  "Music Conservatory",
  "Cafeteria & Dining Halls",
  "Medical Center",
  "Outdoor Sports Fields",
  "Art & Design Studios",
  "Technology Innovation Hub",
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-24 bg-background relative">
      <div className="container px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 animate-fade-in overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-navy to-navy-light opacity-80 flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-cream">50+</span>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-muted animate-fade-in animation-delay-200 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-foreground mb-2">25</div>
                    <div className="text-muted-foreground text-sm">Acres of Campus</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl bg-secondary animate-fade-in animation-delay-100 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-secondary-foreground mb-2">5</div>
                    <div className="text-secondary-foreground/80 text-sm">Sports Arenas</div>
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary to-navy-light animate-fade-in animation-delay-300 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-primary-foreground mb-2">12</div>
                    <div className="text-primary-foreground/80 text-sm">Specialized Labs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-lg animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">World-Class</div>
                  <div className="text-muted-foreground text-sm">Facilities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6 animate-fade-in">
              Our Facilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              State-of-the-Art <span className="text-gradient">Campus</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 animate-fade-in-up animation-delay-100">
              Our sprawling 25-acre campus features modern facilities designed
              to enhance learning, encourage creativity, and promote physical
              well-being.
            </p>

            {/* Facilities Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={facility}
                  className={`flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors animate-fade-in animation-delay-${Math.min((index + 1) * 50, 600)}`}
                >
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">
                    {facility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
