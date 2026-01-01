import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Facilities", href: "#facilities" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className={`p-2 rounded-lg transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-secondary'}`}>
              <GraduationCap className={`h-6 w-6 transition-colors ${scrolled ? 'text-primary-foreground' : 'text-secondary-foreground'}`} />
            </div>
            <span className={`font-display text-xl font-bold transition-colors ${scrolled ? 'text-foreground' : 'text-cream'}`}>
              Wisdom Convent School
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? "text-foreground" : "text-cream"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant={scrolled ? "gold" : "hero"} size="lg">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground" : "text-cream"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-card/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="gold" size="lg" className="mt-2">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
