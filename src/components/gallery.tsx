export default function Gallery() {
  const images = [
    "/images/ad-bracelet.jpeg",
    "/images/ad.jpeg",
    "/images/bangals.jpeg",
    "/images/bridal.jpeg",
    "/images/earings.jpeg",
    "/images/kangan.jpeg",
    "/images/antic.jpeg",
    "/images/set2.jpeg",
    "/images/ring2.jpeg",

  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={src} alt={'Jewelry ${index + 1}'} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}