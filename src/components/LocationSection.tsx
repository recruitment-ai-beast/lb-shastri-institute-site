const LocationSection = () => {
  return (
    <section id="location" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Find Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Located above HDFC Bank, near Arya Kanya Inter College, NBD Road, Kotdwar.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123!2d78.525!3d29.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ0JzUzLjAiTiA3OMKwMzEnMzAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=Lal+Bahadur+Shastri+Training+Institute+Kotdwar"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LBS Training Institute Kotdwar Location"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/maps/search/Lal+Bahadur+Shastri+Training+Institute+Kotdwar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
