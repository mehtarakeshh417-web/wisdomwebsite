import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const galleryImages = [
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771224711/IMG_3005.JPG_j3wvse.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771224712/IMG_5570.JPG_mnhblo.jpg",
  "https://res.cloudinary.com/dnqht9dkd/image/upload/v1771224710/IMG_5086.JPG_kw3rmm.jpg",
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

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
                Gallery
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
                Life at <span className="text-secondary">Wisdom</span>
              </h1>
              <p className="text-cream/80 text-lg max-w-2xl">
                Glimpses of our vibrant campus life, events, and student achievements.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container px-4 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setLightbox(img)}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightbox && (
          <div 
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button 
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={lightbox}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
