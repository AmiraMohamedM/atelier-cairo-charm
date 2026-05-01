import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-cafe.jpg";

// SVG steam wisp path for a single particle
const SteamWisp = ({ style }: { style: React.CSSProperties }) => (
  <svg
    viewBox="0 0 20 60"
    className="absolute"
    style={{ width: 20, height: 60, ...style }}
    aria-hidden="true"
  >
    <path
      d="M10 60 C6 48, 14 42, 10 30 C6 18, 14 12, 10 0"
      stroke="rgba(255,245,230,0.35)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const Hero = () => {
  const { t } = useI18n();

  const wisps = [
    { left: "15%", delay: "0s",   duration: "5s"   },
    { left: "28%", delay: "0.7s", duration: "6.2s" },
    { left: "42%", delay: "1.3s", duration: "5.5s" },
    { left: "55%", delay: "0.3s", duration: "7s"   },
    { left: "68%", delay: "1s",   duration: "5.8s" },
    { left: "81%", delay: "0.5s", duration: "6.5s" },
  ];

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

      {/* SVG steam wisps */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {wisps.map((w, i) => (
          <SteamWisp
            key={i}
            style={{
              left: w.left,
              bottom: "30%",
              opacity: 0,
              animation: `steam ${w.duration} ease-out ${w.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container text-center px-6">
        <p
          className="text-xs md:text-sm tracking-luxe uppercase mb-8 animate-fade-up"
          style={{ color: "hsl(var(--gold-light))" }}
        >
          {t("hero.eyebrow")}
        </p>
        <h1
          className="font-serif text-cream text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light leading-[0.95] mb-6 animate-fade-up"
          style={{ color: "hsl(var(--cream))", animationDelay: "0.2s" }}
        >
          {t("hero.title1")}
        </h1>
        <div
          className="flex items-center justify-center gap-4 mb-8 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="gold-divider" />
          <p
            className="font-serif italic text-xl md:text-2xl"
            style={{ color: "hsl(var(--gold-light))" }}
          >
            {t("hero.tagline")}
          </p>
          <span className="gold-divider" />
        </div>
        <p
          className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-12 animate-fade-up"
          style={{ color: "hsl(var(--cream) / 0.85)", animationDelay: "0.5s" }}
        >
          {t("hero.subtitle")}
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#menu"
            className="px-10 py-4 gradient-gold text-espresso uppercase text-xs tracking-luxe font-medium hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5"
          >
            {t("hero.menu")}
          </a>
          <a
            href="#reserve"
            className="px-10 py-4 border border-cream/50 uppercase text-xs tracking-luxe font-medium hover:bg-cream hover:text-espresso transition-all duration-500"
            style={{ color: "hsl(var(--cream))" }}
          >
            {t("hero.book")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span
          className="text-[10px] tracking-luxe uppercase"
          style={{ color: "hsl(var(--cream) / 0.6)" }}
        >
          {t("hero.scroll")}
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/60 to-transparent" />
      </div>
    </section>
  );
};
