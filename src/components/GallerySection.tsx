import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Computer training lab at LBS Institute Kotdwar" },
  { src: gallery2, alt: "Fashion designing class at LBS Institute" },
  { src: gallery3, alt: "Beautician training session" },
  { src: gallery4, alt: "Library and study area" },
  { src: gallery5, alt: "Spoken English class" },
  { src: gallery6, alt: "Teacher training session" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Institute</h2>
          <p className="text-muted-foreground text-lg">A glimpse into our learning environment.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
