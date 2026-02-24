import { BookOpen, School, UserCheck, Smile } from "lucide-react";

const facilities = [
  {
    icon: BookOpen,
    title: "Library Facility",
    description: "A well-stocked library with books, study guides, and reference materials for all courses.",
  },
  {
    icon: School,
    title: "Modern Classrooms",
    description: "Clean, well-lit classrooms equipped for both theory and practical learning sessions.",
  },
  {
    icon: UserCheck,
    title: "Personal Guidance",
    description: "One-on-one attention from trainers to help you understand concepts at your own pace.",
  },
  {
    icon: Smile,
    title: "Beginner-Friendly",
    description: "No prior experience needed. We welcome students of all backgrounds and skill levels.",
  },
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Facilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for a comfortable and effective learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f) => (
            <div key={f.title} className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
