import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import USPSection from "@/components/USPSection";
import { BookOpen, Download, GraduationCap, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: BookOpen,
    title: "Book List 2026-27",
    description: "Download the complete book list for the upcoming academic session. Ensure your child is well-prepared with all the required textbooks and materials.",
    hasDownload: true,
  },
  {
    icon: GraduationCap,
    title: "Our Syllabus",
    description: "Wisdom Convent School follows the ICSE (Indian Certificate of Secondary Education) curriculum, emphasizing conceptual understanding, analytical skills, and holistic development. The syllabus covers English, Hindi, Mathematics, Science, Social Studies, Computer Science, Art, Music, and Physical Education.",
  },
  {
    icon: Shirt,
    title: "Our Uniform",
    description: "The school uniform instills a sense of discipline, equality, and pride among students. Details regarding the uniform code, suppliers, and guidelines will be shared during the admission process. All students are expected to adhere to the uniform policy on all school days.",
  },
];

const AcademicsPage = () => {
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
                Academics
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
                Academic <span className="text-secondary">Excellence</span>
              </h1>
              <p className="text-cream/80 text-lg max-w-2xl">
                Empowering students through a rigorous ICSE curriculum, innovative teaching methodologies, and a commitment to holistic development.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Info Sections */}
        <section className="py-16 bg-background">
          <div className="container px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div 
                  key={section.title}
                  className="bg-card rounded-2xl p-8 border border-border/50 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <section.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{section.description}</p>
                  {section.hasDownload && (
                    <Button variant="gold" size="lg" className="group">
                      <Download className="h-5 w-5" />
                      Download Book List
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <USPSection />
      </main>
      <Footer />
    </div>
  );
};

export default AcademicsPage;
