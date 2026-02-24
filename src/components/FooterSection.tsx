import { Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-primary-foreground font-bold text-lg mb-2">
              LBS Training Institute
            </h3>
            <p className="text-sm leading-relaxed">
              Ambey Complex, NBD Road,<br />
              Above HDFC Bank,<br />
              Near Arya Kanya Inter College,<br />
              Kotdwar, Uttarakhand – 246149
            </p>
          </div>

          <div>
            <h3 className="text-primary-foreground font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li><a href="#courses" className="hover:text-primary-foreground transition-colors">Courses</a></li>
              <li><a href="#why-us" className="hover:text-primary-foreground transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary-foreground transition-colors">Student Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary-foreground font-bold text-lg mb-2">Connect</h3>
            <div className="flex items-center gap-2 mb-3 text-sm">
              <Phone className="w-4 h-4" />
              <a href="tel:+917248400341" className="hover:text-primary-foreground transition-colors">
                072484 00341
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/Lal-Bahadur-Shastri-Institute/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary-foreground transition-colors"
              >
                Facebook
              </a>
              <span className="opacity-30">|</span>
              <a
                href="https://www.instagram.com/lbsti_kotdwara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary-foreground transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          <p className="mb-2">
            © {new Date().getFullYear()} Lal Bahadur Shastri Training Institute, Kotdwar. All rights reserved.
          </p>
          <p>
            This website is a demonstration. Content and design are subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
