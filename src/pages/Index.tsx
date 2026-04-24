import { I18nProvider } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";
import { Navbar } from "@/components/atelier/Navbar";
import { Hero } from "@/components/atelier/Hero";
import { Features } from "@/components/atelier/Features";
import { MenuSection } from "@/components/atelier/MenuSection";
import { About } from "@/components/atelier/About";
import { Gallery } from "@/components/atelier/Gallery";
import { Reviews } from "@/components/atelier/Reviews";
import { Reservation } from "@/components/atelier/Reservation";
import { Footer } from "@/components/atelier/Footer";
import { useEffect } from "react";

const Page = () => {
  useReveal();

  useEffect(() => {
    document.title = "Atelier Café — Where Art Meets Coffee | Cairo";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Atelier Café — a luxury Parisian-inspired café in Zamalek, Cairo. Rare beans, artisan desserts, signature drinks. Reserve your table.");
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <MenuSection />
      <About />
      <Gallery />
      <Reviews />
      <Reservation />
      <Footer />
    </main>
  );
};

const Index = () => (
  <I18nProvider>
    <Page />
  </I18nProvider>
);

export default Index;
