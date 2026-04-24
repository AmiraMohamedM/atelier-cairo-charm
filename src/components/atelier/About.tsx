import { useI18n } from "@/lib/i18n";
import about from "@/assets/gallery-3.jpg";

export const About = () => {
  const { t } = useI18n();
  return (
    <section id="about" className="py-28 md:py-40 bg-background">
      <div className="container grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative reveal">
          <img
            src={about}
            alt="Atelier Café atmosphere"
            width={1100}
            height={900}
            loading="lazy"
            className="w-full h-[560px] object-cover shadow-luxe"
          />
          <div className="absolute -bottom-8 ltr:-right-8 rtl:-left-8 bg-espresso text-cream p-8 hidden md:block shadow-gold" style={{backgroundColor: "hsl(var(--espresso))", color: "hsl(var(--cream))"}}>
            <p className="font-serif text-5xl text-gold" style={{color: "hsl(var(--gold))"}}>2024</p>
            <p className="text-xs tracking-luxe uppercase mt-1">Cairo · Zamalek</p>
          </div>
        </div>

        <div className="reveal">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">{t("about.kicker")}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-8">
            {t("about.title")}
          </h2>
          <span className="gold-divider mb-8" />
          <p className="text-base text-muted-foreground leading-loose mb-6">{t("about.p1")}</p>
          <p className="text-base text-muted-foreground leading-loose mb-10 italic font-serif">{t("about.p2")}</p>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {[
              { v: "12", k: "about.stat1" },
              { v: "40+", k: "about.stat2" },
              { v: "08", k: "about.stat3" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-serif text-3xl md:text-4xl text-gold mb-1">{s.v}</p>
                <p className="text-xs tracking-luxe uppercase text-muted-foreground">{t(s.k as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
