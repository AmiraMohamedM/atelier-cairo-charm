import { useI18n } from "@/lib/i18n";
import { Coffee, Cake, Sparkles, Award } from "lucide-react";

export const Features = () => {
  const { t } = useI18n();
  const items = [
    { icon: Coffee, t: "feat.1.t", d: "feat.1.d" },
    { icon: Cake, t: "feat.2.t", d: "feat.2.d" },
    { icon: Sparkles, t: "feat.3.t", d: "feat.3.d" },
    { icon: Award, t: "feat.4.t", d: "feat.4.d" },
  ] as const;

  return (
    <section id="features" className="py-28 md:py-40 bg-background">
      <div className="container">
        <div className="text-center mb-20 reveal">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">{t("feat.kicker")}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground font-light">
            {t("feat.title")}
          </h2>
          <span className="gold-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
          {items.map((it, i) => (
            <div
              key={i}
              className="bg-background p-10 text-center group hover:bg-cream transition-colors duration-700 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gold/40 rounded-full group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                <it.icon className="w-7 h-7 text-gold group-hover:text-espresso transition-colors" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-foreground">{t(it.t)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(it.d)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
