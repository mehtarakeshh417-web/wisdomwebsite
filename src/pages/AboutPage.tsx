import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionVisionSection from "@/components/MissionVisionSection";

const headerImage = "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771224705/IMG-20260109-WA0005.jpg_zqv3r4.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Header */}
        <section className="relative pt-24 pb-16">
          <div className="absolute inset-0 h-[400px]">
            <img src={headerImage} alt="Wisdom Convent School" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
          </div>
          <div className="container relative z-10 px-4 lg:px-8 pt-16 pb-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
                Our <span className="text-secondary">Story</span>
              </h1>
            </div>
          </div>
        </section>

        {/* History Content */}
        <section className="py-16 bg-background">
          <div className="container px-4 lg:px-8 max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Serving Fazilka with <span className="text-gradient">Premium Education</span> from 2019
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Wisdom Convent School, Fazilka, was established in 2019 with a vision to bridge the gap in quality education in the region. Founded by a group of passionate educationists and community leaders, the school was born out of a deep commitment to provide children with a world-class learning environment rooted in Indian values and global standards.
              </p>
              <p>
                From its inception, the school chose to affiliate with the ICSE Board (Council for the Indian School Certificate Examinations), New Delhi — a decision driven by the board's emphasis on analytical thinking, comprehensive assessments, and a well-rounded curriculum. This affiliation has enabled the school to offer a progressive, English-medium education that prepares students not just for examinations, but for life.
              </p>
              <p>
                Over the years, Wisdom Convent School has grown from a small institution into a thriving centre of academic excellence, with modern infrastructure, a dedicated faculty of over 70 members, and a student body of more than 1,000 learners. The school has consistently maintained 100% results, a testament to its unwavering commitment to quality. Today, it stands as a beacon of progressive learning in Fazilka, inspiring young minds to dream big, think critically, and lead with integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <MissionVisionSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
