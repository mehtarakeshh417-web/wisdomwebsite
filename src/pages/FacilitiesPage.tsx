import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfrastructureSection from "@/components/InfrastructureSection";

const FacilitiesPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Header */}
        <section className="relative pt-24 pb-16 bg-primary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }} />
          </div>
          <div className="container relative z-10 px-4 lg:px-8 pt-16 pb-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
                Infrastructure
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
                School <span className="text-secondary">Infrastructure</span>
              </h1>
              <p className="text-cream/80 text-lg max-w-2xl">
                A World-Class Campus Crafted to Inspire Excellence
              </p>
            </div>
          </div>
        </section>

        <InfrastructureSection />
      </main>
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
