import { useI18n } from "@/lib/i18n";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import hero from "@/assets/hero-cafe.jpg";

export const Gallery = () => {
  const { t } = useI18n();
  const images = [
    { src: g1, alt: "Latte art", cls: "row-span-2" },
    { src: g3, alt: "Cafe interior", cls: "" },
    { src: g5, alt: "Saffron latte", cls: "row-span-2" },
    { src: g4, alt: "Coffee beans", cls: "" },
    { src: g2, alt: "Rose dessert", cls: "" },
    { src: hero, alt: "Barista at work", cls: "col-span-2" },
  ];

  return (
    <section id="gallery" className="py-28 md:py-40 bg-cream" style={{backgroundColor: "hsl(var(--cream))"}}>
      <div className="container">
        <div className="text-center mb-16 reveal">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">{t("gal.kicker")}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground font-light">{t("gal.title")}</h2>
          <span className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group reveal ${img.cls}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-colors duration-700" style={{}}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
