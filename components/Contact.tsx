import { PHONE_DISPLAY, ADDRESS } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">Kontakt</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">Pozovite nas odmah</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Dostupni smo 24/7. Jedna poruka ili poziv — i mi smo na putu prema vama.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <PhoneLink className="group bg-amber-500 hover:bg-amber-600 rounded-2xl p-8 text-center transition-colors shadow-lg">
            <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </div>
            <div className="font-bold text-black text-xl mb-1">{PHONE_DISPLAY}</div>
            <div className="text-black/70 text-sm">Pozovite odmah · 24/7</div>
          </PhoneLink>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="font-bold text-gray-900 text-xl mb-1">{ADDRESS}</div>
            <div className="text-gray-500 text-sm">Pokrivamo ceo Beograd i okolinu</div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="font-bold text-gray-900 text-xl mb-1">Non‑stop</div>
            <div className="text-gray-500 text-sm">Dostupni 24 časa, 7 dana u nedelji, 365 dana</div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">
          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-extrabold text-white mb-4">
              Trebate hitnu pomoć?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Ne čekajte — pozovite nas odmah. Brzo stižemo na vašu lokaciju i brinemo se za
              bezbedno šlepanje vašeg vozila.
            </p>
            <PhoneLink className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-2xl px-8 py-4 rounded-xl transition-colors self-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {PHONE_DISPLAY}
            </PhoneLink>
          </div>
          <div className="h-64 md:h-auto">
            <iframe
              title="Lokacija - Beograd"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91699.42397484748!2d20.30144!3d44.8176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3befa4bc9%3A0xb4b84d585c725f9!2sBeograd!5e0!3m2!1ssr!2srs!4v1700000000000"
              className="w-full h-full min-h-[280px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
