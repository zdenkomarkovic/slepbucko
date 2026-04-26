"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PHONE, PHONE_DISPLAY } from "@/lib/constants";

const slides = [
  { src: "/slide1.jpg", alt: "Šlep služba Bucko Beograd" },
  { src: "/slide2.jpg", alt: "Prevoz vozila Beograd" },
  { src: "/slide3.jpg", alt: "Šlep vozila 24h" },
  { src: "/slide4.jpg", alt: "Hitna šlep pomoć" },
  { src: "/slide5.jpg", alt: "Prevoz radnih mašina" },
  { src: "/slide6.jpg", alt: "Šlep Novi Beograd" },
  { src: "/slide7.jpg", alt: "Šlep Zemun" },
  { src: "/slide8.jpg", alt: "Profesionalna šlep služba" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[520px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 text-white">
        <div className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
          Dostupni 24/7
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Šlep Služba <span className="text-amber-400">Bucko</span>
          <br />
          <span className="text-3xl md:text-5xl">Beograd</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
          Profesionalna šlep služba — brza, pouzdana i bezbedna pomoć na putu u Beogradu i okolini.
          Dostupni smo non‑stop, 365 dana u godini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-xl px-8 py-4 rounded-xl shadow-2xl transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {PHONE_DISPLAY}
          </a>
          <a
            href="#usluge"
            className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-black text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            Naše usluge
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-amber-400 w-6" : "bg-white/50"}`}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
