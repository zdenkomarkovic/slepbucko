import { buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import LocationCards from "@/components/LocationCards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Šlep služba Bucko Beograd – Profesionalna pomoć na putu 24/7",
  description:
    "Šlep služba Bucko Beograd – brza i pouzdana pomoć na putu 24/7. Šlep putničkih vozila, prevoz radnih mašina, hitne intervencije. Pozovite: 064 125 8963.",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <Stats />
        <About />
        <Services />
        <Gallery />
        <LocationCards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
