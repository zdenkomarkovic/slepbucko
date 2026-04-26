const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17h2l2-4h4l1 4h2M3 10l2-6h14l2 6M3 10h18M7 17v3m10-3v3" />
      </svg>
    ),
    title: "Šlep putničkih vozila",
    description:
      "Bezbedan transport automobila u slučaju kvara, nezgode ili potrebe za prevozom do servisa, kućne adrese ili bilo koje druge lokacije.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    title: "Prevoz radnih mašina",
    description:
      "Prevoz građevinskih i radnih mašina, mini bagera, viljuškara i ostale opreme. Imamo odgovarajuća vozila za svaki tip tereta.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Hitne intervencije",
    description:
      "Brz dolazak na vašu lokaciju i momentalna reakcija u svim situacijama. Dostupni smo 24 časa dnevno, 7 dana u nedelji.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Plaćanje preko računa",
    description:
      "Jednostavno i sigurno plaćanje preko računa za pravna lica i preduzetnike, uz jasno definisane uslove i transparentnu uslugu.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Prevoz na duge relacije",
    description:
      "Prevozimo vozila i mašine na duže relacije unutar Srbije. Pouzdano, bezbedno i u dogovorenom roku.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Šlep motocikala",
    description:
      "Bezbedan prevoz motocikala i skutera. Specijalizovana oprema za utovar i siguran transport vašeg motocikla.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Izvlačenje iz rova i blata",
    description:
      "Profesionalno izvlačenje vozila iz rova, blata ili nepristupačnog terena. Brza reakcija i specijalizovana oprema.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Asistencija na licu mesta",
    description:
      "Manja popravka, startovanje vozila ili zamena gume na licu mesta. Trudimo se da vas što pre nastavimo sa putovanjem.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">Šta nudimo</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Naše usluge</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Kompletna paleta usluga šlep i vučne službe za sva vozila i mašine u Beogradu i okolini.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card rounded-2xl p-6 shadow-sm border cursor-default ${
                service.highlight
                  ? "bg-amber-500 border-amber-400 text-black"
                  : "bg-white border-gray-100 hover:border-amber-200 hover:shadow-md"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  service.highlight ? "bg-black/10 text-black" : "bg-amber-50 text-amber-600"
                }`}
              >
                {service.icon}
              </div>
              <h3 className={`font-bold text-lg mb-2 ${service.highlight ? "text-black" : "text-gray-900"}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${service.highlight ? "text-black/80" : "text-gray-500"}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
