import { Monitor, Scissors, Sparkles, GraduationCap, MessageSquare, BookOpen } from "lucide-react";

const courses = [
  {
    icon: Monitor,
    title: "Computer Courses",
    titleHi: "कम्प्यूटर कोर्स",
    description: "Learn basic to advanced computer skills including MS Office, internet, and typing — perfect for beginners and job seekers.",
  },
  {
    icon: Scissors,
    title: "Fashion Designing",
    titleHi: "फैशन डिज़ाइनिंग",
    description: "Hands-on training in garment design, stitching, and pattern making. Turn your creativity into a career.",
  },
  {
    icon: Sparkles,
    title: "Beautician Training",
    titleHi: "ब्यूटीशियन ट्रेनिंग",
    description: "Comprehensive beauty and skincare training. Learn professional techniques to start your own business or get hired.",
  },
  {
    icon: GraduationCap,
    title: "Teacher Training",
    titleHi: "टीचर ट्रेनिंग",
    description: "Prepare for a teaching career with practical classroom skills, teaching methods, and child psychology basics.",
  },
  {
    icon: MessageSquare,
    title: "Spoken English",
    titleHi: "स्पोकन इंग्लिश",
    description: "Build your confidence in speaking English. Simple, easy-to-follow lessons for everyday and professional use.",
  },
  {
    icon: BookOpen,
    title: "Library Facility",
    titleHi: "लाइब्रेरी सुविधा",
    description: "Access a wide range of books and study materials. A quiet space to read, study, and prepare for exams.",
  },
];

const CoursesSection = () => {
  const whatsappLink = "https://wa.me/917248400341?text=Hello%2C%20I%20want%20to%20know%20more%20about%20courses%20at%20LBS%20Training%20Institute.";

  return (
    <section id="courses" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Courses & Facilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practical, beginner-friendly courses designed to build real skills and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <course.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-3" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                {course.titleHi}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">{course.description}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium text-sm hover:underline"
              >
                Enquire about this course →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
