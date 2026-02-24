import { Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/917248400341?text=Hello%2C%20I%20want%20to%20enquire%20about%20courses%20at%20LBS%20Training%20Institute%20Kotdwar.";
  const phoneLink = "tel:+917248400341";

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/70" />
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-primary-foreground/80 text-sm md:text-base tracking-widest uppercase mb-4">
          📍 Kotdwar, Uttarakhand
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 leading-tight">
          Lal Bahadur Shastri Training Institute
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
          लाल बहादुर शास्त्री ट्रेनिंग इंस्टीट्यूट, कोटद्वार
        </p>
        <p className="text-primary-foreground/80 text-base md:text-lg mt-4 mb-8 max-w-xl mx-auto leading-relaxed">
          Learn practical skills in a friendly environment. Build your career with confidence — we're here to guide you every step of the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-whatsapp text-whatsapp-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Enquire on WhatsApp
          </a>
          <a
            href={phoneLink}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/80">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={`text-star text-lg ${i === 5 ? "opacity-50" : ""}`}>★</span>
            ))}
          </div>
          <span className="text-sm">4.6 Rating on Google</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
