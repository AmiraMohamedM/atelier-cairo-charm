import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-cafe.jpg";

export const Hero = () => {
  const { t } = useI18n();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Atelier Café interior"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 gradient-hero" />

      {/* steam particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute bottom-1/3 w-2 h-2 rounded-full bg-cream/15 blur-sm"
            style={{
              left: `${15 + i * 14}%`,
              animation: `steam ${5 + i * 0.8}s ease-out ${i * 0.6}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container text-center px-6">
        <p className="text-gold-light text-xs md:text-sm tracking-luxe uppercase mb-8 animate-fade-up" style={{color: "hsl(var(--gold-light))"}}>
          {t("hero.eyebrow")}
        </p>
        <h1 className="font-serif text-cream text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light leading-[0.95] mb-6 animate-fade-up" style={{color: "hsl(var(--cream))", animationDelay: "0.2s"}}>
          {t("hero.title1")}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up" style={{animationDelay: "0.4s"}}>
          <span className="gold-divider" />
          <p className="font-serif italic text-xl md:text-2xl text-gold-light" style={{color: "hsl(var(--gold-light))"}}>
            {t("hero.tagline")}
          </p>
          <span className="gold-divider" />
        </div>
        <p className="max-w-2xl mx-auto text-cream/80 text-base md:text-lg leading-relaxed mb-12 animate-fade-up" style={{color: "hsl(var(--cream) / 0.85)", animationDelay: "0.5s"}}>
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay: "0.7s"}}>
          <a
            href="#menu"
            className="px-10 py-4 gradient-gold text-espresso uppercase text-xs tracking-luxe font-medium hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5"
          >
            {t("hero.menu")}
          </a>
          <a
            href="#reserve"
            className="px-10 py-4 border border-cream/50 text-cream uppercase text-xs tracking-luxe font-medium hover:bg-cream hover:text-espresso transition-all duration-500"
            style={{color: "hsl(var(--cream))"}}
          >
            {t("hero.book")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-cream/60 text-[10px] tracking-luxe uppercase" style={{color: "hsl(var(--cream) / 0.6)"}}>{t("hero.scroll")}</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/60 to-transparent" />
      </div>
    </section>
  );
};
