import { Heart, BookCheck, Users, IndianRupee, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Supportive Trainers",
    description: "Our teachers are patient, polite, and always ready to help you learn at your own pace.",
  },
  {
    icon: BookCheck,
    title: "Practical Teaching",
    description: "We focus on hands-on learning so you gain real skills you can use immediately.",
  },
  {
    icon: Users,
    title: "Friendly Environment",
    description: "A welcoming space where beginners feel comfortable and confident to learn.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Courses",
    description: "Quality education at honest prices. We believe skill development should be accessible to all.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Locally",
    description: "Rated 4.6 on Google — our students trust us, and their results speak for themselves.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Students Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're not the biggest institute — but we're one of the most caring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto lg:max-w-none">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4 items-start p-4">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-1">
                <reason.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
