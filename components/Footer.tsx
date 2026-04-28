import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, ADDRESS, SITE_NAME } from "@/lib/constants";
import PhoneLink from "@/components/PhoneLink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="Šlep Bucko" width={192} height={192} className="rounded-md" />
            <div>
              <div className="text-white font-bold text-base">Šlep Bucko</div>
              <div className="text-amber-400 text-xs">Beograd · 24/7</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Profesionalna šlep služba u Beogradu i okolini. Brza, pouzdana i bezbedna pomoć na putu,
            dostupna non‑stop.
          </p>
          <PhoneLink className="text-amber-400 font-bold text-lg hover:text-amber-300 transition-colors">
            {PHONE_DISPLAY}
          </PhoneLink>
        </div>

        <div>
          <div className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Usluge</div>
          <ul className="space-y-2 text-sm">
            {[
              "Šlep putničkih vozila",
              "Prevoz radnih mašina",
              "Hitne intervencije",
              "Prevoz na duge relacije",
              "Šlep motocikala",
              "Izvlačenje iz rova",
              "Asistencija na putu",
            ].map((u) => (
              <li key={u}>
                <Link href="#usluge" className="hover:text-amber-400 transition-colors">{u}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Lokacije</div>
          <ul className="space-y-2 text-sm">
            {[
              "Novi Beograd",
              "Zemun",
              "Voždovac",
              "Zvezdara",
              "Palilula",
              "Čukarica",
              "Rakovica",
              "Stari Grad",
            ].map((l) => (
              <li key={l}>
                <Link href="#lokacije" className="hover:text-amber-400 transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Kontakt</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              <PhoneLink className="hover:text-amber-400 transition-colors">{PHONE_DISPLAY}</PhoneLink>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Dostupni 24/7 · Non‑stop</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>© {year} {SITE_NAME}. Sva prava zadržana.</span>
          <span className="text-gray-600">Izrada sajta: <a href="https://manikamwebsolutions.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium hover:text-amber-400 transition-colors">Manikam Web Solutions</a></span>
        </div>
      </div>
    </footer>
  );
}
