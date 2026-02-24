import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { href: "#courses", label: "Courses" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-foreground text-sm md:text-base">
          <img src={logo} alt="LBS Training Institute Logo" className="w-9 h-9 rounded-full" />
          LBS Training Institute
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+917248400341"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2.5 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+917248400341"
            className="inline-flex items-center gap-1.5 px-4 py-2 mt-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
