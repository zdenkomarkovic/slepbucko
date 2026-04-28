import Image from "next/image";
import { PHONE_DISPLAY } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";

export default function About() {
  return (
    <section id="o-nama" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 md:h-full min-h-[360px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/slide3.jpg"
            alt="Šlep vozilo Bucko Beograd"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 bg-amber-500 text-black font-bold px-4 py-2 rounded-lg text-sm">
            Beograd i okolina
          </div>
        </div>

        <div>
          <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">O nama</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight">
            Pouzdana šlep služba<br />
            <span className="text-amber-500">u srcu Beograda</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Šlep služba Bucko pruža pouzdanu, brzu i bezbednu pomoć na putu u Beogradu i okolini.
            Dostupni smo non‑stop, uz maksimalnu pažnju i siguran transport svih vrsta vozila.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sa višegodišnjim iskustvom i modernom opremom, garantujemo brz dolazak na lice mesta i
            bezbedan prevoz vašeg vozila do željene destinacije. Bilo da se radi o putničkom automobilu,
            radnoj mašini ili motociklu — mi smo tu za vas.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Brz dolazak — prosečno 30 minuta",
              "Moderna specijalizovana vozila",
              "Iskusni i sertifikovani vozači",
              "Transparentne i povoljne cene",
              "Plaćanje gotovinom i preko računa",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <PhoneLink className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-xl transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Pozovite nas: {PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
