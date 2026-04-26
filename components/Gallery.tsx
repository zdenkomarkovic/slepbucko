import Image from "next/image";

const images = [
  { src: "/slide1.jpg", alt: "Šlep vozilo Beograd" },
  { src: "/slide2.jpg", alt: "Prevoz automobila" },
  { src: "/slide4.jpg", alt: "Šlep kamion" },
  { src: "/slide5.jpg", alt: "Prevoz radnih mašina" },
  { src: "/slide6.jpg", alt: "Šlep na autoputu" },
  { src: "/slide7.jpg", alt: "Utovar vozila" },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">Galerija</span>
          <h2 className="text-3xl font-extrabold text-white mt-2">Naša vozila i oprema</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img) => (
            <div key={img.src} className="relative aspect-video rounded-xl overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
