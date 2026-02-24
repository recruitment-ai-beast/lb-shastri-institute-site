import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const whatsappLink = "https://wa.me/917248400341?text=Hello%2C%20I%20want%20to%20enquire%20about%20courses%20at%20LBS%20Training%20Institute%20Kotdwar.";
  const phoneLink = "tel:+917248400341";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Call or message us anytime during working hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href={phoneLink} className="text-primary hover:underline text-lg">
                  072484 00341
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-whatsapp" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whatsapp hover:underline"
                >
                  Message us on WhatsApp →
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ambey Complex, LBS Training Institute,<br />
                  NBD Road, Above HDFC Bank,<br />
                  Near Arya Kanya Inter College,<br />
                  Kotdwar, Uttarakhand – 246149
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex gap-3 items-center mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-lg">Working Hours</h3>
            </div>
            <div className="space-y-2 text-sm">
              {[
                { day: "Monday", hours: "7:00 AM – 7:00 PM" },
                { day: "Tuesday", hours: "7:00 AM – 7:00 PM" },
                { day: "Wednesday", hours: "7:00 AM – 7:00 PM" },
                { day: "Thursday", hours: "7:00 AM – 7:00 PM" },
                { day: "Friday", hours: "7:00 AM – 7:00 PM" },
                { day: "Saturday", hours: "7:00 AM – 6:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map((item) => (
                <div key={item.day} className="flex justify-between py-1.5 border-b border-border last:border-0">
                  <span className="text-foreground font-medium">{item.day}</span>
                  <span className={item.hours === "Closed" ? "text-destructive font-medium" : "text-muted-foreground"}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-whatsapp text-whatsapp-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Enquire on WhatsApp
            </a>
            <a
              href={phoneLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              Call Now: 072484 00341
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
