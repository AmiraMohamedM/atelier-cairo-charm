import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { X, ZoomIn } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import hero from "@/assets/hero-cafe.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  cls: string;
  caption: string;
}

export const Gallery = () => {
  const { t } = useI18n();
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    { src: g1, alt: "Latte art", cls: "row-span-2", caption: "Latte Art" },
    { src: g3, alt: "Cafe interior", cls: "", caption: "Our Interiors" },
    { src: g5, alt: "Saffron latte", cls: "row-span-2", caption: "Saffron Latte" },
    { src: g4, alt: "Coffee beans", cls: "", caption: "Single Origin Beans" },
    { src: g2, alt: "Rose dessert", cls: "", caption: "Rose Patisserie" },
    { src: hero, alt: "Barista at work", cls: "col-span-2", caption: "Crafted with Passion" },
  ];

  return (
    <section id="gallery" className="py-28 md:py-40 bg-cream" style={{ backgroundColor: "hsl(var(--cream))" }}>
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
              className={`relative overflow-hidden group reveal cursor-pointer ${img.cls}`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-colors duration-700" />

              {/* Hover caption */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ZoomIn className="w-6 h-6 text-gold mb-2" />
                <p className="text-cream text-xs tracking-luxe uppercase font-medium px-2 text-center">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/90 backdrop-blur-sm animate-fade-up"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-gold transition-colors duration-300 z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-full object-contain max-h-[80vh] shadow-2xl"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-espresso/80 to-transparent py-4 px-6">
              <p className="text-cream text-xs tracking-luxe uppercase text-center">
                {lightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
