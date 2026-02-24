const testimonials = [
  {
    name: "Ankit Negi",
    text: "Best institute in Kotdwar! The teachers explain everything simply and clearly. I learned computer skills from scratch and now feel confident using them at work.",
    rating: 5,
  },
  {
    name: "Neha Rawat",
    text: "The environment here is very friendly and supportive. As a beginner, I was nervous, but the trainers made me feel comfortable from day one. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vipin Badola",
    text: "Practical knowledge is the focus here, not just theory. The teaching style is simple and easy to understand. Very affordable too.",
    rating: 5,
  },
  {
    name: "Rohit Singh",
    text: "Polite and helpful teachers. I joined for spoken English and the improvement in my confidence has been amazing. Great institute for students of all ages.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Students Say</h2>
          <p className="text-muted-foreground text-lg">Real words from real students.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-lg border border-border p-6">
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className={`text-star ${i > t.rating ? "opacity-25" : ""}`}>★</span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm italic">
                "{t.text}"
              </p>
              <p className="font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
