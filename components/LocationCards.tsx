const locations = [
  {
    title: "Šlep služba Bucko Novi Beograd",
    description:
      "Brza i pouzdana šlep služba na teritoriji Novog Beograda. Pokrivamo sve delove opštine uz garantovano kratko vreme odziva.",
    area: "Novi Beograd",
  },
  {
    title: "Šlep služba Beograd 24h",
    description:
      "Dostupni smo 24 časa dnevno, 7 dana u nedelji. Pozovite nas u bilo koje doba dana ili noći i mi ćemo stići.",
    area: "Beograd",
  },
  {
    title: "Šlep vozila Zemun",
    description:
      "Šlep i prevoz vozila na teritoriji Zemuna i okolnih naselja. Brz dolazak i siguran transport do željene destinacije.",
    area: "Zemun",
  },
  {
    title: "Šlep služba Voždovac",
    description:
      "Pokrivamo opštinu Voždovac sa brzim intervencijama. Iskusni vozači i moderna oprema za bezbedno šlepanje.",
    area: "Voždovac",
  },
  {
    title: "Šlep Zvezdara i Palilula",
    description:
      "Šlep služba za opštine Zvezdara i Palilula. Poznajemo svaki ugao ovih opština radi što bržeg dolaska.",
    area: "Zvezdara · Palilula",
  },
  {
    title: "Šlep služba Čukarica i Rakovica",
    description:
      "Brza šlep pomoć na teritoriji Čukarice i Rakovice. Dostupni non‑stop za hitne intervencije i planirani prevoz.",
    area: "Čukarica · Rakovica",
  },
  {
    title: "Šlep vozila Stari Grad i Savski Venac",
    description:
      "Šlepovanje i prevoz vozila u centru Beograda — Stari Grad i Savski Venac. Poznajemo specifičnosti gradskog saobraćaja.",
    area: "Stari Grad · Savski Venac",
  },
  {
    title: "Šlep Beograd — okolina i prigradska naselja",
    description:
      "Pružamo usluge šlep službe i u prigradskim naseljima oko Beograda — Surčin, Grocka, Barajevo, Mladenovac i dalje.",
    area: "Okolina Beograda",
  },
];

export default function LocationCards() {
  return (
    <section id="lokacije" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">Pokrivamo ceo Beograd</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Šlep služba po opštinama
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Bez obzira na kojoj lokaciji u Beogradu se nalazite — mi stižemo brzo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {locations.map((loc) => (
            <div
              key={loc.title}
              className="location-card bg-gray-50 border border-gray-100 hover:border-amber-300 hover:shadow-md rounded-2xl p-5 cursor-default"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-amber-600 font-semibold text-xs uppercase tracking-wide">
                  {loc.area}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{loc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{loc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
