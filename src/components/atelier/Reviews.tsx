import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const Reviews = () => {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const items = [
    { q: "rev.1", n: "rev.1n" },
    { q: "rev.2", n: "rev.2n" },
    { q: "rev.3", n: "rev.3n" },
  ] as const;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const prev = () => { setPaused(true); setI((p) => (p - 1 + items.length) % items.length); };
  const next = () => { setPaused(true); setI((p) => (p + 1) % items.length); };

  return (
    <section id="reviews" className="py-28 md:py-40 gradient-espresso text-cream relative overflow-hidden" style={{ color: "hsl(var(--cream))" }}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--gold)),transparent_50%)]" />
      <div className="container max-w-3xl text-center relative">
        <p className="text-xs tracking-luxe uppercase text-gold mb-4 reveal">{t("rev.kicker")}</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 reveal" style={{ color: "hsl(var(--cream))" }}>
          {t("rev.title")}
        </h2>

        <Quote className="w-12 h-12 text-gold mx-auto mb-8 opacity-60" />

        <div className="min-h-[200px] relative">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <p className="font-serif italic text-2xl md:text-3xl leading-relaxed mb-8 text-cream/95" style={{ color: "hsl(var(--cream) / 0.95)" }}>
                &ldquo;{t(item.q)}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-xs tracking-luxe uppercase text-gold-light" style={{ color: "hsl(var(--gold-light))" }}>
                — {t(item.n)}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-6 mt-16">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-10 h-10 border border-cream/30 text-cream/60 hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-3">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setPaused(true); setI(idx); }}
                aria-label={`Review ${idx + 1}`}
                className={`h-px transition-all duration-500 ${
                  idx === i ? "w-12 bg-gold" : "w-6 bg-cream/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next review"
            className="w-10 h-10 border border-cream/30 text-cream/60 hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
